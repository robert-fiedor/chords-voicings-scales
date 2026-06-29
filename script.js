const Tone = window.Tone;
const chordList = document.getElementById("chordList");
const rootSelect = document.getElementById("rootSelect");
const familyFilter = document.getElementById("familyFilter");

const SHARP_NAMES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const ROOT_NAMES = SHARP_NAMES;
const ROLE_COLORS = {
  root: "#d84b4b",
  seventh: "#c88719",
  third: "#ff4fb8",
  fifth: "#ffc2df",
  extension: "#28a87d",
  flat: "#3f7ee8",
  sharp: "#8d5cff",
};

let sourceData = null;
let scaleCorpus = [];
let pentatonicCorpus = [];
let renderedCards = [];
let sampler = null;
let reverb = null;
let activeNotes = [];
let activeTimers = [];
let activeElements = [];
let activeCharts = [];
let playbackToken = 0;
let selectedRootSemitone = 0;

init();

async function init() {
  sourceData = await fetch("data/c_root_jazz_funk_chord_scales.json").then((response) => response.json());
  scaleCorpus = buildScaleCorpus(sourceData.scaleLibrary);
  pentatonicCorpus = scaleCorpus.filter((scale) => scale.family === "pentatonic");
  buildRootSelect();
  buildFamilyFilter(sourceData.chords);
  render();
  rootSelect.addEventListener("change", () => {
    selectedRootSemitone = Number(rootSelect.value);
    stopActive();
    render();
  });
  familyFilter.addEventListener("change", render);
}

function buildRootSelect() {
  rootSelect.replaceChildren(...ROOT_NAMES.map((rootName, rootSemitone) => {
    const option = document.createElement("option");
    option.value = String(rootSemitone);
    option.textContent = `Root: ${rootName}`;
    return option;
  }));
  rootSelect.value = String(selectedRootSemitone);
}

function buildFamilyFilter(chords) {
  const families = ["all", ...Array.from(new Set(chords.map((chord) => chord.family))).sort()];
  familyFilter.replaceChildren(...families.map((family) => {
    const option = document.createElement("option");
    option.value = family;
    option.textContent = family === "all" ? "All families" : family;
    return option;
  }));
}

function render() {
  const family = familyFilter.value || "all";
  const selectedRootName = getSelectedRootName();
  const chords = sourceData.chords.map((chord) => transposeChord(chord, selectedRootSemitone)).filter((chord) => {
    const matchesFamily = family === "all" || chord.family === family;
    return matchesFamily;
  });

  renderedCards = [];
  chordList.replaceChildren();
  document.title = `${selectedRootName} Chords Voicings Scales`;

  if (!chords.length) {
    const empty = document.createElement("div");
    empty.className = "empty";
    empty.textContent = "No matches";
    chordList.append(empty);
    return;
  }

  chords.forEach((chord) => {
    const { card, cardState } = createChordCard(chord);
    chordList.append(card);
    setupCardPlayback(cardState);
  });
}

function createChordCard(chord) {
  const card = document.createElement("article");
  const meta = document.createElement("div");
  const symbol = document.createElement("div");
  const quality = document.createElement("div");
  const commonness = document.createElement("div");
  const scaleSelect = document.createElement("select");
  const graphs = document.createElement("div");
  const chordButton = createPlayButton("Chord");
  const voicingButton = createPlayButton("Voicing");
  const scaleButton = createPlayButton("Scale");
  const innerVoicingAButton = createPlayButton("Inner voicing A");
  const scalePentatonicButton = createPlayButton("Pentatonic");
  const relativeButton = createPlayButton("Non-root");
  const relativePentatonicButton = createPlayButton("Non-root pentatonic");
  const relation = document.createElement("div");

  card.className = "chord-card";
  meta.className = "meta";
  symbol.className = "symbol";
  quality.className = "quality";
  commonness.className = "commonness";
  scaleSelect.className = "scale-select";
  graphs.className = "graphs";
  relation.className = "relation";

  symbol.textContent = chord.symbol;
  quality.textContent = chord.quality;
  commonness.replaceChildren(...Array.from({ length: 5 }, (_, index) => {
    const dot = document.createElement("span");
    dot.className = `dot${index < chord.commonness ? " is-on" : ""}`;
    return dot;
  }));

  scaleSelect.replaceChildren(...chord.scaleChoices.map((scale, index) => {
    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = scale.scaleName;
    return option;
  }));

  const cardState = {
    chord,
    selectedScaleIndex: 0,
    chordButton,
    voicingButton,
    scaleButton,
    innerVoicingAButton,
    scalePentatonicButton,
    relativeButton,
    relativePentatonicButton,
    relation,
    chordChart: null,
    voicingChart: null,
    scaleChart: null,
    innerVoicingAChart: null,
    scalePentatonicChart: null,
    relativeChart: null,
    relativePentatonicChart: null,
  };

  scaleSelect.addEventListener("change", () => {
    cardState.selectedScaleIndex = Number(scaleSelect.value);
    if (cardState.scaleChart) refreshScale(cardState);
  });

  meta.append(symbol, quality, commonness, scaleSelect, relation);
  graphs.append(
    chordButton.button,
    voicingButton.button,
    scaleButton.button,
    innerVoicingAButton.button,
    scalePentatonicButton.button,
    relativeButton.button,
    relativePentatonicButton.button,
  );
  card.append(meta, graphs);
  renderedCards.push(cardState);
  return { card, cardState };
}

function createPlayButton(label) {
  const button = document.createElement("button");
  const text = document.createElement("span");
  const keyboard = document.createElement("span");

  button.type = "button";
  button.className = "play-button";
  text.className = "play-label";
  keyboard.className = "keyboard";
  text.textContent = label;

  button.append(text, keyboard);
  return { button, text, keyboard };
}

function setupCardPlayback(cardState) {
  setupChordButton(cardState);
  setupVoicingButton(cardState);
  setupScaleButton(cardState);
  setupInnerVoicingAButton(cardState);
  setupScalePentatonicButton(cardState);
  setupRelativeButton(cardState);
  setupRelativePentatonicButton(cardState);
}

function setupChordButton(cardState) {
  const chordNotes = makeChordNotes(cardState.chord.semitones);
  const displayNotes = chordNotes.map((note) => note.display);
  const rootNotes = displayNotes.filter((note) => isSelectedRootNote(note));
  const noteColors = makeChordNoteColorMap(cardState.chord, displayNotes);

  cardState.chordNotes = chordNotes.map((note) => note.play);
  cardState.chordChart = renderKeyboard(cardState.chordButton.keyboard, displayNotes, rootNotes, ROLE_COLORS.extension, {
    octaveCount: 2,
    noteColors,
  });
  cardState.chordButton.button.setAttribute("aria-label", `Play ${cardState.chord.symbol}`);
  cardState.chordButton.button.addEventListener("click", () => {
    playChord(cardState.chordNotes, cardState.chordButton.button, cardState.chordChart);
  });
}

function setupVoicingButton(cardState) {
  const voicingNotes = makeVoicingNotes(cardState.chord);
  const displayNotes = voicingNotes.map((note) => note.display);
  const rootNotes = displayNotes.filter((note) => isSelectedRootNote(note));
  const noteColors = Object.fromEntries(voicingNotes
    .filter((note) => note.color)
    .map((note) => [noteKey(note.display), note.color]));

  cardState.voicingNotes = voicingNotes.map((note) => note.play);
  cardState.voicingChart = renderKeyboard(cardState.voicingButton.keyboard, displayNotes, rootNotes, ROLE_COLORS.extension, {
    octaveCount: 2,
    noteColors,
  });
  cardState.voicingButton.button.setAttribute("aria-label", `Play ${cardState.chord.symbol} voicing`);
  cardState.voicingButton.button.addEventListener("click", () => {
    playChord(cardState.voicingNotes, cardState.voicingButton.button, cardState.voicingChart);
  });
}

function setupScaleButton(cardState) {
  refreshScale(cardState);
  cardState.scaleButton.button.addEventListener("click", () => {
    playScale(cardState.scaleNotes, cardState.scaleButton.button, cardState.scaleChart);
  });
}

function setupInnerVoicingAButton(cardState) {
  cardState.innerVoicingAButton.button.addEventListener("click", () => {
    if (!cardState.innerVoicingANotes?.length) return;
    playInnerVoicingA(
      cardState.innerVoicingAPlayback,
      cardState.innerVoicingAButton.button,
      cardState.innerVoicingAChart,
      cardState.innerVoicingANotes,
    );
  });
}

function setupScalePentatonicButton(cardState) {
  cardState.scalePentatonicButton.button.addEventListener("click", () => {
    if (!cardState.scalePentatonicNotes?.length) return;
    playScale(cardState.scalePentatonicNotes, cardState.scalePentatonicButton.button, cardState.scalePentatonicChart);
  });
}

function setupRelativeButton(cardState) {
  cardState.relativeButton.button.addEventListener("click", () => {
    playScale(cardState.relativeNotes, cardState.relativeButton.button, cardState.relativeChart);
  });
}

function setupRelativePentatonicButton(cardState) {
  cardState.relativePentatonicButton.button.addEventListener("click", () => {
    if (!cardState.relativePentatonicNotes?.length) return;
    playScale(cardState.relativePentatonicNotes, cardState.relativePentatonicButton.button, cardState.relativePentatonicChart);
  });
}

function refreshScale(cardState) {
  const scale = cardState.chord.scaleChoices[cardState.selectedScaleIndex];
  const scaleNotes = makeOrderedScaleNotes(scale.semitones, 1);
  const displayNotes = scaleNotes.map((note) => note.display);
  const rootNotes = displayNotes.filter((note) => noteSemitone(note) === scale.rootSemitone);
  const nonRoot = getNonRootScale(cardState.chord, scale);
  const scalePentatonic = getPentatonicScale(cardState.chord, scale);

  cardState.scale = scale;
  cardState.scaleNotes = scaleNotes.map((note) => note.play);
  cardState.scaleButton.text.textContent = scale.scaleName;
  cardState.scaleButton.button.setAttribute("aria-label", `Play ${scale.scaleName}`);
  cardState.scaleButton.keyboard.replaceChildren();
  cardState.scaleChart = renderKeyboard(cardState.scaleButton.keyboard, displayNotes, rootNotes, ROLE_COLORS.extension, { octaveCount: 2 });
  renderInnerVoicingA(cardState, scale);
  renderOptionalScaleButton(cardState, cardState.scalePentatonicButton, scalePentatonic, "scalePentatonic");

  cardState.nonRootScale = nonRoot;
  const relativeScaleNotes = makeOrderedScaleNotes(nonRoot.semitones, 1);
  const relativeDisplayNotes = relativeScaleNotes.map((note) => note.display);
  const relativeRootNotes = [3, 4].map((octave) => `${SHARP_NAMES[nonRoot.rootSemitone]}${octave}`);
  const relativePentatonic = getPentatonicScale(cardState.chord, nonRoot);

  cardState.relativeNotes = relativeScaleNotes.map((note) => note.play);
  cardState.relativeButton.text.textContent = nonRoot.name;
  cardState.relativeButton.button.setAttribute("aria-label", `Play ${nonRoot.name}`);
  cardState.relativeButton.keyboard.replaceChildren();
  cardState.relativeChart = renderKeyboard(
    cardState.relativeButton.keyboard,
    relativeDisplayNotes,
    relativeRootNotes,
    ROLE_COLORS.extension,
    { octaveCount: 2 },
  );
  cardState.relation.textContent = nonRoot.relationship;
  renderOptionalScaleButton(cardState, cardState.relativePentatonicButton, relativePentatonic, "relativePentatonic");
}

function renderOptionalScaleButton(cardState, playButton, scale, statePrefix) {
  const notesKey = `${statePrefix}Notes`;
  const chartKey = `${statePrefix}Chart`;

  if (!scale) {
    playButton.button.classList.add("is-hidden");
    playButton.button.setAttribute("aria-hidden", "true");
    playButton.button.removeAttribute("aria-label");
    playButton.keyboard.replaceChildren();
    playButton.text.textContent = "Pentatonic";
    cardState[notesKey] = [];
    cardState[chartKey] = null;
    return;
  }

  const scaleNotes = makeOrderedScaleNotes(scale.semitones, 1);
  const displayNotes = scaleNotes.map((note) => note.display);
  const rootNotes = displayNotes.filter((note) => noteSemitone(note) === scale.rootSemitone);

  playButton.button.classList.remove("is-hidden");
  playButton.button.removeAttribute("aria-hidden");
  playButton.text.textContent = scale.name;
  playButton.button.setAttribute("aria-label", `Play ${scale.name}`);
  playButton.keyboard.replaceChildren();
  cardState[notesKey] = scaleNotes.map((note) => note.play);
  cardState[chartKey] = renderKeyboard(playButton.keyboard, displayNotes, rootNotes, ROLE_COLORS.extension, { octaveCount: 2 });
}

function renderInnerVoicingA(cardState, scale) {
  const pattern = makeInnerVoicingAPattern(cardState.chord, cardState.voicingNotes, scale);
  const displayNotes = [...pattern.sustainNotes, ...pattern.innerClusters.flat()];
  const rootNotes = displayNotes.filter((note) => isSelectedRootNote(note));
  const noteColors = Object.fromEntries(pattern.innerClusters.flat().map((note) => [noteKey(note), ROLE_COLORS.extension]));

  pattern.sustainNotes.forEach((note, index) => {
    noteColors[noteKey(note)] = pattern.sustainColors[index] || ROLE_COLORS.seventh;
  });

  cardState.innerVoicingAPlayback = pattern;
  cardState.innerVoicingANotes = displayNotes;
  cardState.innerVoicingAButton.text.textContent = "Inner voicing A";
  cardState.innerVoicingAButton.button.setAttribute("aria-label", `Play ${cardState.chord.symbol} inner voicing A`);
  cardState.innerVoicingAButton.keyboard.replaceChildren();
  cardState.innerVoicingAChart = renderKeyboard(
    cardState.innerVoicingAButton.keyboard,
    displayNotes,
    rootNotes,
    ROLE_COLORS.extension,
    { octaveCount: 3, startOctave: 3, noteColors },
  );
}

function makeInnerVoicingAPattern(chord, voicingNotes, scale) {
  const baseSustainNotes = makeInnerVoicingShell(chord, scale);
  const baseInnerClusters = makeDescendingInnerTriads(scale);
  const raisedPattern = raiseInnerPatternToVoicingRegister(baseSustainNotes, baseInnerClusters, voicingNotes);
  const sustainNotes = raisedPattern.sustainNotes;
  const voicingColors = Object.fromEntries(makeVoicingNotes(chord).map((note) => [noteKey(note.play), note.color]));
  const sustainColors = sustainNotes.map((note) => voicingColors[noteKey(note)] || ROLE_COLORS.seventh);
  const innerClusters = raisedPattern.innerClusters;

  return {
    sustainNotes,
    sustainColors,
    innerClusters,
    allNotes: [...sustainNotes, ...innerClusters.flat()],
  };
}

function makeInnerVoicingShell(chord, scale) {
  const root = `${SHARP_NAMES[chord.rootSemitone]}1`;
  const secondDegree = scale.semitones[1] ?? normalizeSemitone(chord.rootSemitone + 2);
  const second = `${SHARP_NAMES[normalizeSemitone(secondDegree)]}3`;
  return [root, second];
}

function raiseInnerPatternToVoicingRegister(sustainNotes, innerClusters, voicingNotes) {
  const voicingMax = Math.max(...voicingNotes.map(noteMidi));
  const innerNotes = [...sustainNotes, ...innerClusters.flat()];
  const innerMax = Math.max(...innerNotes.map(noteMidi));
  const octaveShift = Math.max(0, Math.floor((voicingMax - innerMax) / 12)) + 1;

  return {
    sustainNotes: sustainNotes.map((note) => transposeNoteByOctaves(note, octaveShift)),
    innerClusters: innerClusters.map((cluster) => cluster.map((note) => transposeNoteByOctaves(note, octaveShift))),
  };
}

function transposeNoteByOctaves(note, octaves) {
  return noteFromMidi(noteMidi(note) + octaves * 12);
}

function makeDescendingInnerTriads(scale) {
  return [2, 1, 0].map((rootDegree, index) => makeShapedScaleTriad(scale, rootDegree, index));
}

function makeShapedScaleTriad(scale, rootDegree, triadIndex) {
  const semitones = scale.semitones.map(normalizeSemitone);
  const rootMidi = midiForScaleDegree(semitones, rootDegree, triadIndex === 0 ? 3 : 2);
  let thirdMidi = midiForScaleDegree(semitones, rootDegree + 2, triadIndex === 0 ? 3 : 2);
  let fifthMidi = midiForScaleDegree(semitones, rootDegree + 4, triadIndex === 0 ? 3 : 2);

  if (triadIndex === 0) {
    while (thirdMidi >= rootMidi) thirdMidi -= 12;
    while (fifthMidi >= rootMidi) fifthMidi -= 12;
  } else {
    while (thirdMidi <= rootMidi) thirdMidi += 12;
    while (fifthMidi <= thirdMidi) fifthMidi += 12;
  }

  return [noteFromMidi(rootMidi), noteFromMidi(fifthMidi), noteFromMidi(thirdMidi)];
}

function midiForScaleDegree(semitones, degree, baseOctave) {
  const normalizedDegree = ((degree % semitones.length) + semitones.length) % semitones.length;
  const wraps = Math.floor(degree / semitones.length);
  const semitone = semitones[normalizedDegree];
  let midi = (baseOctave + 1 + wraps) * 12 + semitone;

  if (normalizedDegree > 0 && semitone < semitones[0]) midi += 12;
  return midi;
}

function renderKeyboard(target, highlightedNotes, rootNotes, highlightColor, options = {}) {
  const highlights = new Set(highlightedNotes.map(noteKey));
  const roots = new Set(rootNotes.map(noteKey));
  const noteColors = options.noteColors || {};
  const octaveCount = options.octaveCount || 1;
  const startOctave = options.startOctave || 3;
  const whiteNotes = buildWhiteNotes(octaveCount, startOctave);
  const blackNotes = buildBlackNotes(octaveCount, startOctave);
  const whiteWidth = 44;
  const blackWidth = 26;
  const blackHeight = 72;
  const height = 118;
  const width = whiteNotes.length * whiteWidth;

  const whiteKeys = whiteNotes.map((note, index) => {
    const key = noteKey(note);
    const fill = noteColors[key] || (roots.has(key) ? "#d84b4b" : highlights.has(key) ? highlightColor : "#ffffff");
    const textColor = getKeyTextColor(fill);
    return `
      <g>
        <rect data-note="${key}" data-base-fill="${fill}" data-base-stroke="#1f2530" data-base-stroke-width="1.5" x="${index * whiteWidth}" y="0" width="${whiteWidth}" height="${height}" rx="4" fill="${fill}" stroke="#1f2530" stroke-width="1.5"></rect>
        <text x="${index * whiteWidth + whiteWidth / 2}" y="105" text-anchor="middle" fill="${textColor}" font-size="11" font-weight="750">${stripOctave(note)}</text>
      </g>
    `;
  }).join("");

  const blackKeys = blackNotes.map(({ note, afterWhite }) => {
    const key = noteKey(note);
    const fill = noteColors[key] || (roots.has(key) ? "#b63232" : highlights.has(key) ? shadeColor(highlightColor) : "#151922");
    const textColor = noteColors[key] ? getKeyTextColor(fill) : highlights.has(key) || roots.has(key) ? "#ffffff" : "#d7dde6";
    const x = (afterWhite + 1) * whiteWidth - blackWidth / 2;
    return `
      <g>
        <rect data-note="${key}" data-base-fill="${fill}" data-base-stroke="#111827" data-base-stroke-width="1" x="${x}" y="0" width="${blackWidth}" height="${blackHeight}" rx="4" fill="${fill}" stroke="#111827" stroke-width="1"></rect>
        <text x="${x + blackWidth / 2}" y="58" text-anchor="middle" fill="${textColor}" font-size="9" font-weight="750">${stripOctave(note)}</text>
      </g>
    `;
  }).join("");

  target.innerHTML = `
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
      ${whiteKeys}
      ${blackKeys}
    </svg>
  `;

  return {
    keyDown(note) {
      getKeyRects(target, note).forEach((rect) => setKeyActive(rect));
    },
    keyUp(note) {
      getKeyRects(target, note).forEach((rect) => restoreKey(rect));
    },
    allUp() {
      target.querySelectorAll("rect[data-note]").forEach((rect) => forceRestoreKey(rect));
    },
  };
}

function makeChordNotes(semitones) {
  let previous = -1;
  let octave = 3;
  return semitones.map((rawSemitone) => {
    const semitone = normalizeSemitone(rawSemitone);
    if (semitone <= previous) octave += 1;
    previous = semitone;
    const note = `${SHARP_NAMES[semitone]}${octave}`;
    return { display: note, play: note };
  });
}

function getKeyRects(target, note) {
  const key = noteKey(note);
  return Array.from(target.querySelectorAll("rect[data-note]")).filter((rect) => rect.dataset.note === key);
}

function setKeyActive(rect) {
  const activeCount = Number(rect.dataset.activeCount || 0) + 1;
  rect.dataset.activeCount = String(activeCount);
  rect.dataset.wasActive = "true";
  rect.setAttribute("fill", "#fff176");
  rect.setAttribute("stroke", "#0f172a");
  rect.setAttribute("stroke-width", "2.6");
  rect.style.filter = "drop-shadow(0 0 7px rgba(255, 214, 10, 0.78))";
}

function restoreKey(rect) {
  const activeCount = Math.max(0, Number(rect.dataset.activeCount || 0) - 1);
  rect.dataset.activeCount = String(activeCount);
  if (activeCount > 0) return;

  forceRestoreKey(rect);
}

function forceRestoreKey(rect) {
  rect.removeAttribute("data-active-count");
  rect.removeAttribute("data-was-active");
  rect.setAttribute("fill", rect.dataset.baseFill || "#ffffff");
  rect.setAttribute("stroke", rect.dataset.baseStroke || "#1f2530");
  rect.setAttribute("stroke-width", rect.dataset.baseStrokeWidth || "1");
  rect.style.filter = "";
}

function makeVoicingNotes(chord) {
  const entries = chord.semitones.map((rawSemitone, index) => ({
    formula: chord.formula[index] || "",
    semitone: normalizeSemitone(rawSemitone),
    index,
  }));
  const shell = [];
  const shellUsed = new Set();

  addVoicingGroup(shell, shellUsed, entries, (entry) => isRootFormula(entry.formula));
  addVoicingGroup(shell, shellUsed, entries, (entry) => isSeventhFormula(entry.formula));

  const upper = [];
  const upperUsed = new Set();
  if (entries.some((entry) => isThirdFormula(entry.formula))) {
    addVoicingGroup(upper, upperUsed, entries, (entry) => isThirdFormula(entry.formula));
  } else {
    addVoicingGroup(upper, upperUsed, entries, (entry) => isSuspendedShellFormula(entry.formula));
  }
  addVoicingGroup(upper, upperUsed, entries, (entry) => isFifthFormula(entry.formula));
  addVoicingGroup(upper, upperUsed, entries, (entry) => isThirteenthFormula(entry.formula));
  addVoicingGroup(upper, upperUsed, entries, (entry) => isNinthFormula(entry.formula));
  addVoicingGroup(upper, upperUsed, entries, (entry) => isEleventhFormula(entry.formula));
  addVoicingGroup(upper, upperUsed, entries, (entry) => (
    !isRootFormula(entry.formula) && !isSeventhFormula(entry.formula)
  ));

  return [
    ...dedupeVoicingEntries(shell).map((entry) => makeShellVoicingNote(entry)),
    ...dedupeVoicingEntries(upper).map((entry) => makeVoicingNote(entry, 4)),
  ];
}

function addVoicingGroup(target, used, entries, predicate) {
  entries.forEach((entry) => {
    if (used.has(entry.index) || !predicate(entry)) return;
    used.add(entry.index);
    target.push(entry);
  });
}

function dedupeVoicingEntries(entries) {
  const seen = new Set();
  return entries.filter((entry) => {
    if (seen.has(entry.semitone)) return false;
    seen.add(entry.semitone);
    return true;
  });
}

function makeVoicingNote(entry, octave) {
  const semitone = entry.semitone;
  const note = `${SHARP_NAMES[semitone]}${octave}`;
  return {
    display: note,
    play: note,
    color: getVoicingColor(entry),
  };
}

function makeShellVoicingNote(entry) {
  const octave = entry.semitone < selectedRootSemitone ? 4 : 3;
  return makeVoicingNote(entry, octave);
}

function makeChordNoteColorMap(chord, displayNotes) {
  return Object.fromEntries(displayNotes.map((note, index) => {
    return [noteKey(note), getFormulaColor(chord.formula[index])];
  }).filter(([, color]) => color));
}

function transposeChord(chord, rootSemitone) {
  const rootName = ROOT_NAMES[rootSemitone];
  return {
    ...chord,
    baseSymbol: chord.symbol,
    symbol: transposeChordSymbol(chord.symbol, rootName),
    semitones: transposeSemitones(chord.semitones, rootSemitone),
    rootSemitone,
    rootName,
    scaleChoices: chord.scaleChoices.map((scale) => transposeScale(scale, rootSemitone)),
  };
}

function transposeScale(scale, rootSemitone) {
  const rootName = ROOT_NAMES[rootSemitone];
  return {
    ...scale,
    baseScaleName: scale.scaleName,
    scaleName: transposeScaleName(scale.scaleName, rootName),
    semitones: transposeSemitones(scale.semitones, rootSemitone),
    rootSemitone,
    rootName,
    pitchSetKey: pitchSetKey(transposeSemitones(scale.semitones, rootSemitone)),
  };
}

function transposeSemitones(semitones, rootSemitone) {
  return semitones.map((semitone) => normalizeSemitone(semitone + rootSemitone));
}

function transposeChordSymbol(symbol, rootName) {
  return symbol.replace(/^C/, rootName);
}

function getSelectedRootName() {
  return ROOT_NAMES[selectedRootSemitone];
}

function isSelectedRootNote(note) {
  return noteSemitone(note) === selectedRootSemitone;
}

function isRootFormula(formula) {
  return normalizeFormula(formula) === "1";
}

function isThirdFormula(formula) {
  return /^(b3|3|#3)$/.test(normalizeFormula(formula));
}

function isSeventhFormula(formula) {
  return /(^|\/)(bb7|b7|7)$/.test(normalizeFormula(formula));
}

function isSuspendedShellFormula(formula) {
  return /(^|\/)(2|9|4|11)$/.test(normalizeFormula(formula));
}

function isFifthFormula(formula) {
  return /(^|\/)(5|b5|#5)$/.test(normalizeFormula(formula));
}

function getVoicingColor(entry) {
  return getFormulaColor(entry.formula);
}

function getFormulaColor(formula) {
  const normalized = normalizeFormula(formula);
  if (isRootFormula(normalized)) return ROLE_COLORS.root;
  if (isSeventhFormula(normalized)) return ROLE_COLORS.seventh;
  if (isThirdFormula(normalized)) return ROLE_COLORS.third;
  if (isFlatFormula(normalized)) return ROLE_COLORS.flat;
  if (isSharpFormula(normalized)) return ROLE_COLORS.sharp;
  if (isFifthFormula(normalized)) return ROLE_COLORS.fifth;
  if (isExtensionFormula(normalized)) return ROLE_COLORS.extension;
  return null;
}

function isFlatFormula(formula) {
  return /(^|\/)b/.test(normalizeFormula(formula));
}

function isSharpFormula(formula) {
  return /(^|\/)#/.test(normalizeFormula(formula));
}

function isExtensionFormula(formula) {
  return /(^|\/)(2|9|b9|#9|4|11|#4|#11|6|13|b13)$/.test(normalizeFormula(formula));
}

function isThirteenthFormula(formula) {
  return /(^|\/)(6|13|b13)$/.test(normalizeFormula(formula));
}

function isNinthFormula(formula) {
  return /(^|\/)(2|9|b9|#9)$/.test(normalizeFormula(formula));
}

function isEleventhFormula(formula) {
  return /(^|\/)(4|11|#4|#11)$/.test(normalizeFormula(formula));
}

function normalizeFormula(formula) {
  return String(formula)
    .replaceAll("♭", "b")
    .replaceAll("♯", "#")
    .replaceAll("𝄫", "bb")
    .replace(/\s+/g, "");
}

function makeScaleNotes(semitones) {
  const notes = semitones.map((rawSemitone) => {
    const semitone = normalizeSemitone(rawSemitone);
    return {
      display: `${SHARP_NAMES[semitone]}3`,
      play: `${SHARP_NAMES[semitone]}3`,
    };
  });
  notes.push({ display: "C4", play: "C4" });
  return notes;
}

function makeOrderedScaleNotes(semitones, octaveCount = 1) {
  const notes = [];
  let octave = 3;
  let previous = -1;
  const ordered = semitones.map(normalizeSemitone);

  for (let pass = 0; pass < octaveCount; pass += 1) {
    ordered.forEach((semitone, index) => {
      if ((pass > 0 || index > 0) && semitone <= previous) octave += 1;
      previous = semitone;
      const note = `${SHARP_NAMES[semitone]}${octave}`;
      notes.push({ display: note, play: note });
    });
  }

  const root = ordered[0];
  if (root <= previous) octave += 1;
  const finalRoot = `${SHARP_NAMES[root]}${octave}`;
  notes.push({ display: finalRoot, play: finalRoot });
  return notes;
}

function normalizeSemitone(value) {
  return ((Number(value) % 12) + 12) % 12;
}

function buildWhiteNotes(octaveCount = 1, startOctave = 3) {
  const notes = [];
  for (let octave = startOctave; octave <= startOctave + octaveCount; octave += 1) {
    ["C", "D", "E", "F", "G", "A", "B"].forEach((name) => {
      if (octave === startOctave + octaveCount && name !== "C") return;
      notes.push(`${name}${octave}`);
    });
  }
  return notes;
}

function buildBlackNotes(octaveCount = 1, startOctave = 3) {
  const notes = [];
  for (let octave = startOctave; octave < startOctave + octaveCount; octave += 1) {
    const offset = (octave - startOctave) * 7;
    [
      ["C#", 0],
      ["D#", 1],
      ["F#", 3],
      ["G#", 4],
      ["A#", 5],
    ].forEach(([name, afterWhite]) => {
      notes.push({ note: `${name}${octave}`, afterWhite: offset + afterWhite });
    });
  }
  return notes;
}

function makePitchClassNotes(semitones, octaveCount = 1) {
  const seen = new Set();
  const pitchClasses = semitones.map(normalizeSemitone).filter((semitone) => {
    if (seen.has(semitone)) return false;
    seen.add(semitone);
    return true;
  });

  return Array.from({ length: octaveCount }, (_, octaveIndex) => (
    pitchClasses.map((semitone) => `${SHARP_NAMES[semitone]}${3 + octaveIndex}`)
  )).flat();
}

function noteKey(note) {
  return note.replace("♯", "#").replace("♭", "b");
}

function noteSemitone(note) {
  const pitchClass = stripOctave(noteKey(note));
  return SHARP_NAMES.indexOf(pitchClass);
}

function noteMidi(note) {
  const normalized = noteKey(note);
  const octaveMatch = normalized.match(/\d+$/);
  const octave = octaveMatch ? Number(octaveMatch[0]) : 4;
  const semitone = noteSemitone(normalized);
  return (octave + 1) * 12 + semitone;
}

function noteFromMidi(midi) {
  const semitone = normalizeSemitone(midi);
  const octave = Math.floor(midi / 12) - 1;
  return `${SHARP_NAMES[semitone]}${octave}`;
}

function stripOctave(note) {
  return note.replace(/\d+$/, "");
}

function shadeColor(color) {
  if (color === ROLE_COLORS.extension) return "#1a8450";
  if (color === ROLE_COLORS.root) return "#b63232";
  if (color === ROLE_COLORS.seventh) return "#9f6814";
  if (color === ROLE_COLORS.third) return "#bd2f83";
  if (color === ROLE_COLORS.fifth) return "#dc79ad";
  if (color === ROLE_COLORS.flat) return "#265fbd";
  if (color === ROLE_COLORS.sharp) return "#6239c2";
  return color;
}

function getKeyTextColor(fill) {
  const hex = fill.replace("#", "");
  if (hex.length !== 6) return "#ffffff";
  const red = parseInt(hex.slice(0, 2), 16);
  const green = parseInt(hex.slice(2, 4), 16);
  const blue = parseInt(hex.slice(4, 6), 16);
  const brightness = (red * 299 + green * 587 + blue * 114) / 1000;
  return brightness > 170 ? "#4c5563" : "#ffffff";
}

function buildScaleCorpus(scaleLibrary) {
  return Object.entries(scaleLibrary).flatMap(([scaleId, scale]) => {
    const baseSuffix = scaleId.replace(/^C_/, "");
    return ROOT_NAMES.map((rootName, rootSemitone) => {
      const semitones = scale.semitones.map((semitone) => normalizeSemitone(semitone + rootSemitone));
      return {
        id: `${rootName}_${baseSuffix}`,
        baseId: scaleId,
        rootName,
        rootSemitone,
        name: transposeScaleName(scale.name, rootName),
        family: scale.family,
        formula: scale.formula,
        semitones,
        pitchSetKey: pitchSetKey(semitones),
      };
    });
  });
}

function getNonRootScale(chord, selectedScale) {
  const chordTones = chord.semitones.map(normalizeSemitone);
  const selectedSet = selectedScale.pitchSetKey || pitchSetKey(selectedScale.semitones);
  const selectedRootName = getSelectedRootName();
  const candidates = scaleCorpus.filter((scale) => {
    if (scale.rootSemitone === selectedRootSemitone) return false;
    return chordTones.every((tone) => scale.semitones.includes(tone));
  }).map((scale) => ({
    ...scale,
    samePitchSet: scale.pitchSetKey === selectedSet,
    score: scoreScaleCandidate(scale, selectedScale, selectedSet),
  })).sort((a, b) => b.score - a.score || a.rootSemitone - b.rootSemitone);

  const chosen = candidates[0] || makeFallbackScale(selectedScale);
  const chordToneNames = chordTones.map((tone) => SHARP_NAMES[tone]).join(", ");
  const relationship = chosen.samePitchSet
    ? `${chosen.name} is a non-${selectedRootName} relative view of ${selectedScale.scaleName}; same notes, different starting point. It still fits ${chord.symbol} because it contains ${chordToneNames}.`
    : `${chosen.name} is not the same pitch collection as ${selectedScale.scaleName}, but it fits ${chord.symbol} because it contains ${chordToneNames}.`;

  return { ...chosen, relationship };
}

function getPentatonicScale(chord, parentScale) {
  if (parentScale.family === "pentatonic" || /Pentatonic/i.test(parentScale.scaleName || parentScale.name)) {
    return null;
  }

  const parentSet = new Set(parentScale.semitones.map(normalizeSemitone));
  const chordTones = [...new Set(chord.semitones.map(normalizeSemitone))];

  const candidates = pentatonicCorpus.map((scale) => {
    const scaleSet = new Set(scale.semitones.map(normalizeSemitone));
    const isSubset = [...scaleSet].every((tone) => parentSet.has(tone));
    const overlap = chordTones.filter((tone) => scaleSet.has(tone)).length;
    const includesRoot = scaleSet.has(chord.rootSemitone);
    const sameRoot = scale.rootSemitone === parentScale.rootSemitone;
    const nameScore = scorePentatonicName(scale, parentScale);

    return {
      ...scale,
      overlap,
      includesRoot,
      sameRoot,
      isSubset,
      score: (isSubset ? 1000 : 0) + (sameRoot ? 300 : 0) + (includesRoot ? 80 : 0) + overlap * 35 + nameScore,
    };
  }).filter((scale) => scale.isSubset && scale.overlap >= 3)
    .sort((a, b) => b.score - a.score || a.rootSemitone - b.rootSemitone || a.name.localeCompare(b.name));

  return candidates[0] || null;
}

function scorePentatonicName(scale, parentScale) {
  const parentName = `${parentScale.scaleName || parentScale.name} ${parentScale.family || ""}`;
  if (/Dorian|Aeolian|Minor/i.test(parentName) && /Minor Pentatonic/i.test(scale.name)) return 90;
  if (/Ionian|Lydian|major/i.test(parentName) && /Major Pentatonic/i.test(scale.name)) return 90;
  if (/Mixolydian|dominant/i.test(parentName) && /Dominant Pentatonic/i.test(scale.name)) return 90;
  if (/sus|Suspended/i.test(parentName) && /Sus Pentatonic/i.test(scale.name)) return 90;
  return 0;
}

function scoreScaleCandidate(scale, selectedScale, selectedSet) {
  let score = 0;
  if (scale.pitchSetKey === selectedSet) score += 1000;
  if (isPreferredParent(scale, selectedScale)) score += 250;
  if (scale.family === "major modes" && /Ionian|major/.test(scale.name)) score += 90;
  if (scale.family === "melodic minor modes" && /Melodic Minor/.test(scale.name)) score += 90;
  if (scale.family === "harmonic minor modes" && /Harmonic Minor/.test(scale.name)) score += 90;
  if (/Pentatonic/.test(scale.name)) score += 40;
  score -= scale.rootSemitone * 0.01;
  return score;
}

function isPreferredParent(scale, selectedScale) {
  const selectedName = selectedScale.scaleName;
  if (/Lydian|Mixolydian|Dorian|Phrygian|Aeolian|Locrian|Ionian/.test(selectedName)) {
    return /Ionian|major/.test(scale.name);
  }
  if (/Altered|Lydian Augmented|Lydian Dominant|Melodic Minor|Locrian Natural 2/.test(selectedName)) {
    return /Melodic Minor/.test(scale.name);
  }
  if (/Phrygian Dominant|Harmonic Minor/.test(selectedName)) {
    return /Harmonic Minor/.test(scale.name);
  }
  if (/Major Pentatonic/.test(selectedName)) {
    return /Minor Pentatonic/.test(scale.name);
  }
  if (/Minor Pentatonic/.test(selectedName)) {
    return /Major Pentatonic/.test(scale.name);
  }
  return false;
}

function makeFallbackScale(selectedScale) {
  const semitones = selectedScale.semitones.map(normalizeSemitone);
  const fallbackRootSemitone = normalizeSemitone(selectedRootSemitone + 2);
  const fallbackRootName = SHARP_NAMES[fallbackRootSemitone];
  return {
    rootName: fallbackRootName,
    rootSemitone: fallbackRootSemitone,
    name: `${fallbackRootName} view of ${selectedScale.scaleName}`,
    semitones,
    pitchSetKey: pitchSetKey(semitones),
    samePitchSet: true,
    score: 0,
  };
}

function pitchSetKey(semitones) {
  return [...new Set(semitones.map(normalizeSemitone))].sort((a, b) => a - b).join("-");
}

function transposeScaleName(name, rootName) {
  return name.replace(/\bC(?=\s|$)/g, rootName);
}

async function ensureSampler() {
  await Tone.start();
  if (sampler) {
    await Tone.loaded();
    return;
  }

  reverb = new Tone.Reverb({ decay: 1.3, wet: 0.16 }).toDestination();
  sampler = new Tone.Sampler({
    urls: {
      A0: "A0.mp3",
      C1: "C1.mp3",
      "D#1": "Ds1.mp3",
      "F#1": "Fs1.mp3",
      A1: "A1.mp3",
      C2: "C2.mp3",
      "D#2": "Ds2.mp3",
      "F#2": "Fs2.mp3",
      A2: "A2.mp3",
      C3: "C3.mp3",
      "D#3": "Ds3.mp3",
      "F#3": "Fs3.mp3",
      A3: "A3.mp3",
      C4: "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      A4: "A4.mp3",
      C5: "C5.mp3",
    },
    release: 1.25,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).connect(reverb);
  await Tone.loaded();
}

async function playChord(notes, button, chart) {
  await ensureSampler();
  const token = playbackToken + 1;
  const now = Tone.now();
  const duration = 1.4;

  stopActive(now);
  playbackToken = token;
  setPlaying([button], [chart], notes);
  notes.forEach((note, index) => {
    const offset = index * 0.018;
    sampler.triggerAttackRelease(note, duration, now + offset, 0.78);
    scheduleKeyDown(chart, note, offset, token);
    scheduleKeyUp(chart, note, offset + duration, token);
  });
  activeTimers.push(window.setTimeout(clearActiveUi, (duration + notes.length * 0.018 + 0.08) * 1000));
}

async function playScale(notes, button, chart) {
  await ensureSampler();
  const token = playbackToken + 1;
  const now = Tone.now();
  const step = 0.145;

  stopActive(now);
  playbackToken = token;
  setPlaying([button], [chart], notes);

  notes.forEach((note, index) => {
    const offset = index * step;
    const duration = 0.18;
    sampler.triggerAttackRelease(note, duration, now + offset, 0.78);
    scheduleKeyDown(chart, note, offset, token);
    scheduleKeyUp(chart, note, offset + duration, token);
  });

  activeTimers.push(window.setTimeout(clearActiveUi, (notes.length * step + 0.32) * 1000));
}

async function playInnerVoicingA(pattern, button, chart, displayNotes) {
  await ensureSampler();
  const token = playbackToken + 1;
  const now = Tone.now();
  const eighthAt45Bpm = 60 / 45 / 2;
  const sustainSeconds = 3.44;
  const motionStartSeconds = 0.36;

  stopActive(now);
  playbackToken = token;
  setPlaying([button], [chart], displayNotes);

  pattern.sustainNotes.forEach((note) => {
    sampler.triggerAttackRelease(note, sustainSeconds, now, 0.72);
    scheduleKeyDown(chart, note, 0, token);
    scheduleKeyUp(chart, note, sustainSeconds, token);
  });

  pattern.innerClusters.forEach((cluster, index) => {
    const offset = motionStartSeconds + index * eighthAt45Bpm;
    const startTime = now + offset;
    const duration = eighthAt45Bpm * 0.94;
    cluster.forEach((note) => {
      sampler.triggerAttackRelease(note, duration, startTime, 0.74);
      scheduleKeyDown(chart, note, offset, token);
      scheduleKeyUp(chart, note, offset + duration, token);
    });
  });

  activeTimers.push(window.setTimeout(clearActiveUi, 3800));
}

function setPlaying(elements, charts, notes) {
  activeElements = elements;
  activeCharts = charts;
  activeNotes = notes;
  elements.forEach((element) => element.classList.add("is-playing"));
}

function scheduleKeyDown(chart, note, offsetSeconds, token) {
  activeTimers.push(window.setTimeout(() => {
    if (playbackToken !== token) return;
    chart.keyDown(note);
  }, offsetSeconds * 1000));
}

function scheduleKeyUp(chart, note, offsetSeconds, token) {
  activeTimers.push(window.setTimeout(() => {
    if (playbackToken !== token) return;
    chart.keyUp(note);
  }, offsetSeconds * 1000));
}

function stopActive(time = Tone.now()) {
  playbackToken += 1;
  activeTimers.forEach((timer) => window.clearTimeout(timer));
  activeTimers = [];

  if (sampler && activeNotes.length) {
    if (typeof sampler.releaseAll === "function") {
      sampler.releaseAll(time);
    } else {
      sampler.triggerRelease(activeNotes, time);
    }
  }

  clearActiveUi();
}

function clearActiveUi() {
  activeElements.forEach((element) => element.classList.remove("is-playing"));
  activeCharts.forEach((chart) => chart.allUp());
  activeElements = [];
  activeCharts = [];
}
