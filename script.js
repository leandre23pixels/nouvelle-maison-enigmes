const ADMIN_CODE = "LSO2012";

const DEFAULT_PLACES = [
  "Entree",
  "Salon",
  "Cuisine",
  "Salle a manger",
  "Chambre 1",
  "Chambre 2",
  "Chambre 3",
  "Chambre 4",
  "Salle de bain",
  "Toilettes",
  "Couloir",
  "Escalier",
  "Bureau",
  "Bibliotheque",
  "Buanderie",
  "Garage",
  "Jardin",
  "Terrasse",
  "Balcon",
  "Placard entree",
  "Dressing",
  "Cellier",
  "Meuble TV",
  "Canape",
  "Table basse",
  "Frigo",
  "Four",
  "Fenetre",
  "Miroir",
  "Table de nuit",
];

const SYSTEM_THEMES = [
  "Parcours d'accueil",
  "Objets du quotidien",
  "Souvenirs poses",
  "Coins rapides",
  "Piste douce",
  "Details caches",
  "Petits chemins",
  "Parcours malin",
  "Sons de la maison",
  "Nouvelle maison",
];

const RIDDLE_TEMPLATES = [
  "Je suis dans la zone de {place}. Cherchez la ou les habitudes laissent souvent une petite trace.",
  "Dans {place}, un objet attend qu'on le regarde autrement. Le mot secret n'est jamais tres loin.",
  "La maison garde un detail discret dans {place}. Approchez-vous des endroits qu'on utilise sans y penser.",
  "Si cette piece pouvait parler, {place} donnerait un indice tres simple: regardez autour des objets familiers.",
  "Le prochain mot se cache dans {place}. Rien besoin de deplacer beaucoup, seulement d'observer avec patience.",
  "Dans {place}, une petite cachette attend les curieux. Le bon endroit est proche de la vie quotidienne.",
];

const TITLE_TEMPLATES = [
  "Le secret de {place}",
  "La piste de {place}",
  "Le detail cache",
  "La cle tranquille",
  "Le coin a observer",
  "Le mot discret",
];

const GENERATED_TITLES = [
  "Le secret de {place}",
  "La piste de {place}",
  "Le message cache",
  "Le coin a observer",
  "La trace discrete",
  "Le petit mystere",
  "La cle de {place}",
  "Le signe oublie",
  "Le passage malin",
  "La cachette calme",
];

const GENERATED_RIDDLES = [
  "Dans {place}, un detail attend qu'on le remarque. Regardez les objets simples avant de chercher trop loin.",
  "La prochaine cle se cache dans {place}. Elle aime les endroits calmes, proches de ce qu'on utilise souvent.",
  "Si {place} pouvait donner un conseil, il dirait de regarder autour des petites habitudes de la maison.",
  "Approchez-vous de {place}. Le bon indice n'est pas forcement visible au premier coup d'oeil.",
  "Cette piece garde une petite surprise. Dans {place}, cherchez ce qui reste souvent a portee de main.",
  "Le chemin passe par {place}. Observez les coins, les bords et les objets que tout le monde connait.",
  "Dans {place}, le mot secret se cache la ou la maison semble la plus ordinaire.",
  "Pas besoin de fouiller partout: {place} donne deja une direction. Cherchez pres d'un repere facile.",
  "La maison a choisi {place} pour cette etape. Un papier peut etre dessous, derriere ou juste a cote.",
  "Le prochain mot n'est pas loin. Dans {place}, regardez comme si vous decouvriez la piece pour la premiere fois.",
];

const GENERATED_HINTS = [
  "Regardez dans {place}, pres d'un objet que l'on touche souvent.",
  "Dans {place}, commencez par les surfaces visibles et les petits coins.",
  "La cachette est dans {place}, probablement pres d'un repere facile a nommer.",
  "Cherchez dans {place}, sans deplacer les gros meubles.",
  "Dans {place}, observez ce qui est pose, plie, accroche ou range.",
  "L'indice est dans {place}. Pensez aux objets du quotidien.",
  "Fouillez doucement dans {place}, surtout autour des bords.",
  "La bonne zone est {place}. Le papier doit rester facile a trouver.",
  "Dans {place}, regardez autour de ce qui sert souvent.",
  "Cherchez dans {place}, a hauteur des mains ou des yeux.",
];

const GENERATED_PREPS = [
  "Cache une note dans {place} avec le mot {secret}.",
  "Place le papier dans {place}, visible apres une petite observation. Mot secret: {secret}.",
  "Prepare une cachette simple dans {place}. Ecris {secret} sur la note.",
  "Glisse une note dans {place}, sans la rendre trop difficile. Mot: {secret}.",
  "Mets l'indice dans {place}. Le mot a recopier est {secret}.",
  "Cache le papier dans {place}, proche d'un objet evident. Mot secret: {secret}.",
  "Dans {place}, place une note propre et lisible avec {secret}.",
  "Installe cette etape dans {place}. Le mot secret est {secret}.",
];

const GENERATED_RIDDLE_ENDS = [
  "Un regard calme vaut mieux qu'une grande fouille.",
  "La bonne piste reste proche d'un objet que l'on reconnait vite.",
  "Cherchez une petite preuve, pas un grand secret.",
  "Le papier doit pouvoir etre trouve sans tout deplacer.",
  "La reponse aime les coins simples et les objets utiles.",
  "Avancez doucement: l'indice est fait pour etre decouvert ensemble.",
];

const GENERATED_HINT_ENDS = [
  "Commencez par les bords, puis les objets poses.",
  "Ne deplacez rien de fragile.",
  "Regardez aussi dessous ou juste derriere.",
  "La note doit rester lisible au premier passage.",
  "Pensez aux choses que l'on utilise sans y faire attention.",
  "Si vous hesitez, cherchez le repere le plus evident.",
];

const GENERATED_PREP_ENDS = [
  "Evite une cachette trop basse si les joueurs doivent se pencher.",
  "Laisse un petit bout de papier visible si tu veux une etape plus facile.",
  "Plie la note en deux pour que le mot reste une surprise.",
  "Utilise un papier different pour le reperer pendant la preparation.",
  "Garde cette cachette simple: le plaisir vient de la piste.",
  "Verifie que la note ne tombe pas quand on passe a cote.",
];

const wheelOutcomes = [
  {
    label: "JOKER",
    type: "joker",
    message: "Joker gagne. Vous pouvez passer une enigme quand vous voulez.",
  },
  {
    label: "INDICE",
    type: "hint",
    message: "Indice offert. La cachette devient un peu plus claire.",
  },
  {
    label: "COURAGE",
    type: "empty",
    message: "La roue encourage, mais ne donne rien cette fois.",
  },
  {
    label: "JOKER",
    type: "joker",
    message: "Joker gagne. Gardez-le pour une enigme difficile.",
  },
  {
    label: "PRESQUE",
    type: "empty",
    message: "Presque. Le prochain essai sera peut-etre le bon.",
  },
  {
    label: "SOURIRE",
    type: "empty",
    message: "La roue offre un sourire. Ce n'est pas un joker, mais c'est deja ca.",
  },
];

const finalText =
  "Vous avez ouvert le parcours de la Nouvelle Maison. Les vrais tresors etaient les petites cachettes, les mots trouves et le temps pris ensemble.";

const storage = {
  systemId: "nouvelle-system-id",
  current: "nouvelle-current",
  found: "nouvelle-found",
  jokers: "nouvelle-jokers",
  spins: "nouvelle-wheel-spins",
  systems: "nouvelle-editable-systems-v2",
  settings: "nouvelle-mission-settings-v1",
  generationHistory: "nouvelle-generation-history-v1",
};

const defaultMissionSettings = {
  scheduleEnabled: false,
  openAt: "",
  closeAt: "",
  closedMessage: "Pas de missions pour l'instant.",
};

const syncConfig = window.NOUVELLE_MAISON_SYNC || {};
let isApplyingSync = false;
let syncPushTimer = null;
let syncPullTimer = null;
let adminHasUnsavedChanges = false;
let syncApplyPausedUntil = 0;
let adminUnlocked = false;
let editableSystems = loadEditableSystems();
let missionSettings = loadMissionSettings();
let generationHistory = readJson(storage.generationHistory, {});
let adminSelectedSystemId = Number(localStorage.getItem(storage.systemId) || 1);

const state = {
  systemId: Number(localStorage.getItem(storage.systemId) || 1),
  current: Number(localStorage.getItem(storage.current) || 0),
  found: readJson(storage.found, []),
  jokers: Number(localStorage.getItem(storage.jokers) || 0),
  wheelSpins: readJson(storage.spins, {}),
};

const screens = document.querySelectorAll("[data-screen]");
const stepLabel = document.querySelector("#step-label");
const scoreLabel = document.querySelector("#score-label");
const jokerLabel = document.querySelector("#joker-label");
const progressFill = document.querySelector("#progress-fill");
const chapterLabel = document.querySelector("#chapter-label");
const roomTitle = document.querySelector("#room-title");
const riddleText = document.querySelector("#riddle-text");
const hintBox = document.querySelector("#hint-box");
const hintText = document.querySelector("#hint-text");
const wheelPanel = document.querySelector("#wheel-panel");
const wheel = document.querySelector("#wheel");
const wheelResult = document.querySelector("#wheel-result");
const spinButton = document.querySelector("[data-action='spin']");
const useJokerButton = document.querySelector("[data-action='use-joker']");
const answerForm = document.querySelector("#answer-form");
const answerInput = document.querySelector("#answer-input");
const feedback = document.querySelector("#feedback");
const memoryList = document.querySelector("#memory-list");
const adminLock = document.querySelector("#admin-lock");
const adminPanel = document.querySelector("#admin-panel");
const adminLogin = document.querySelector("#admin-login");
const adminCode = document.querySelector("#admin-code");
const adminFeedback = document.querySelector("#admin-feedback");
const systemSelect = document.querySelector("#system-select");
const systemNameInput = document.querySelector("#system-name-input");
const adminCount = document.querySelector("#admin-count");
const activeSystemName = document.querySelector("#active-system-name");
const syncStatus = document.querySelector("#sync-status");
const missionLockMessage = document.querySelector("#mission-lock-message");
const scheduleEnabledInput = document.querySelector("#mission-schedule-enabled");
const missionOpenAtInput = document.querySelector("#mission-open-at");
const missionCloseAtInput = document.querySelector("#mission-close-at");
const missionClosedMessageInput = document.querySelector("#mission-closed-message");
const prepGrid = document.querySelector("#prep-grid");
const adminRiddleList = document.querySelector("#admin-riddle-list");
const finalMessage = document.querySelector("#final-message");
const wordRibbon = document.querySelector("#word-ribbon");
const finalScene = document.querySelector("#final-scene");

function readJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));
  } catch {
    return fallback;
  }
}

function cleanText(value, fallback = "") {
  const text = String(value ?? "").trim();
  return text || fallback;
}

function slug(value) {
  return normalizeAnswer(value).slice(0, 18) || "cle";
}

function normalizeAnswer(value) {
  return String(value ?? "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "");
}

function titleCaseSecret(value) {
  return slug(value).toUpperCase();
}

function fillTemplate(template, place) {
  return template.replaceAll("{place}", place);
}

function fillGeneratedTemplate(template, place, secret) {
  return template.replaceAll("{place}", place).replaceAll("{secret}", titleCaseSecret(secret));
}

function randomIndex(max) {
  if (max <= 1) return 0;

  const cryptoApi = window.crypto || window.msCrypto;

  if (cryptoApi?.getRandomValues) {
    const values = new Uint32Array(1);
    cryptoApi.getRandomValues(values);
    return values[0] % max;
  }

  return Math.floor(Math.random() * max);
}

function pickRandom(list) {
  return list[randomIndex(list.length)];
}

function createDefaultRiddle(systemIndex, riddleIndex, place) {
  const templateIndex = (systemIndex + riddleIndex) % RIDDLE_TEMPLATES.length;
  const titleIndex = (systemIndex * 2 + riddleIndex) % TITLE_TEMPLATES.length;
  const secret = slug(place);

  return {
    enabled: true,
    place,
    title: fillTemplate(TITLE_TEMPLATES[titleIndex], place),
    riddle: fillTemplate(RIDDLE_TEMPLATES[templateIndex], place),
    hint: `Cherchez dans ${place}, pres d'un objet facile a reperer.`,
    secret,
    prep: `Cache une note dans ${place} avec le mot ${secret.toUpperCase()}.`,
  };
}

function createDefaultSystems() {
  return SYSTEM_THEMES.map((theme, systemIndex) => {
    const offset = systemIndex * 3;

    return {
      id: systemIndex + 1,
      name: `Systeme ${systemIndex + 1} - ${theme}`,
      riddles: DEFAULT_PLACES.map((_, riddleIndex) => {
        const place = DEFAULT_PLACES[(riddleIndex + offset) % DEFAULT_PLACES.length];
        return createDefaultRiddle(systemIndex, riddleIndex, place);
      }),
    };
  });
}

function normalizeRiddle(raw, fallback) {
  const place = cleanText(raw?.place, fallback.place);
  const secret = slug(cleanText(raw?.secret, fallback.secret || place));

  return {
    enabled: raw?.enabled === undefined ? fallback.enabled !== false : Boolean(raw.enabled),
    place,
    title: cleanText(raw?.title, fallback.title),
    riddle: cleanText(raw?.riddle, fallback.riddle),
    hint: cleanText(raw?.hint, fallback.hint),
    secret,
    prep: cleanText(raw?.prep, `Cache une note dans ${place} avec le mot ${secret.toUpperCase()}.`),
  };
}

function normalizeSystems(savedSystems) {
  const defaults = createDefaultSystems();

  return defaults.map((defaultSystem) => {
    const savedSystem = Array.isArray(savedSystems)
      ? savedSystems.find((system) => Number(system?.id) === defaultSystem.id)
      : null;

    return {
      id: defaultSystem.id,
      name: cleanText(savedSystem?.name, defaultSystem.name),
      riddles: defaultSystem.riddles.map((fallback, index) =>
        normalizeRiddle(savedSystem?.riddles?.[index], fallback),
      ),
    };
  });
}

function loadEditableSystems() {
  return normalizeSystems(readJson(storage.systems, null));
}

function saveEditableSystems() {
  localStorage.setItem(storage.systems, JSON.stringify(editableSystems));
  queueSyncPush();
}

function normalizeMissionSettings(raw) {
  return {
    scheduleEnabled: Boolean(raw?.scheduleEnabled),
    openAt: cleanText(raw?.openAt, ""),
    closeAt: cleanText(raw?.closeAt, ""),
    closedMessage: cleanText(raw?.closedMessage, defaultMissionSettings.closedMessage),
  };
}

function loadMissionSettings() {
  return normalizeMissionSettings(readJson(storage.settings, defaultMissionSettings));
}

function saveMissionSettings() {
  localStorage.setItem(storage.settings, JSON.stringify(missionSettings));
  queueSyncPush();
}

function readMissionSettingsFromInputs() {
  if (!scheduleEnabledInput) return;

  missionSettings = normalizeMissionSettings({
    scheduleEnabled: scheduleEnabledInput.checked,
    openAt: missionOpenAtInput.value,
    closeAt: missionCloseAtInput.value,
    closedMessage: missionClosedMessageInput.value,
  });
  saveMissionSettings();
  updateMissionLockMessage();
}

function renderMissionSettings() {
  if (!scheduleEnabledInput) return;

  scheduleEnabledInput.checked = missionSettings.scheduleEnabled;
  missionOpenAtInput.value = missionSettings.openAt;
  missionCloseAtInput.value = missionSettings.closeAt;
  missionClosedMessageInput.value = missionSettings.closedMessage;
}

function parseMissionDate(value) {
  if (!value) return null;

  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
}

function isMissionOpen(now = new Date()) {
  if (!missionSettings.scheduleEnabled) return true;

  const openAt = parseMissionDate(missionSettings.openAt);
  const closeAt = parseMissionDate(missionSettings.closeAt);

  if (openAt && now < openAt) return false;
  if (closeAt && now > closeAt) return false;
  if (openAt && closeAt && closeAt <= openAt) return false;

  return true;
}

function updateMissionLockMessage() {
  const hasMission = getActiveRiddles().length > 0;
  const open = hasMission && isMissionOpen();
  const closedMessage = hasMission ? missionSettings.closedMessage : defaultMissionSettings.closedMessage;

  if (missionLockMessage) {
    missionLockMessage.hidden = open;
    missionLockMessage.textContent = open ? "" : closedMessage;
  }

  if (!open && document.querySelector('[data-screen="play"]').classList.contains("active")) {
    showScreen("intro");
  }

  return open;
}

function hasSyncServer() {
  return Boolean(syncConfig.endpoint && syncConfig.roomId);
}

function setSyncStatus(text) {
  if (syncStatus) {
    syncStatus.textContent = text;
  }
}

function isPrepScreenActive() {
  return document.querySelector('[data-screen="prep"]').classList.contains("active");
}

function isAdminEditingElement(element) {
  return Boolean(
    element &&
      adminPanel?.contains(element) &&
      ["INPUT", "SELECT", "TEXTAREA"].includes(element.tagName),
  );
}

function markAdminDirty() {
  if (isApplyingSync) return;
  adminHasUnsavedChanges = true;
  setSyncStatus("Serveur: edition locale");
}

function markAdminSaved() {
  adminHasUnsavedChanges = false;
  syncApplyPausedUntil = Date.now() + 2500;
  setSyncStatus("Serveur: sauvegarde...");
}

function shouldPauseIncomingSync() {
  if (!adminUnlocked || !isPrepScreenActive()) return false;
  if (adminHasUnsavedChanges || Date.now() < syncApplyPausedUntil) return true;
  return isAdminEditingElement(document.activeElement);
}

function getSyncHeaders() {
  const headers = { "Content-Type": "application/json" };

  if (syncConfig.token) {
    headers["x-game-token"] = syncConfig.token;
  }

  return headers;
}

function getSyncPayload() {
  return {
    systems: editableSystems,
    missionSettings,
    state: {
      systemId: state.systemId,
      current: state.current,
      found: state.found,
      jokers: state.jokers,
      wheelSpins: state.wheelSpins,
    },
  };
}

function applySyncPayload(data) {
  if (!data || typeof data !== "object") return;

  isApplyingSync = true;

  if (data.systems) {
    editableSystems = normalizeSystems(data.systems);
    localStorage.setItem(storage.systems, JSON.stringify(editableSystems));
  }

  if (data.missionSettings) {
    missionSettings = normalizeMissionSettings(data.missionSettings);
    localStorage.setItem(storage.settings, JSON.stringify(missionSettings));
  }

  if (data.state) {
    state.systemId = Number(data.state.systemId || state.systemId);
    state.current = Number(data.state.current || 0);
    state.found = Array.isArray(data.state.found) ? data.state.found : [];
    state.jokers = Number(data.state.jokers || 0);
    state.wheelSpins = data.state.wheelSpins && typeof data.state.wheelSpins === "object" ? data.state.wheelSpins : {};
    saveState();
  }

  try {
    updateMissionLockMessage();

    if (document.querySelector('[data-screen="play"]').classList.contains("active")) {
      renderCurrentRiddle();
    }

    if (adminUnlocked && document.querySelector('[data-screen="prep"]').classList.contains("active")) {
      renderAdmin();
    }
  } finally {
    isApplyingSync = false;
  }
}

async function pullSync() {
  if (!hasSyncServer()) {
    setSyncStatus("Serveur: local");
    return;
  }

  try {
    const url = new URL(syncConfig.endpoint);
    url.searchParams.set("roomId", syncConfig.roomId);
    const response = await fetch(url.toString(), {
      method: "GET",
      headers: getSyncHeaders(),
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const payload = await response.json();
    if (payload.data) {
      if (shouldPauseIncomingSync()) {
        setSyncStatus("Serveur: edition locale");
        return;
      }

      applySyncPayload(payload.data);
    } else {
      queueSyncPush();
    }
    setSyncStatus("Serveur: synchronise");
  } catch (error) {
    setSyncStatus("Serveur: hors ligne");
  }
}

async function pushSync() {
  if (!hasSyncServer() || isApplyingSync) return;

  try {
    const response = await fetch(syncConfig.endpoint, {
      method: "POST",
      headers: getSyncHeaders(),
      body: JSON.stringify({
        roomId: syncConfig.roomId,
        data: getSyncPayload(),
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    setSyncStatus("Serveur: synchronise");
  } catch (error) {
    setSyncStatus("Serveur: hors ligne");
  }
}

function queueSyncPush() {
  if (!hasSyncServer() || isApplyingSync) return;
  window.clearTimeout(syncPushTimer);
  syncPushTimer = window.setTimeout(pushSync, 350);
}

function startSync() {
  if (!hasSyncServer()) {
    setSyncStatus("Serveur: local");
    return;
  }

  setSyncStatus("Serveur: connexion...");
  pullSync();
  window.clearInterval(syncPullTimer);
  syncPullTimer = window.setInterval(pullSync, 5000);
}

function getSystemById(id) {
  return editableSystems.find((system) => system.id === Number(id)) || editableSystems[0];
}

function getSpinKey(systemId, index) {
  return `${systemId}-${index}`;
}

function getActiveSystem() {
  return getSystemById(state.systemId);
}

function getEnabledRiddles(system) {
  return system.riddles
    .map((riddle, sourceIndex) => ({ ...riddle, sourceIndex }))
    .filter((riddle) => riddle.enabled !== false);
}

function getActiveRiddles() {
  return getEnabledRiddles(getActiveSystem());
}

function saveState() {
  localStorage.setItem(storage.systemId, String(state.systemId));
  localStorage.setItem(storage.current, String(state.current));
  localStorage.setItem(storage.found, JSON.stringify(state.found));
  localStorage.setItem(storage.jokers, String(state.jokers));
  localStorage.setItem(storage.spins, JSON.stringify(state.wheelSpins));
  queueSyncPush();
}

function showScreen(name) {
  const targetScreen = name === "play" && !updateMissionLockMessage() ? "intro" : name;

  screens.forEach((screen) => {
    screen.classList.toggle("active", screen.dataset.screen === targetScreen);
  });

  if (targetScreen === "intro") {
    updateMissionLockMessage();
  }

  if (targetScreen === "play") {
    renderCurrentRiddle();
    window.setTimeout(() => answerInput.focus(), 120);
  }

  if (targetScreen === "prep") {
    renderAdmin();
  }

  if (targetScreen === "final") {
    renderFinal();
  }
}

function renderMemoryList() {
  const riddles = getActiveRiddles();
  memoryList.innerHTML = "";

  riddles.forEach((_, index) => {
    const item = document.createElement("li");
    const foundWord = state.found[index];
    item.className = foundWord ? "found" : "";
    item.textContent = foundWord ? foundWord : `Cle ${index + 1}`;
    memoryList.appendChild(item);
  });
}

function renderCurrentRiddle() {
  const system = getActiveSystem();
  const riddles = getActiveRiddles();

  if (!riddles.length) {
    updateMissionLockMessage();
    showScreen("intro");
    return;
  }

  if (state.current >= riddles.length) {
    showScreen("final");
    return;
  }

  const riddle = riddles[state.current];
  const done = state.found.length;
  const spinKey = getSpinKey(system.id, riddle.sourceIndex);
  const spin = state.wheelSpins[spinKey];

  stepLabel.textContent = `Etape ${state.current + 1} sur ${riddles.length}`;
  scoreLabel.textContent = `${done} cle${done > 1 ? "s" : ""} trouvee${done > 1 ? "s" : ""}`;
  jokerLabel.textContent = `${state.jokers} joker${state.jokers > 1 ? "s" : ""}`;
  progressFill.style.width = `${(done / riddles.length) * 100}%`;
  chapterLabel.textContent = `${system.name} / ${riddle.place}`;
  roomTitle.textContent = riddle.title;
  riddleText.textContent = riddle.riddle;
  hintText.textContent = riddle.hint;
  hintBox.hidden = true;
  wheelPanel.hidden = true;
  wheelResult.textContent = spin ? spin.message : "Tournez la roue une fois par enigme.";
  spinButton.disabled = Boolean(spin);
  useJokerButton.disabled = state.jokers <= 0;
  feedback.textContent = "";
  feedback.className = "feedback";
  answerInput.value = "";
  renderMemoryList();
}

function markFound(riddle, usedJoker = false) {
  const memory = titleCaseSecret(riddle.secret);
  state.found[state.current] = usedJoker ? `${memory} (JOKER)` : memory;
  state.current += 1;
  saveState();
  playSuccessTone();

  feedback.textContent = usedJoker
    ? "Joker utilise. La cle est ajoutee au carnet."
    : "Bien joue. La cle est ajoutee au carnet.";
  feedback.className = "feedback good";
  progressFill.style.width = `${(state.found.length / getActiveRiddles().length) * 100}%`;

  window.setTimeout(() => {
    if (state.current >= getActiveRiddles().length) {
      showScreen("final");
      return;
    }
    renderCurrentRiddle();
  }, 850);
}

function spinWheel() {
  const system = getActiveSystem();
  const riddle = getActiveRiddles()[state.current];
  const spinKey = getSpinKey(system.id, riddle.sourceIndex);

  if (state.wheelSpins[spinKey]) {
    wheelResult.textContent = "La roue a deja tourne pour cette enigme.";
    return;
  }

  const outcome = wheelOutcomes[Math.floor(Math.random() * wheelOutcomes.length)];
  const turns = 5 + Math.floor(Math.random() * 4);
  const segmentSize = 360 / wheelOutcomes.length;
  const targetIndex = wheelOutcomes.indexOf(outcome);
  const rotation = turns * 360 + targetIndex * segmentSize + segmentSize / 2;

  spinButton.disabled = true;
  wheelResult.textContent = "La roue tourne...";
  wheel.style.setProperty("--wheel-rotation", `${rotation}deg`);

  window.setTimeout(() => {
    state.wheelSpins[spinKey] = outcome;

    if (outcome.type === "joker") {
      state.jokers += 1;
    }

    if (outcome.type === "hint") {
      hintBox.hidden = false;
    }

    saveState();
    wheelResult.textContent = outcome.message;
    jokerLabel.textContent = `${state.jokers} joker${state.jokers > 1 ? "s" : ""}`;
    useJokerButton.disabled = state.jokers <= 0;
    playSuccessTone();
  }, 1100);
}

function renderSystemOptions() {
  systemSelect.innerHTML = "";

  editableSystems.forEach((system) => {
    const option = document.createElement("option");
    option.value = String(system.id);
    option.textContent = `${system.id}. ${system.name}`;
    systemSelect.appendChild(option);
  });

  systemSelect.value = String(adminSelectedSystemId);
}

function renderAdmin() {
  adminLock.hidden = adminUnlocked;
  adminPanel.hidden = !adminUnlocked;
  adminFeedback.textContent = "";

  if (!adminUnlocked) {
    window.setTimeout(() => adminCode.focus(), 100);
    return;
  }

  renderSystemOptions();
  renderAdminSystem(adminSelectedSystemId);
}

function renderAdminSystem(systemId) {
  const system = getSystemById(systemId);
  const selectedCount = getEnabledRiddles(system).length;
  const totalRiddleCount = editableSystems.reduce(
    (total, currentSystem) => total + currentSystem.riddles.length,
    0,
  );

  systemNameInput.value = system.name;
  adminCount.textContent = `${selectedCount} incluses dans ce systeme / ${totalRiddleCount} disponibles`;
  activeSystemName.textContent = `Systeme actif: ${getActiveSystem().name}`;
  renderMissionSettings();
  renderPrepCards(systemId);
  renderAdminRiddles(systemId);
}

function renderPrepCards(systemId) {
  const riddles = getEnabledRiddles(getSystemById(systemId));
  prepGrid.innerHTML = "";

  if (!riddles.length) {
    const empty = document.createElement("p");
    empty.className = "empty-prep";
    empty.textContent = "Aucun indice coche pour ce systeme.";
    prepGrid.appendChild(empty);
    return;
  }

  riddles.forEach((riddle, index) => {
    const card = document.createElement("article");
    card.className = "prep-card print-clue-card";

    const badge = document.createElement("span");
    badge.className = "prep-badge";
    badge.textContent = `Indice ${String(index + 1).padStart(2, "0")}`;

    const title = document.createElement("h3");
    title.textContent = riddle.place;

    const riddleCopy = document.createElement("p");
    riddleCopy.className = "print-riddle";
    riddleCopy.textContent = riddle.riddle;

    const hint = document.createElement("p");
    hint.className = "print-hint";
    hint.textContent = `Indice: ${riddle.hint}`;

    const secret = document.createElement("span");
    secret.className = "prep-secret";
    secret.textContent = `Mot a entrer: ${titleCaseSecret(riddle.secret)}`;

    card.append(badge, title, riddleCopy, hint, secret);
    prepGrid.appendChild(card);
  });
}

function rememberGeneratedText(key, value) {
  const previous = Array.isArray(generationHistory[key]) ? generationHistory[key] : [];
  generationHistory[key] = [...previous, value].slice(-80);
  localStorage.setItem(storage.generationHistory, JSON.stringify(generationHistory));
}

function createGeneratedText(field, place, secret) {
  if (field === "title") {
    return fillGeneratedTemplate(
      `${pickRandom(GENERATED_TITLES)} - ${pickRandom(["piste douce", "detail malin", "trace cachee", "coin secret", "petit defi"])}`,
      place,
      secret,
    );
  }

  if (field === "riddle") {
    return `${fillGeneratedTemplate(pickRandom(GENERATED_RIDDLES), place, secret)} ${pickRandom(
      GENERATED_RIDDLE_ENDS,
    )}`;
  }

  if (field === "hint") {
    return `${fillGeneratedTemplate(pickRandom(GENERATED_HINTS), place, secret)} ${pickRandom(
      GENERATED_HINT_ENDS,
    )}`;
  }

  return `${fillGeneratedTemplate(pickRandom(GENERATED_PREPS), place, secret)} ${pickRandom(
    GENERATED_PREP_ENDS,
  )}`;
}

function createUniqueGeneratedText(systemId, riddleIndex, field, current, place, secret) {
  const key = `${systemId}-${riddleIndex}-${field}`;
  const used = new Set(Array.isArray(generationHistory[key]) ? generationHistory[key] : []);
  used.add(current);

  for (let attempt = 0; attempt < 80; attempt += 1) {
    const generated = createGeneratedText(field, place, secret);

    if (!used.has(generated)) {
      rememberGeneratedText(key, generated);
      return generated;
    }
  }

  const fallback = `${createGeneratedText(field, place, secret)} Detail ${Date.now()
    .toString(36)
    .slice(-4)
    .toUpperCase()}.`;
  rememberGeneratedText(key, fallback);
  return fallback;
}

function regenerateSelectedSystemTexts() {
  saveAdminEdits({ silent: true, rerender: false });

  const system = getSystemById(adminSelectedSystemId);

  system.riddles = system.riddles.map((riddle, index) => {
    const place = cleanText(riddle.place, DEFAULT_PLACES[index % DEFAULT_PLACES.length]);
    const secret = slug(cleanText(riddle.secret, place));

    return {
      enabled: riddle.enabled !== false,
      place,
      secret,
      title: createUniqueGeneratedText(system.id, index, "title", riddle.title, place, secret),
      riddle: createUniqueGeneratedText(system.id, index, "riddle", riddle.riddle, place, secret),
      hint: createUniqueGeneratedText(system.id, index, "hint", riddle.hint, place, secret),
      prep: createUniqueGeneratedText(system.id, index, "prep", riddle.prep, place, secret),
    };
  });

  saveEditableSystems();
  renderAdminSystem(adminSelectedSystemId);
  adminFeedback.textContent = "Textes regeneres avec de nouvelles variantes.";
}

function createField(labelText, field, value, multiline = false) {
  const label = document.createElement("label");
  label.textContent = labelText;

  const control = multiline ? document.createElement("textarea") : document.createElement("input");
  control.dataset.field = field;
  control.value = value;

  label.appendChild(control);
  return label;
}

function createIncludeToggle(riddle) {
  const label = document.createElement("label");
  label.className = "include-toggle";

  const control = document.createElement("input");
  control.type = "checkbox";
  control.dataset.field = "enabled";
  control.checked = riddle.enabled !== false;

  const text = document.createElement("span");
  text.textContent = "Inclure";

  label.append(control, text);
  return label;
}

function renderAdminRiddles(systemId) {
  const system = getSystemById(systemId);
  adminRiddleList.innerHTML = "";

  system.riddles.forEach((riddle, index) => {
    const article = document.createElement("article");
    article.className = "admin-riddle-card";
    article.classList.toggle("is-disabled", riddle.enabled === false);
    article.dataset.index = String(index);

    const summary = document.createElement("div");
    summary.className = "admin-editor-summary";

    const title = document.createElement("strong");
    title.textContent = `${system.id}.${index + 1}`;

    const place = document.createElement("p");
    place.textContent = riddle.place;

    const secret = document.createElement("small");
    secret.textContent = `Mot secret: ${riddle.secret}`;

    summary.append(title, place, secret, createIncludeToggle(riddle));

    const fields = document.createElement("div");
    fields.className = "admin-field-grid";
    fields.append(
      createField("Piece", "place", riddle.place),
      createField("Mot secret", "secret", riddle.secret),
      createField("Titre", "title", riddle.title),
      createField("Enigme", "riddle", riddle.riddle, true),
      createField("Indice", "hint", riddle.hint, true),
      createField("Cachette admin (non imprimee)", "prep", riddle.prep, true),
    );

    article.append(summary, fields);
    adminRiddleList.appendChild(article);
  });
}

function saveAdminEdits(options = {}) {
  const { silent = false, rerender = true } = options;
  const system = getSystemById(adminSelectedSystemId);

  readMissionSettingsFromInputs();
  system.name = cleanText(systemNameInput.value, system.name);

  adminRiddleList.querySelectorAll(".admin-riddle-card").forEach((card) => {
    const index = Number(card.dataset.index);
    const current = system.riddles[index];
    const values = {};

    card.querySelectorAll("[data-field]").forEach((control) => {
      values[control.dataset.field] = control.type === "checkbox" ? control.checked : control.value;
    });

    system.riddles[index] = normalizeRiddle(values, current);
  });

  saveEditableSystems();
  markAdminSaved();

  if (rerender) {
    renderSystemOptions();
    renderAdminSystem(adminSelectedSystemId);
  }

  if (
    adminSelectedSystemId === state.systemId &&
    document.querySelector('[data-screen="play"]').classList.contains("active")
  ) {
    renderCurrentRiddle();
  }

  if (!silent) {
    adminFeedback.textContent = "Modifications enregistrees.";
  }
}

function activateSelectedSystem() {
  saveAdminEdits({ silent: true, rerender: false });
  state.systemId = adminSelectedSystemId;
  resetGame(false);
  saveState();
  renderSystemOptions();
  renderAdminSystem(adminSelectedSystemId);
  adminFeedback.textContent = "Systeme active. Le parcours joueur repart a zero.";
}

function renderFinal() {
  finalMessage.textContent = finalText;
  wordRibbon.innerHTML = "";

  state.found.forEach((memory) => {
    const word = document.createElement("span");
    word.textContent = memory;
    wordRibbon.appendChild(word);
  });

  progressFill.style.width = "100%";
  burstConfetti();
  playSuccessTone();
}

function burstConfetti() {
  const colors = ["#8d2740", "#14706f", "#c78a2f", "#d85d3f", "#55744f"];

  for (let index = 0; index < 44; index += 1) {
    const particle = document.createElement("span");
    particle.className = "particle";
    particle.style.setProperty("--x", `${Math.random() * 100}%`);
    particle.style.setProperty("--c", colors[index % colors.length]);
    particle.style.setProperty("--r", `${Math.random() * 220}deg`);
    particle.style.animationDelay = `${Math.random() * 240}ms`;
    finalScene.appendChild(particle);
    window.setTimeout(() => particle.remove(), 1700);
  }
}

function playSuccessTone() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;

  if (!AudioContext) return;

  const context = new AudioContext();
  const gain = context.createGain();
  gain.gain.setValueAtTime(0.0001, context.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.08, context.currentTime + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.34);
  gain.connect(context.destination);

  [523.25, 659.25, 783.99].forEach((frequency, index) => {
    const oscillator = context.createOscillator();
    oscillator.type = "sine";
    oscillator.frequency.value = frequency;
    oscillator.connect(gain);
    oscillator.start(context.currentTime + index * 0.055);
    oscillator.stop(context.currentTime + 0.34 + index * 0.055);
  });

  window.setTimeout(() => context.close(), 620);
}

function resetGame(render = true) {
  state.current = 0;
  state.found = [];
  state.jokers = 0;
  state.wheelSpins = {};
  saveState();

  if (render) {
    if (!getActiveRiddles().length) {
      showScreen("intro");
      return;
    }

    renderCurrentRiddle();
  }
}

answerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const riddle = getActiveRiddles()[state.current];
  const submitted = normalizeAnswer(answerInput.value);
  const expected = normalizeAnswer(riddle.secret);

  if (submitted === expected) {
    markFound(riddle);
    return;
  }

  feedback.textContent = "Pas encore. Regardez bien le mot cache sur la note.";
  feedback.className = "feedback";
  answerInput.select();
});

adminLogin.addEventListener("submit", (event) => {
  event.preventDefault();

  if (adminCode.value.trim().toUpperCase() === ADMIN_CODE) {
    adminUnlocked = true;
    adminCode.value = "";
    renderAdmin();
    return;
  }

  adminFeedback.textContent = "Code admin incorrect.";
  adminCode.select();
});

systemSelect.addEventListener("change", () => {
  if (adminUnlocked) {
    saveAdminEdits({ silent: true, rerender: false });
  }

  adminSelectedSystemId = Number(systemSelect.value);
  renderAdminSystem(adminSelectedSystemId);
});

systemNameInput.addEventListener("input", markAdminDirty);

[scheduleEnabledInput, missionOpenAtInput, missionCloseAtInput, missionClosedMessageInput].forEach((control) => {
  control.addEventListener("input", markAdminDirty);
  control.addEventListener("change", markAdminDirty);
});

adminRiddleList.addEventListener("input", (event) => {
  if (event.target?.dataset?.field) {
    markAdminDirty();
  }
});

adminRiddleList.addEventListener("change", (event) => {
  if (!event.target?.dataset?.field) return;

  markAdminDirty();

  if (event.target.dataset.field !== "enabled") return;

  const card = event.target.closest(".admin-riddle-card");
  card?.classList.toggle("is-disabled", !event.target.checked);
});

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-action]");
  if (!button) return;

  const action = button.dataset.action;

  if (action === "start") {
    if (!updateMissionLockMessage()) return;
    showScreen(state.current >= getActiveRiddles().length ? "final" : "play");
  }

  if (action === "home") {
    showScreen("intro");
  }

  if (action === "hint") {
    hintBox.hidden = !hintBox.hidden;
  }

  if (action === "wheel") {
    wheelPanel.hidden = !wheelPanel.hidden;
  }

  if (action === "spin") {
    spinWheel();
  }

  if (action === "use-joker" && state.jokers > 0) {
    state.jokers -= 1;
    markFound(getActiveRiddles()[state.current], true);
  }

  if (action === "reset" || action === "again") {
    resetGame();
    showScreen("play");
  }

  if (action === "prep") {
    showScreen("prep");
  }

  if (action === "save-edits") {
    saveAdminEdits();
  }

  if (action === "regenerate-system" && adminUnlocked) {
    regenerateSelectedSystemTexts();
  }

  if (action === "activate-system") {
    activateSelectedSystem();
  }

  if (action === "print" && adminUnlocked) {
    window.print();
  }
});

renderMemoryList();
renderMissionSettings();
updateMissionLockMessage();
startSync();
window.setInterval(updateMissionLockMessage, 30000);
