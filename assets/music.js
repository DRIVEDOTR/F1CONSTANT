/* F1 Constant — Grid to Victory, V37.
 * Le MP3 fourni reste intact. Un tampon cyclique est préparé après activation :
 * fin et début se chevauchent sur 1,2 s, puis Web Audio boucle sans minuterie JS.
 * Une courte introduction conserve le début du morceau lors de la première lecture.
 */
(() => {
  'use strict';
  const trigger = document.getElementById('musicTrigger');
  const panel = document.getElementById('musicPanel');
  if (!trigger || !panel) return;
  const toggle = document.getElementById('musicToggle');
  const status = document.getElementById('musicStatus');
  const slider = document.getElementById('musicVolume');
  const output = document.getElementById('musicVolumeValue');
  const sourceURL = new URL('../audio/grid-to-victory.mp3', document.currentScript.src).href;
  const volumeKey = 'f1constant.music.volume.v1';
  const silentViews = new Set(['loupe', 'game']);
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  // En ouverture directe du fichier HTML, la lecture native évite les restrictions
  // de fetch sur file://. Sur GitHub Pages, la boucle Web Audio avec fondu est utilisée.
  const nativeMode = location.protocol === 'file:' || !AudioContextClass;
  let volume = .30;
  try {
    const saved = localStorage.getItem(volumeKey);
    if (saved !== null && Number.isFinite(Number(saved))) volume = Math.max(0, Math.min(1, Number(saved)));
  } catch (_) { /* navigation privée : le lecteur reste utilisable */ }
  let enabled = false, running = false, pending = false, message = '';
  let context, gain, audio, loadPromise, loopBuffer, introBuffer;
  let nodes = [], offset = 0, startedAt = 0, departed = false;
  const view = () => document.querySelector('.view.active')?.id.replace(/^view-/, '') || 'home';
  const blocked = () => silentViews.has(view());
  const wanted = () => enabled && !blocked() && !document.hidden && !departed;
  const position = () => nativeMode ? (audio?.currentTime || 0) : offset + (running ? Math.max(0, context.currentTime - startedAt) : 0);

  function render() {
    let text = 'Prêt à accompagner votre visite.';
    let state = 'off';
    if (message) text = message;
    else if (blocked()) text = enabled
      ? `En pause dans ${view() === 'game' ? 'le jeu' : 'F1 à la loupe'} · reprise en quittant cette rubrique.`
      : 'La musique reste coupée dans cette rubrique.';
    else if (enabled && document.hidden) text = 'En pause pendant votre absence.';
    else if (enabled && pending) text = 'Préparation de la musique…';
    else if (enabled && running && (nativeMode || context?.state === 'running')) text = volume === 0 ? 'Lecture en cours · volume à zéro.' : 'Lecture en boucle.';
    else if (enabled) text = 'En pause · touchez Reprendre pour écouter.';
    if (enabled) state = running && wanted() && (nativeMode || context?.state === 'running') ? 'playing' : 'paused';
    trigger.dataset.state = state;
    trigger.title = `Musique · ${state === 'playing' ? 'en lecture' : state === 'paused' ? 'en pause' : 'désactivée'}`;
    trigger.setAttribute('aria-label', `${trigger.title} · ouvrir les réglages`);
    status.textContent = text;
    const interrupted = enabled && running && !nativeMode && context?.state !== 'running' && !blocked();
    toggle.textContent = interrupted ? '▶ Reprendre la musique' : enabled ? 'Ⅱ Désactiver la musique' : blocked() ? '▶ Activer pour la visite' : '▶ Activer la musique';
    toggle.setAttribute('aria-pressed', String(enabled));
    toggle.dataset.resume = String(!!interrupted);
    slider.value = String(Math.round(volume * 100));
    output.value = `${slider.value} %`;
    slider.setAttribute('aria-valuetext', `${slider.value} pour cent`);
  }

  function initContext() {
    if (context) return;
    context = new AudioContextClass();
    gain = context.createGain();
    gain.gain.value = 0;
    gain.connect(context.destination);
    context.addEventListener('statechange', render);
  }

  async function prepareLoop() {
    if (loopBuffer) return;
    if (loadPromise) return loadPromise;
    loadPromise = (async () => {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 30000);
      let bytes;
      try {
        const response = await fetch(sourceURL, {signal: controller.signal});
        if (!response.ok) throw new Error('music-download');
        bytes = await response.arrayBuffer();
      } finally { clearTimeout(timeout); }
      const original = await context.decodeAudioData(bytes);
      // Conserver le morceau complet, sauf le recouvrement voulu à chaque tour.
      const n = Math.min(Math.round(original.sampleRate * 1.2), Math.floor(original.length / 4));
      const length = original.length - n;
      introBuffer = context.createBuffer(original.numberOfChannels, n, original.sampleRate);
      loopBuffer = context.createBuffer(original.numberOfChannels, length, original.sampleRate);
      for (let channel = 0; channel < original.numberOfChannels; channel++) {
        const input = original.getChannelData(channel);
        introBuffer.copyToChannel(input.subarray(0, n), channel);
        const out = loopBuffer.getChannelData(channel);
        out.set(input.subarray(n));
        for (let i = 0; i < n; i++) {
          const angle = (i / n) * Math.PI / 2;
          out[length - n + i] = input[original.length - n + i] * Math.cos(angle) + input[i] * Math.sin(angle);
        }
      }
      // original est libéré après préparation ; aucune copie PCM supplémentaire conservée.
    })().catch(error => { loadPromise = null; loopBuffer = introBuffer = null; throw error; });
    return loadPromise;
  }

  function playBuffers() {
    const now = context.currentTime;
    startedAt = now;
    const introRemaining = Math.max(0, introBuffer.duration - offset);
    if (introRemaining > 0) {
      const intro = context.createBufferSource();
      intro.buffer = introBuffer;
      intro.connect(gain);
      intro.start(now, offset);
      nodes.push(intro);
      intro.onended = () => { intro.disconnect(); nodes = nodes.filter(node => node !== intro); };
    }
    const loop = context.createBufferSource();
    loop.buffer = loopBuffer;
    loop.loop = true;
    loop.connect(gain);
    const loopOffset = Math.max(0, offset - introBuffer.duration) % loopBuffer.duration;
    loop.start(now + introRemaining, loopOffset);
    nodes.push(loop);
    gain.gain.cancelScheduledValues(now);
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(volume, now + .12);
    running = true;
  }

  async function start() {
    if (!wanted() || pending) return;
    if (running) {
      if (!nativeMode && context.state !== 'running') {
        try { await context.resume(); } catch (_) { /* le bouton permet de réessayer */ }
        render();
      }
      return;
    }
    pending = true;
    message = '';
    render();
    try {
      if (nativeMode) {
        if (!audio) { audio = new Audio(sourceURL); audio.loop = true; audio.preload = 'none'; }
        audio.volume = volume;
        await audio.play();
        if (!wanted()) audio.pause();
        else running = true;
      } else {
        initContext();
        // resume() est appelé dans le geste de l'utilisateur, avant le téléchargement.
        await Promise.all([context.resume(), prepareLoop()]);
        if (wanted()) playBuffers();
      }
    } catch (_) {
      if (wanted()) {
        enabled = false;
        message = 'Musique indisponible. Vérifiez la connexion, puis réessayez.';
      }
      stop();
    } finally { pending = false; render(); }
  }

  function stop() {
    if (running && !nativeMode) offset = position();
    running = false;
    if (audio) audio.pause();
    if (gain) { gain.gain.cancelScheduledValues(context.currentTime); gain.gain.setValueAtTime(0, context.currentTime); }
    const old = nodes;
    nodes = [];
    for (const node of old) { try { node.stop(); } catch (_) {} node.disconnect(); }
  }

  function reconcile() {
    if (!wanted()) stop();
    else void start();
    render();
  }

  toggle.addEventListener('click', () => {
    if (toggle.dataset.resume !== 'true') enabled = !enabled;
    message = '';
    reconcile();
  });
  slider.addEventListener('input', () => {
    volume = Math.max(0, Math.min(1, Number(slider.value) / 100));
    try { localStorage.setItem(volumeKey, String(volume)); } catch (_) {}
    if (audio) audio.volume = volume;
    if (gain && running) {
      gain.gain.cancelScheduledValues(context.currentTime);
      gain.gain.setTargetAtTime(volume, context.currentTime, .025);
    }
    render();
  });

  // Le bouton reste discret, le réglage s'ouvre au-dessus du contenu, sans le déplacer.
  function placePanel() {
    if (panel.hidden) return;
    const rect = trigger.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > innerHeight) { closePanel(false); return; }
    const bounds = window.visualViewport;
    const width = bounds?.width || innerWidth, height = bounds?.height || innerHeight;
    panel.style.left = `${Math.max(16, Math.min(width - panel.offsetWidth - 16, rect.right - panel.offsetWidth))}px`;
    panel.style.top = `${Math.max(16, Math.min(height - panel.offsetHeight - 16, rect.bottom + 10))}px`;
  }
  function closePanel(focus = false) {
    panel.hidden = true;
    trigger.setAttribute('aria-expanded', 'false');
    if (focus) trigger.focus({preventScroll:true});
  }
  trigger.addEventListener('click', () => {
    if (!panel.hidden) { closePanel(true); return; }
    panel.hidden = false;
    trigger.setAttribute('aria-expanded', 'true');
    placePanel();
    toggle.focus({preventScroll:true});
  });
  document.getElementById('musicClose').addEventListener('click', () => closePanel(true));
  // Les raccourcis du jeu et de la loupe ne doivent pas capter Espace ou les
  // flèches quand on utilise les commandes musicales au clavier.
  for (const control of [trigger, panel]) {
    for (const type of ['keydown', 'keyup']) control.addEventListener(type, event => {
      if (event.key !== 'Escape') event.stopPropagation();
    });
  }
  document.addEventListener('pointerdown', event => {
    if (!panel.contains(event.target) && !trigger.contains(event.target)) closePanel();
  });
  document.addEventListener('keydown', event => {
    if (!panel.hidden && event.key === 'Escape') { event.preventDefault(); closePanel(true); }
  });
  document.addEventListener('focusin', event => {
    if (!panel.contains(event.target) && !trigger.contains(event.target)) closePanel();
  });
  window.addEventListener('resize', placePanel, {passive:true});
  window.addEventListener('scroll', placePanel, {passive:true});

  // La coupure précède l'entrée dans les rubriques sonores. L'observateur couvre
  // également les changements de vue effectués par un lien ou une autre extension.
  const previousShowView = window.showView;
  if (typeof previousShowView === 'function') {
    window.showView = function (name, ...args) {
      if (silentViews.has(name)) stop();
      closePanel();
      const result = previousShowView.call(this, name, ...args);
      reconcile();
      return result;
    };
  }
  const observer = new MutationObserver(reconcile);
  document.querySelectorAll('.view').forEach(element => observer.observe(element, {attributes:true, attributeFilter:['class']}));
  document.addEventListener('visibilitychange', reconcile);
  window.addEventListener('pagehide', () => { departed = true; reconcile(); });
  window.addEventListener('pageshow', () => { departed = false; reconcile(); });
  // Diagnostic en lecture seule, utile pour vérifier les interruptions de lecture.
  window.F1Music = Object.freeze({state: () => ({
    enabled, running, pending, view:view(), blocked:blocked(), volume,
    position:position(), mode:nativeMode ? 'native' : 'webaudio',
    context:context?.state || 'uninitialized', loopDuration:loopBuffer?.duration || 0,
    crossfade:nativeMode ? 0 : introBuffer?.duration || 0
  })});
  render();
})();
