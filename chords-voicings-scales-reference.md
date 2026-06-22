# Chords Voicings Scales Reference

Generated from the `Chords Voicings Scales` app data and the current app derivation rules. This file is intended as a comprehensive Markdown reference that can be provided to another LLM.

## Scope

- Source title: C-root Jazz/Funk Chord-Scale Vocabulary
- Source root: C
- Schema version: 0.1.0
- Chord count: 65
- Scale library entries: 26
- Total chord-scale choices displayed by the app: 112
- Canonical data is C-root. The app can transpose every chord and associated scale display to all 12 roots: C, C#, D, D#, E, F, F#, G, G#, A, A#, B.
- The per-chord sections below use the canonical C-root data. Transposition is interval-preserving.

## Source Description

Practical C-root jazz/funk chord symbols with chord tones and ordered scale choices. Designed as seed data for an app that displays a chord and compatible scales.

## Important Notes From The Source Data

- Scale choices are ordered by practical default, not by absolute theory law.
- Chord-scale choice depends on musical function, key center, and voice-leading context.
- Chord notes list chord tones/extensions, not a required voicing.
- Enharmonic spelling favors chord function: #9 may appear as D# even though it sounds like Eb.
- This file emphasizes common and musically useful jazz/funk chord-scale vocabulary, not every theoretically possible pitch-class combination.

## App Rendering And Playback Rules Captured In This Reference

- Chord playback/display notes are made ascending from the chord semitone order, starting around octave 3 and increasing octave whenever the semitone sequence wraps.
- Scale playback/display notes are ordered low-to-high from the scale root and include the return-to-root note at the next octave.
- Voicing display is app-derived: shell octave contains root plus seventh; upper octave contains third or suspended tone, then fifth, thirteenths/sixths, ninths, elevenths, and remaining non-root/non-seventh tones.
- Suspended chords do not invent a third; the suspended tone is used in the upper octave when no third exists.
- Duplicate pitch classes in voicings are removed per voicing group.
- For each chosen root-scale choice, the app also derives one compatible non-root scale: it prefers a scale with the same pitch set when possible, then scores practical parent/relative options.

## Color And Role Schema Used By The App

| Role | Color | Meaning |
| --- | --- | --- |
| Root | #d84b4b | Chord or scale root |
| Seventh | #c88719 | bb7, b7, or 7 formulas |
| Third | #ff4fb8 | b3, 3, or #3 formulas |
| Natural fifth | #ffc2df | 5 formula |
| Natural extension | #28a87d | 2/9, 4/11, 6/13 when not altered |
| Flat alteration | #3f7ee8 | b5, b9, b13 and other flat-altered formulas not already classified as third/seventh |
| Sharp alteration | #8d5cff | #5, #9, #11 and other sharp-altered formulas not already classified as third |

Role precedence: root, seventh, third, flat alteration, sharp alteration, fifth, extension. That means b3 is still treated as a third, and b7 is still treated as a seventh.

## Interval Reference

| Pitch label | Semitone from C |
| --- | --- |
| C | 0 |
| D♭/C♯ | 1 |
| D | 2 |
| E♭/D♯ | 3 |
| E | 4 |
| F | 5 |
| G♭/F♯ | 6 |
| G | 7 |
| A♭/G♯ | 8 |
| A | 9 |
| B♭/A♯ | 10 |
| B | 11 |

## Recommended App Functions From Source Data

- listChords: Display all C-root chord symbols with filtering by family, quality, tag, and commonness.
- showChord: Given a chord id or symbol, display chord formula, chord notes, aliases, family, and voicing hints.
- showScaleChoicesForChord: For a selected chord, display ordered scale choices with scale formulas, notes, semitones, role, and reason.
- filterByColor: Filter chords by tonal color such as lydian, altered, diminished, whole-tone, sus, funk, blues, or tonic minor.
- sortByCommonness: Show beginner/common chords first while keeping rare advanced chords available.

## Scale Library

These are the 26 scale definitions used as the corpus for root-scale choices and app-derived non-root scale matches.

### C_ionian: C Ionian / C major

- Family: major modes
- Formula: 1, 2, 3, 4, 5, 6, 7
- Notes: C, D, E, F, G, A, B
- Semitones from C: [0, 2, 4, 5, 7, 9, 11]
- Use: Straight major/maj7 sound.

### C_lydian: C Lydian

- Family: major modes
- Formula: 1, 2, 3, ♯4/♯11, 5, 6, 7
- Notes: C, D, E, F♯, G, A, B
- Semitones from C: [0, 2, 4, 6, 7, 9, 11]
- Use: Bright major sound; common jazz choice for maj7(#11) colors.

### C_lydian_augmented: C Lydian Augmented

- Family: melodic minor modes
- Formula: 1, 2, 3, ♯4/♯11, ♯5, 6, 7
- Notes: C, D, E, F♯, G♯, A, B
- Semitones from C: [0, 2, 4, 6, 8, 9, 11]
- Use: Major seventh with #5 and #11 color; melodic-minor mode 3 sound.

### C_major_pentatonic: C Major Pentatonic

- Family: pentatonic
- Formula: 1, 2, 3, 5, 6
- Notes: C, D, E, G, A
- Semitones from C: [0, 2, 4, 7, 9]
- Use: Open major/funk color; useful over C6, C6/9, Cmaj, and some sus sounds.

### C_dorian: C Dorian

- Family: major modes
- Formula: 1, 2, ♭3, 4/11, 5, 6/13, ♭7
- Notes: C, D, E♭, F, G, A, B♭
- Semitones from C: [0, 2, 3, 5, 7, 9, 10]
- Use: Default jazz minor-seventh sound, especially m9/m11/m13.

### C_aeolian: C Aeolian / natural minor

- Family: major modes
- Formula: 1, 2, ♭3, 4/11, 5, ♭6/♭13, ♭7
- Notes: C, D, E♭, F, G, A♭, B♭
- Semitones from C: [0, 2, 3, 5, 7, 8, 10]
- Use: Darker minor-seventh sound with b13.

### C_phrygian: C Phrygian

- Family: major modes
- Formula: 1, ♭2/♭9, ♭3, 4/11, 5, ♭6/♭13, ♭7
- Notes: C, D♭, E♭, F, G, A♭, B♭
- Semitones from C: [0, 1, 3, 5, 7, 8, 10]
- Use: Minor sound with b9; useful for m7(b9), modal funk, dark vamps.

### C_melodic_minor: C Melodic Minor / jazz minor

- Family: melodic minor
- Formula: 1, 2, ♭3, 4/11, 5, 6/13, 7
- Notes: C, D, E♭, F, G, A, B
- Semitones from C: [0, 2, 3, 5, 7, 9, 11]
- Use: Minor-major, minor 6, and sophisticated tonic minor colors.

### C_harmonic_minor: C Harmonic Minor

- Family: harmonic minor
- Formula: 1, 2, ♭3, 4/11, 5, ♭6/♭13, 7
- Notes: C, D, E♭, F, G, A♭, B
- Semitones from C: [0, 2, 3, 5, 7, 8, 11]
- Use: Minor-major with b13; darker classical/minor-key dominant gravity.

### C_minor_pentatonic: C Minor Pentatonic

- Family: pentatonic
- Formula: 1, ♭3, 4/11, 5, ♭7
- Notes: C, E♭, F, G, B♭
- Semitones from C: [0, 3, 5, 7, 10]
- Use: Funk/blues minor color over minor, sus, and dominant vamps.

### C_blues: C Blues Scale

- Family: blues
- Formula: 1, ♭3, 4/11, ♭5/♯11, 5, ♭7
- Notes: C, E♭, F, G♭, G, B♭
- Semitones from C: [0, 3, 5, 6, 7, 10]
- Use: Blue-note vocabulary over C7, Cm7, and funk vamps.

### C_mixolydian: C Mixolydian

- Family: major modes
- Formula: 1, 2/9, 3, 4/11, 5, 6/13, ♭7
- Notes: C, D, E, F, G, A, B♭
- Semitones from C: [0, 2, 4, 5, 7, 9, 10]
- Use: Default unaltered dominant scale: C7, C9, C13.

### C_bebop_dominant: C Bebop Dominant

- Family: bebop
- Formula: 1, 2/9, 3, 4/11, 5, 6/13, ♭7, 7 passing
- Notes: C, D, E, F, G, A, B♭, B
- Semitones from C: [0, 2, 4, 5, 7, 9, 10, 11]
- Use: Dominant bebop vocabulary; adds natural 7 as a passing tone.

### C_mixolydian_blues: C Mixolydian Blues

- Family: hybrid/blues
- Formula: 1, 2/9, ♭3 blue, 3, 4/11, 5, 6/13, ♭7
- Notes: C, D, E♭, E, F, G, A, B♭
- Semitones from C: [0, 2, 3, 4, 5, 7, 9, 10]
- Use: Funk/R&B dominant color with both minor and major third.

### C_lydian_dominant: C Lydian Dominant / C Mixolydian #11

- Family: melodic minor modes
- Formula: 1, 2/9, 3, ♯4/♯11, 5, 6/13, ♭7
- Notes: C, D, E, F♯, G, A, B♭
- Semitones from C: [0, 2, 4, 6, 7, 9, 10]
- Use: Dominant #11 sound; common for 7#11, 9#11, 13#11 and tritone-sub colors.

### C_altered: C Altered / C Super Locrian

- Family: melodic minor modes
- Formula: 1, ♭9, ♯9, 3, ♭5/♯11, ♯5/♭13, ♭7
- Notes: C, D♭, D♯, E, G♭, G♯, B♭
- Semitones from C: [0, 1, 3, 4, 6, 8, 10]
- Use: Maximum altered dominant tension: b9, #9, b5/#11, #5/b13.

### C_half_whole_diminished: C Half-Whole Diminished

- Family: diminished/octatonic
- Formula: 1, ♭9, ♯9, 3, ♯11/♭5, 5, 13, ♭7
- Notes: C, D♭, D♯, E, F♯, G, A, B♭
- Semitones from C: [0, 1, 3, 4, 6, 7, 9, 10]
- Use: Dominant diminished sound; strong for 13(b9), 7(b9), 7(#9), and diminished-dominant colors.

### C_whole_tone: C Whole Tone

- Family: symmetric
- Formula: 1, 2/9, 3, ♯4/♯11, ♯5/♭13, ♭7
- Notes: C, D, E, F♯, G♯, B♭
- Semitones from C: [0, 2, 4, 6, 8, 10]
- Use: Augmented dominant sound: 7#5, 9#5, 7#11#5.

### C_phrygian_dominant: C Phrygian Dominant / Mixolydian b9 b13

- Family: harmonic minor modes
- Formula: 1, ♭9, 3, 4/11, 5, ♭13, ♭7
- Notes: C, D♭, E, F, G, A♭, B♭
- Semitones from C: [0, 1, 4, 5, 7, 8, 10]
- Use: Dominant b9 b13, common as V of minor or darker dominant color.

### C_locrian: C Locrian

- Family: major modes
- Formula: 1, ♭9, ♭3, 4/11, ♭5, ♭13, ♭7
- Notes: C, D♭, E♭, F, G♭, A♭, B♭
- Semitones from C: [0, 1, 3, 5, 6, 8, 10]
- Use: Basic half-diminished sound.

### C_locrian_natural_2: C Locrian Natural 2

- Family: melodic minor modes
- Formula: 1, 2/9, ♭3, 4/11, ♭5, ♭13, ♭7
- Notes: C, D, E♭, F, G♭, A♭, B♭
- Semitones from C: [0, 2, 3, 5, 6, 8, 10]
- Use: Half-diminished with natural 9; common jazz choice for m7b5/ø9.

### C_whole_half_diminished: C Whole-Half Diminished

- Family: diminished/octatonic
- Formula: 1, 2/9, ♭3, 4/11, ♭5, ♭13, 13/𝄫7, 7
- Notes: C, D, E♭, F, G♭, A♭, A, B
- Semitones from C: [0, 2, 3, 5, 6, 8, 9, 11]
- Use: Diminished seventh chord-scale.

### C_dominant_sus: C Dominant Sus / Mixolydian Sus

- Family: suspended dominant
- Formula: 1, 2/9, 4/11, 5, 6/13, ♭7
- Notes: C, D, F, G, A, B♭
- Semitones from C: [0, 2, 5, 7, 9, 10]
- Use: Dominant sus sound without the major 3rd; useful over 7sus4, 9sus4, 13sus4.

### C_sus_pentatonic: C Sus Pentatonic

- Family: pentatonic
- Formula: 1, 2/9, 4/11, 5, ♭7
- Notes: C, D, F, G, B♭
- Semitones from C: [0, 2, 5, 7, 10]
- Use: Compact sus/funk voicing vocabulary.

### C_dominant_pentatonic: C Dominant Pentatonic

- Family: pentatonic
- Formula: 1, 2/9, 3, 5, ♭7
- Notes: C, D, E, G, B♭
- Semitones from C: [0, 2, 4, 7, 10]
- Use: Clean funk/R&B dominant sound.

### C_augmented: C Augmented Scale

- Family: symmetric
- Formula: 1, ♭3/♯9, 3, 5, ♯5, 7
- Notes: C, E♭, E, G, G♯, B
- Semitones from C: [0, 3, 4, 7, 8, 11]
- Use: Symmetric augmented major color; useful for maj7#5 and augmented triad colors.

## Chord Families Summary

- altered dominant: 12 chords (C7b5, C7b9, C7#9, C7b13, C9b13, C7b9b13, C7#9b13, C7b9#5, C7#9#5, C7b5b9, C7b5#9, C7alt)
- augmented: 1 chords (Caug)
- augmented dominant: 4 chords (C7#5, C9#5, C7#11#5, C9#11#5)
- diminished: 2 chords (Cdim7, CdimMaj7)
- dominant: 3 chords (C7, C9, C13)
- dominant diminished: 3 chords (C13b9, C13#9, C13b9#11)
- dominant/sus: 1 chords (C11)
- half-diminished: 3 chords (Cm7b5, Cm9b5, Cm11b5)
- lydian dominant: 4 chords (C7#11, C9#11, C13#11, C9b5)
- major: 9 chords (Cmaj7, Cmaj9, Cmaj13, C6, C6/9, Cmaj7#11, Cmaj9#11, Cmaj13#11, Cadd9)
- major augmented: 3 chords (Cmaj7#5, Cmaj9#5, Cmaj7#5#11)
- minor: 10 chords (Cm7, Cm9, Cm11, Cm13, Cm6, Cm6/9, Cm7b13, Cm7b9, Cm11b9, Cmadd9)
- minor-major: 3 chords (Cm(maj7), Cm(maj9), Cm(maj13))
- suspended: 2 chords (Csus2, Csus4)
- suspended dominant: 5 chords (C7sus4, C9sus4, C13sus4, C7sus2, C7sus4b9)

## Complete Chord Reference

### 1. Cmaj7 — major seventh

- ID: `Cmaj7`
- Aliases: CΔ7, CM7
- Family: major
- Commonness: 5 / 5
- Tags: tonic major, jazz standard
- Chord formula: 1, 3, 5, 7
- Chord notes: C, E, G, B
- Semitones from C: [0, 4, 7, 11]
- Ascending app chord playback/display notes: C3, E3, G3, B3
- Scale choices displayed: 2

#### Chord Tone Roles

| Formula | Note | Semitone | App display note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- |
| 1 | C | 0 | C3 | root | #d84b4b |
| 3 | E | 4 | E3 | third | #ff4fb8 |
| 5 | G | 7 | G3 | fifth | #ffc2df |
| 7 | B | 11 | B3 | seventh | #c88719 |

#### App Voicing

The voicing below is generated by the app voicing rules: root + seventh in the shell octave, then third/sus tone, fifth, and extensions in the upper octave.

| Voicing group | Formula | Note | Semitone | App display/play note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Shell octave | 1 | C | 0 | C3 | root | #d84b4b |
| Shell octave | 7 | B | 11 | B3 | seventh | #c88719 |
| Upper octave | 3 | E | 4 | E4 | third | #ff4fb8 |
| Upper octave | 5 | G | 7 | G4 | fifth | #ffc2df |

#### Associated Scale Choices

##### 1. C Lydian

- Scale ID: `C_lydian`
- Role in source data: primary jazz color
- Family: major modes
- Formula: 1, 2, 3, ♯4/♯11, 5, 6, 7
- Notes: C, D, E, F♯, G, A, B
- Semitones from C: [0, 2, 4, 6, 7, 9, 11]
- Ordered playback/display notes: C3, D3, E3, F#3, G3, A3, B3, C4
- Reason/use: Common modern/jazz tonic-major color; #11 avoids the natural 11 clash with 3.

Non-root scale association derived by the app:

- Name: G Ionian / G major
- Root: G (7 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2, 3, 4, 5, 6, 7
- Notes/pitch classes: G, A, B, C, D, E, F#
- Semitones from C: [7, 9, 11, 0, 2, 4, 6]
- Relationship explanation: G Ionian / G major is a non-C relative view of C Lydian; same notes, different starting point. It still fits Cmaj7 because it contains C, E, G, B.

##### 2. C Ionian / C major

- Scale ID: `C_ionian`
- Role in source data: inside/basic
- Family: major modes
- Formula: 1, 2, 3, 4, 5, 6, 7
- Notes: C, D, E, F, G, A, B
- Semitones from C: [0, 2, 4, 5, 7, 9, 11]
- Ordered playback/display notes: C3, D3, E3, F3, G3, A3, B3, C4
- Reason/use: Plain major-key sound.

Non-root scale association derived by the app:

- Name: D Dorian
- Root: D (2 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2, ♭3, 4/11, 5, 6/13, ♭7
- Notes/pitch classes: D, E, F, G, A, B, C
- Semitones from C: [2, 4, 5, 7, 9, 11, 0]
- Relationship explanation: D Dorian is a non-C relative view of C Ionian / C major; same notes, different starting point. It still fits Cmaj7 because it contains C, E, G, B.

### 2. Cmaj9 — major ninth

- ID: `Cmaj9`
- Aliases: CΔ9
- Family: major
- Commonness: 5 / 5
- Tags: tonic major
- Chord formula: 1, 3, 5, 7, 9
- Chord notes: C, E, G, B, D
- Semitones from C: [0, 4, 7, 11, 2]
- Ascending app chord playback/display notes: C3, E3, G3, B3, D4
- Scale choices displayed: 2

#### Chord Tone Roles

| Formula | Note | Semitone | App display note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- |
| 1 | C | 0 | C3 | root | #d84b4b |
| 3 | E | 4 | E3 | third | #ff4fb8 |
| 5 | G | 7 | G3 | fifth | #ffc2df |
| 7 | B | 11 | B3 | seventh | #c88719 |
| 9 | D | 2 | D4 | extension | #28a87d |

#### App Voicing

The voicing below is generated by the app voicing rules: root + seventh in the shell octave, then third/sus tone, fifth, and extensions in the upper octave.

| Voicing group | Formula | Note | Semitone | App display/play note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Shell octave | 1 | C | 0 | C3 | root | #d84b4b |
| Shell octave | 7 | B | 11 | B3 | seventh | #c88719 |
| Upper octave | 3 | E | 4 | E4 | third | #ff4fb8 |
| Upper octave | 5 | G | 7 | G4 | fifth | #ffc2df |
| Upper octave | 9 | D | 2 | D4 | extension | #28a87d |

#### Associated Scale Choices

##### 1. C Lydian

- Scale ID: `C_lydian`
- Role in source data: primary jazz color
- Family: major modes
- Formula: 1, 2, 3, ♯4/♯11, 5, 6, 7
- Notes: C, D, E, F♯, G, A, B
- Semitones from C: [0, 2, 4, 6, 7, 9, 11]
- Ordered playback/display notes: C3, D3, E3, F#3, G3, A3, B3, C4
- Reason/use: Works well for maj9 and leaves room for #11 color.

Non-root scale association derived by the app:

- Name: G Ionian / G major
- Root: G (7 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2, 3, 4, 5, 6, 7
- Notes/pitch classes: G, A, B, C, D, E, F#
- Semitones from C: [7, 9, 11, 0, 2, 4, 6]
- Relationship explanation: G Ionian / G major is a non-C relative view of C Lydian; same notes, different starting point. It still fits Cmaj9 because it contains C, E, G, B, D.

##### 2. C Ionian / C major

- Scale ID: `C_ionian`
- Role in source data: inside/basic
- Family: major modes
- Formula: 1, 2, 3, 4, 5, 6, 7
- Notes: C, D, E, F, G, A, B
- Semitones from C: [0, 2, 4, 5, 7, 9, 11]
- Ordered playback/display notes: C3, D3, E3, F3, G3, A3, B3, C4
- Reason/use: Matches the unaltered major 9 chord.

Non-root scale association derived by the app:

- Name: D Dorian
- Root: D (2 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2, ♭3, 4/11, 5, 6/13, ♭7
- Notes/pitch classes: D, E, F, G, A, B, C
- Semitones from C: [2, 4, 5, 7, 9, 11, 0]
- Relationship explanation: D Dorian is a non-C relative view of C Ionian / C major; same notes, different starting point. It still fits Cmaj9 because it contains C, E, G, B, D.

### 3. Cmaj13 — major thirteenth

- ID: `Cmaj13`
- Aliases: CΔ13
- Family: major
- Commonness: 4 / 5
- Tags: tonic major
- Chord formula: 1, 3, 5, 7, 9, 13
- Chord notes: C, E, G, B, D, A
- Semitones from C: [0, 4, 7, 11, 2, 9]
- Ascending app chord playback/display notes: C3, E3, G3, B3, D4, A4
- Scale choices displayed: 2

#### Chord Tone Roles

| Formula | Note | Semitone | App display note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- |
| 1 | C | 0 | C3 | root | #d84b4b |
| 3 | E | 4 | E3 | third | #ff4fb8 |
| 5 | G | 7 | G3 | fifth | #ffc2df |
| 7 | B | 11 | B3 | seventh | #c88719 |
| 9 | D | 2 | D4 | extension | #28a87d |
| 13 | A | 9 | A4 | extension | #28a87d |

#### App Voicing

The voicing below is generated by the app voicing rules: root + seventh in the shell octave, then third/sus tone, fifth, and extensions in the upper octave.

| Voicing group | Formula | Note | Semitone | App display/play note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Shell octave | 1 | C | 0 | C3 | root | #d84b4b |
| Shell octave | 7 | B | 11 | B3 | seventh | #c88719 |
| Upper octave | 3 | E | 4 | E4 | third | #ff4fb8 |
| Upper octave | 5 | G | 7 | G4 | fifth | #ffc2df |
| Upper octave | 13 | A | 9 | A4 | extension | #28a87d |
| Upper octave | 9 | D | 2 | D4 | extension | #28a87d |

#### Associated Scale Choices

##### 1. C Lydian

- Scale ID: `C_lydian`
- Role in source data: primary jazz color
- Family: major modes
- Formula: 1, 2, 3, ♯4/♯11, 5, 6, 7
- Notes: C, D, E, F♯, G, A, B
- Semitones from C: [0, 2, 4, 6, 7, 9, 11]
- Ordered playback/display notes: C3, D3, E3, F#3, G3, A3, B3, C4
- Reason/use: Maj13 often implies 9 and 13; Lydian gives a jazz #11 option.

Non-root scale association derived by the app:

- Name: G Ionian / G major
- Root: G (7 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2, 3, 4, 5, 6, 7
- Notes/pitch classes: G, A, B, C, D, E, F#
- Semitones from C: [7, 9, 11, 0, 2, 4, 6]
- Relationship explanation: G Ionian / G major is a non-C relative view of C Lydian; same notes, different starting point. It still fits Cmaj13 because it contains C, E, G, B, D, A.

##### 2. C Ionian / C major

- Scale ID: `C_ionian`
- Role in source data: inside/basic
- Family: major modes
- Formula: 1, 2, 3, 4, 5, 6, 7
- Notes: C, D, E, F, G, A, B
- Semitones from C: [0, 2, 4, 5, 7, 9, 11]
- Ordered playback/display notes: C3, D3, E3, F3, G3, A3, B3, C4
- Reason/use: Fully inside major scale.

Non-root scale association derived by the app:

- Name: D Dorian
- Root: D (2 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2, ♭3, 4/11, 5, 6/13, ♭7
- Notes/pitch classes: D, E, F, G, A, B, C
- Semitones from C: [2, 4, 5, 7, 9, 11, 0]
- Relationship explanation: D Dorian is a non-C relative view of C Ionian / C major; same notes, different starting point. It still fits Cmaj13 because it contains C, E, G, B, D, A.

### 4. C6 — major sixth

- ID: `C6`
- Aliases: Cmaj6
- Family: major
- Commonness: 4 / 5
- Tags: funk, soul, tonic major
- Chord formula: 1, 3, 5, 6
- Chord notes: C, E, G, A
- Semitones from C: [0, 4, 7, 9]
- Ascending app chord playback/display notes: C3, E3, G3, A3
- Scale choices displayed: 2

#### Chord Tone Roles

| Formula | Note | Semitone | App display note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- |
| 1 | C | 0 | C3 | root | #d84b4b |
| 3 | E | 4 | E3 | third | #ff4fb8 |
| 5 | G | 7 | G3 | fifth | #ffc2df |
| 6 | A | 9 | A3 | extension | #28a87d |

#### App Voicing

The voicing below is generated by the app voicing rules: root + seventh in the shell octave, then third/sus tone, fifth, and extensions in the upper octave.

| Voicing group | Formula | Note | Semitone | App display/play note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Shell octave | 1 | C | 0 | C3 | root | #d84b4b |
| Upper octave | 3 | E | 4 | E4 | third | #ff4fb8 |
| Upper octave | 5 | G | 7 | G4 | fifth | #ffc2df |
| Upper octave | 6 | A | 9 | A4 | extension | #28a87d |

#### Associated Scale Choices

##### 1. C Major Pentatonic

- Scale ID: `C_major_pentatonic`
- Role in source data: primary funk/simple
- Family: pentatonic
- Formula: 1, 2, 3, 5, 6
- Notes: C, D, E, G, A
- Semitones from C: [0, 2, 4, 7, 9]
- Ordered playback/display notes: C3, D3, E3, G3, A3, C4
- Reason/use: Clear open 6 sound.

Non-root scale association derived by the app:

- Name: A Minor Pentatonic
- Root: A (9 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, ♭3, 4/11, 5, ♭7
- Notes/pitch classes: A, C, D, E, G
- Semitones from C: [9, 0, 2, 4, 7]
- Relationship explanation: A Minor Pentatonic is a non-C relative view of C Major Pentatonic; same notes, different starting point. It still fits C6 because it contains C, E, G, A.

##### 2. C Ionian / C major

- Scale ID: `C_ionian`
- Role in source data: inside/basic
- Family: major modes
- Formula: 1, 2, 3, 4, 5, 6, 7
- Notes: C, D, E, F, G, A, B
- Semitones from C: [0, 2, 4, 5, 7, 9, 11]
- Ordered playback/display notes: C3, D3, E3, F3, G3, A3, B3, C4
- Reason/use: Plain major 6 chord color.

Non-root scale association derived by the app:

- Name: D Dorian
- Root: D (2 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2, ♭3, 4/11, 5, 6/13, ♭7
- Notes/pitch classes: D, E, F, G, A, B, C
- Semitones from C: [2, 4, 5, 7, 9, 11, 0]
- Relationship explanation: D Dorian is a non-C relative view of C Ionian / C major; same notes, different starting point. It still fits C6 because it contains C, E, G, A.

### 5. C6/9 — major sixth/ninth

- ID: `C6_9`
- Aliases: C6add9
- Family: major
- Commonness: 5 / 5
- Tags: funk, neo-soul, tonic major
- Chord formula: 1, 3, 5, 6, 9
- Chord notes: C, E, G, A, D
- Semitones from C: [0, 4, 7, 9, 2]
- Ascending app chord playback/display notes: C3, E3, G3, A3, D4
- Scale choices displayed: 2

#### Chord Tone Roles

| Formula | Note | Semitone | App display note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- |
| 1 | C | 0 | C3 | root | #d84b4b |
| 3 | E | 4 | E3 | third | #ff4fb8 |
| 5 | G | 7 | G3 | fifth | #ffc2df |
| 6 | A | 9 | A3 | extension | #28a87d |
| 9 | D | 2 | D4 | extension | #28a87d |

#### App Voicing

The voicing below is generated by the app voicing rules: root + seventh in the shell octave, then third/sus tone, fifth, and extensions in the upper octave.

| Voicing group | Formula | Note | Semitone | App display/play note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Shell octave | 1 | C | 0 | C3 | root | #d84b4b |
| Upper octave | 3 | E | 4 | E4 | third | #ff4fb8 |
| Upper octave | 5 | G | 7 | G4 | fifth | #ffc2df |
| Upper octave | 6 | A | 9 | A4 | extension | #28a87d |
| Upper octave | 9 | D | 2 | D4 | extension | #28a87d |

#### Associated Scale Choices

##### 1. C Major Pentatonic

- Scale ID: `C_major_pentatonic`
- Role in source data: primary funk/simple
- Family: pentatonic
- Formula: 1, 2, 3, 5, 6
- Notes: C, D, E, G, A
- Semitones from C: [0, 2, 4, 7, 9]
- Ordered playback/display notes: C3, D3, E3, G3, A3, C4
- Reason/use: The chord tones are the C major pentatonic scale.

Non-root scale association derived by the app:

- Name: A Minor Pentatonic
- Root: A (9 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, ♭3, 4/11, 5, ♭7
- Notes/pitch classes: A, C, D, E, G
- Semitones from C: [9, 0, 2, 4, 7]
- Relationship explanation: A Minor Pentatonic is a non-C relative view of C Major Pentatonic; same notes, different starting point. It still fits C6/9 because it contains C, E, G, A, D.

##### 2. C Lydian

- Scale ID: `C_lydian`
- Role in source data: modern jazz option
- Family: major modes
- Formula: 1, 2, 3, ♯4/♯11, 5, 6, 7
- Notes: C, D, E, F♯, G, A, B
- Semitones from C: [0, 2, 4, 6, 7, 9, 11]
- Ordered playback/display notes: C3, D3, E3, F#3, G3, A3, B3, C4
- Reason/use: Adds possible #11 color.

Non-root scale association derived by the app:

- Name: G Ionian / G major
- Root: G (7 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2, 3, 4, 5, 6, 7
- Notes/pitch classes: G, A, B, C, D, E, F#
- Semitones from C: [7, 9, 11, 0, 2, 4, 6]
- Relationship explanation: G Ionian / G major is a non-C relative view of C Lydian; same notes, different starting point. It still fits C6/9 because it contains C, E, G, A, D.

### 6. Cmaj7#11 — major seventh sharp eleven

- ID: `Cmaj7_11`
- Aliases: CΔ7#11, Cmaj7♯11
- Family: major
- Commonness: 5 / 5
- Tags: lydian, modern jazz
- Chord formula: 1, 3, 5, 7, ♯11
- Chord notes: C, E, G, B, F♯
- Semitones from C: [0, 4, 7, 11, 6]
- Ascending app chord playback/display notes: C3, E3, G3, B3, F#4
- Scale choices displayed: 1

#### Chord Tone Roles

| Formula | Note | Semitone | App display note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- |
| 1 | C | 0 | C3 | root | #d84b4b |
| 3 | E | 4 | E3 | third | #ff4fb8 |
| 5 | G | 7 | G3 | fifth | #ffc2df |
| 7 | B | 11 | B3 | seventh | #c88719 |
| ♯11 | F♯ | 6 | F#4 | sharp alteration | #8d5cff |

#### App Voicing

The voicing below is generated by the app voicing rules: root + seventh in the shell octave, then third/sus tone, fifth, and extensions in the upper octave.

| Voicing group | Formula | Note | Semitone | App display/play note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Shell octave | 1 | C | 0 | C3 | root | #d84b4b |
| Shell octave | 7 | B | 11 | B3 | seventh | #c88719 |
| Upper octave | 3 | E | 4 | E4 | third | #ff4fb8 |
| Upper octave | 5 | G | 7 | G4 | fifth | #ffc2df |
| Upper octave | ♯11 | F# | 6 | F#4 | sharp alteration | #8d5cff |

#### Associated Scale Choices

##### 1. C Lydian

- Scale ID: `C_lydian`
- Role in source data: primary
- Family: major modes
- Formula: 1, 2, 3, ♯4/♯11, 5, 6, 7
- Notes: C, D, E, F♯, G, A, B
- Semitones from C: [0, 2, 4, 6, 7, 9, 11]
- Ordered playback/display notes: C3, D3, E3, F#3, G3, A3, B3, C4
- Reason/use: Directly contains the #11 color.

Non-root scale association derived by the app:

- Name: G Ionian / G major
- Root: G (7 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2, 3, 4, 5, 6, 7
- Notes/pitch classes: G, A, B, C, D, E, F#
- Semitones from C: [7, 9, 11, 0, 2, 4, 6]
- Relationship explanation: G Ionian / G major is a non-C relative view of C Lydian; same notes, different starting point. It still fits Cmaj7#11 because it contains C, E, G, B, F#.

### 7. Cmaj9#11 — major ninth sharp eleven

- ID: `Cmaj9_11`
- Aliases: CΔ9#11, Cmaj9♯11
- Family: major
- Commonness: 5 / 5
- Tags: lydian, modern jazz
- Chord formula: 1, 3, 5, 7, 9, ♯11
- Chord notes: C, E, G, B, D, F♯
- Semitones from C: [0, 4, 7, 11, 2, 6]
- Ascending app chord playback/display notes: C3, E3, G3, B3, D4, F#4
- Scale choices displayed: 1

#### Chord Tone Roles

| Formula | Note | Semitone | App display note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- |
| 1 | C | 0 | C3 | root | #d84b4b |
| 3 | E | 4 | E3 | third | #ff4fb8 |
| 5 | G | 7 | G3 | fifth | #ffc2df |
| 7 | B | 11 | B3 | seventh | #c88719 |
| 9 | D | 2 | D4 | extension | #28a87d |
| ♯11 | F♯ | 6 | F#4 | sharp alteration | #8d5cff |

#### App Voicing

The voicing below is generated by the app voicing rules: root + seventh in the shell octave, then third/sus tone, fifth, and extensions in the upper octave.

| Voicing group | Formula | Note | Semitone | App display/play note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Shell octave | 1 | C | 0 | C3 | root | #d84b4b |
| Shell octave | 7 | B | 11 | B3 | seventh | #c88719 |
| Upper octave | 3 | E | 4 | E4 | third | #ff4fb8 |
| Upper octave | 5 | G | 7 | G4 | fifth | #ffc2df |
| Upper octave | 9 | D | 2 | D4 | extension | #28a87d |
| Upper octave | ♯11 | F# | 6 | F#4 | sharp alteration | #8d5cff |

#### Associated Scale Choices

##### 1. C Lydian

- Scale ID: `C_lydian`
- Role in source data: primary
- Family: major modes
- Formula: 1, 2, 3, ♯4/♯11, 5, 6, 7
- Notes: C, D, E, F♯, G, A, B
- Semitones from C: [0, 2, 4, 6, 7, 9, 11]
- Ordered playback/display notes: C3, D3, E3, F#3, G3, A3, B3, C4
- Reason/use: Directly contains 9 and #11.

Non-root scale association derived by the app:

- Name: G Ionian / G major
- Root: G (7 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2, 3, 4, 5, 6, 7
- Notes/pitch classes: G, A, B, C, D, E, F#
- Semitones from C: [7, 9, 11, 0, 2, 4, 6]
- Relationship explanation: G Ionian / G major is a non-C relative view of C Lydian; same notes, different starting point. It still fits Cmaj9#11 because it contains C, E, G, B, D, F#.

### 8. Cmaj13#11 — major thirteenth sharp eleven

- ID: `Cmaj13_11`
- Aliases: CΔ13#11, Cmaj13♯11
- Family: major
- Commonness: 4 / 5
- Tags: lydian, modern jazz
- Chord formula: 1, 3, 5, 7, 9, ♯11, 13
- Chord notes: C, E, G, B, D, F♯, A
- Semitones from C: [0, 4, 7, 11, 2, 6, 9]
- Ascending app chord playback/display notes: C3, E3, G3, B3, D4, F#4, A4
- Scale choices displayed: 1

#### Chord Tone Roles

| Formula | Note | Semitone | App display note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- |
| 1 | C | 0 | C3 | root | #d84b4b |
| 3 | E | 4 | E3 | third | #ff4fb8 |
| 5 | G | 7 | G3 | fifth | #ffc2df |
| 7 | B | 11 | B3 | seventh | #c88719 |
| 9 | D | 2 | D4 | extension | #28a87d |
| ♯11 | F♯ | 6 | F#4 | sharp alteration | #8d5cff |
| 13 | A | 9 | A4 | extension | #28a87d |

#### App Voicing

The voicing below is generated by the app voicing rules: root + seventh in the shell octave, then third/sus tone, fifth, and extensions in the upper octave.

| Voicing group | Formula | Note | Semitone | App display/play note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Shell octave | 1 | C | 0 | C3 | root | #d84b4b |
| Shell octave | 7 | B | 11 | B3 | seventh | #c88719 |
| Upper octave | 3 | E | 4 | E4 | third | #ff4fb8 |
| Upper octave | 5 | G | 7 | G4 | fifth | #ffc2df |
| Upper octave | 13 | A | 9 | A4 | extension | #28a87d |
| Upper octave | 9 | D | 2 | D4 | extension | #28a87d |
| Upper octave | ♯11 | F# | 6 | F#4 | sharp alteration | #8d5cff |

#### Associated Scale Choices

##### 1. C Lydian

- Scale ID: `C_lydian`
- Role in source data: primary
- Family: major modes
- Formula: 1, 2, 3, ♯4/♯11, 5, 6, 7
- Notes: C, D, E, F♯, G, A, B
- Semitones from C: [0, 2, 4, 6, 7, 9, 11]
- Ordered playback/display notes: C3, D3, E3, F#3, G3, A3, B3, C4
- Reason/use: The full C Lydian stack can be heard as Cmaj13#11.

Non-root scale association derived by the app:

- Name: G Ionian / G major
- Root: G (7 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2, 3, 4, 5, 6, 7
- Notes/pitch classes: G, A, B, C, D, E, F#
- Semitones from C: [7, 9, 11, 0, 2, 4, 6]
- Relationship explanation: G Ionian / G major is a non-C relative view of C Lydian; same notes, different starting point. It still fits Cmaj13#11 because it contains C, E, G, B, D, F#, A.

### 9. Cmaj7#5 — major seventh sharp five

- ID: `Cmaj7_sharp5`
- Aliases: CΔ7#5, Cmaj7+5
- Family: major augmented
- Commonness: 3 / 5
- Tags: modern jazz, augmented
- Chord formula: 1, 3, ♯5, 7
- Chord notes: C, E, G♯, B
- Semitones from C: [0, 4, 8, 11]
- Ascending app chord playback/display notes: C3, E3, G#3, B3
- Scale choices displayed: 2

#### Chord Tone Roles

| Formula | Note | Semitone | App display note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- |
| 1 | C | 0 | C3 | root | #d84b4b |
| 3 | E | 4 | E3 | third | #ff4fb8 |
| ♯5 | G♯ | 8 | G#3 | sharp alteration | #8d5cff |
| 7 | B | 11 | B3 | seventh | #c88719 |

#### App Voicing

The voicing below is generated by the app voicing rules: root + seventh in the shell octave, then third/sus tone, fifth, and extensions in the upper octave.

| Voicing group | Formula | Note | Semitone | App display/play note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Shell octave | 1 | C | 0 | C3 | root | #d84b4b |
| Shell octave | 7 | B | 11 | B3 | seventh | #c88719 |
| Upper octave | 3 | E | 4 | E4 | third | #ff4fb8 |
| Upper octave | ♯5 | G# | 8 | G#4 | sharp alteration | #8d5cff |

#### Associated Scale Choices

##### 1. C Lydian Augmented

- Scale ID: `C_lydian_augmented`
- Role in source data: primary
- Family: melodic minor modes
- Formula: 1, 2, 3, ♯4/♯11, ♯5, 6, 7
- Notes: C, D, E, F♯, G♯, A, B
- Semitones from C: [0, 2, 4, 6, 8, 9, 11]
- Ordered playback/display notes: C3, D3, E3, F#3, G#3, A3, B3, C4
- Reason/use: Contains 3, #5 and 7; standard melodic-minor color.

Non-root scale association derived by the app:

- Name: D Lydian Dominant / D Mixolydian #11
- Root: D (2 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2/9, 3, ♯4/♯11, 5, 6/13, ♭7
- Notes/pitch classes: D, E, F#, G#, A, B, C
- Semitones from C: [2, 4, 6, 8, 9, 11, 0]
- Relationship explanation: D Lydian Dominant / D Mixolydian #11 is a non-C relative view of C Lydian Augmented; same notes, different starting point. It still fits Cmaj7#5 because it contains C, E, G#, B.

##### 2. C Augmented Scale

- Scale ID: `C_augmented`
- Role in source data: alternate symmetric
- Family: symmetric
- Formula: 1, ♭3/♯9, 3, 5, ♯5, 7
- Notes: C, E♭, E, G, G♯, B
- Semitones from C: [0, 3, 4, 7, 8, 11]
- Ordered playback/display notes: C3, D#3, E3, G3, G#3, B3, C4
- Reason/use: Works as a compact augmented-major color.

Non-root scale association derived by the app:

- Name: E Augmented Scale
- Root: E (4 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, ♭3/♯9, 3, 5, ♯5, 7
- Notes/pitch classes: E, G, G#, B, C, D#
- Semitones from C: [4, 7, 8, 11, 0, 3]
- Relationship explanation: E Augmented Scale is a non-C relative view of C Augmented Scale; same notes, different starting point. It still fits Cmaj7#5 because it contains C, E, G#, B.

### 10. Cmaj9#5 — major ninth sharp five

- ID: `Cmaj9_sharp5`
- Aliases: CΔ9#5, Cmaj9+5
- Family: major augmented
- Commonness: 3 / 5
- Tags: modern jazz, augmented
- Chord formula: 1, 3, ♯5, 7, 9
- Chord notes: C, E, G♯, B, D
- Semitones from C: [0, 4, 8, 11, 2]
- Ascending app chord playback/display notes: C3, E3, G#3, B3, D4
- Scale choices displayed: 1

#### Chord Tone Roles

| Formula | Note | Semitone | App display note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- |
| 1 | C | 0 | C3 | root | #d84b4b |
| 3 | E | 4 | E3 | third | #ff4fb8 |
| ♯5 | G♯ | 8 | G#3 | sharp alteration | #8d5cff |
| 7 | B | 11 | B3 | seventh | #c88719 |
| 9 | D | 2 | D4 | extension | #28a87d |

#### App Voicing

The voicing below is generated by the app voicing rules: root + seventh in the shell octave, then third/sus tone, fifth, and extensions in the upper octave.

| Voicing group | Formula | Note | Semitone | App display/play note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Shell octave | 1 | C | 0 | C3 | root | #d84b4b |
| Shell octave | 7 | B | 11 | B3 | seventh | #c88719 |
| Upper octave | 3 | E | 4 | E4 | third | #ff4fb8 |
| Upper octave | ♯5 | G# | 8 | G#4 | sharp alteration | #8d5cff |
| Upper octave | 9 | D | 2 | D4 | extension | #28a87d |

#### Associated Scale Choices

##### 1. C Lydian Augmented

- Scale ID: `C_lydian_augmented`
- Role in source data: primary
- Family: melodic minor modes
- Formula: 1, 2, 3, ♯4/♯11, ♯5, 6, 7
- Notes: C, D, E, F♯, G♯, A, B
- Semitones from C: [0, 2, 4, 6, 8, 9, 11]
- Ordered playback/display notes: C3, D3, E3, F#3, G#3, A3, B3, C4
- Reason/use: Contains 9, #5 and major 7.

Non-root scale association derived by the app:

- Name: D Lydian Dominant / D Mixolydian #11
- Root: D (2 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2/9, 3, ♯4/♯11, 5, 6/13, ♭7
- Notes/pitch classes: D, E, F#, G#, A, B, C
- Semitones from C: [2, 4, 6, 8, 9, 11, 0]
- Relationship explanation: D Lydian Dominant / D Mixolydian #11 is a non-C relative view of C Lydian Augmented; same notes, different starting point. It still fits Cmaj9#5 because it contains C, E, G#, B, D.

### 11. Cmaj7#5#11 — major seventh sharp five sharp eleven

- ID: `Cmaj7_sharp5_sharp11`
- Aliases: CΔ7#5#11
- Family: major augmented
- Commonness: 2 / 5
- Tags: advanced, modern jazz
- Chord formula: 1, 3, ♯5, 7, ♯11
- Chord notes: C, E, G♯, B, F♯
- Semitones from C: [0, 4, 8, 11, 6]
- Ascending app chord playback/display notes: C3, E3, G#3, B3, F#4
- Scale choices displayed: 1

#### Chord Tone Roles

| Formula | Note | Semitone | App display note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- |
| 1 | C | 0 | C3 | root | #d84b4b |
| 3 | E | 4 | E3 | third | #ff4fb8 |
| ♯5 | G♯ | 8 | G#3 | sharp alteration | #8d5cff |
| 7 | B | 11 | B3 | seventh | #c88719 |
| ♯11 | F♯ | 6 | F#4 | sharp alteration | #8d5cff |

#### App Voicing

The voicing below is generated by the app voicing rules: root + seventh in the shell octave, then third/sus tone, fifth, and extensions in the upper octave.

| Voicing group | Formula | Note | Semitone | App display/play note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Shell octave | 1 | C | 0 | C3 | root | #d84b4b |
| Shell octave | 7 | B | 11 | B3 | seventh | #c88719 |
| Upper octave | 3 | E | 4 | E4 | third | #ff4fb8 |
| Upper octave | ♯5 | G# | 8 | G#4 | sharp alteration | #8d5cff |
| Upper octave | ♯11 | F# | 6 | F#4 | sharp alteration | #8d5cff |

#### Associated Scale Choices

##### 1. C Lydian Augmented

- Scale ID: `C_lydian_augmented`
- Role in source data: primary
- Family: melodic minor modes
- Formula: 1, 2, 3, ♯4/♯11, ♯5, 6, 7
- Notes: C, D, E, F♯, G♯, A, B
- Semitones from C: [0, 2, 4, 6, 8, 9, 11]
- Ordered playback/display notes: C3, D3, E3, F#3, G#3, A3, B3, C4
- Reason/use: Direct melodic-minor mode 3 sound.

Non-root scale association derived by the app:

- Name: D Lydian Dominant / D Mixolydian #11
- Root: D (2 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2/9, 3, ♯4/♯11, 5, 6/13, ♭7
- Notes/pitch classes: D, E, F#, G#, A, B, C
- Semitones from C: [2, 4, 6, 8, 9, 11, 0]
- Relationship explanation: D Lydian Dominant / D Mixolydian #11 is a non-C relative view of C Lydian Augmented; same notes, different starting point. It still fits Cmaj7#5#11 because it contains C, E, G#, B, F#.

### 12. Cm7 — minor seventh

- ID: `Cm7`
- Aliases: C-7, Cmin7
- Family: minor
- Commonness: 5 / 5
- Tags: minor, funk
- Chord formula: 1, ♭3, 5, ♭7
- Chord notes: C, E♭, G, B♭
- Semitones from C: [0, 3, 7, 10]
- Ascending app chord playback/display notes: C3, D#3, G3, A#3
- Scale choices displayed: 3

#### Chord Tone Roles

| Formula | Note | Semitone | App display note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- |
| 1 | C | 0 | C3 | root | #d84b4b |
| ♭3 | E♭ | 3 | D#3 | third | #ff4fb8 |
| 5 | G | 7 | G3 | fifth | #ffc2df |
| ♭7 | B♭ | 10 | A#3 | seventh | #c88719 |

#### App Voicing

The voicing below is generated by the app voicing rules: root + seventh in the shell octave, then third/sus tone, fifth, and extensions in the upper octave.

| Voicing group | Formula | Note | Semitone | App display/play note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Shell octave | 1 | C | 0 | C3 | root | #d84b4b |
| Shell octave | ♭7 | A# | 10 | A#3 | seventh | #c88719 |
| Upper octave | ♭3 | D# | 3 | D#4 | third | #ff4fb8 |
| Upper octave | 5 | G | 7 | G4 | fifth | #ffc2df |

#### Associated Scale Choices

##### 1. C Dorian

- Scale ID: `C_dorian`
- Role in source data: primary jazz color
- Family: major modes
- Formula: 1, 2, ♭3, 4/11, 5, 6/13, ♭7
- Notes: C, D, E♭, F, G, A, B♭
- Semitones from C: [0, 2, 3, 5, 7, 9, 10]
- Ordered playback/display notes: C3, D3, D#3, F3, G3, A3, A#3, C4
- Reason/use: Default minor-seventh sound in many jazz contexts.

Non-root scale association derived by the app:

- Name: A# Ionian / A# major
- Root: A# (10 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2, 3, 4, 5, 6, 7
- Notes/pitch classes: A#, C, D, D#, F, G, A
- Semitones from C: [10, 0, 2, 3, 5, 7, 9]
- Relationship explanation: A# Ionian / A# major is a non-C relative view of C Dorian; same notes, different starting point. It still fits Cm7 because it contains C, D#, G, A#.

##### 2. C Aeolian / natural minor

- Scale ID: `C_aeolian`
- Role in source data: darker option
- Family: major modes
- Formula: 1, 2, ♭3, 4/11, 5, ♭6/♭13, ♭7
- Notes: C, D, E♭, F, G, A♭, B♭
- Semitones from C: [0, 2, 3, 5, 7, 8, 10]
- Ordered playback/display notes: C3, D3, D#3, F3, G3, G#3, A#3, C4
- Reason/use: Adds b13 instead of natural 13.

Non-root scale association derived by the app:

- Name: D# Ionian / D# major
- Root: D# (3 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2, 3, 4, 5, 6, 7
- Notes/pitch classes: D#, F, G, G#, A#, C, D
- Semitones from C: [3, 5, 7, 8, 10, 0, 2]
- Relationship explanation: D# Ionian / D# major is a non-C relative view of C Aeolian / natural minor; same notes, different starting point. It still fits Cm7 because it contains C, D#, G, A#.

##### 3. C Minor Pentatonic

- Scale ID: `C_minor_pentatonic`
- Role in source data: funk/blues option
- Family: pentatonic
- Formula: 1, ♭3, 4/11, 5, ♭7
- Notes: C, E♭, F, G, B♭
- Semitones from C: [0, 3, 5, 7, 10]
- Ordered playback/display notes: C3, D#3, F3, G3, A#3, C4
- Reason/use: Compact minor/funk vocabulary.

Non-root scale association derived by the app:

- Name: D# Major Pentatonic
- Root: D# (3 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2, 3, 5, 6
- Notes/pitch classes: D#, F, G, A#, C
- Semitones from C: [3, 5, 7, 10, 0]
- Relationship explanation: D# Major Pentatonic is a non-C relative view of C Minor Pentatonic; same notes, different starting point. It still fits Cm7 because it contains C, D#, G, A#.

### 13. Cm9 — minor ninth

- ID: `Cm9`
- Aliases: C-9
- Family: minor
- Commonness: 5 / 5
- Tags: minor, jazz
- Chord formula: 1, ♭3, 5, ♭7, 9
- Chord notes: C, E♭, G, B♭, D
- Semitones from C: [0, 3, 7, 10, 2]
- Ascending app chord playback/display notes: C3, D#3, G3, A#3, D4
- Scale choices displayed: 2

#### Chord Tone Roles

| Formula | Note | Semitone | App display note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- |
| 1 | C | 0 | C3 | root | #d84b4b |
| ♭3 | E♭ | 3 | D#3 | third | #ff4fb8 |
| 5 | G | 7 | G3 | fifth | #ffc2df |
| ♭7 | B♭ | 10 | A#3 | seventh | #c88719 |
| 9 | D | 2 | D4 | extension | #28a87d |

#### App Voicing

The voicing below is generated by the app voicing rules: root + seventh in the shell octave, then third/sus tone, fifth, and extensions in the upper octave.

| Voicing group | Formula | Note | Semitone | App display/play note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Shell octave | 1 | C | 0 | C3 | root | #d84b4b |
| Shell octave | ♭7 | A# | 10 | A#3 | seventh | #c88719 |
| Upper octave | ♭3 | D# | 3 | D#4 | third | #ff4fb8 |
| Upper octave | 5 | G | 7 | G4 | fifth | #ffc2df |
| Upper octave | 9 | D | 2 | D4 | extension | #28a87d |

#### Associated Scale Choices

##### 1. C Dorian

- Scale ID: `C_dorian`
- Role in source data: primary
- Family: major modes
- Formula: 1, 2, ♭3, 4/11, 5, 6/13, ♭7
- Notes: C, D, E♭, F, G, A, B♭
- Semitones from C: [0, 2, 3, 5, 7, 9, 10]
- Ordered playback/display notes: C3, D3, D#3, F3, G3, A3, A#3, C4
- Reason/use: Directly contains 9 and natural 13 option.

Non-root scale association derived by the app:

- Name: A# Ionian / A# major
- Root: A# (10 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2, 3, 4, 5, 6, 7
- Notes/pitch classes: A#, C, D, D#, F, G, A
- Semitones from C: [10, 0, 2, 3, 5, 7, 9]
- Relationship explanation: A# Ionian / A# major is a non-C relative view of C Dorian; same notes, different starting point. It still fits Cm9 because it contains C, D#, G, A#, D.

##### 2. C Melodic Minor / jazz minor

- Scale ID: `C_melodic_minor`
- Role in source data: tonic minor option
- Family: melodic minor
- Formula: 1, 2, ♭3, 4/11, 5, 6/13, 7
- Notes: C, D, E♭, F, G, A, B
- Semitones from C: [0, 2, 3, 5, 7, 9, 11]
- Ordered playback/display notes: C3, D3, D#3, F3, G3, A3, B3, C4
- Reason/use: Useful when a natural 7 is acceptable as color or passing tone.

Non-root scale association derived by the app:

- Name: D# Ionian / D# major
- Root: D# (3 semitones from C)
- Same pitch collection as selected scale: no
- Formula: 1, 2, 3, 4, 5, 6, 7
- Notes/pitch classes: D#, F, G, G#, A#, C, D
- Semitones from C: [3, 5, 7, 8, 10, 0, 2]
- Relationship explanation: D# Ionian / D# major is not the same pitch collection as C Melodic Minor / jazz minor, but it fits Cm9 because it contains C, D#, G, A#, D.

### 14. Cm11 — minor eleventh

- ID: `Cm11`
- Aliases: C-11
- Family: minor
- Commonness: 5 / 5
- Tags: minor, modal, funk
- Chord formula: 1, ♭3, 5, ♭7, 9, 11
- Chord notes: C, E♭, G, B♭, D, F
- Semitones from C: [0, 3, 7, 10, 2, 5]
- Ascending app chord playback/display notes: C3, D#3, G3, A#3, D4, F4
- Scale choices displayed: 2

#### Chord Tone Roles

| Formula | Note | Semitone | App display note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- |
| 1 | C | 0 | C3 | root | #d84b4b |
| ♭3 | E♭ | 3 | D#3 | third | #ff4fb8 |
| 5 | G | 7 | G3 | fifth | #ffc2df |
| ♭7 | B♭ | 10 | A#3 | seventh | #c88719 |
| 9 | D | 2 | D4 | extension | #28a87d |
| 11 | F | 5 | F4 | extension | #28a87d |

#### App Voicing

The voicing below is generated by the app voicing rules: root + seventh in the shell octave, then third/sus tone, fifth, and extensions in the upper octave.

| Voicing group | Formula | Note | Semitone | App display/play note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Shell octave | 1 | C | 0 | C3 | root | #d84b4b |
| Shell octave | ♭7 | A# | 10 | A#3 | seventh | #c88719 |
| Upper octave | ♭3 | D# | 3 | D#4 | third | #ff4fb8 |
| Upper octave | 5 | G | 7 | G4 | fifth | #ffc2df |
| Upper octave | 9 | D | 2 | D4 | extension | #28a87d |
| Upper octave | 11 | F | 5 | F4 | extension | #28a87d |

#### Associated Scale Choices

##### 1. C Dorian

- Scale ID: `C_dorian`
- Role in source data: primary
- Family: major modes
- Formula: 1, 2, ♭3, 4/11, 5, 6/13, ♭7
- Notes: C, D, E♭, F, G, A, B♭
- Semitones from C: [0, 2, 3, 5, 7, 9, 10]
- Ordered playback/display notes: C3, D3, D#3, F3, G3, A3, A#3, C4
- Reason/use: Contains the full m11 sound with natural 13 available.

Non-root scale association derived by the app:

- Name: A# Ionian / A# major
- Root: A# (10 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2, 3, 4, 5, 6, 7
- Notes/pitch classes: A#, C, D, D#, F, G, A
- Semitones from C: [10, 0, 2, 3, 5, 7, 9]
- Relationship explanation: A# Ionian / A# major is a non-C relative view of C Dorian; same notes, different starting point. It still fits Cm11 because it contains C, D#, G, A#, D, F.

##### 2. C Minor Pentatonic

- Scale ID: `C_minor_pentatonic`
- Role in source data: funk option
- Family: pentatonic
- Formula: 1, ♭3, 4/11, 5, ♭7
- Notes: C, E♭, F, G, B♭
- Semitones from C: [0, 3, 5, 7, 10]
- Ordered playback/display notes: C3, D#3, F3, G3, A#3, C4
- Reason/use: Highlights 1-b3-4-5-b7.

Non-root scale association derived by the app:

- Name: D# Ionian / D# major
- Root: D# (3 semitones from C)
- Same pitch collection as selected scale: no
- Formula: 1, 2, 3, 4, 5, 6, 7
- Notes/pitch classes: D#, F, G, G#, A#, C, D
- Semitones from C: [3, 5, 7, 8, 10, 0, 2]
- Relationship explanation: D# Ionian / D# major is not the same pitch collection as C Minor Pentatonic, but it fits Cm11 because it contains C, D#, G, A#, D, F.

### 15. Cm13 — minor thirteenth

- ID: `Cm13`
- Aliases: C-13
- Family: minor
- Commonness: 4 / 5
- Tags: minor, dorian
- Chord formula: 1, ♭3, 5, ♭7, 9, 11, 13
- Chord notes: C, E♭, G, B♭, D, F, A
- Semitones from C: [0, 3, 7, 10, 2, 5, 9]
- Ascending app chord playback/display notes: C3, D#3, G3, A#3, D4, F4, A4
- Scale choices displayed: 1

#### Chord Tone Roles

| Formula | Note | Semitone | App display note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- |
| 1 | C | 0 | C3 | root | #d84b4b |
| ♭3 | E♭ | 3 | D#3 | third | #ff4fb8 |
| 5 | G | 7 | G3 | fifth | #ffc2df |
| ♭7 | B♭ | 10 | A#3 | seventh | #c88719 |
| 9 | D | 2 | D4 | extension | #28a87d |
| 11 | F | 5 | F4 | extension | #28a87d |
| 13 | A | 9 | A4 | extension | #28a87d |

#### App Voicing

The voicing below is generated by the app voicing rules: root + seventh in the shell octave, then third/sus tone, fifth, and extensions in the upper octave.

| Voicing group | Formula | Note | Semitone | App display/play note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Shell octave | 1 | C | 0 | C3 | root | #d84b4b |
| Shell octave | ♭7 | A# | 10 | A#3 | seventh | #c88719 |
| Upper octave | ♭3 | D# | 3 | D#4 | third | #ff4fb8 |
| Upper octave | 5 | G | 7 | G4 | fifth | #ffc2df |
| Upper octave | 13 | A | 9 | A4 | extension | #28a87d |
| Upper octave | 9 | D | 2 | D4 | extension | #28a87d |
| Upper octave | 11 | F | 5 | F4 | extension | #28a87d |

#### Associated Scale Choices

##### 1. C Dorian

- Scale ID: `C_dorian`
- Role in source data: primary
- Family: major modes
- Formula: 1, 2, ♭3, 4/11, 5, 6/13, ♭7
- Notes: C, D, E♭, F, G, A, B♭
- Semitones from C: [0, 2, 3, 5, 7, 9, 10]
- Ordered playback/display notes: C3, D3, D#3, F3, G3, A3, A#3, C4
- Reason/use: Dorian is the source sound for m13 with natural 13.

Non-root scale association derived by the app:

- Name: A# Ionian / A# major
- Root: A# (10 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2, 3, 4, 5, 6, 7
- Notes/pitch classes: A#, C, D, D#, F, G, A
- Semitones from C: [10, 0, 2, 3, 5, 7, 9]
- Relationship explanation: A# Ionian / A# major is a non-C relative view of C Dorian; same notes, different starting point. It still fits Cm13 because it contains C, D#, G, A#, D, F, A.

### 16. Cm6 — minor sixth

- ID: `Cm6`
- Aliases: Cmin6
- Family: minor
- Commonness: 4 / 5
- Tags: minor, tonic minor
- Chord formula: 1, ♭3, 5, 6
- Chord notes: C, E♭, G, A
- Semitones from C: [0, 3, 7, 9]
- Ascending app chord playback/display notes: C3, D#3, G3, A3
- Scale choices displayed: 2

#### Chord Tone Roles

| Formula | Note | Semitone | App display note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- |
| 1 | C | 0 | C3 | root | #d84b4b |
| ♭3 | E♭ | 3 | D#3 | third | #ff4fb8 |
| 5 | G | 7 | G3 | fifth | #ffc2df |
| 6 | A | 9 | A3 | extension | #28a87d |

#### App Voicing

The voicing below is generated by the app voicing rules: root + seventh in the shell octave, then third/sus tone, fifth, and extensions in the upper octave.

| Voicing group | Formula | Note | Semitone | App display/play note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Shell octave | 1 | C | 0 | C3 | root | #d84b4b |
| Upper octave | ♭3 | D# | 3 | D#4 | third | #ff4fb8 |
| Upper octave | 5 | G | 7 | G4 | fifth | #ffc2df |
| Upper octave | 6 | A | 9 | A4 | extension | #28a87d |

#### Associated Scale Choices

##### 1. C Melodic Minor / jazz minor

- Scale ID: `C_melodic_minor`
- Role in source data: primary jazz tonic minor
- Family: melodic minor
- Formula: 1, 2, ♭3, 4/11, 5, 6/13, 7
- Notes: C, D, E♭, F, G, A, B
- Semitones from C: [0, 2, 3, 5, 7, 9, 11]
- Ordered playback/display notes: C3, D3, D#3, F3, G3, A3, B3, C4
- Reason/use: Minor with natural 6 and major 7 color available.

Non-root scale association derived by the app:

- Name: D# Lydian Augmented
- Root: D# (3 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2, 3, ♯4/♯11, ♯5, 6, 7
- Notes/pitch classes: D#, F, G, A, B, C, D
- Semitones from C: [3, 5, 7, 9, 11, 0, 2]
- Relationship explanation: D# Lydian Augmented is a non-C relative view of C Melodic Minor / jazz minor; same notes, different starting point. It still fits Cm6 because it contains C, D#, G, A.

##### 2. C Dorian

- Scale ID: `C_dorian`
- Role in source data: modal option
- Family: major modes
- Formula: 1, 2, ♭3, 4/11, 5, 6/13, ♭7
- Notes: C, D, E♭, F, G, A, B♭
- Semitones from C: [0, 2, 3, 5, 7, 9, 10]
- Ordered playback/display notes: C3, D3, D#3, F3, G3, A3, A#3, C4
- Reason/use: Minor 6 without major 7 emphasis.

Non-root scale association derived by the app:

- Name: A# Ionian / A# major
- Root: A# (10 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2, 3, 4, 5, 6, 7
- Notes/pitch classes: A#, C, D, D#, F, G, A
- Semitones from C: [10, 0, 2, 3, 5, 7, 9]
- Relationship explanation: A# Ionian / A# major is a non-C relative view of C Dorian; same notes, different starting point. It still fits Cm6 because it contains C, D#, G, A.

### 17. Cm6/9 — minor sixth/ninth

- ID: `Cm6_9`
- Aliases: C-6/9
- Family: minor
- Commonness: 4 / 5
- Tags: minor, jazz tonic minor
- Chord formula: 1, ♭3, 5, 6, 9
- Chord notes: C, E♭, G, A, D
- Semitones from C: [0, 3, 7, 9, 2]
- Ascending app chord playback/display notes: C3, D#3, G3, A3, D4
- Scale choices displayed: 2

#### Chord Tone Roles

| Formula | Note | Semitone | App display note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- |
| 1 | C | 0 | C3 | root | #d84b4b |
| ♭3 | E♭ | 3 | D#3 | third | #ff4fb8 |
| 5 | G | 7 | G3 | fifth | #ffc2df |
| 6 | A | 9 | A3 | extension | #28a87d |
| 9 | D | 2 | D4 | extension | #28a87d |

#### App Voicing

The voicing below is generated by the app voicing rules: root + seventh in the shell octave, then third/sus tone, fifth, and extensions in the upper octave.

| Voicing group | Formula | Note | Semitone | App display/play note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Shell octave | 1 | C | 0 | C3 | root | #d84b4b |
| Upper octave | ♭3 | D# | 3 | D#4 | third | #ff4fb8 |
| Upper octave | 5 | G | 7 | G4 | fifth | #ffc2df |
| Upper octave | 6 | A | 9 | A4 | extension | #28a87d |
| Upper octave | 9 | D | 2 | D4 | extension | #28a87d |

#### Associated Scale Choices

##### 1. C Melodic Minor / jazz minor

- Scale ID: `C_melodic_minor`
- Role in source data: primary jazz tonic minor
- Family: melodic minor
- Formula: 1, 2, ♭3, 4/11, 5, 6/13, 7
- Notes: C, D, E♭, F, G, A, B
- Semitones from C: [0, 2, 3, 5, 7, 9, 11]
- Ordered playback/display notes: C3, D3, D#3, F3, G3, A3, B3, C4
- Reason/use: Contains the m6/9 chord and supports tonic-minor color.

Non-root scale association derived by the app:

- Name: D# Lydian Augmented
- Root: D# (3 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2, 3, ♯4/♯11, ♯5, 6, 7
- Notes/pitch classes: D#, F, G, A, B, C, D
- Semitones from C: [3, 5, 7, 9, 11, 0, 2]
- Relationship explanation: D# Lydian Augmented is a non-C relative view of C Melodic Minor / jazz minor; same notes, different starting point. It still fits Cm6/9 because it contains C, D#, G, A, D.

##### 2. C Dorian

- Scale ID: `C_dorian`
- Role in source data: modal option
- Family: major modes
- Formula: 1, 2, ♭3, 4/11, 5, 6/13, ♭7
- Notes: C, D, E♭, F, G, A, B♭
- Semitones from C: [0, 2, 3, 5, 7, 9, 10]
- Ordered playback/display notes: C3, D3, D#3, F3, G3, A3, A#3, C4
- Reason/use: Works for a less leading-tone minor sound.

Non-root scale association derived by the app:

- Name: A# Ionian / A# major
- Root: A# (10 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2, 3, 4, 5, 6, 7
- Notes/pitch classes: A#, C, D, D#, F, G, A
- Semitones from C: [10, 0, 2, 3, 5, 7, 9]
- Relationship explanation: A# Ionian / A# major is a non-C relative view of C Dorian; same notes, different starting point. It still fits Cm6/9 because it contains C, D#, G, A, D.

### 18. Cm(maj7) — minor major seventh

- ID: `CmMaj7`
- Aliases: CmΔ7, C-Δ7, CminMaj7
- Family: minor-major
- Commonness: 4 / 5
- Tags: tonic minor, jazz
- Chord formula: 1, ♭3, 5, 7
- Chord notes: C, E♭, G, B
- Semitones from C: [0, 3, 7, 11]
- Ascending app chord playback/display notes: C3, D#3, G3, B3
- Scale choices displayed: 2

#### Chord Tone Roles

| Formula | Note | Semitone | App display note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- |
| 1 | C | 0 | C3 | root | #d84b4b |
| ♭3 | E♭ | 3 | D#3 | third | #ff4fb8 |
| 5 | G | 7 | G3 | fifth | #ffc2df |
| 7 | B | 11 | B3 | seventh | #c88719 |

#### App Voicing

The voicing below is generated by the app voicing rules: root + seventh in the shell octave, then third/sus tone, fifth, and extensions in the upper octave.

| Voicing group | Formula | Note | Semitone | App display/play note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Shell octave | 1 | C | 0 | C3 | root | #d84b4b |
| Shell octave | 7 | B | 11 | B3 | seventh | #c88719 |
| Upper octave | ♭3 | D# | 3 | D#4 | third | #ff4fb8 |
| Upper octave | 5 | G | 7 | G4 | fifth | #ffc2df |

#### Associated Scale Choices

##### 1. C Melodic Minor / jazz minor

- Scale ID: `C_melodic_minor`
- Role in source data: primary
- Family: melodic minor
- Formula: 1, 2, ♭3, 4/11, 5, 6/13, 7
- Notes: C, D, E♭, F, G, A, B
- Semitones from C: [0, 2, 3, 5, 7, 9, 11]
- Ordered playback/display notes: C3, D3, D#3, F3, G3, A3, B3, C4
- Reason/use: Direct minor-major seventh chord scale.

Non-root scale association derived by the app:

- Name: D# Lydian Augmented
- Root: D# (3 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2, 3, ♯4/♯11, ♯5, 6, 7
- Notes/pitch classes: D#, F, G, A, B, C, D
- Semitones from C: [3, 5, 7, 9, 11, 0, 2]
- Relationship explanation: D# Lydian Augmented is a non-C relative view of C Melodic Minor / jazz minor; same notes, different starting point. It still fits Cm(maj7) because it contains C, D#, G, B.

##### 2. C Harmonic Minor

- Scale ID: `C_harmonic_minor`
- Role in source data: darker option
- Family: harmonic minor
- Formula: 1, 2, ♭3, 4/11, 5, ♭6/♭13, 7
- Notes: C, D, E♭, F, G, A♭, B
- Semitones from C: [0, 2, 3, 5, 7, 8, 11]
- Ordered playback/display notes: C3, D3, D#3, F3, G3, G#3, B3, C4
- Reason/use: Adds b13 color.

Non-root scale association derived by the app:

- Name: G Phrygian Dominant / Mixolydian b9 b13
- Root: G (7 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, ♭9, 3, 4/11, 5, ♭13, ♭7
- Notes/pitch classes: G, G#, B, C, D, D#, F
- Semitones from C: [7, 8, 11, 0, 2, 3, 5]
- Relationship explanation: G Phrygian Dominant / Mixolydian b9 b13 is a non-C relative view of C Harmonic Minor; same notes, different starting point. It still fits Cm(maj7) because it contains C, D#, G, B.

### 19. Cm(maj9) — minor major ninth

- ID: `CmMaj9`
- Aliases: CmΔ9, C-Δ9
- Family: minor-major
- Commonness: 3 / 5
- Tags: tonic minor, jazz
- Chord formula: 1, ♭3, 5, 7, 9
- Chord notes: C, E♭, G, B, D
- Semitones from C: [0, 3, 7, 11, 2]
- Ascending app chord playback/display notes: C3, D#3, G3, B3, D4
- Scale choices displayed: 1

#### Chord Tone Roles

| Formula | Note | Semitone | App display note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- |
| 1 | C | 0 | C3 | root | #d84b4b |
| ♭3 | E♭ | 3 | D#3 | third | #ff4fb8 |
| 5 | G | 7 | G3 | fifth | #ffc2df |
| 7 | B | 11 | B3 | seventh | #c88719 |
| 9 | D | 2 | D4 | extension | #28a87d |

#### App Voicing

The voicing below is generated by the app voicing rules: root + seventh in the shell octave, then third/sus tone, fifth, and extensions in the upper octave.

| Voicing group | Formula | Note | Semitone | App display/play note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Shell octave | 1 | C | 0 | C3 | root | #d84b4b |
| Shell octave | 7 | B | 11 | B3 | seventh | #c88719 |
| Upper octave | ♭3 | D# | 3 | D#4 | third | #ff4fb8 |
| Upper octave | 5 | G | 7 | G4 | fifth | #ffc2df |
| Upper octave | 9 | D | 2 | D4 | extension | #28a87d |

#### Associated Scale Choices

##### 1. C Melodic Minor / jazz minor

- Scale ID: `C_melodic_minor`
- Role in source data: primary
- Family: melodic minor
- Formula: 1, 2, ♭3, 4/11, 5, 6/13, 7
- Notes: C, D, E♭, F, G, A, B
- Semitones from C: [0, 2, 3, 5, 7, 9, 11]
- Ordered playback/display notes: C3, D3, D#3, F3, G3, A3, B3, C4
- Reason/use: Contains mMaj9 directly.

Non-root scale association derived by the app:

- Name: D# Lydian Augmented
- Root: D# (3 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2, 3, ♯4/♯11, ♯5, 6, 7
- Notes/pitch classes: D#, F, G, A, B, C, D
- Semitones from C: [3, 5, 7, 9, 11, 0, 2]
- Relationship explanation: D# Lydian Augmented is a non-C relative view of C Melodic Minor / jazz minor; same notes, different starting point. It still fits Cm(maj9) because it contains C, D#, G, B, D.

### 20. Cm(maj13) — minor major thirteenth

- ID: `CmMaj13`
- Aliases: CmΔ13, C-Δ13
- Family: minor-major
- Commonness: 2 / 5
- Tags: tonic minor, advanced
- Chord formula: 1, ♭3, 5, 7, 9, 11, 13
- Chord notes: C, E♭, G, B, D, F, A
- Semitones from C: [0, 3, 7, 11, 2, 5, 9]
- Ascending app chord playback/display notes: C3, D#3, G3, B3, D4, F4, A4
- Scale choices displayed: 1

#### Chord Tone Roles

| Formula | Note | Semitone | App display note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- |
| 1 | C | 0 | C3 | root | #d84b4b |
| ♭3 | E♭ | 3 | D#3 | third | #ff4fb8 |
| 5 | G | 7 | G3 | fifth | #ffc2df |
| 7 | B | 11 | B3 | seventh | #c88719 |
| 9 | D | 2 | D4 | extension | #28a87d |
| 11 | F | 5 | F4 | extension | #28a87d |
| 13 | A | 9 | A4 | extension | #28a87d |

#### App Voicing

The voicing below is generated by the app voicing rules: root + seventh in the shell octave, then third/sus tone, fifth, and extensions in the upper octave.

| Voicing group | Formula | Note | Semitone | App display/play note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Shell octave | 1 | C | 0 | C3 | root | #d84b4b |
| Shell octave | 7 | B | 11 | B3 | seventh | #c88719 |
| Upper octave | ♭3 | D# | 3 | D#4 | third | #ff4fb8 |
| Upper octave | 5 | G | 7 | G4 | fifth | #ffc2df |
| Upper octave | 13 | A | 9 | A4 | extension | #28a87d |
| Upper octave | 9 | D | 2 | D4 | extension | #28a87d |
| Upper octave | 11 | F | 5 | F4 | extension | #28a87d |

#### Associated Scale Choices

##### 1. C Melodic Minor / jazz minor

- Scale ID: `C_melodic_minor`
- Role in source data: primary
- Family: melodic minor
- Formula: 1, 2, ♭3, 4/11, 5, 6/13, 7
- Notes: C, D, E♭, F, G, A, B
- Semitones from C: [0, 2, 3, 5, 7, 9, 11]
- Ordered playback/display notes: C3, D3, D#3, F3, G3, A3, B3, C4
- Reason/use: The full jazz minor stack.

Non-root scale association derived by the app:

- Name: D# Lydian Augmented
- Root: D# (3 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2, 3, ♯4/♯11, ♯5, 6, 7
- Notes/pitch classes: D#, F, G, A, B, C, D
- Semitones from C: [3, 5, 7, 9, 11, 0, 2]
- Relationship explanation: D# Lydian Augmented is a non-C relative view of C Melodic Minor / jazz minor; same notes, different starting point. It still fits Cm(maj13) because it contains C, D#, G, B, D, F, A.

### 21. Cm7b13 — minor seventh flat thirteen

- ID: `Cm7_b13`
- Aliases: Cm7♭13
- Family: minor
- Commonness: 3 / 5
- Tags: dark minor
- Chord formula: 1, ♭3, 5, ♭7, ♭13
- Chord notes: C, E♭, G, B♭, A♭
- Semitones from C: [0, 3, 7, 10, 8]
- Ascending app chord playback/display notes: C3, D#3, G3, A#3, G#4
- Scale choices displayed: 2

#### Chord Tone Roles

| Formula | Note | Semitone | App display note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- |
| 1 | C | 0 | C3 | root | #d84b4b |
| ♭3 | E♭ | 3 | D#3 | third | #ff4fb8 |
| 5 | G | 7 | G3 | fifth | #ffc2df |
| ♭7 | B♭ | 10 | A#3 | seventh | #c88719 |
| ♭13 | A♭ | 8 | G#4 | flat alteration | #3f7ee8 |

#### App Voicing

The voicing below is generated by the app voicing rules: root + seventh in the shell octave, then third/sus tone, fifth, and extensions in the upper octave.

| Voicing group | Formula | Note | Semitone | App display/play note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Shell octave | 1 | C | 0 | C3 | root | #d84b4b |
| Shell octave | ♭7 | A# | 10 | A#3 | seventh | #c88719 |
| Upper octave | ♭3 | D# | 3 | D#4 | third | #ff4fb8 |
| Upper octave | 5 | G | 7 | G4 | fifth | #ffc2df |
| Upper octave | ♭13 | G# | 8 | G#4 | flat alteration | #3f7ee8 |

#### Associated Scale Choices

##### 1. C Aeolian / natural minor

- Scale ID: `C_aeolian`
- Role in source data: primary
- Family: major modes
- Formula: 1, 2, ♭3, 4/11, 5, ♭6/♭13, ♭7
- Notes: C, D, E♭, F, G, A♭, B♭
- Semitones from C: [0, 2, 3, 5, 7, 8, 10]
- Ordered playback/display notes: C3, D3, D#3, F3, G3, G#3, A#3, C4
- Reason/use: Direct minor with b13.

Non-root scale association derived by the app:

- Name: D# Ionian / D# major
- Root: D# (3 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2, 3, 4, 5, 6, 7
- Notes/pitch classes: D#, F, G, G#, A#, C, D
- Semitones from C: [3, 5, 7, 8, 10, 0, 2]
- Relationship explanation: D# Ionian / D# major is a non-C relative view of C Aeolian / natural minor; same notes, different starting point. It still fits Cm7b13 because it contains C, D#, G, A#, G#.

##### 2. C Phrygian

- Scale ID: `C_phrygian`
- Role in source data: darker option
- Family: major modes
- Formula: 1, ♭2/♭9, ♭3, 4/11, 5, ♭6/♭13, ♭7
- Notes: C, D♭, E♭, F, G, A♭, B♭
- Semitones from C: [0, 1, 3, 5, 7, 8, 10]
- Ordered playback/display notes: C3, C#3, D#3, F3, G3, G#3, A#3, C4
- Reason/use: Adds b9 color too.

Non-root scale association derived by the app:

- Name: G# Ionian / G# major
- Root: G# (8 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2, 3, 4, 5, 6, 7
- Notes/pitch classes: G#, A#, C, C#, D#, F, G
- Semitones from C: [8, 10, 0, 1, 3, 5, 7]
- Relationship explanation: G# Ionian / G# major is a non-C relative view of C Phrygian; same notes, different starting point. It still fits Cm7b13 because it contains C, D#, G, A#, G#.

### 22. Cm7b9 — minor seventh flat nine

- ID: `Cm7_b9`
- Aliases: Cm7♭9
- Family: minor
- Commonness: 2 / 5
- Tags: phrygian, modal
- Chord formula: 1, ♭3, 5, ♭7, ♭9
- Chord notes: C, E♭, G, B♭, D♭
- Semitones from C: [0, 3, 7, 10, 1]
- Ascending app chord playback/display notes: C3, D#3, G3, A#3, C#4
- Scale choices displayed: 1

#### Chord Tone Roles

| Formula | Note | Semitone | App display note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- |
| 1 | C | 0 | C3 | root | #d84b4b |
| ♭3 | E♭ | 3 | D#3 | third | #ff4fb8 |
| 5 | G | 7 | G3 | fifth | #ffc2df |
| ♭7 | B♭ | 10 | A#3 | seventh | #c88719 |
| ♭9 | D♭ | 1 | C#4 | flat alteration | #3f7ee8 |

#### App Voicing

The voicing below is generated by the app voicing rules: root + seventh in the shell octave, then third/sus tone, fifth, and extensions in the upper octave.

| Voicing group | Formula | Note | Semitone | App display/play note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Shell octave | 1 | C | 0 | C3 | root | #d84b4b |
| Shell octave | ♭7 | A# | 10 | A#3 | seventh | #c88719 |
| Upper octave | ♭3 | D# | 3 | D#4 | third | #ff4fb8 |
| Upper octave | 5 | G | 7 | G4 | fifth | #ffc2df |
| Upper octave | ♭9 | C# | 1 | C#4 | flat alteration | #3f7ee8 |

#### Associated Scale Choices

##### 1. C Phrygian

- Scale ID: `C_phrygian`
- Role in source data: primary
- Family: major modes
- Formula: 1, ♭2/♭9, ♭3, 4/11, 5, ♭6/♭13, ♭7
- Notes: C, D♭, E♭, F, G, A♭, B♭
- Semitones from C: [0, 1, 3, 5, 7, 8, 10]
- Ordered playback/display notes: C3, C#3, D#3, F3, G3, G#3, A#3, C4
- Reason/use: Direct minor b9 sound.

Non-root scale association derived by the app:

- Name: G# Ionian / G# major
- Root: G# (8 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2, 3, 4, 5, 6, 7
- Notes/pitch classes: G#, A#, C, C#, D#, F, G
- Semitones from C: [8, 10, 0, 1, 3, 5, 7]
- Relationship explanation: G# Ionian / G# major is a non-C relative view of C Phrygian; same notes, different starting point. It still fits Cm7b9 because it contains C, D#, G, A#, C#.

### 23. Cm11b9 — minor eleventh flat nine

- ID: `Cm11_b9`
- Aliases: Cm11♭9
- Family: minor
- Commonness: 2 / 5
- Tags: phrygian, modal
- Chord formula: 1, ♭3, 5, ♭7, ♭9, 11
- Chord notes: C, E♭, G, B♭, D♭, F
- Semitones from C: [0, 3, 7, 10, 1, 5]
- Ascending app chord playback/display notes: C3, D#3, G3, A#3, C#4, F4
- Scale choices displayed: 1

#### Chord Tone Roles

| Formula | Note | Semitone | App display note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- |
| 1 | C | 0 | C3 | root | #d84b4b |
| ♭3 | E♭ | 3 | D#3 | third | #ff4fb8 |
| 5 | G | 7 | G3 | fifth | #ffc2df |
| ♭7 | B♭ | 10 | A#3 | seventh | #c88719 |
| ♭9 | D♭ | 1 | C#4 | flat alteration | #3f7ee8 |
| 11 | F | 5 | F4 | extension | #28a87d |

#### App Voicing

The voicing below is generated by the app voicing rules: root + seventh in the shell octave, then third/sus tone, fifth, and extensions in the upper octave.

| Voicing group | Formula | Note | Semitone | App display/play note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Shell octave | 1 | C | 0 | C3 | root | #d84b4b |
| Shell octave | ♭7 | A# | 10 | A#3 | seventh | #c88719 |
| Upper octave | ♭3 | D# | 3 | D#4 | third | #ff4fb8 |
| Upper octave | 5 | G | 7 | G4 | fifth | #ffc2df |
| Upper octave | ♭9 | C# | 1 | C#4 | flat alteration | #3f7ee8 |
| Upper octave | 11 | F | 5 | F4 | extension | #28a87d |

#### Associated Scale Choices

##### 1. C Phrygian

- Scale ID: `C_phrygian`
- Role in source data: primary
- Family: major modes
- Formula: 1, ♭2/♭9, ♭3, 4/11, 5, ♭6/♭13, ♭7
- Notes: C, D♭, E♭, F, G, A♭, B♭
- Semitones from C: [0, 1, 3, 5, 7, 8, 10]
- Ordered playback/display notes: C3, C#3, D#3, F3, G3, G#3, A#3, C4
- Reason/use: Contains b9 and 11 in a minor context.

Non-root scale association derived by the app:

- Name: G# Ionian / G# major
- Root: G# (8 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2, 3, 4, 5, 6, 7
- Notes/pitch classes: G#, A#, C, C#, D#, F, G
- Semitones from C: [8, 10, 0, 1, 3, 5, 7]
- Relationship explanation: G# Ionian / G# major is a non-C relative view of C Phrygian; same notes, different starting point. It still fits Cm11b9 because it contains C, D#, G, A#, C#, F.

### 24. Cm7b5 — half-diminished seventh

- ID: `Cm7_b5`
- Aliases: Cø7, Cmin7b5
- Family: half-diminished
- Commonness: 5 / 5
- Tags: minor ii, jazz
- Chord formula: 1, ♭3, ♭5, ♭7
- Chord notes: C, E♭, G♭, B♭
- Semitones from C: [0, 3, 6, 10]
- Ascending app chord playback/display notes: C3, D#3, F#3, A#3
- Scale choices displayed: 2

#### Chord Tone Roles

| Formula | Note | Semitone | App display note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- |
| 1 | C | 0 | C3 | root | #d84b4b |
| ♭3 | E♭ | 3 | D#3 | third | #ff4fb8 |
| ♭5 | G♭ | 6 | F#3 | flat alteration | #3f7ee8 |
| ♭7 | B♭ | 10 | A#3 | seventh | #c88719 |

#### App Voicing

The voicing below is generated by the app voicing rules: root + seventh in the shell octave, then third/sus tone, fifth, and extensions in the upper octave.

| Voicing group | Formula | Note | Semitone | App display/play note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Shell octave | 1 | C | 0 | C3 | root | #d84b4b |
| Shell octave | ♭7 | A# | 10 | A#3 | seventh | #c88719 |
| Upper octave | ♭3 | D# | 3 | D#4 | third | #ff4fb8 |
| Upper octave | ♭5 | F# | 6 | F#4 | flat alteration | #3f7ee8 |

#### Associated Scale Choices

##### 1. C Locrian Natural 2

- Scale ID: `C_locrian_natural_2`
- Role in source data: primary jazz color
- Family: melodic minor modes
- Formula: 1, 2/9, ♭3, 4/11, ♭5, ♭13, ♭7
- Notes: C, D, E♭, F, G♭, A♭, B♭
- Semitones from C: [0, 2, 3, 5, 6, 8, 10]
- Ordered playback/display notes: C3, D3, D#3, F3, F#3, G#3, A#3, C4
- Reason/use: Natural 9 is a common jazz color for half-diminished chords.

Non-root scale association derived by the app:

- Name: D Altered / D Super Locrian
- Root: D (2 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, ♭9, ♯9, 3, ♭5/♯11, ♯5/♭13, ♭7
- Notes/pitch classes: D, D#, F, F#, G#, A#, C
- Semitones from C: [2, 3, 5, 6, 8, 10, 0]
- Relationship explanation: D Altered / D Super Locrian is a non-C relative view of C Locrian Natural 2; same notes, different starting point. It still fits Cm7b5 because it contains C, D#, F#, A#.

##### 2. C Locrian

- Scale ID: `C_locrian`
- Role in source data: inside/basic
- Family: major modes
- Formula: 1, ♭9, ♭3, 4/11, ♭5, ♭13, ♭7
- Notes: C, D♭, E♭, F, G♭, A♭, B♭
- Semitones from C: [0, 1, 3, 5, 6, 8, 10]
- Ordered playback/display notes: C3, C#3, D#3, F3, F#3, G#3, A#3, C4
- Reason/use: Basic locrian half-diminished sound.

Non-root scale association derived by the app:

- Name: C# Ionian / C# major
- Root: C# (1 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2, 3, 4, 5, 6, 7
- Notes/pitch classes: C#, D#, F, F#, G#, A#, C
- Semitones from C: [1, 3, 5, 6, 8, 10, 0]
- Relationship explanation: C# Ionian / C# major is a non-C relative view of C Locrian; same notes, different starting point. It still fits Cm7b5 because it contains C, D#, F#, A#.

### 25. Cm9b5 — half-diminished ninth

- ID: `Cm9_b5`
- Aliases: Cø9
- Family: half-diminished
- Commonness: 4 / 5
- Tags: minor ii, jazz
- Chord formula: 1, ♭3, ♭5, ♭7, 9
- Chord notes: C, E♭, G♭, B♭, D
- Semitones from C: [0, 3, 6, 10, 2]
- Ascending app chord playback/display notes: C3, D#3, F#3, A#3, D4
- Scale choices displayed: 1

#### Chord Tone Roles

| Formula | Note | Semitone | App display note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- |
| 1 | C | 0 | C3 | root | #d84b4b |
| ♭3 | E♭ | 3 | D#3 | third | #ff4fb8 |
| ♭5 | G♭ | 6 | F#3 | flat alteration | #3f7ee8 |
| ♭7 | B♭ | 10 | A#3 | seventh | #c88719 |
| 9 | D | 2 | D4 | extension | #28a87d |

#### App Voicing

The voicing below is generated by the app voicing rules: root + seventh in the shell octave, then third/sus tone, fifth, and extensions in the upper octave.

| Voicing group | Formula | Note | Semitone | App display/play note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Shell octave | 1 | C | 0 | C3 | root | #d84b4b |
| Shell octave | ♭7 | A# | 10 | A#3 | seventh | #c88719 |
| Upper octave | ♭3 | D# | 3 | D#4 | third | #ff4fb8 |
| Upper octave | ♭5 | F# | 6 | F#4 | flat alteration | #3f7ee8 |
| Upper octave | 9 | D | 2 | D4 | extension | #28a87d |

#### Associated Scale Choices

##### 1. C Locrian Natural 2

- Scale ID: `C_locrian_natural_2`
- Role in source data: primary
- Family: melodic minor modes
- Formula: 1, 2/9, ♭3, 4/11, ♭5, ♭13, ♭7
- Notes: C, D, E♭, F, G♭, A♭, B♭
- Semitones from C: [0, 2, 3, 5, 6, 8, 10]
- Ordered playback/display notes: C3, D3, D#3, F3, F#3, G#3, A#3, C4
- Reason/use: Directly contains natural 9 over m7b5.

Non-root scale association derived by the app:

- Name: D Altered / D Super Locrian
- Root: D (2 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, ♭9, ♯9, 3, ♭5/♯11, ♯5/♭13, ♭7
- Notes/pitch classes: D, D#, F, F#, G#, A#, C
- Semitones from C: [2, 3, 5, 6, 8, 10, 0]
- Relationship explanation: D Altered / D Super Locrian is a non-C relative view of C Locrian Natural 2; same notes, different starting point. It still fits Cm9b5 because it contains C, D#, F#, A#, D.

### 26. Cm11b5 — half-diminished eleventh

- ID: `Cm11_b5`
- Aliases: Cø11
- Family: half-diminished
- Commonness: 3 / 5
- Tags: minor ii, jazz
- Chord formula: 1, ♭3, ♭5, ♭7, 9, 11
- Chord notes: C, E♭, G♭, B♭, D, F
- Semitones from C: [0, 3, 6, 10, 2, 5]
- Ascending app chord playback/display notes: C3, D#3, F#3, A#3, D4, F4
- Scale choices displayed: 1

#### Chord Tone Roles

| Formula | Note | Semitone | App display note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- |
| 1 | C | 0 | C3 | root | #d84b4b |
| ♭3 | E♭ | 3 | D#3 | third | #ff4fb8 |
| ♭5 | G♭ | 6 | F#3 | flat alteration | #3f7ee8 |
| ♭7 | B♭ | 10 | A#3 | seventh | #c88719 |
| 9 | D | 2 | D4 | extension | #28a87d |
| 11 | F | 5 | F4 | extension | #28a87d |

#### App Voicing

The voicing below is generated by the app voicing rules: root + seventh in the shell octave, then third/sus tone, fifth, and extensions in the upper octave.

| Voicing group | Formula | Note | Semitone | App display/play note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Shell octave | 1 | C | 0 | C3 | root | #d84b4b |
| Shell octave | ♭7 | A# | 10 | A#3 | seventh | #c88719 |
| Upper octave | ♭3 | D# | 3 | D#4 | third | #ff4fb8 |
| Upper octave | ♭5 | F# | 6 | F#4 | flat alteration | #3f7ee8 |
| Upper octave | 9 | D | 2 | D4 | extension | #28a87d |
| Upper octave | 11 | F | 5 | F4 | extension | #28a87d |

#### Associated Scale Choices

##### 1. C Locrian Natural 2

- Scale ID: `C_locrian_natural_2`
- Role in source data: primary
- Family: melodic minor modes
- Formula: 1, 2/9, ♭3, 4/11, ♭5, ♭13, ♭7
- Notes: C, D, E♭, F, G♭, A♭, B♭
- Semitones from C: [0, 2, 3, 5, 6, 8, 10]
- Ordered playback/display notes: C3, D3, D#3, F3, F#3, G#3, A#3, C4
- Reason/use: Contains 9 and 11 over the half-diminished shell.

Non-root scale association derived by the app:

- Name: D Altered / D Super Locrian
- Root: D (2 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, ♭9, ♯9, 3, ♭5/♯11, ♯5/♭13, ♭7
- Notes/pitch classes: D, D#, F, F#, G#, A#, C
- Semitones from C: [2, 3, 5, 6, 8, 10, 0]
- Relationship explanation: D Altered / D Super Locrian is a non-C relative view of C Locrian Natural 2; same notes, different starting point. It still fits Cm11b5 because it contains C, D#, F#, A#, D, F.

### 27. C7 — dominant seventh

- ID: `C7`
- Aliases: None
- Family: dominant
- Commonness: 5 / 5
- Tags: dominant, funk, blues
- Chord formula: 1, 3, 5, ♭7
- Chord notes: C, E, G, B♭
- Semitones from C: [0, 4, 7, 10]
- Ascending app chord playback/display notes: C3, E3, G3, A#3
- Scale choices displayed: 3

#### Chord Tone Roles

| Formula | Note | Semitone | App display note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- |
| 1 | C | 0 | C3 | root | #d84b4b |
| 3 | E | 4 | E3 | third | #ff4fb8 |
| 5 | G | 7 | G3 | fifth | #ffc2df |
| ♭7 | B♭ | 10 | A#3 | seventh | #c88719 |

#### App Voicing

The voicing below is generated by the app voicing rules: root + seventh in the shell octave, then third/sus tone, fifth, and extensions in the upper octave.

| Voicing group | Formula | Note | Semitone | App display/play note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Shell octave | 1 | C | 0 | C3 | root | #d84b4b |
| Shell octave | ♭7 | A# | 10 | A#3 | seventh | #c88719 |
| Upper octave | 3 | E | 4 | E4 | third | #ff4fb8 |
| Upper octave | 5 | G | 7 | G4 | fifth | #ffc2df |

#### Associated Scale Choices

##### 1. C Mixolydian

- Scale ID: `C_mixolydian`
- Role in source data: primary inside
- Family: major modes
- Formula: 1, 2/9, 3, 4/11, 5, 6/13, ♭7
- Notes: C, D, E, F, G, A, B♭
- Semitones from C: [0, 2, 4, 5, 7, 9, 10]
- Ordered playback/display notes: C3, D3, E3, F3, G3, A3, A#3, C4
- Reason/use: Default unaltered dominant sound.

Non-root scale association derived by the app:

- Name: F Ionian / F major
- Root: F (5 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2, 3, 4, 5, 6, 7
- Notes/pitch classes: F, G, A, A#, C, D, E
- Semitones from C: [5, 7, 9, 10, 0, 2, 4]
- Relationship explanation: F Ionian / F major is a non-C relative view of C Mixolydian; same notes, different starting point. It still fits C7 because it contains C, E, G, A#.

##### 2. C Bebop Dominant

- Scale ID: `C_bebop_dominant`
- Role in source data: bebop option
- Family: bebop
- Formula: 1, 2/9, 3, 4/11, 5, 6/13, ♭7, 7 passing
- Notes: C, D, E, F, G, A, B♭, B
- Semitones from C: [0, 2, 4, 5, 7, 9, 10, 11]
- Ordered playback/display notes: C3, D3, E3, F3, G3, A3, A#3, B3, C4
- Reason/use: Adds passing major 7 for linear phrasing.

Non-root scale association derived by the app:

- Name: G Mixolydian Blues
- Root: G (7 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2/9, ♭3 blue, 3, 4/11, 5, 6/13, ♭7
- Notes/pitch classes: G, A, A#, B, C, D, E, F
- Semitones from C: [7, 9, 10, 11, 0, 2, 4, 5]
- Relationship explanation: G Mixolydian Blues is a non-C relative view of C Bebop Dominant; same notes, different starting point. It still fits C7 because it contains C, E, G, A#.

##### 3. C Mixolydian Blues

- Scale ID: `C_mixolydian_blues`
- Role in source data: funk/blues option
- Family: hybrid/blues
- Formula: 1, 2/9, ♭3 blue, 3, 4/11, 5, 6/13, ♭7
- Notes: C, D, E♭, E, F, G, A, B♭
- Semitones from C: [0, 2, 3, 4, 5, 7, 9, 10]
- Ordered playback/display notes: C3, D3, D#3, E3, F3, G3, A3, A#3, C4
- Reason/use: Adds blue minor 3 against dominant.

Non-root scale association derived by the app:

- Name: F Bebop Dominant
- Root: F (5 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2/9, 3, 4/11, 5, 6/13, ♭7, 7 passing
- Notes/pitch classes: F, G, A, A#, C, D, D#, E
- Semitones from C: [5, 7, 9, 10, 0, 2, 3, 4]
- Relationship explanation: F Bebop Dominant is a non-C relative view of C Mixolydian Blues; same notes, different starting point. It still fits C7 because it contains C, E, G, A#.

### 28. C9 — dominant ninth

- ID: `C9`
- Aliases: None
- Family: dominant
- Commonness: 5 / 5
- Tags: dominant, funk
- Chord formula: 1, 3, 5, ♭7, 9
- Chord notes: C, E, G, B♭, D
- Semitones from C: [0, 4, 7, 10, 2]
- Ascending app chord playback/display notes: C3, E3, G3, A#3, D4
- Scale choices displayed: 2

#### Chord Tone Roles

| Formula | Note | Semitone | App display note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- |
| 1 | C | 0 | C3 | root | #d84b4b |
| 3 | E | 4 | E3 | third | #ff4fb8 |
| 5 | G | 7 | G3 | fifth | #ffc2df |
| ♭7 | B♭ | 10 | A#3 | seventh | #c88719 |
| 9 | D | 2 | D4 | extension | #28a87d |

#### App Voicing

The voicing below is generated by the app voicing rules: root + seventh in the shell octave, then third/sus tone, fifth, and extensions in the upper octave.

| Voicing group | Formula | Note | Semitone | App display/play note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Shell octave | 1 | C | 0 | C3 | root | #d84b4b |
| Shell octave | ♭7 | A# | 10 | A#3 | seventh | #c88719 |
| Upper octave | 3 | E | 4 | E4 | third | #ff4fb8 |
| Upper octave | 5 | G | 7 | G4 | fifth | #ffc2df |
| Upper octave | 9 | D | 2 | D4 | extension | #28a87d |

#### Associated Scale Choices

##### 1. C Mixolydian

- Scale ID: `C_mixolydian`
- Role in source data: primary
- Family: major modes
- Formula: 1, 2/9, 3, 4/11, 5, 6/13, ♭7
- Notes: C, D, E, F, G, A, B♭
- Semitones from C: [0, 2, 4, 5, 7, 9, 10]
- Ordered playback/display notes: C3, D3, E3, F3, G3, A3, A#3, C4
- Reason/use: Direct unaltered 9 chord scale.

Non-root scale association derived by the app:

- Name: F Ionian / F major
- Root: F (5 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2, 3, 4, 5, 6, 7
- Notes/pitch classes: F, G, A, A#, C, D, E
- Semitones from C: [5, 7, 9, 10, 0, 2, 4]
- Relationship explanation: F Ionian / F major is a non-C relative view of C Mixolydian; same notes, different starting point. It still fits C9 because it contains C, E, G, A#, D.

##### 2. C Dominant Pentatonic

- Scale ID: `C_dominant_pentatonic`
- Role in source data: funk/simple
- Family: pentatonic
- Formula: 1, 2/9, 3, 5, ♭7
- Notes: C, D, E, G, B♭
- Semitones from C: [0, 2, 4, 7, 10]
- Ordered playback/display notes: C3, D3, E3, G3, A#3, C4
- Reason/use: Compact dominant 9 color.

Non-root scale association derived by the app:

- Name: F Ionian / F major
- Root: F (5 semitones from C)
- Same pitch collection as selected scale: no
- Formula: 1, 2, 3, 4, 5, 6, 7
- Notes/pitch classes: F, G, A, A#, C, D, E
- Semitones from C: [5, 7, 9, 10, 0, 2, 4]
- Relationship explanation: F Ionian / F major is not the same pitch collection as C Dominant Pentatonic, but it fits C9 because it contains C, E, G, A#, D.

### 29. C11 — dominant eleventh

- ID: `C11`
- Aliases: None
- Family: dominant/sus
- Commonness: 3 / 5
- Tags: dominant, ambiguous
- Chord formula: 1, 3, 5, ♭7, 9, 11
- Chord notes: C, E, G, B♭, D, F
- Semitones from C: [0, 4, 7, 10, 2, 5]
- Ascending app chord playback/display notes: C3, E3, G3, A#3, D4, F4
- Scale choices displayed: 2

#### Chord Tone Roles

| Formula | Note | Semitone | App display note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- |
| 1 | C | 0 | C3 | root | #d84b4b |
| 3 | E | 4 | E3 | third | #ff4fb8 |
| 5 | G | 7 | G3 | fifth | #ffc2df |
| ♭7 | B♭ | 10 | A#3 | seventh | #c88719 |
| 9 | D | 2 | D4 | extension | #28a87d |
| 11 | F | 5 | F4 | extension | #28a87d |

#### App Voicing

The voicing below is generated by the app voicing rules: root + seventh in the shell octave, then third/sus tone, fifth, and extensions in the upper octave.

| Voicing group | Formula | Note | Semitone | App display/play note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Shell octave | 1 | C | 0 | C3 | root | #d84b4b |
| Shell octave | ♭7 | A# | 10 | A#3 | seventh | #c88719 |
| Upper octave | 3 | E | 4 | E4 | third | #ff4fb8 |
| Upper octave | 5 | G | 7 | G4 | fifth | #ffc2df |
| Upper octave | 9 | D | 2 | D4 | extension | #28a87d |
| Upper octave | 11 | F | 5 | F4 | extension | #28a87d |

#### Associated Scale Choices

##### 1. C Mixolydian

- Scale ID: `C_mixolydian`
- Role in source data: primary but watch 3/11
- Family: major modes
- Formula: 1, 2/9, 3, 4/11, 5, 6/13, ♭7
- Notes: C, D, E, F, G, A, B♭
- Semitones from C: [0, 2, 4, 5, 7, 9, 10]
- Ordered playback/display notes: C3, D3, E3, F3, G3, A3, A#3, C4
- Reason/use: Contains 11, but natural 11 can rub against the major 3; often voiced as sus.

Non-root scale association derived by the app:

- Name: F Ionian / F major
- Root: F (5 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2, 3, 4, 5, 6, 7
- Notes/pitch classes: F, G, A, A#, C, D, E
- Semitones from C: [5, 7, 9, 10, 0, 2, 4]
- Relationship explanation: F Ionian / F major is a non-C relative view of C Mixolydian; same notes, different starting point. It still fits C11 because it contains C, E, G, A#, D, F.

##### 2. C Dominant Sus / Mixolydian Sus

- Scale ID: `C_dominant_sus`
- Role in source data: sus option
- Family: suspended dominant
- Formula: 1, 2/9, 4/11, 5, 6/13, ♭7
- Notes: C, D, F, G, A, B♭
- Semitones from C: [0, 2, 5, 7, 9, 10]
- Ordered playback/display notes: C3, D3, F3, G3, A3, A#3, C4
- Reason/use: Use when the 3rd is omitted or delayed.

Non-root scale association derived by the app:

- Name: F Ionian / F major
- Root: F (5 semitones from C)
- Same pitch collection as selected scale: no
- Formula: 1, 2, 3, 4, 5, 6, 7
- Notes/pitch classes: F, G, A, A#, C, D, E
- Semitones from C: [5, 7, 9, 10, 0, 2, 4]
- Relationship explanation: F Ionian / F major is not the same pitch collection as C Dominant Sus / Mixolydian Sus, but it fits C11 because it contains C, E, G, A#, D, F.

### 30. C13 — dominant thirteenth

- ID: `C13`
- Aliases: None
- Family: dominant
- Commonness: 5 / 5
- Tags: dominant, funk, soul
- Chord formula: 1, 3, 5, ♭7, 9, 13
- Chord notes: C, E, G, B♭, D, A
- Semitones from C: [0, 4, 7, 10, 2, 9]
- Ascending app chord playback/display notes: C3, E3, G3, A#3, D4, A4
- Scale choices displayed: 3

#### Chord Tone Roles

| Formula | Note | Semitone | App display note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- |
| 1 | C | 0 | C3 | root | #d84b4b |
| 3 | E | 4 | E3 | third | #ff4fb8 |
| 5 | G | 7 | G3 | fifth | #ffc2df |
| ♭7 | B♭ | 10 | A#3 | seventh | #c88719 |
| 9 | D | 2 | D4 | extension | #28a87d |
| 13 | A | 9 | A4 | extension | #28a87d |

#### App Voicing

The voicing below is generated by the app voicing rules: root + seventh in the shell octave, then third/sus tone, fifth, and extensions in the upper octave.

| Voicing group | Formula | Note | Semitone | App display/play note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Shell octave | 1 | C | 0 | C3 | root | #d84b4b |
| Shell octave | ♭7 | A# | 10 | A#3 | seventh | #c88719 |
| Upper octave | 3 | E | 4 | E4 | third | #ff4fb8 |
| Upper octave | 5 | G | 7 | G4 | fifth | #ffc2df |
| Upper octave | 13 | A | 9 | A4 | extension | #28a87d |
| Upper octave | 9 | D | 2 | D4 | extension | #28a87d |

#### Associated Scale Choices

##### 1. C Mixolydian

- Scale ID: `C_mixolydian`
- Role in source data: primary
- Family: major modes
- Formula: 1, 2/9, 3, 4/11, 5, 6/13, ♭7
- Notes: C, D, E, F, G, A, B♭
- Semitones from C: [0, 2, 4, 5, 7, 9, 10]
- Ordered playback/display notes: C3, D3, E3, F3, G3, A3, A#3, C4
- Reason/use: Direct unaltered 13 chord scale.

Non-root scale association derived by the app:

- Name: F Ionian / F major
- Root: F (5 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2, 3, 4, 5, 6, 7
- Notes/pitch classes: F, G, A, A#, C, D, E
- Semitones from C: [5, 7, 9, 10, 0, 2, 4]
- Relationship explanation: F Ionian / F major is a non-C relative view of C Mixolydian; same notes, different starting point. It still fits C13 because it contains C, E, G, A#, D, A.

##### 2. C Bebop Dominant

- Scale ID: `C_bebop_dominant`
- Role in source data: bebop option
- Family: bebop
- Formula: 1, 2/9, 3, 4/11, 5, 6/13, ♭7, 7 passing
- Notes: C, D, E, F, G, A, B♭, B
- Semitones from C: [0, 2, 4, 5, 7, 9, 10, 11]
- Ordered playback/display notes: C3, D3, E3, F3, G3, A3, A#3, B3, C4
- Reason/use: Strong for bebop dominant lines.

Non-root scale association derived by the app:

- Name: G Mixolydian Blues
- Root: G (7 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2/9, ♭3 blue, 3, 4/11, 5, 6/13, ♭7
- Notes/pitch classes: G, A, A#, B, C, D, E, F
- Semitones from C: [7, 9, 10, 11, 0, 2, 4, 5]
- Relationship explanation: G Mixolydian Blues is a non-C relative view of C Bebop Dominant; same notes, different starting point. It still fits C13 because it contains C, E, G, A#, D, A.

##### 3. C Mixolydian Blues

- Scale ID: `C_mixolydian_blues`
- Role in source data: funk option
- Family: hybrid/blues
- Formula: 1, 2/9, ♭3 blue, 3, 4/11, 5, 6/13, ♭7
- Notes: C, D, E♭, E, F, G, A, B♭
- Semitones from C: [0, 2, 3, 4, 5, 7, 9, 10]
- Ordered playback/display notes: C3, D3, D#3, E3, F3, G3, A3, A#3, C4
- Reason/use: Common funk/blues dominant color.

Non-root scale association derived by the app:

- Name: F Bebop Dominant
- Root: F (5 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2/9, 3, 4/11, 5, 6/13, ♭7, 7 passing
- Notes/pitch classes: F, G, A, A#, C, D, D#, E
- Semitones from C: [5, 7, 9, 10, 0, 2, 3, 4]
- Relationship explanation: F Bebop Dominant is a non-C relative view of C Mixolydian Blues; same notes, different starting point. It still fits C13 because it contains C, E, G, A#, D, A.

### 31. C7sus4 — dominant suspended fourth

- ID: `C7sus4`
- Aliases: C7sus
- Family: suspended dominant
- Commonness: 5 / 5
- Tags: sus, funk, quartal
- Chord formula: 1, 4, 5, ♭7
- Chord notes: C, F, G, B♭
- Semitones from C: [0, 5, 7, 10]
- Ascending app chord playback/display notes: C3, F3, G3, A#3
- Scale choices displayed: 3

#### Chord Tone Roles

| Formula | Note | Semitone | App display note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- |
| 1 | C | 0 | C3 | root | #d84b4b |
| 4 | F | 5 | F3 | extension | #28a87d |
| 5 | G | 7 | G3 | fifth | #ffc2df |
| ♭7 | B♭ | 10 | A#3 | seventh | #c88719 |

#### App Voicing

The voicing below is generated by the app voicing rules: root + seventh in the shell octave, then third/sus tone, fifth, and extensions in the upper octave.

| Voicing group | Formula | Note | Semitone | App display/play note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Shell octave | 1 | C | 0 | C3 | root | #d84b4b |
| Shell octave | ♭7 | A# | 10 | A#3 | seventh | #c88719 |
| Upper octave | 4 | F | 5 | F4 | extension | #28a87d |
| Upper octave | 5 | G | 7 | G4 | fifth | #ffc2df |

#### Associated Scale Choices

##### 1. C Dominant Sus / Mixolydian Sus

- Scale ID: `C_dominant_sus`
- Role in source data: primary
- Family: suspended dominant
- Formula: 1, 2/9, 4/11, 5, 6/13, ♭7
- Notes: C, D, F, G, A, B♭
- Semitones from C: [0, 2, 5, 7, 9, 10]
- Ordered playback/display notes: C3, D3, F3, G3, A3, A#3, C4
- Reason/use: No 3rd; emphasizes 4/11 suspension.

Non-root scale association derived by the app:

- Name: D# Ionian / D# major
- Root: D# (3 semitones from C)
- Same pitch collection as selected scale: no
- Formula: 1, 2, 3, 4, 5, 6, 7
- Notes/pitch classes: D#, F, G, G#, A#, C, D
- Semitones from C: [3, 5, 7, 8, 10, 0, 2]
- Relationship explanation: D# Ionian / D# major is not the same pitch collection as C Dominant Sus / Mixolydian Sus, but it fits C7sus4 because it contains C, F, G, A#.

##### 2. C Sus Pentatonic

- Scale ID: `C_sus_pentatonic`
- Role in source data: compact funk option
- Family: pentatonic
- Formula: 1, 2/9, 4/11, 5, ♭7
- Notes: C, D, F, G, B♭
- Semitones from C: [0, 2, 5, 7, 10]
- Ordered playback/display notes: C3, D3, F3, G3, A#3, C4
- Reason/use: Great for riffs and quartal voicings.

Non-root scale association derived by the app:

- Name: G Minor Pentatonic
- Root: G (7 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, ♭3, 4/11, 5, ♭7
- Notes/pitch classes: G, A#, C, D, F
- Semitones from C: [7, 10, 0, 2, 5]
- Relationship explanation: G Minor Pentatonic is a non-C relative view of C Sus Pentatonic; same notes, different starting point. It still fits C7sus4 because it contains C, F, G, A#.

##### 3. C Minor Pentatonic

- Scale ID: `C_minor_pentatonic`
- Role in source data: blues/funk option
- Family: pentatonic
- Formula: 1, ♭3, 4/11, 5, ♭7
- Notes: C, E♭, F, G, B♭
- Semitones from C: [0, 3, 5, 7, 10]
- Ordered playback/display notes: C3, D#3, F3, G3, A#3, C4
- Reason/use: Useful if a darker/b3 blues color is desired.

Non-root scale association derived by the app:

- Name: D# Major Pentatonic
- Root: D# (3 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2, 3, 5, 6
- Notes/pitch classes: D#, F, G, A#, C
- Semitones from C: [3, 5, 7, 10, 0]
- Relationship explanation: D# Major Pentatonic is a non-C relative view of C Minor Pentatonic; same notes, different starting point. It still fits C7sus4 because it contains C, F, G, A#.

### 32. C9sus4 — dominant ninth suspended fourth

- ID: `C9sus4`
- Aliases: C11(no3)
- Family: suspended dominant
- Commonness: 5 / 5
- Tags: sus, funk, modal
- Chord formula: 1, 4, 5, ♭7, 9
- Chord notes: C, F, G, B♭, D
- Semitones from C: [0, 5, 7, 10, 2]
- Ascending app chord playback/display notes: C3, F3, G3, A#3, D4
- Scale choices displayed: 2

#### Chord Tone Roles

| Formula | Note | Semitone | App display note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- |
| 1 | C | 0 | C3 | root | #d84b4b |
| 4 | F | 5 | F3 | extension | #28a87d |
| 5 | G | 7 | G3 | fifth | #ffc2df |
| ♭7 | B♭ | 10 | A#3 | seventh | #c88719 |
| 9 | D | 2 | D4 | extension | #28a87d |

#### App Voicing

The voicing below is generated by the app voicing rules: root + seventh in the shell octave, then third/sus tone, fifth, and extensions in the upper octave.

| Voicing group | Formula | Note | Semitone | App display/play note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Shell octave | 1 | C | 0 | C3 | root | #d84b4b |
| Shell octave | ♭7 | A# | 10 | A#3 | seventh | #c88719 |
| Upper octave | 4 | F | 5 | F4 | extension | #28a87d |
| Upper octave | 9 | D | 2 | D4 | extension | #28a87d |
| Upper octave | 5 | G | 7 | G4 | fifth | #ffc2df |

#### Associated Scale Choices

##### 1. C Dominant Sus / Mixolydian Sus

- Scale ID: `C_dominant_sus`
- Role in source data: primary
- Family: suspended dominant
- Formula: 1, 2/9, 4/11, 5, 6/13, ♭7
- Notes: C, D, F, G, A, B♭
- Semitones from C: [0, 2, 5, 7, 9, 10]
- Ordered playback/display notes: C3, D3, F3, G3, A3, A#3, C4
- Reason/use: Direct 9sus4/11 sound without 3.

Non-root scale association derived by the app:

- Name: D# Ionian / D# major
- Root: D# (3 semitones from C)
- Same pitch collection as selected scale: no
- Formula: 1, 2, 3, 4, 5, 6, 7
- Notes/pitch classes: D#, F, G, G#, A#, C, D
- Semitones from C: [3, 5, 7, 8, 10, 0, 2]
- Relationship explanation: D# Ionian / D# major is not the same pitch collection as C Dominant Sus / Mixolydian Sus, but it fits C9sus4 because it contains C, F, G, A#, D.

##### 2. C Sus Pentatonic

- Scale ID: `C_sus_pentatonic`
- Role in source data: compact funk option
- Family: pentatonic
- Formula: 1, 2/9, 4/11, 5, ♭7
- Notes: C, D, F, G, B♭
- Semitones from C: [0, 2, 5, 7, 10]
- Ordered playback/display notes: C3, D3, F3, G3, A#3, C4
- Reason/use: Exactly outlines 1-9-11-5-b7.

Non-root scale association derived by the app:

- Name: G Minor Pentatonic
- Root: G (7 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, ♭3, 4/11, 5, ♭7
- Notes/pitch classes: G, A#, C, D, F
- Semitones from C: [7, 10, 0, 2, 5]
- Relationship explanation: G Minor Pentatonic is a non-C relative view of C Sus Pentatonic; same notes, different starting point. It still fits C9sus4 because it contains C, F, G, A#, D.

### 33. C13sus4 — dominant thirteenth suspended fourth

- ID: `C13sus4`
- Aliases: C13sus
- Family: suspended dominant
- Commonness: 4 / 5
- Tags: sus, funk, modal
- Chord formula: 1, 4, 5, ♭7, 9, 13
- Chord notes: C, F, G, B♭, D, A
- Semitones from C: [0, 5, 7, 10, 2, 9]
- Ascending app chord playback/display notes: C3, F3, G3, A#3, D4, A4
- Scale choices displayed: 2

#### Chord Tone Roles

| Formula | Note | Semitone | App display note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- |
| 1 | C | 0 | C3 | root | #d84b4b |
| 4 | F | 5 | F3 | extension | #28a87d |
| 5 | G | 7 | G3 | fifth | #ffc2df |
| ♭7 | B♭ | 10 | A#3 | seventh | #c88719 |
| 9 | D | 2 | D4 | extension | #28a87d |
| 13 | A | 9 | A4 | extension | #28a87d |

#### App Voicing

The voicing below is generated by the app voicing rules: root + seventh in the shell octave, then third/sus tone, fifth, and extensions in the upper octave.

| Voicing group | Formula | Note | Semitone | App display/play note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Shell octave | 1 | C | 0 | C3 | root | #d84b4b |
| Shell octave | ♭7 | A# | 10 | A#3 | seventh | #c88719 |
| Upper octave | 4 | F | 5 | F4 | extension | #28a87d |
| Upper octave | 9 | D | 2 | D4 | extension | #28a87d |
| Upper octave | 5 | G | 7 | G4 | fifth | #ffc2df |
| Upper octave | 13 | A | 9 | A4 | extension | #28a87d |

#### Associated Scale Choices

##### 1. C Dominant Sus / Mixolydian Sus

- Scale ID: `C_dominant_sus`
- Role in source data: primary
- Family: suspended dominant
- Formula: 1, 2/9, 4/11, 5, 6/13, ♭7
- Notes: C, D, F, G, A, B♭
- Semitones from C: [0, 2, 5, 7, 9, 10]
- Ordered playback/display notes: C3, D3, F3, G3, A3, A#3, C4
- Reason/use: Direct 13sus sound.

Non-root scale association derived by the app:

- Name: F Ionian / F major
- Root: F (5 semitones from C)
- Same pitch collection as selected scale: no
- Formula: 1, 2, 3, 4, 5, 6, 7
- Notes/pitch classes: F, G, A, A#, C, D, E
- Semitones from C: [5, 7, 9, 10, 0, 2, 4]
- Relationship explanation: F Ionian / F major is not the same pitch collection as C Dominant Sus / Mixolydian Sus, but it fits C13sus4 because it contains C, F, G, A#, D, A.

##### 2. C Dorian

- Scale ID: `C_dorian`
- Role in source data: modal option
- Family: major modes
- Formula: 1, 2, ♭3, 4/11, 5, 6/13, ♭7
- Notes: C, D, E♭, F, G, A, B♭
- Semitones from C: [0, 2, 3, 5, 7, 9, 10]
- Ordered playback/display notes: C3, D3, D#3, F3, G3, A3, A#3, C4
- Reason/use: Adds b3 color if the sus dominant is used in a minor/funk context.

Non-root scale association derived by the app:

- Name: A# Ionian / A# major
- Root: A# (10 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2, 3, 4, 5, 6, 7
- Notes/pitch classes: A#, C, D, D#, F, G, A
- Semitones from C: [10, 0, 2, 3, 5, 7, 9]
- Relationship explanation: A# Ionian / A# major is a non-C relative view of C Dorian; same notes, different starting point. It still fits C13sus4 because it contains C, F, G, A#, D, A.

### 34. C7sus2 — dominant suspended second

- ID: `C7sus2`
- Aliases: None
- Family: suspended dominant
- Commonness: 3 / 5
- Tags: sus2, funk
- Chord formula: 1, 2/9, 5, ♭7
- Chord notes: C, D, G, B♭
- Semitones from C: [0, 2, 7, 10]
- Ascending app chord playback/display notes: C3, D3, G3, A#3
- Scale choices displayed: 2

#### Chord Tone Roles

| Formula | Note | Semitone | App display note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- |
| 1 | C | 0 | C3 | root | #d84b4b |
| 2/9 | D | 2 | D3 | extension | #28a87d |
| 5 | G | 7 | G3 | fifth | #ffc2df |
| ♭7 | B♭ | 10 | A#3 | seventh | #c88719 |

#### App Voicing

The voicing below is generated by the app voicing rules: root + seventh in the shell octave, then third/sus tone, fifth, and extensions in the upper octave.

| Voicing group | Formula | Note | Semitone | App display/play note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Shell octave | 1 | C | 0 | C3 | root | #d84b4b |
| Shell octave | ♭7 | A# | 10 | A#3 | seventh | #c88719 |
| Upper octave | 2/9 | D | 2 | D4 | extension | #28a87d |
| Upper octave | 5 | G | 7 | G4 | fifth | #ffc2df |

#### Associated Scale Choices

##### 1. C Sus Pentatonic

- Scale ID: `C_sus_pentatonic`
- Role in source data: primary
- Family: pentatonic
- Formula: 1, 2/9, 4/11, 5, ♭7
- Notes: C, D, F, G, B♭
- Semitones from C: [0, 2, 5, 7, 10]
- Ordered playback/display notes: C3, D3, F3, G3, A#3, C4
- Reason/use: Compact sus2 dominant sound.

Non-root scale association derived by the app:

- Name: G Minor Pentatonic
- Root: G (7 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, ♭3, 4/11, 5, ♭7
- Notes/pitch classes: G, A#, C, D, F
- Semitones from C: [7, 10, 0, 2, 5]
- Relationship explanation: G Minor Pentatonic is a non-C relative view of C Sus Pentatonic; same notes, different starting point. It still fits C7sus2 because it contains C, D, G, A#.

##### 2. C Dominant Sus / Mixolydian Sus

- Scale ID: `C_dominant_sus`
- Role in source data: broader option
- Family: suspended dominant
- Formula: 1, 2/9, 4/11, 5, 6/13, ♭7
- Notes: C, D, F, G, A, B♭
- Semitones from C: [0, 2, 5, 7, 9, 10]
- Ordered playback/display notes: C3, D3, F3, G3, A3, A#3, C4
- Reason/use: Adds 4 and 13 as available colors.

Non-root scale association derived by the app:

- Name: D# Ionian / D# major
- Root: D# (3 semitones from C)
- Same pitch collection as selected scale: no
- Formula: 1, 2, 3, 4, 5, 6, 7
- Notes/pitch classes: D#, F, G, G#, A#, C, D
- Semitones from C: [3, 5, 7, 8, 10, 0, 2]
- Relationship explanation: D# Ionian / D# major is not the same pitch collection as C Dominant Sus / Mixolydian Sus, but it fits C7sus2 because it contains C, D, G, A#.

### 35. C7sus4b9 — dominant sus flat nine

- ID: `C7sus4_b9`
- Aliases: C7sus♭9
- Family: suspended dominant
- Commonness: 2 / 5
- Tags: sus, phrygian
- Chord formula: 1, 4, 5, ♭7, ♭9
- Chord notes: C, F, G, B♭, D♭
- Semitones from C: [0, 5, 7, 10, 1]
- Ascending app chord playback/display notes: C3, F3, G3, A#3, C#4
- Scale choices displayed: 2

#### Chord Tone Roles

| Formula | Note | Semitone | App display note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- |
| 1 | C | 0 | C3 | root | #d84b4b |
| 4 | F | 5 | F3 | extension | #28a87d |
| 5 | G | 7 | G3 | fifth | #ffc2df |
| ♭7 | B♭ | 10 | A#3 | seventh | #c88719 |
| ♭9 | D♭ | 1 | C#4 | flat alteration | #3f7ee8 |

#### App Voicing

The voicing below is generated by the app voicing rules: root + seventh in the shell octave, then third/sus tone, fifth, and extensions in the upper octave.

| Voicing group | Formula | Note | Semitone | App display/play note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Shell octave | 1 | C | 0 | C3 | root | #d84b4b |
| Shell octave | ♭7 | A# | 10 | A#3 | seventh | #c88719 |
| Upper octave | 4 | F | 5 | F4 | extension | #28a87d |
| Upper octave | 5 | G | 7 | G4 | fifth | #ffc2df |
| Upper octave | ♭9 | C# | 1 | C#4 | flat alteration | #3f7ee8 |

#### Associated Scale Choices

##### 1. C Phrygian

- Scale ID: `C_phrygian`
- Role in source data: primary modal sus
- Family: major modes
- Formula: 1, ♭2/♭9, ♭3, 4/11, 5, ♭6/♭13, ♭7
- Notes: C, D♭, E♭, F, G, A♭, B♭
- Semitones from C: [0, 1, 3, 5, 7, 8, 10]
- Ordered playback/display notes: C3, C#3, D#3, F3, G3, G#3, A#3, C4
- Reason/use: No major 3rd; b9 and sus4 imply a Phrygian/sus color.

Non-root scale association derived by the app:

- Name: G# Ionian / G# major
- Root: G# (8 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2, 3, 4, 5, 6, 7
- Notes/pitch classes: G#, A#, C, C#, D#, F, G
- Semitones from C: [8, 10, 0, 1, 3, 5, 7]
- Relationship explanation: G# Ionian / G# major is a non-C relative view of C Phrygian; same notes, different starting point. It still fits C7sus4b9 because it contains C, F, G, A#, C#.

##### 2. C Phrygian Dominant / Mixolydian b9 b13

- Scale ID: `C_phrygian_dominant`
- Role in source data: dominant option
- Family: harmonic minor modes
- Formula: 1, ♭9, 3, 4/11, 5, ♭13, ♭7
- Notes: C, D♭, E, F, G, A♭, B♭
- Semitones from C: [0, 1, 4, 5, 7, 8, 10]
- Ordered playback/display notes: C3, C#3, E3, F3, G3, G#3, A#3, C4
- Reason/use: Use when the major 3rd is introduced as a resolution color.

Non-root scale association derived by the app:

- Name: F Harmonic Minor
- Root: F (5 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2, ♭3, 4/11, 5, ♭6/♭13, 7
- Notes/pitch classes: F, G, G#, A#, C, C#, E
- Semitones from C: [5, 7, 8, 10, 0, 1, 4]
- Relationship explanation: F Harmonic Minor is a non-C relative view of C Phrygian Dominant / Mixolydian b9 b13; same notes, different starting point. It still fits C7sus4b9 because it contains C, F, G, A#, C#.

### 36. C7#11 — dominant seventh sharp eleven

- ID: `C7_11`
- Aliases: C7♯11, C7b5(add5)
- Family: lydian dominant
- Commonness: 4 / 5
- Tags: dominant, lydian dominant
- Chord formula: 1, 3, 5, ♭7, ♯11
- Chord notes: C, E, G, B♭, F♯
- Semitones from C: [0, 4, 7, 10, 6]
- Ascending app chord playback/display notes: C3, E3, G3, A#3, F#4
- Scale choices displayed: 2

#### Chord Tone Roles

| Formula | Note | Semitone | App display note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- |
| 1 | C | 0 | C3 | root | #d84b4b |
| 3 | E | 4 | E3 | third | #ff4fb8 |
| 5 | G | 7 | G3 | fifth | #ffc2df |
| ♭7 | B♭ | 10 | A#3 | seventh | #c88719 |
| ♯11 | F♯ | 6 | F#4 | sharp alteration | #8d5cff |

#### App Voicing

The voicing below is generated by the app voicing rules: root + seventh in the shell octave, then third/sus tone, fifth, and extensions in the upper octave.

| Voicing group | Formula | Note | Semitone | App display/play note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Shell octave | 1 | C | 0 | C3 | root | #d84b4b |
| Shell octave | ♭7 | A# | 10 | A#3 | seventh | #c88719 |
| Upper octave | 3 | E | 4 | E4 | third | #ff4fb8 |
| Upper octave | 5 | G | 7 | G4 | fifth | #ffc2df |
| Upper octave | ♯11 | F# | 6 | F#4 | sharp alteration | #8d5cff |

#### Associated Scale Choices

##### 1. C Lydian Dominant / C Mixolydian #11

- Scale ID: `C_lydian_dominant`
- Role in source data: primary
- Family: melodic minor modes
- Formula: 1, 2/9, 3, ♯4/♯11, 5, 6/13, ♭7
- Notes: C, D, E, F♯, G, A, B♭
- Semitones from C: [0, 2, 4, 6, 7, 9, 10]
- Ordered playback/display notes: C3, D3, E3, F#3, G3, A3, A#3, C4
- Reason/use: Direct dominant #11 scale.

Non-root scale association derived by the app:

- Name: E Locrian Natural 2
- Root: E (4 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2/9, ♭3, 4/11, ♭5, ♭13, ♭7
- Notes/pitch classes: E, F#, G, A, A#, C, D
- Semitones from C: [4, 6, 7, 9, 10, 0, 2]
- Relationship explanation: E Locrian Natural 2 is a non-C relative view of C Lydian Dominant / C Mixolydian #11; same notes, different starting point. It still fits C7#11 because it contains C, E, G, A#, F#.

##### 2. C Whole Tone

- Scale ID: `C_whole_tone`
- Role in source data: augmented option
- Family: symmetric
- Formula: 1, 2/9, 3, ♯4/♯11, ♯5/♭13, ♭7
- Notes: C, D, E, F♯, G♯, B♭
- Semitones from C: [0, 2, 4, 6, 8, 10]
- Ordered playback/display notes: C3, D3, E3, F#3, G#3, A#3, C4
- Reason/use: Works if #5/b13 color is also desired.

Non-root scale association derived by the app:

- Name: C# Whole-Half Diminished
- Root: C# (1 semitones from C)
- Same pitch collection as selected scale: no
- Formula: 1, 2/9, ♭3, 4/11, ♭5, ♭13, 13/𝄫7, 7
- Notes/pitch classes: C#, D#, E, F#, G, A, A#, C
- Semitones from C: [1, 3, 4, 6, 7, 9, 10, 0]
- Relationship explanation: C# Whole-Half Diminished is not the same pitch collection as C Whole Tone, but it fits C7#11 because it contains C, E, G, A#, F#.

### 37. C9#11 — dominant ninth sharp eleven

- ID: `C9_11`
- Aliases: C9♯11
- Family: lydian dominant
- Commonness: 4 / 5
- Tags: dominant, lydian dominant
- Chord formula: 1, 3, 5, ♭7, 9, ♯11
- Chord notes: C, E, G, B♭, D, F♯
- Semitones from C: [0, 4, 7, 10, 2, 6]
- Ascending app chord playback/display notes: C3, E3, G3, A#3, D4, F#4
- Scale choices displayed: 1

#### Chord Tone Roles

| Formula | Note | Semitone | App display note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- |
| 1 | C | 0 | C3 | root | #d84b4b |
| 3 | E | 4 | E3 | third | #ff4fb8 |
| 5 | G | 7 | G3 | fifth | #ffc2df |
| ♭7 | B♭ | 10 | A#3 | seventh | #c88719 |
| 9 | D | 2 | D4 | extension | #28a87d |
| ♯11 | F♯ | 6 | F#4 | sharp alteration | #8d5cff |

#### App Voicing

The voicing below is generated by the app voicing rules: root + seventh in the shell octave, then third/sus tone, fifth, and extensions in the upper octave.

| Voicing group | Formula | Note | Semitone | App display/play note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Shell octave | 1 | C | 0 | C3 | root | #d84b4b |
| Shell octave | ♭7 | A# | 10 | A#3 | seventh | #c88719 |
| Upper octave | 3 | E | 4 | E4 | third | #ff4fb8 |
| Upper octave | 5 | G | 7 | G4 | fifth | #ffc2df |
| Upper octave | 9 | D | 2 | D4 | extension | #28a87d |
| Upper octave | ♯11 | F# | 6 | F#4 | sharp alteration | #8d5cff |

#### Associated Scale Choices

##### 1. C Lydian Dominant / C Mixolydian #11

- Scale ID: `C_lydian_dominant`
- Role in source data: primary
- Family: melodic minor modes
- Formula: 1, 2/9, 3, ♯4/♯11, 5, 6/13, ♭7
- Notes: C, D, E, F♯, G, A, B♭
- Semitones from C: [0, 2, 4, 6, 7, 9, 10]
- Ordered playback/display notes: C3, D3, E3, F#3, G3, A3, A#3, C4
- Reason/use: Direct 9#11 dominant sound.

Non-root scale association derived by the app:

- Name: E Locrian Natural 2
- Root: E (4 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2/9, ♭3, 4/11, ♭5, ♭13, ♭7
- Notes/pitch classes: E, F#, G, A, A#, C, D
- Semitones from C: [4, 6, 7, 9, 10, 0, 2]
- Relationship explanation: E Locrian Natural 2 is a non-C relative view of C Lydian Dominant / C Mixolydian #11; same notes, different starting point. It still fits C9#11 because it contains C, E, G, A#, D, F#.

### 38. C13#11 — dominant thirteenth sharp eleven

- ID: `C13_11`
- Aliases: C13♯11
- Family: lydian dominant
- Commonness: 4 / 5
- Tags: dominant, lydian dominant, tritone sub
- Chord formula: 1, 3, 5, ♭7, 9, ♯11, 13
- Chord notes: C, E, G, B♭, D, F♯, A
- Semitones from C: [0, 4, 7, 10, 2, 6, 9]
- Ascending app chord playback/display notes: C3, E3, G3, A#3, D4, F#4, A4
- Scale choices displayed: 1

#### Chord Tone Roles

| Formula | Note | Semitone | App display note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- |
| 1 | C | 0 | C3 | root | #d84b4b |
| 3 | E | 4 | E3 | third | #ff4fb8 |
| 5 | G | 7 | G3 | fifth | #ffc2df |
| ♭7 | B♭ | 10 | A#3 | seventh | #c88719 |
| 9 | D | 2 | D4 | extension | #28a87d |
| ♯11 | F♯ | 6 | F#4 | sharp alteration | #8d5cff |
| 13 | A | 9 | A4 | extension | #28a87d |

#### App Voicing

The voicing below is generated by the app voicing rules: root + seventh in the shell octave, then third/sus tone, fifth, and extensions in the upper octave.

| Voicing group | Formula | Note | Semitone | App display/play note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Shell octave | 1 | C | 0 | C3 | root | #d84b4b |
| Shell octave | ♭7 | A# | 10 | A#3 | seventh | #c88719 |
| Upper octave | 3 | E | 4 | E4 | third | #ff4fb8 |
| Upper octave | 5 | G | 7 | G4 | fifth | #ffc2df |
| Upper octave | 13 | A | 9 | A4 | extension | #28a87d |
| Upper octave | 9 | D | 2 | D4 | extension | #28a87d |
| Upper octave | ♯11 | F# | 6 | F#4 | sharp alteration | #8d5cff |

#### Associated Scale Choices

##### 1. C Lydian Dominant / C Mixolydian #11

- Scale ID: `C_lydian_dominant`
- Role in source data: primary
- Family: melodic minor modes
- Formula: 1, 2/9, 3, ♯4/♯11, 5, 6/13, ♭7
- Notes: C, D, E, F♯, G, A, B♭
- Semitones from C: [0, 2, 4, 6, 7, 9, 10]
- Ordered playback/display notes: C3, D3, E3, F#3, G3, A3, A#3, C4
- Reason/use: Full Lydian dominant stack: 1-9-3-#11-5-13-b7.

Non-root scale association derived by the app:

- Name: E Locrian Natural 2
- Root: E (4 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2/9, ♭3, 4/11, ♭5, ♭13, ♭7
- Notes/pitch classes: E, F#, G, A, A#, C, D
- Semitones from C: [4, 6, 7, 9, 10, 0, 2]
- Relationship explanation: E Locrian Natural 2 is a non-C relative view of C Lydian Dominant / C Mixolydian #11; same notes, different starting point. It still fits C13#11 because it contains C, E, G, A#, D, F#, A.

### 39. C7b5 — dominant seventh flat five

- ID: `C7_b5`
- Aliases: C7♭5
- Family: altered dominant
- Commonness: 4 / 5
- Tags: dominant, altered
- Chord formula: 1, 3, ♭5, ♭7
- Chord notes: C, E, G♭, B♭
- Semitones from C: [0, 4, 6, 10]
- Ascending app chord playback/display notes: C3, E3, F#3, A#3
- Scale choices displayed: 2

#### Chord Tone Roles

| Formula | Note | Semitone | App display note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- |
| 1 | C | 0 | C3 | root | #d84b4b |
| 3 | E | 4 | E3 | third | #ff4fb8 |
| ♭5 | G♭ | 6 | F#3 | flat alteration | #3f7ee8 |
| ♭7 | B♭ | 10 | A#3 | seventh | #c88719 |

#### App Voicing

The voicing below is generated by the app voicing rules: root + seventh in the shell octave, then third/sus tone, fifth, and extensions in the upper octave.

| Voicing group | Formula | Note | Semitone | App display/play note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Shell octave | 1 | C | 0 | C3 | root | #d84b4b |
| Shell octave | ♭7 | A# | 10 | A#3 | seventh | #c88719 |
| Upper octave | 3 | E | 4 | E4 | third | #ff4fb8 |
| Upper octave | ♭5 | F# | 6 | F#4 | flat alteration | #3f7ee8 |

#### Associated Scale Choices

##### 1. C Lydian Dominant / C Mixolydian #11

- Scale ID: `C_lydian_dominant`
- Role in source data: primary if heard as #11/b5
- Family: melodic minor modes
- Formula: 1, 2/9, 3, ♯4/♯11, 5, 6/13, ♭7
- Notes: C, D, E, F♯, G, A, B♭
- Semitones from C: [0, 2, 4, 6, 7, 9, 10]
- Ordered playback/display notes: C3, D3, E3, F#3, G3, A3, A#3, C4
- Reason/use: Dominant with raised 11/flat 5 color.

Non-root scale association derived by the app:

- Name: E Locrian Natural 2
- Root: E (4 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2/9, ♭3, 4/11, ♭5, ♭13, ♭7
- Notes/pitch classes: E, F#, G, A, A#, C, D
- Semitones from C: [4, 6, 7, 9, 10, 0, 2]
- Relationship explanation: E Locrian Natural 2 is a non-C relative view of C Lydian Dominant / C Mixolydian #11; same notes, different starting point. It still fits C7b5 because it contains C, E, F#, A#.

##### 2. C Altered / C Super Locrian

- Scale ID: `C_altered`
- Role in source data: altered option
- Family: melodic minor modes
- Formula: 1, ♭9, ♯9, 3, ♭5/♯11, ♯5/♭13, ♭7
- Notes: C, D♭, D♯, E, G♭, G♯, B♭
- Semitones from C: [0, 1, 3, 4, 6, 8, 10]
- Ordered playback/display notes: C3, C#3, D#3, E3, F#3, G#3, A#3, C4
- Reason/use: Use when b9/#9/#5 tensions are also implied.

Non-root scale association derived by the app:

- Name: C# Melodic Minor / jazz minor
- Root: C# (1 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2, ♭3, 4/11, 5, 6/13, 7
- Notes/pitch classes: C#, D#, E, F#, G#, A#, C
- Semitones from C: [1, 3, 4, 6, 8, 10, 0]
- Relationship explanation: C# Melodic Minor / jazz minor is a non-C relative view of C Altered / C Super Locrian; same notes, different starting point. It still fits C7b5 because it contains C, E, F#, A#.

### 40. C9b5 — dominant ninth flat five

- ID: `C9_b5`
- Aliases: C9♭5
- Family: lydian dominant
- Commonness: 3 / 5
- Tags: dominant, altered
- Chord formula: 1, 3, ♭5, ♭7, 9
- Chord notes: C, E, G♭, B♭, D
- Semitones from C: [0, 4, 6, 10, 2]
- Ascending app chord playback/display notes: C3, E3, F#3, A#3, D4
- Scale choices displayed: 1

#### Chord Tone Roles

| Formula | Note | Semitone | App display note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- |
| 1 | C | 0 | C3 | root | #d84b4b |
| 3 | E | 4 | E3 | third | #ff4fb8 |
| ♭5 | G♭ | 6 | F#3 | flat alteration | #3f7ee8 |
| ♭7 | B♭ | 10 | A#3 | seventh | #c88719 |
| 9 | D | 2 | D4 | extension | #28a87d |

#### App Voicing

The voicing below is generated by the app voicing rules: root + seventh in the shell octave, then third/sus tone, fifth, and extensions in the upper octave.

| Voicing group | Formula | Note | Semitone | App display/play note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Shell octave | 1 | C | 0 | C3 | root | #d84b4b |
| Shell octave | ♭7 | A# | 10 | A#3 | seventh | #c88719 |
| Upper octave | 3 | E | 4 | E4 | third | #ff4fb8 |
| Upper octave | ♭5 | F# | 6 | F#4 | flat alteration | #3f7ee8 |
| Upper octave | 9 | D | 2 | D4 | extension | #28a87d |

#### Associated Scale Choices

##### 1. C Lydian Dominant / C Mixolydian #11

- Scale ID: `C_lydian_dominant`
- Role in source data: primary
- Family: melodic minor modes
- Formula: 1, 2/9, 3, ♯4/♯11, 5, 6/13, ♭7
- Notes: C, D, E, F♯, G, A, B♭
- Semitones from C: [0, 2, 4, 6, 7, 9, 10]
- Ordered playback/display notes: C3, D3, E3, F#3, G3, A3, A#3, C4
- Reason/use: Contains 9 and #11/b5 color.

Non-root scale association derived by the app:

- Name: E Locrian Natural 2
- Root: E (4 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2/9, ♭3, 4/11, ♭5, ♭13, ♭7
- Notes/pitch classes: E, F#, G, A, A#, C, D
- Semitones from C: [4, 6, 7, 9, 10, 0, 2]
- Relationship explanation: E Locrian Natural 2 is a non-C relative view of C Lydian Dominant / C Mixolydian #11; same notes, different starting point. It still fits C9b5 because it contains C, E, F#, A#, D.

### 41. C7#5 — dominant seventh sharp five

- ID: `C7_sharp5`
- Aliases: C7+, C7+5
- Family: augmented dominant
- Commonness: 4 / 5
- Tags: dominant, augmented
- Chord formula: 1, 3, ♯5, ♭7
- Chord notes: C, E, G♯, B♭
- Semitones from C: [0, 4, 8, 10]
- Ascending app chord playback/display notes: C3, E3, G#3, A#3
- Scale choices displayed: 2

#### Chord Tone Roles

| Formula | Note | Semitone | App display note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- |
| 1 | C | 0 | C3 | root | #d84b4b |
| 3 | E | 4 | E3 | third | #ff4fb8 |
| ♯5 | G♯ | 8 | G#3 | sharp alteration | #8d5cff |
| ♭7 | B♭ | 10 | A#3 | seventh | #c88719 |

#### App Voicing

The voicing below is generated by the app voicing rules: root + seventh in the shell octave, then third/sus tone, fifth, and extensions in the upper octave.

| Voicing group | Formula | Note | Semitone | App display/play note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Shell octave | 1 | C | 0 | C3 | root | #d84b4b |
| Shell octave | ♭7 | A# | 10 | A#3 | seventh | #c88719 |
| Upper octave | 3 | E | 4 | E4 | third | #ff4fb8 |
| Upper octave | ♯5 | G# | 8 | G#4 | sharp alteration | #8d5cff |

#### Associated Scale Choices

##### 1. C Whole Tone

- Scale ID: `C_whole_tone`
- Role in source data: primary augmented dominant
- Family: symmetric
- Formula: 1, 2/9, 3, ♯4/♯11, ♯5/♭13, ♭7
- Notes: C, D, E, F♯, G♯, B♭
- Semitones from C: [0, 2, 4, 6, 8, 10]
- Ordered playback/display notes: C3, D3, E3, F#3, G#3, A#3, C4
- Reason/use: Direct 7#5/#11 whole-tone color.

Non-root scale association derived by the app:

- Name: D Whole Tone
- Root: D (2 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2/9, 3, ♯4/♯11, ♯5/♭13, ♭7
- Notes/pitch classes: D, E, F#, G#, A#, C
- Semitones from C: [2, 4, 6, 8, 10, 0]
- Relationship explanation: D Whole Tone is a non-C relative view of C Whole Tone; same notes, different starting point. It still fits C7#5 because it contains C, E, G#, A#.

##### 2. C Altered / C Super Locrian

- Scale ID: `C_altered`
- Role in source data: altered option
- Family: melodic minor modes
- Formula: 1, ♭9, ♯9, 3, ♭5/♯11, ♯5/♭13, ♭7
- Notes: C, D♭, D♯, E, G♭, G♯, B♭
- Semitones from C: [0, 1, 3, 4, 6, 8, 10]
- Ordered playback/display notes: C3, C#3, D#3, E3, F#3, G#3, A#3, C4
- Reason/use: Use when b9/#9 tensions are included.

Non-root scale association derived by the app:

- Name: C# Melodic Minor / jazz minor
- Root: C# (1 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2, ♭3, 4/11, 5, 6/13, 7
- Notes/pitch classes: C#, D#, E, F#, G#, A#, C
- Semitones from C: [1, 3, 4, 6, 8, 10, 0]
- Relationship explanation: C# Melodic Minor / jazz minor is a non-C relative view of C Altered / C Super Locrian; same notes, different starting point. It still fits C7#5 because it contains C, E, G#, A#.

### 42. C9#5 — dominant ninth sharp five

- ID: `C9_sharp5`
- Aliases: C9+, C9+5
- Family: augmented dominant
- Commonness: 3 / 5
- Tags: dominant, augmented
- Chord formula: 1, 3, ♯5, ♭7, 9
- Chord notes: C, E, G♯, B♭, D
- Semitones from C: [0, 4, 8, 10, 2]
- Ascending app chord playback/display notes: C3, E3, G#3, A#3, D4
- Scale choices displayed: 1

#### Chord Tone Roles

| Formula | Note | Semitone | App display note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- |
| 1 | C | 0 | C3 | root | #d84b4b |
| 3 | E | 4 | E3 | third | #ff4fb8 |
| ♯5 | G♯ | 8 | G#3 | sharp alteration | #8d5cff |
| ♭7 | B♭ | 10 | A#3 | seventh | #c88719 |
| 9 | D | 2 | D4 | extension | #28a87d |

#### App Voicing

The voicing below is generated by the app voicing rules: root + seventh in the shell octave, then third/sus tone, fifth, and extensions in the upper octave.

| Voicing group | Formula | Note | Semitone | App display/play note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Shell octave | 1 | C | 0 | C3 | root | #d84b4b |
| Shell octave | ♭7 | A# | 10 | A#3 | seventh | #c88719 |
| Upper octave | 3 | E | 4 | E4 | third | #ff4fb8 |
| Upper octave | ♯5 | G# | 8 | G#4 | sharp alteration | #8d5cff |
| Upper octave | 9 | D | 2 | D4 | extension | #28a87d |

#### Associated Scale Choices

##### 1. C Whole Tone

- Scale ID: `C_whole_tone`
- Role in source data: primary
- Family: symmetric
- Formula: 1, 2/9, 3, ♯4/♯11, ♯5/♭13, ♭7
- Notes: C, D, E, F♯, G♯, B♭
- Semitones from C: [0, 2, 4, 6, 8, 10]
- Ordered playback/display notes: C3, D3, E3, F#3, G#3, A#3, C4
- Reason/use: Contains 9, 3, #5 and b7.

Non-root scale association derived by the app:

- Name: D Whole Tone
- Root: D (2 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2/9, 3, ♯4/♯11, ♯5/♭13, ♭7
- Notes/pitch classes: D, E, F#, G#, A#, C
- Semitones from C: [2, 4, 6, 8, 10, 0]
- Relationship explanation: D Whole Tone is a non-C relative view of C Whole Tone; same notes, different starting point. It still fits C9#5 because it contains C, E, G#, A#, D.

### 43. C7b9 — dominant seventh flat nine

- ID: `C7_b9`
- Aliases: C7♭9
- Family: altered dominant
- Commonness: 5 / 5
- Tags: dominant, altered, minor V
- Chord formula: 1, 3, 5, ♭7, ♭9
- Chord notes: C, E, G, B♭, D♭
- Semitones from C: [0, 4, 7, 10, 1]
- Ascending app chord playback/display notes: C3, E3, G3, A#3, C#4
- Scale choices displayed: 3

#### Chord Tone Roles

| Formula | Note | Semitone | App display note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- |
| 1 | C | 0 | C3 | root | #d84b4b |
| 3 | E | 4 | E3 | third | #ff4fb8 |
| 5 | G | 7 | G3 | fifth | #ffc2df |
| ♭7 | B♭ | 10 | A#3 | seventh | #c88719 |
| ♭9 | D♭ | 1 | C#4 | flat alteration | #3f7ee8 |

#### App Voicing

The voicing below is generated by the app voicing rules: root + seventh in the shell octave, then third/sus tone, fifth, and extensions in the upper octave.

| Voicing group | Formula | Note | Semitone | App display/play note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Shell octave | 1 | C | 0 | C3 | root | #d84b4b |
| Shell octave | ♭7 | A# | 10 | A#3 | seventh | #c88719 |
| Upper octave | 3 | E | 4 | E4 | third | #ff4fb8 |
| Upper octave | 5 | G | 7 | G4 | fifth | #ffc2df |
| Upper octave | ♭9 | C# | 1 | C#4 | flat alteration | #3f7ee8 |

#### Associated Scale Choices

##### 1. C Half-Whole Diminished

- Scale ID: `C_half_whole_diminished`
- Role in source data: primary jazz dominant diminished
- Family: diminished/octatonic
- Formula: 1, ♭9, ♯9, 3, ♯11/♭5, 5, 13, ♭7
- Notes: C, D♭, D♯, E, F♯, G, A, B♭
- Semitones from C: [0, 1, 3, 4, 6, 7, 9, 10]
- Ordered playback/display notes: C3, C#3, D#3, E3, F#3, G3, A3, A#3, C4
- Reason/use: Strong for 7b9 with natural 5/13 colors.

Non-root scale association derived by the app:

- Name: C# Whole-Half Diminished
- Root: C# (1 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2/9, ♭3, 4/11, ♭5, ♭13, 13/𝄫7, 7
- Notes/pitch classes: C#, D#, E, F#, G, A, A#, C
- Semitones from C: [1, 3, 4, 6, 7, 9, 10, 0]
- Relationship explanation: C# Whole-Half Diminished is a non-C relative view of C Half-Whole Diminished; same notes, different starting point. It still fits C7b9 because it contains C, E, G, A#, C#.

##### 2. C Phrygian Dominant / Mixolydian b9 b13

- Scale ID: `C_phrygian_dominant`
- Role in source data: minor-key dominant option
- Family: harmonic minor modes
- Formula: 1, ♭9, 3, 4/11, 5, ♭13, ♭7
- Notes: C, D♭, E, F, G, A♭, B♭
- Semitones from C: [0, 1, 4, 5, 7, 8, 10]
- Ordered playback/display notes: C3, C#3, E3, F3, G3, G#3, A#3, C4
- Reason/use: Dominant b9 b13 sound, especially resolving to minor.

Non-root scale association derived by the app:

- Name: F Harmonic Minor
- Root: F (5 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2, ♭3, 4/11, 5, ♭6/♭13, 7
- Notes/pitch classes: F, G, G#, A#, C, C#, E
- Semitones from C: [5, 7, 8, 10, 0, 1, 4]
- Relationship explanation: F Harmonic Minor is a non-C relative view of C Phrygian Dominant / Mixolydian b9 b13; same notes, different starting point. It still fits C7b9 because it contains C, E, G, A#, C#.

##### 3. C Altered / C Super Locrian

- Scale ID: `C_altered`
- Role in source data: more altered option
- Family: melodic minor modes
- Formula: 1, ♭9, ♯9, 3, ♭5/♯11, ♯5/♭13, ♭7
- Notes: C, D♭, D♯, E, G♭, G♯, B♭
- Semitones from C: [0, 1, 3, 4, 6, 8, 10]
- Ordered playback/display notes: C3, C#3, D#3, E3, F#3, G#3, A#3, C4
- Reason/use: Use when #9 or #5/b13 colors are also desired.

Non-root scale association derived by the app:

- Name: C# Whole-Half Diminished
- Root: C# (1 semitones from C)
- Same pitch collection as selected scale: no
- Formula: 1, 2/9, ♭3, 4/11, ♭5, ♭13, 13/𝄫7, 7
- Notes/pitch classes: C#, D#, E, F#, G, A, A#, C
- Semitones from C: [1, 3, 4, 6, 7, 9, 10, 0]
- Relationship explanation: C# Whole-Half Diminished is not the same pitch collection as C Altered / C Super Locrian, but it fits C7b9 because it contains C, E, G, A#, C#.

### 44. C7#9 — dominant seventh sharp nine

- ID: `C7_sharp9`
- Aliases: C7♯9
- Family: altered dominant
- Commonness: 5 / 5
- Tags: dominant, Hendrix, funk, altered
- Chord formula: 1, 3, 5, ♭7, ♯9
- Chord notes: C, E, G, B♭, D♯
- Semitones from C: [0, 4, 7, 10, 3]
- Ascending app chord playback/display notes: C3, E3, G3, A#3, D#4
- Scale choices displayed: 3

#### Chord Tone Roles

| Formula | Note | Semitone | App display note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- |
| 1 | C | 0 | C3 | root | #d84b4b |
| 3 | E | 4 | E3 | third | #ff4fb8 |
| 5 | G | 7 | G3 | fifth | #ffc2df |
| ♭7 | B♭ | 10 | A#3 | seventh | #c88719 |
| ♯9 | D♯ | 3 | D#4 | sharp alteration | #8d5cff |

#### App Voicing

The voicing below is generated by the app voicing rules: root + seventh in the shell octave, then third/sus tone, fifth, and extensions in the upper octave.

| Voicing group | Formula | Note | Semitone | App display/play note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Shell octave | 1 | C | 0 | C3 | root | #d84b4b |
| Shell octave | ♭7 | A# | 10 | A#3 | seventh | #c88719 |
| Upper octave | 3 | E | 4 | E4 | third | #ff4fb8 |
| Upper octave | 5 | G | 7 | G4 | fifth | #ffc2df |
| Upper octave | ♯9 | D# | 3 | D#4 | sharp alteration | #8d5cff |

#### Associated Scale Choices

##### 1. C Half-Whole Diminished

- Scale ID: `C_half_whole_diminished`
- Role in source data: primary if natural 5/13
- Family: diminished/octatonic
- Formula: 1, ♭9, ♯9, 3, ♯11/♭5, 5, 13, ♭7
- Notes: C, D♭, D♯, E, F♯, G, A, B♭
- Semitones from C: [0, 1, 3, 4, 6, 7, 9, 10]
- Ordered playback/display notes: C3, C#3, D#3, E3, F#3, G3, A3, A#3, C4
- Reason/use: Contains #9 with natural 5 and 13.

Non-root scale association derived by the app:

- Name: C# Whole-Half Diminished
- Root: C# (1 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2/9, ♭3, 4/11, ♭5, ♭13, 13/𝄫7, 7
- Notes/pitch classes: C#, D#, E, F#, G, A, A#, C
- Semitones from C: [1, 3, 4, 6, 7, 9, 10, 0]
- Relationship explanation: C# Whole-Half Diminished is a non-C relative view of C Half-Whole Diminished; same notes, different starting point. It still fits C7#9 because it contains C, E, G, A#, D#.

##### 2. C Altered / C Super Locrian

- Scale ID: `C_altered`
- Role in source data: altered option
- Family: melodic minor modes
- Formula: 1, ♭9, ♯9, 3, ♭5/♯11, ♯5/♭13, ♭7
- Notes: C, D♭, D♯, E, G♭, G♯, B♭
- Semitones from C: [0, 1, 3, 4, 6, 8, 10]
- Ordered playback/display notes: C3, C#3, D#3, E3, F#3, G#3, A#3, C4
- Reason/use: Classic altered #9 dominant color.

Non-root scale association derived by the app:

- Name: C# Whole-Half Diminished
- Root: C# (1 semitones from C)
- Same pitch collection as selected scale: no
- Formula: 1, 2/9, ♭3, 4/11, ♭5, ♭13, 13/𝄫7, 7
- Notes/pitch classes: C#, D#, E, F#, G, A, A#, C
- Semitones from C: [1, 3, 4, 6, 7, 9, 10, 0]
- Relationship explanation: C# Whole-Half Diminished is not the same pitch collection as C Altered / C Super Locrian, but it fits C7#9 because it contains C, E, G, A#, D#.

##### 3. C Mixolydian Blues

- Scale ID: `C_mixolydian_blues`
- Role in source data: funk/blues option
- Family: hybrid/blues
- Formula: 1, 2/9, ♭3 blue, 3, 4/11, 5, 6/13, ♭7
- Notes: C, D, E♭, E, F, G, A, B♭
- Semitones from C: [0, 2, 3, 4, 5, 7, 9, 10]
- Ordered playback/display notes: C3, D3, D#3, E3, F3, G3, A3, A#3, C4
- Reason/use: Equivalent blue b3/#9 color against major 3.

Non-root scale association derived by the app:

- Name: F Bebop Dominant
- Root: F (5 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2/9, 3, 4/11, 5, 6/13, ♭7, 7 passing
- Notes/pitch classes: F, G, A, A#, C, D, D#, E
- Semitones from C: [5, 7, 9, 10, 0, 2, 3, 4]
- Relationship explanation: F Bebop Dominant is a non-C relative view of C Mixolydian Blues; same notes, different starting point. It still fits C7#9 because it contains C, E, G, A#, D#.

### 45. C7b13 — dominant seventh flat thirteen

- ID: `C7_b13`
- Aliases: C7♭13
- Family: altered dominant
- Commonness: 4 / 5
- Tags: dominant, altered, minor V
- Chord formula: 1, 3, 5, ♭7, ♭13
- Chord notes: C, E, G, B♭, A♭
- Semitones from C: [0, 4, 7, 10, 8]
- Ascending app chord playback/display notes: C3, E3, G3, A#3, G#4
- Scale choices displayed: 2

#### Chord Tone Roles

| Formula | Note | Semitone | App display note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- |
| 1 | C | 0 | C3 | root | #d84b4b |
| 3 | E | 4 | E3 | third | #ff4fb8 |
| 5 | G | 7 | G3 | fifth | #ffc2df |
| ♭7 | B♭ | 10 | A#3 | seventh | #c88719 |
| ♭13 | A♭ | 8 | G#4 | flat alteration | #3f7ee8 |

#### App Voicing

The voicing below is generated by the app voicing rules: root + seventh in the shell octave, then third/sus tone, fifth, and extensions in the upper octave.

| Voicing group | Formula | Note | Semitone | App display/play note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Shell octave | 1 | C | 0 | C3 | root | #d84b4b |
| Shell octave | ♭7 | A# | 10 | A#3 | seventh | #c88719 |
| Upper octave | 3 | E | 4 | E4 | third | #ff4fb8 |
| Upper octave | 5 | G | 7 | G4 | fifth | #ffc2df |
| Upper octave | ♭13 | G# | 8 | G#4 | flat alteration | #3f7ee8 |

#### Associated Scale Choices

##### 1. C Phrygian Dominant / Mixolydian b9 b13

- Scale ID: `C_phrygian_dominant`
- Role in source data: primary with b9 color
- Family: harmonic minor modes
- Formula: 1, ♭9, 3, 4/11, 5, ♭13, ♭7
- Notes: C, D♭, E, F, G, A♭, B♭
- Semitones from C: [0, 1, 4, 5, 7, 8, 10]
- Ordered playback/display notes: C3, C#3, E3, F3, G3, G#3, A#3, C4
- Reason/use: Dominant b9 b13 collection.

Non-root scale association derived by the app:

- Name: F Harmonic Minor
- Root: F (5 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2, ♭3, 4/11, 5, ♭6/♭13, 7
- Notes/pitch classes: F, G, G#, A#, C, C#, E
- Semitones from C: [5, 7, 8, 10, 0, 1, 4]
- Relationship explanation: F Harmonic Minor is a non-C relative view of C Phrygian Dominant / Mixolydian b9 b13; same notes, different starting point. It still fits C7b13 because it contains C, E, G, A#, G#.

##### 2. C Altered / C Super Locrian

- Scale ID: `C_altered`
- Role in source data: altered option
- Family: melodic minor modes
- Formula: 1, ♭9, ♯9, 3, ♭5/♯11, ♯5/♭13, ♭7
- Notes: C, D♭, D♯, E, G♭, G♯, B♭
- Semitones from C: [0, 1, 3, 4, 6, 8, 10]
- Ordered playback/display notes: C3, C#3, D#3, E3, F#3, G#3, A#3, C4
- Reason/use: Use when #9/b5 tension is also implied.

Non-root scale association derived by the app:

- Name: D Locrian Natural 2
- Root: D (2 semitones from C)
- Same pitch collection as selected scale: no
- Formula: 1, 2/9, ♭3, 4/11, ♭5, ♭13, ♭7
- Notes/pitch classes: D, E, F, G, G#, A#, C
- Semitones from C: [2, 4, 5, 7, 8, 10, 0]
- Relationship explanation: D Locrian Natural 2 is not the same pitch collection as C Altered / C Super Locrian, but it fits C7b13 because it contains C, E, G, A#, G#.

### 46. C9b13 — dominant ninth flat thirteen

- ID: `C9_b13`
- Aliases: C9♭13
- Family: altered dominant
- Commonness: 3 / 5
- Tags: dominant, altered
- Chord formula: 1, 3, 5, ♭7, 9, ♭13
- Chord notes: C, E, G, B♭, D, A♭
- Semitones from C: [0, 4, 7, 10, 2, 8]
- Ascending app chord playback/display notes: C3, E3, G3, A#3, D4, G#4
- Scale choices displayed: 3

#### Chord Tone Roles

| Formula | Note | Semitone | App display note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- |
| 1 | C | 0 | C3 | root | #d84b4b |
| 3 | E | 4 | E3 | third | #ff4fb8 |
| 5 | G | 7 | G3 | fifth | #ffc2df |
| ♭7 | B♭ | 10 | A#3 | seventh | #c88719 |
| 9 | D | 2 | D4 | extension | #28a87d |
| ♭13 | A♭ | 8 | G#4 | flat alteration | #3f7ee8 |

#### App Voicing

The voicing below is generated by the app voicing rules: root + seventh in the shell octave, then third/sus tone, fifth, and extensions in the upper octave.

| Voicing group | Formula | Note | Semitone | App display/play note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Shell octave | 1 | C | 0 | C3 | root | #d84b4b |
| Shell octave | ♭7 | A# | 10 | A#3 | seventh | #c88719 |
| Upper octave | 3 | E | 4 | E4 | third | #ff4fb8 |
| Upper octave | 5 | G | 7 | G4 | fifth | #ffc2df |
| Upper octave | ♭13 | G# | 8 | G#4 | flat alteration | #3f7ee8 |
| Upper octave | 9 | D | 2 | D4 | extension | #28a87d |

#### Associated Scale Choices

##### 1. C Mixolydian

- Scale ID: `C_mixolydian`
- Role in source data: inside but b13 conflicts
- Family: major modes
- Formula: 1, 2/9, 3, 4/11, 5, 6/13, ♭7
- Notes: C, D, E, F, G, A, B♭
- Semitones from C: [0, 2, 4, 5, 7, 9, 10]
- Ordered playback/display notes: C3, D3, E3, F3, G3, A3, A#3, C4
- Reason/use: Mixolydian has natural 13, so use with caution.

Non-root scale association derived by the app:

- Name: D Locrian Natural 2
- Root: D (2 semitones from C)
- Same pitch collection as selected scale: no
- Formula: 1, 2/9, ♭3, 4/11, ♭5, ♭13, ♭7
- Notes/pitch classes: D, E, F, G, G#, A#, C
- Semitones from C: [2, 4, 5, 7, 8, 10, 0]
- Relationship explanation: D Locrian Natural 2 is not the same pitch collection as C Mixolydian, but it fits C9b13 because it contains C, E, G, A#, D, G#.

##### 2. C Altered / C Super Locrian

- Scale ID: `C_altered`
- Role in source data: altered option
- Family: melodic minor modes
- Formula: 1, ♭9, ♯9, 3, ♭5/♯11, ♯5/♭13, ♭7
- Notes: C, D♭, D♯, E, G♭, G♯, B♭
- Semitones from C: [0, 1, 3, 4, 6, 8, 10]
- Ordered playback/display notes: C3, C#3, D#3, E3, F#3, G#3, A#3, C4
- Reason/use: If the 5th can be altered/omitted, altered scale supplies b13.

Non-root scale association derived by the app:

- Name: D Locrian Natural 2
- Root: D (2 semitones from C)
- Same pitch collection as selected scale: no
- Formula: 1, 2/9, ♭3, 4/11, ♭5, ♭13, ♭7
- Notes/pitch classes: D, E, F, G, G#, A#, C
- Semitones from C: [2, 4, 5, 7, 8, 10, 0]
- Relationship explanation: D Locrian Natural 2 is not the same pitch collection as C Altered / C Super Locrian, but it fits C9b13 because it contains C, E, G, A#, D, G#.

##### 3. C Whole Tone

- Scale ID: `C_whole_tone`
- Role in source data: augmented option
- Family: symmetric
- Formula: 1, 2/9, 3, ♯4/♯11, ♯5/♭13, ♭7
- Notes: C, D, E, F♯, G♯, B♭
- Semitones from C: [0, 2, 4, 6, 8, 10]
- Ordered playback/display notes: C3, D3, E3, F#3, G#3, A#3, C4
- Reason/use: Contains 9 and #5/b13 but omits natural 5.

Non-root scale association derived by the app:

- Name: D Locrian Natural 2
- Root: D (2 semitones from C)
- Same pitch collection as selected scale: no
- Formula: 1, 2/9, ♭3, 4/11, ♭5, ♭13, ♭7
- Notes/pitch classes: D, E, F, G, G#, A#, C
- Semitones from C: [2, 4, 5, 7, 8, 10, 0]
- Relationship explanation: D Locrian Natural 2 is not the same pitch collection as C Whole Tone, but it fits C9b13 because it contains C, E, G, A#, D, G#.

### 47. C7b9b13 — dominant seventh flat nine flat thirteen

- ID: `C7_b9_b13`
- Aliases: C7♭9♭13
- Family: altered dominant
- Commonness: 4 / 5
- Tags: dominant, altered, minor V
- Chord formula: 1, 3, 5, ♭7, ♭9, ♭13
- Chord notes: C, E, G, B♭, D♭, A♭
- Semitones from C: [0, 4, 7, 10, 1, 8]
- Ascending app chord playback/display notes: C3, E3, G3, A#3, C#4, G#4
- Scale choices displayed: 2

#### Chord Tone Roles

| Formula | Note | Semitone | App display note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- |
| 1 | C | 0 | C3 | root | #d84b4b |
| 3 | E | 4 | E3 | third | #ff4fb8 |
| 5 | G | 7 | G3 | fifth | #ffc2df |
| ♭7 | B♭ | 10 | A#3 | seventh | #c88719 |
| ♭9 | D♭ | 1 | C#4 | flat alteration | #3f7ee8 |
| ♭13 | A♭ | 8 | G#4 | flat alteration | #3f7ee8 |

#### App Voicing

The voicing below is generated by the app voicing rules: root + seventh in the shell octave, then third/sus tone, fifth, and extensions in the upper octave.

| Voicing group | Formula | Note | Semitone | App display/play note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Shell octave | 1 | C | 0 | C3 | root | #d84b4b |
| Shell octave | ♭7 | A# | 10 | A#3 | seventh | #c88719 |
| Upper octave | 3 | E | 4 | E4 | third | #ff4fb8 |
| Upper octave | 5 | G | 7 | G4 | fifth | #ffc2df |
| Upper octave | ♭13 | G# | 8 | G#4 | flat alteration | #3f7ee8 |
| Upper octave | ♭9 | C# | 1 | C#4 | flat alteration | #3f7ee8 |

#### Associated Scale Choices

##### 1. C Phrygian Dominant / Mixolydian b9 b13

- Scale ID: `C_phrygian_dominant`
- Role in source data: primary
- Family: harmonic minor modes
- Formula: 1, ♭9, 3, 4/11, 5, ♭13, ♭7
- Notes: C, D♭, E, F, G, A♭, B♭
- Semitones from C: [0, 1, 4, 5, 7, 8, 10]
- Ordered playback/display notes: C3, C#3, E3, F3, G3, G#3, A#3, C4
- Reason/use: Direct b9 b13 dominant sound with natural 5.

Non-root scale association derived by the app:

- Name: F Harmonic Minor
- Root: F (5 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2, ♭3, 4/11, 5, ♭6/♭13, 7
- Notes/pitch classes: F, G, G#, A#, C, C#, E
- Semitones from C: [5, 7, 8, 10, 0, 1, 4]
- Relationship explanation: F Harmonic Minor is a non-C relative view of C Phrygian Dominant / Mixolydian b9 b13; same notes, different starting point. It still fits C7b9b13 because it contains C, E, G, A#, C#, G#.

##### 2. C Altered / C Super Locrian

- Scale ID: `C_altered`
- Role in source data: altered option
- Family: melodic minor modes
- Formula: 1, ♭9, ♯9, 3, ♭5/♯11, ♯5/♭13, ♭7
- Notes: C, D♭, D♯, E, G♭, G♯, B♭
- Semitones from C: [0, 1, 3, 4, 6, 8, 10]
- Ordered playback/display notes: C3, C#3, D#3, E3, F#3, G#3, A#3, C4
- Reason/use: Use if the natural 5 is omitted or #5/b13 is the intended sound.

Non-root scale association derived by the app:

- Name: F Harmonic Minor
- Root: F (5 semitones from C)
- Same pitch collection as selected scale: no
- Formula: 1, 2, ♭3, 4/11, 5, ♭6/♭13, 7
- Notes/pitch classes: F, G, G#, A#, C, C#, E
- Semitones from C: [5, 7, 8, 10, 0, 1, 4]
- Relationship explanation: F Harmonic Minor is not the same pitch collection as C Altered / C Super Locrian, but it fits C7b9b13 because it contains C, E, G, A#, C#, G#.

### 48. C7#9b13 — dominant seventh sharp nine flat thirteen

- ID: `C7_sharp9_b13`
- Aliases: C7♯9♭13
- Family: altered dominant
- Commonness: 4 / 5
- Tags: dominant, altered
- Chord formula: 1, 3, ♭7, ♯9, ♭13
- Chord notes: C, E, B♭, D♯, A♭
- Semitones from C: [0, 4, 10, 3, 8]
- Ascending app chord playback/display notes: C3, E3, A#3, D#4, G#4
- Scale choices displayed: 2

#### Chord Tone Roles

| Formula | Note | Semitone | App display note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- |
| 1 | C | 0 | C3 | root | #d84b4b |
| 3 | E | 4 | E3 | third | #ff4fb8 |
| ♭7 | B♭ | 10 | A#3 | seventh | #c88719 |
| ♯9 | D♯ | 3 | D#4 | sharp alteration | #8d5cff |
| ♭13 | A♭ | 8 | G#4 | flat alteration | #3f7ee8 |

#### App Voicing

The voicing below is generated by the app voicing rules: root + seventh in the shell octave, then third/sus tone, fifth, and extensions in the upper octave.

| Voicing group | Formula | Note | Semitone | App display/play note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Shell octave | 1 | C | 0 | C3 | root | #d84b4b |
| Shell octave | ♭7 | A# | 10 | A#3 | seventh | #c88719 |
| Upper octave | 3 | E | 4 | E4 | third | #ff4fb8 |
| Upper octave | ♭13 | G# | 8 | G#4 | flat alteration | #3f7ee8 |
| Upper octave | ♯9 | D# | 3 | D#4 | sharp alteration | #8d5cff |

#### Associated Scale Choices

##### 1. C Altered / C Super Locrian

- Scale ID: `C_altered`
- Role in source data: primary
- Family: melodic minor modes
- Formula: 1, ♭9, ♯9, 3, ♭5/♯11, ♯5/♭13, ♭7
- Notes: C, D♭, D♯, E, G♭, G♯, B♭
- Semitones from C: [0, 1, 3, 4, 6, 8, 10]
- Ordered playback/display notes: C3, C#3, D#3, E3, F#3, G#3, A#3, C4
- Reason/use: Direct altered dominant sound.

Non-root scale association derived by the app:

- Name: C# Melodic Minor / jazz minor
- Root: C# (1 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2, ♭3, 4/11, 5, 6/13, 7
- Notes/pitch classes: C#, D#, E, F#, G#, A#, C
- Semitones from C: [1, 3, 4, 6, 8, 10, 0]
- Relationship explanation: C# Melodic Minor / jazz minor is a non-C relative view of C Altered / C Super Locrian; same notes, different starting point. It still fits C7#9b13 because it contains C, E, A#, D#, G#.

##### 2. C Half-Whole Diminished

- Scale ID: `C_half_whole_diminished`
- Role in source data: alternate if natural 13 replaces b13
- Family: diminished/octatonic
- Formula: 1, ♭9, ♯9, 3, ♯11/♭5, 5, 13, ♭7
- Notes: C, D♭, D♯, E, F♯, G, A, B♭
- Semitones from C: [0, 1, 3, 4, 6, 7, 9, 10]
- Ordered playback/display notes: C3, C#3, D#3, E3, F#3, G3, A3, A#3, C4
- Reason/use: Use only if the 13 is natural rather than flat.

Non-root scale association derived by the app:

- Name: C# Melodic Minor / jazz minor
- Root: C# (1 semitones from C)
- Same pitch collection as selected scale: no
- Formula: 1, 2, ♭3, 4/11, 5, 6/13, 7
- Notes/pitch classes: C#, D#, E, F#, G#, A#, C
- Semitones from C: [1, 3, 4, 6, 8, 10, 0]
- Relationship explanation: C# Melodic Minor / jazz minor is not the same pitch collection as C Half-Whole Diminished, but it fits C7#9b13 because it contains C, E, A#, D#, G#.

### 49. C7b9#5 — dominant seventh flat nine sharp five

- ID: `C7_b9_sharp5`
- Aliases: C7♭9♯5, C7b9+5
- Family: altered dominant
- Commonness: 4 / 5
- Tags: dominant, altered
- Chord formula: 1, 3, ♯5, ♭7, ♭9
- Chord notes: C, E, G♯, B♭, D♭
- Semitones from C: [0, 4, 8, 10, 1]
- Ascending app chord playback/display notes: C3, E3, G#3, A#3, C#4
- Scale choices displayed: 1

#### Chord Tone Roles

| Formula | Note | Semitone | App display note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- |
| 1 | C | 0 | C3 | root | #d84b4b |
| 3 | E | 4 | E3 | third | #ff4fb8 |
| ♯5 | G♯ | 8 | G#3 | sharp alteration | #8d5cff |
| ♭7 | B♭ | 10 | A#3 | seventh | #c88719 |
| ♭9 | D♭ | 1 | C#4 | flat alteration | #3f7ee8 |

#### App Voicing

The voicing below is generated by the app voicing rules: root + seventh in the shell octave, then third/sus tone, fifth, and extensions in the upper octave.

| Voicing group | Formula | Note | Semitone | App display/play note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Shell octave | 1 | C | 0 | C3 | root | #d84b4b |
| Shell octave | ♭7 | A# | 10 | A#3 | seventh | #c88719 |
| Upper octave | 3 | E | 4 | E4 | third | #ff4fb8 |
| Upper octave | ♯5 | G# | 8 | G#4 | sharp alteration | #8d5cff |
| Upper octave | ♭9 | C# | 1 | C#4 | flat alteration | #3f7ee8 |

#### Associated Scale Choices

##### 1. C Altered / C Super Locrian

- Scale ID: `C_altered`
- Role in source data: primary
- Family: melodic minor modes
- Formula: 1, ♭9, ♯9, 3, ♭5/♯11, ♯5/♭13, ♭7
- Notes: C, D♭, D♯, E, G♭, G♯, B♭
- Semitones from C: [0, 1, 3, 4, 6, 8, 10]
- Ordered playback/display notes: C3, C#3, D#3, E3, F#3, G#3, A#3, C4
- Reason/use: Altered scale supplies b9 and #5/b13.

Non-root scale association derived by the app:

- Name: C# Melodic Minor / jazz minor
- Root: C# (1 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2, ♭3, 4/11, 5, 6/13, 7
- Notes/pitch classes: C#, D#, E, F#, G#, A#, C
- Semitones from C: [1, 3, 4, 6, 8, 10, 0]
- Relationship explanation: C# Melodic Minor / jazz minor is a non-C relative view of C Altered / C Super Locrian; same notes, different starting point. It still fits C7b9#5 because it contains C, E, G#, A#, C#.

### 50. C7#9#5 — dominant seventh sharp nine sharp five

- ID: `C7_sharp9_sharp5`
- Aliases: C7♯9♯5, C7#9+5
- Family: altered dominant
- Commonness: 4 / 5
- Tags: dominant, altered
- Chord formula: 1, 3, ♯5, ♭7, ♯9
- Chord notes: C, E, G♯, B♭, D♯
- Semitones from C: [0, 4, 8, 10, 3]
- Ascending app chord playback/display notes: C3, E3, G#3, A#3, D#4
- Scale choices displayed: 1

#### Chord Tone Roles

| Formula | Note | Semitone | App display note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- |
| 1 | C | 0 | C3 | root | #d84b4b |
| 3 | E | 4 | E3 | third | #ff4fb8 |
| ♯5 | G♯ | 8 | G#3 | sharp alteration | #8d5cff |
| ♭7 | B♭ | 10 | A#3 | seventh | #c88719 |
| ♯9 | D♯ | 3 | D#4 | sharp alteration | #8d5cff |

#### App Voicing

The voicing below is generated by the app voicing rules: root + seventh in the shell octave, then third/sus tone, fifth, and extensions in the upper octave.

| Voicing group | Formula | Note | Semitone | App display/play note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Shell octave | 1 | C | 0 | C3 | root | #d84b4b |
| Shell octave | ♭7 | A# | 10 | A#3 | seventh | #c88719 |
| Upper octave | 3 | E | 4 | E4 | third | #ff4fb8 |
| Upper octave | ♯5 | G# | 8 | G#4 | sharp alteration | #8d5cff |
| Upper octave | ♯9 | D# | 3 | D#4 | sharp alteration | #8d5cff |

#### Associated Scale Choices

##### 1. C Altered / C Super Locrian

- Scale ID: `C_altered`
- Role in source data: primary
- Family: melodic minor modes
- Formula: 1, ♭9, ♯9, 3, ♭5/♯11, ♯5/♭13, ♭7
- Notes: C, D♭, D♯, E, G♭, G♯, B♭
- Semitones from C: [0, 1, 3, 4, 6, 8, 10]
- Ordered playback/display notes: C3, C#3, D#3, E3, F#3, G#3, A#3, C4
- Reason/use: Classic altered dominant #9 #5 sound.

Non-root scale association derived by the app:

- Name: C# Melodic Minor / jazz minor
- Root: C# (1 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2, ♭3, 4/11, 5, 6/13, 7
- Notes/pitch classes: C#, D#, E, F#, G#, A#, C
- Semitones from C: [1, 3, 4, 6, 8, 10, 0]
- Relationship explanation: C# Melodic Minor / jazz minor is a non-C relative view of C Altered / C Super Locrian; same notes, different starting point. It still fits C7#9#5 because it contains C, E, G#, A#, D#.

### 51. C7b5b9 — dominant seventh flat five flat nine

- ID: `C7_b5_b9`
- Aliases: C7♭5♭9
- Family: altered dominant
- Commonness: 3 / 5
- Tags: dominant, altered
- Chord formula: 1, 3, ♭5, ♭7, ♭9
- Chord notes: C, E, G♭, B♭, D♭
- Semitones from C: [0, 4, 6, 10, 1]
- Ascending app chord playback/display notes: C3, E3, F#3, A#3, C#4
- Scale choices displayed: 2

#### Chord Tone Roles

| Formula | Note | Semitone | App display note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- |
| 1 | C | 0 | C3 | root | #d84b4b |
| 3 | E | 4 | E3 | third | #ff4fb8 |
| ♭5 | G♭ | 6 | F#3 | flat alteration | #3f7ee8 |
| ♭7 | B♭ | 10 | A#3 | seventh | #c88719 |
| ♭9 | D♭ | 1 | C#4 | flat alteration | #3f7ee8 |

#### App Voicing

The voicing below is generated by the app voicing rules: root + seventh in the shell octave, then third/sus tone, fifth, and extensions in the upper octave.

| Voicing group | Formula | Note | Semitone | App display/play note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Shell octave | 1 | C | 0 | C3 | root | #d84b4b |
| Shell octave | ♭7 | A# | 10 | A#3 | seventh | #c88719 |
| Upper octave | 3 | E | 4 | E4 | third | #ff4fb8 |
| Upper octave | ♭5 | F# | 6 | F#4 | flat alteration | #3f7ee8 |
| Upper octave | ♭9 | C# | 1 | C#4 | flat alteration | #3f7ee8 |

#### Associated Scale Choices

##### 1. C Half-Whole Diminished

- Scale ID: `C_half_whole_diminished`
- Role in source data: primary if natural 5 also acceptable
- Family: diminished/octatonic
- Formula: 1, ♭9, ♯9, 3, ♯11/♭5, 5, 13, ♭7
- Notes: C, D♭, D♯, E, F♯, G, A, B♭
- Semitones from C: [0, 1, 3, 4, 6, 7, 9, 10]
- Ordered playback/display notes: C3, C#3, D#3, E3, F#3, G3, A3, A#3, C4
- Reason/use: Supplies b9, #9, #11/b5 and natural 5/13.

Non-root scale association derived by the app:

- Name: C# Whole-Half Diminished
- Root: C# (1 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2/9, ♭3, 4/11, ♭5, ♭13, 13/𝄫7, 7
- Notes/pitch classes: C#, D#, E, F#, G, A, A#, C
- Semitones from C: [1, 3, 4, 6, 7, 9, 10, 0]
- Relationship explanation: C# Whole-Half Diminished is a non-C relative view of C Half-Whole Diminished; same notes, different starting point. It still fits C7b5b9 because it contains C, E, F#, A#, C#.

##### 2. C Altered / C Super Locrian

- Scale ID: `C_altered`
- Role in source data: altered option
- Family: melodic minor modes
- Formula: 1, ♭9, ♯9, 3, ♭5/♯11, ♯5/♭13, ♭7
- Notes: C, D♭, D♯, E, G♭, G♯, B♭
- Semitones from C: [0, 1, 3, 4, 6, 8, 10]
- Ordered playback/display notes: C3, C#3, D#3, E3, F#3, G#3, A#3, C4
- Reason/use: Supplies b9 and b5 without natural 5.

Non-root scale association derived by the app:

- Name: C# Melodic Minor / jazz minor
- Root: C# (1 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2, ♭3, 4/11, 5, 6/13, 7
- Notes/pitch classes: C#, D#, E, F#, G#, A#, C
- Semitones from C: [1, 3, 4, 6, 8, 10, 0]
- Relationship explanation: C# Melodic Minor / jazz minor is a non-C relative view of C Altered / C Super Locrian; same notes, different starting point. It still fits C7b5b9 because it contains C, E, F#, A#, C#.

### 52. C7b5#9 — dominant seventh flat five sharp nine

- ID: `C7_b5_sharp9`
- Aliases: C7♭5♯9
- Family: altered dominant
- Commonness: 3 / 5
- Tags: dominant, altered
- Chord formula: 1, 3, ♭5, ♭7, ♯9
- Chord notes: C, E, G♭, B♭, D♯
- Semitones from C: [0, 4, 6, 10, 3]
- Ascending app chord playback/display notes: C3, E3, F#3, A#3, D#4
- Scale choices displayed: 2

#### Chord Tone Roles

| Formula | Note | Semitone | App display note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- |
| 1 | C | 0 | C3 | root | #d84b4b |
| 3 | E | 4 | E3 | third | #ff4fb8 |
| ♭5 | G♭ | 6 | F#3 | flat alteration | #3f7ee8 |
| ♭7 | B♭ | 10 | A#3 | seventh | #c88719 |
| ♯9 | D♯ | 3 | D#4 | sharp alteration | #8d5cff |

#### App Voicing

The voicing below is generated by the app voicing rules: root + seventh in the shell octave, then third/sus tone, fifth, and extensions in the upper octave.

| Voicing group | Formula | Note | Semitone | App display/play note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Shell octave | 1 | C | 0 | C3 | root | #d84b4b |
| Shell octave | ♭7 | A# | 10 | A#3 | seventh | #c88719 |
| Upper octave | 3 | E | 4 | E4 | third | #ff4fb8 |
| Upper octave | ♭5 | F# | 6 | F#4 | flat alteration | #3f7ee8 |
| Upper octave | ♯9 | D# | 3 | D#4 | sharp alteration | #8d5cff |

#### Associated Scale Choices

##### 1. C Altered / C Super Locrian

- Scale ID: `C_altered`
- Role in source data: primary
- Family: melodic minor modes
- Formula: 1, ♭9, ♯9, 3, ♭5/♯11, ♯5/♭13, ♭7
- Notes: C, D♭, D♯, E, G♭, G♯, B♭
- Semitones from C: [0, 1, 3, 4, 6, 8, 10]
- Ordered playback/display notes: C3, C#3, D#3, E3, F#3, G#3, A#3, C4
- Reason/use: Supplies #9 and b5/#11 altered dominant tones.

Non-root scale association derived by the app:

- Name: C# Melodic Minor / jazz minor
- Root: C# (1 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2, ♭3, 4/11, 5, 6/13, 7
- Notes/pitch classes: C#, D#, E, F#, G#, A#, C
- Semitones from C: [1, 3, 4, 6, 8, 10, 0]
- Relationship explanation: C# Melodic Minor / jazz minor is a non-C relative view of C Altered / C Super Locrian; same notes, different starting point. It still fits C7b5#9 because it contains C, E, F#, A#, D#.

##### 2. C Half-Whole Diminished

- Scale ID: `C_half_whole_diminished`
- Role in source data: alternate
- Family: diminished/octatonic
- Formula: 1, ♭9, ♯9, 3, ♯11/♭5, 5, 13, ♭7
- Notes: C, D♭, D♯, E, F♯, G, A, B♭
- Semitones from C: [0, 1, 3, 4, 6, 7, 9, 10]
- Ordered playback/display notes: C3, C#3, D#3, E3, F#3, G3, A3, A#3, C4
- Reason/use: Also supplies #9 and #11/b5 with natural 5/13.

Non-root scale association derived by the app:

- Name: C# Whole-Half Diminished
- Root: C# (1 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2/9, ♭3, 4/11, ♭5, ♭13, 13/𝄫7, 7
- Notes/pitch classes: C#, D#, E, F#, G, A, A#, C
- Semitones from C: [1, 3, 4, 6, 7, 9, 10, 0]
- Relationship explanation: C# Whole-Half Diminished is a non-C relative view of C Half-Whole Diminished; same notes, different starting point. It still fits C7b5#9 because it contains C, E, F#, A#, D#.

### 53. C13b9 — dominant thirteenth flat nine

- ID: `C13_b9`
- Aliases: C13♭9
- Family: dominant diminished
- Commonness: 4 / 5
- Tags: dominant, diminished
- Chord formula: 1, 3, 5, ♭7, ♭9, 13
- Chord notes: C, E, G, B♭, D♭, A
- Semitones from C: [0, 4, 7, 10, 1, 9]
- Ascending app chord playback/display notes: C3, E3, G3, A#3, C#4, A4
- Scale choices displayed: 1

#### Chord Tone Roles

| Formula | Note | Semitone | App display note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- |
| 1 | C | 0 | C3 | root | #d84b4b |
| 3 | E | 4 | E3 | third | #ff4fb8 |
| 5 | G | 7 | G3 | fifth | #ffc2df |
| ♭7 | B♭ | 10 | A#3 | seventh | #c88719 |
| ♭9 | D♭ | 1 | C#4 | flat alteration | #3f7ee8 |
| 13 | A | 9 | A4 | extension | #28a87d |

#### App Voicing

The voicing below is generated by the app voicing rules: root + seventh in the shell octave, then third/sus tone, fifth, and extensions in the upper octave.

| Voicing group | Formula | Note | Semitone | App display/play note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Shell octave | 1 | C | 0 | C3 | root | #d84b4b |
| Shell octave | ♭7 | A# | 10 | A#3 | seventh | #c88719 |
| Upper octave | 3 | E | 4 | E4 | third | #ff4fb8 |
| Upper octave | 5 | G | 7 | G4 | fifth | #ffc2df |
| Upper octave | 13 | A | 9 | A4 | extension | #28a87d |
| Upper octave | ♭9 | C# | 1 | C#4 | flat alteration | #3f7ee8 |

#### Associated Scale Choices

##### 1. C Half-Whole Diminished

- Scale ID: `C_half_whole_diminished`
- Role in source data: primary
- Family: diminished/octatonic
- Formula: 1, ♭9, ♯9, 3, ♯11/♭5, 5, 13, ♭7
- Notes: C, D♭, D♯, E, F♯, G, A, B♭
- Semitones from C: [0, 1, 3, 4, 6, 7, 9, 10]
- Ordered playback/display notes: C3, C#3, D#3, E3, F#3, G3, A3, A#3, C4
- Reason/use: Directly contains b9, 13, natural 5 and b7.

Non-root scale association derived by the app:

- Name: C# Whole-Half Diminished
- Root: C# (1 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2/9, ♭3, 4/11, ♭5, ♭13, 13/𝄫7, 7
- Notes/pitch classes: C#, D#, E, F#, G, A, A#, C
- Semitones from C: [1, 3, 4, 6, 7, 9, 10, 0]
- Relationship explanation: C# Whole-Half Diminished is a non-C relative view of C Half-Whole Diminished; same notes, different starting point. It still fits C13b9 because it contains C, E, G, A#, C#, A.

### 54. C13#9 — dominant thirteenth sharp nine

- ID: `C13_sharp9`
- Aliases: C13♯9
- Family: dominant diminished
- Commonness: 3 / 5
- Tags: dominant, funk, diminished
- Chord formula: 1, 3, 5, ♭7, ♯9, 13
- Chord notes: C, E, G, B♭, D♯, A
- Semitones from C: [0, 4, 7, 10, 3, 9]
- Ascending app chord playback/display notes: C3, E3, G3, A#3, D#4, A4
- Scale choices displayed: 2

#### Chord Tone Roles

| Formula | Note | Semitone | App display note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- |
| 1 | C | 0 | C3 | root | #d84b4b |
| 3 | E | 4 | E3 | third | #ff4fb8 |
| 5 | G | 7 | G3 | fifth | #ffc2df |
| ♭7 | B♭ | 10 | A#3 | seventh | #c88719 |
| ♯9 | D♯ | 3 | D#4 | sharp alteration | #8d5cff |
| 13 | A | 9 | A4 | extension | #28a87d |

#### App Voicing

The voicing below is generated by the app voicing rules: root + seventh in the shell octave, then third/sus tone, fifth, and extensions in the upper octave.

| Voicing group | Formula | Note | Semitone | App display/play note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Shell octave | 1 | C | 0 | C3 | root | #d84b4b |
| Shell octave | ♭7 | A# | 10 | A#3 | seventh | #c88719 |
| Upper octave | 3 | E | 4 | E4 | third | #ff4fb8 |
| Upper octave | 5 | G | 7 | G4 | fifth | #ffc2df |
| Upper octave | 13 | A | 9 | A4 | extension | #28a87d |
| Upper octave | ♯9 | D# | 3 | D#4 | sharp alteration | #8d5cff |

#### Associated Scale Choices

##### 1. C Half-Whole Diminished

- Scale ID: `C_half_whole_diminished`
- Role in source data: primary
- Family: diminished/octatonic
- Formula: 1, ♭9, ♯9, 3, ♯11/♭5, 5, 13, ♭7
- Notes: C, D♭, D♯, E, F♯, G, A, B♭
- Semitones from C: [0, 1, 3, 4, 6, 7, 9, 10]
- Ordered playback/display notes: C3, C#3, D#3, E3, F#3, G3, A3, A#3, C4
- Reason/use: Contains #9, 13, natural 5 and b7.

Non-root scale association derived by the app:

- Name: C# Whole-Half Diminished
- Root: C# (1 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2/9, ♭3, 4/11, ♭5, ♭13, 13/𝄫7, 7
- Notes/pitch classes: C#, D#, E, F#, G, A, A#, C
- Semitones from C: [1, 3, 4, 6, 7, 9, 10, 0]
- Relationship explanation: C# Whole-Half Diminished is a non-C relative view of C Half-Whole Diminished; same notes, different starting point. It still fits C13#9 because it contains C, E, G, A#, D#, A.

##### 2. C Mixolydian Blues

- Scale ID: `C_mixolydian_blues`
- Role in source data: funk/blues option
- Family: hybrid/blues
- Formula: 1, 2/9, ♭3 blue, 3, 4/11, 5, 6/13, ♭7
- Notes: C, D, E♭, E, F, G, A, B♭
- Semitones from C: [0, 2, 3, 4, 5, 7, 9, 10]
- Ordered playback/display notes: C3, D3, D#3, E3, F3, G3, A3, A#3, C4
- Reason/use: Treat #9 as blues b3 over dominant 13.

Non-root scale association derived by the app:

- Name: F Bebop Dominant
- Root: F (5 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2/9, 3, 4/11, 5, 6/13, ♭7, 7 passing
- Notes/pitch classes: F, G, A, A#, C, D, D#, E
- Semitones from C: [5, 7, 9, 10, 0, 2, 3, 4]
- Relationship explanation: F Bebop Dominant is a non-C relative view of C Mixolydian Blues; same notes, different starting point. It still fits C13#9 because it contains C, E, G, A#, D#, A.

### 55. C13b9#11 — dominant thirteenth flat nine sharp eleven

- ID: `C13_b9_11`
- Aliases: C13♭9♯11
- Family: dominant diminished
- Commonness: 3 / 5
- Tags: dominant, diminished, advanced
- Chord formula: 1, 3, 5, ♭7, ♭9, ♯11, 13
- Chord notes: C, E, G, B♭, D♭, F♯, A
- Semitones from C: [0, 4, 7, 10, 1, 6, 9]
- Ascending app chord playback/display notes: C3, E3, G3, A#3, C#4, F#4, A4
- Scale choices displayed: 1

#### Chord Tone Roles

| Formula | Note | Semitone | App display note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- |
| 1 | C | 0 | C3 | root | #d84b4b |
| 3 | E | 4 | E3 | third | #ff4fb8 |
| 5 | G | 7 | G3 | fifth | #ffc2df |
| ♭7 | B♭ | 10 | A#3 | seventh | #c88719 |
| ♭9 | D♭ | 1 | C#4 | flat alteration | #3f7ee8 |
| ♯11 | F♯ | 6 | F#4 | sharp alteration | #8d5cff |
| 13 | A | 9 | A4 | extension | #28a87d |

#### App Voicing

The voicing below is generated by the app voicing rules: root + seventh in the shell octave, then third/sus tone, fifth, and extensions in the upper octave.

| Voicing group | Formula | Note | Semitone | App display/play note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Shell octave | 1 | C | 0 | C3 | root | #d84b4b |
| Shell octave | ♭7 | A# | 10 | A#3 | seventh | #c88719 |
| Upper octave | 3 | E | 4 | E4 | third | #ff4fb8 |
| Upper octave | 5 | G | 7 | G4 | fifth | #ffc2df |
| Upper octave | 13 | A | 9 | A4 | extension | #28a87d |
| Upper octave | ♭9 | C# | 1 | C#4 | flat alteration | #3f7ee8 |
| Upper octave | ♯11 | F# | 6 | F#4 | sharp alteration | #8d5cff |

#### Associated Scale Choices

##### 1. C Half-Whole Diminished

- Scale ID: `C_half_whole_diminished`
- Role in source data: primary
- Family: diminished/octatonic
- Formula: 1, ♭9, ♯9, 3, ♯11/♭5, 5, 13, ♭7
- Notes: C, D♭, D♯, E, F♯, G, A, B♭
- Semitones from C: [0, 1, 3, 4, 6, 7, 9, 10]
- Ordered playback/display notes: C3, C#3, D#3, E3, F#3, G3, A3, A#3, C4
- Reason/use: Full diminished-dominant color: b9, #11, natural 5, 13.

Non-root scale association derived by the app:

- Name: C# Whole-Half Diminished
- Root: C# (1 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2/9, ♭3, 4/11, ♭5, ♭13, 13/𝄫7, 7
- Notes/pitch classes: C#, D#, E, F#, G, A, A#, C
- Semitones from C: [1, 3, 4, 6, 7, 9, 10, 0]
- Relationship explanation: C# Whole-Half Diminished is a non-C relative view of C Half-Whole Diminished; same notes, different starting point. It still fits C13b9#11 because it contains C, E, G, A#, C#, F#, A.

### 56. C7#11#5 — dominant seventh sharp eleven sharp five

- ID: `C7_sharp11_sharp5`
- Aliases: C7♯11♯5
- Family: augmented dominant
- Commonness: 3 / 5
- Tags: dominant, whole tone
- Chord formula: 1, 3, ♯5, ♭7, ♯11
- Chord notes: C, E, G♯, B♭, F♯
- Semitones from C: [0, 4, 8, 10, 6]
- Ascending app chord playback/display notes: C3, E3, G#3, A#3, F#4
- Scale choices displayed: 1

#### Chord Tone Roles

| Formula | Note | Semitone | App display note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- |
| 1 | C | 0 | C3 | root | #d84b4b |
| 3 | E | 4 | E3 | third | #ff4fb8 |
| ♯5 | G♯ | 8 | G#3 | sharp alteration | #8d5cff |
| ♭7 | B♭ | 10 | A#3 | seventh | #c88719 |
| ♯11 | F♯ | 6 | F#4 | sharp alteration | #8d5cff |

#### App Voicing

The voicing below is generated by the app voicing rules: root + seventh in the shell octave, then third/sus tone, fifth, and extensions in the upper octave.

| Voicing group | Formula | Note | Semitone | App display/play note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Shell octave | 1 | C | 0 | C3 | root | #d84b4b |
| Shell octave | ♭7 | A# | 10 | A#3 | seventh | #c88719 |
| Upper octave | 3 | E | 4 | E4 | third | #ff4fb8 |
| Upper octave | ♯5 | G# | 8 | G#4 | sharp alteration | #8d5cff |
| Upper octave | ♯11 | F# | 6 | F#4 | sharp alteration | #8d5cff |

#### Associated Scale Choices

##### 1. C Whole Tone

- Scale ID: `C_whole_tone`
- Role in source data: primary
- Family: symmetric
- Formula: 1, 2/9, 3, ♯4/♯11, ♯5/♭13, ♭7
- Notes: C, D, E, F♯, G♯, B♭
- Semitones from C: [0, 2, 4, 6, 8, 10]
- Ordered playback/display notes: C3, D3, E3, F#3, G#3, A#3, C4
- Reason/use: Whole-tone dominant supplies 3, #11, #5 and b7.

Non-root scale association derived by the app:

- Name: D Whole Tone
- Root: D (2 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2/9, 3, ♯4/♯11, ♯5/♭13, ♭7
- Notes/pitch classes: D, E, F#, G#, A#, C
- Semitones from C: [2, 4, 6, 8, 10, 0]
- Relationship explanation: D Whole Tone is a non-C relative view of C Whole Tone; same notes, different starting point. It still fits C7#11#5 because it contains C, E, G#, A#, F#.

### 57. C9#11#5 — dominant ninth sharp eleven sharp five

- ID: `C9_sharp11_sharp5`
- Aliases: C9♯11♯5
- Family: augmented dominant
- Commonness: 3 / 5
- Tags: dominant, whole tone
- Chord formula: 1, 3, ♯5, ♭7, 9, ♯11
- Chord notes: C, E, G♯, B♭, D, F♯
- Semitones from C: [0, 4, 8, 10, 2, 6]
- Ascending app chord playback/display notes: C3, E3, G#3, A#3, D4, F#4
- Scale choices displayed: 1

#### Chord Tone Roles

| Formula | Note | Semitone | App display note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- |
| 1 | C | 0 | C3 | root | #d84b4b |
| 3 | E | 4 | E3 | third | #ff4fb8 |
| ♯5 | G♯ | 8 | G#3 | sharp alteration | #8d5cff |
| ♭7 | B♭ | 10 | A#3 | seventh | #c88719 |
| 9 | D | 2 | D4 | extension | #28a87d |
| ♯11 | F♯ | 6 | F#4 | sharp alteration | #8d5cff |

#### App Voicing

The voicing below is generated by the app voicing rules: root + seventh in the shell octave, then third/sus tone, fifth, and extensions in the upper octave.

| Voicing group | Formula | Note | Semitone | App display/play note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Shell octave | 1 | C | 0 | C3 | root | #d84b4b |
| Shell octave | ♭7 | A# | 10 | A#3 | seventh | #c88719 |
| Upper octave | 3 | E | 4 | E4 | third | #ff4fb8 |
| Upper octave | ♯5 | G# | 8 | G#4 | sharp alteration | #8d5cff |
| Upper octave | 9 | D | 2 | D4 | extension | #28a87d |
| Upper octave | ♯11 | F# | 6 | F#4 | sharp alteration | #8d5cff |

#### Associated Scale Choices

##### 1. C Whole Tone

- Scale ID: `C_whole_tone`
- Role in source data: primary
- Family: symmetric
- Formula: 1, 2/9, 3, ♯4/♯11, ♯5/♭13, ♭7
- Notes: C, D, E, F♯, G♯, B♭
- Semitones from C: [0, 2, 4, 6, 8, 10]
- Ordered playback/display notes: C3, D3, E3, F#3, G#3, A#3, C4
- Reason/use: Full whole-tone dominant sound.

Non-root scale association derived by the app:

- Name: D Whole Tone
- Root: D (2 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2/9, 3, ♯4/♯11, ♯5/♭13, ♭7
- Notes/pitch classes: D, E, F#, G#, A#, C
- Semitones from C: [2, 4, 6, 8, 10, 0]
- Relationship explanation: D Whole Tone is a non-C relative view of C Whole Tone; same notes, different starting point. It still fits C9#11#5 because it contains C, E, G#, A#, D, F#.

### 58. C7alt — altered dominant

- ID: `C7alt`
- Aliases: C7 altered, Calt
- Family: altered dominant
- Commonness: 5 / 5
- Tags: dominant, altered, tension
- Chord formula: 1, 3, ♭7, altered 5ths and 9ths
- Chord notes: C, E, B♭, D♭, D♯, G♭, G♯
- Semitones from C: [0, 4, 10, 1, 3, 6, 8]
- Ascending app chord playback/display notes: C3, E3, A#3, C#4, D#4, F#4, G#4
- Scale choices displayed: 1

#### Chord Tone Roles

| Formula | Note | Semitone | App display note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- |
| 1 | C | 0 | C3 | root | #d84b4b |
| 3 | E | 4 | E3 | third | #ff4fb8 |
| ♭7 | B♭ | 10 | A#3 | seventh | #c88719 |
| altered 5ths and 9ths | D♭ | 1 | C#4 | chord tone |  |

#### App Voicing

The voicing below is generated by the app voicing rules: root + seventh in the shell octave, then third/sus tone, fifth, and extensions in the upper octave.

| Voicing group | Formula | Note | Semitone | App display/play note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Shell octave | 1 | C | 0 | C3 | root | #d84b4b |
| Shell octave | ♭7 | A# | 10 | A#3 | seventh | #c88719 |
| Upper octave | 3 | E | 4 | E4 | third | #ff4fb8 |
| Upper octave | altered 5ths and 9ths | C# | 1 | C#4 | chord tone |  |
| Upper octave |  | D# | 3 | D#4 | chord tone |  |
| Upper octave |  | F# | 6 | F#4 | chord tone |  |
| Upper octave |  | G# | 8 | G#4 | chord tone |  |

#### Associated Scale Choices

##### 1. C Altered / C Super Locrian

- Scale ID: `C_altered`
- Role in source data: primary
- Family: melodic minor modes
- Formula: 1, ♭9, ♯9, 3, ♭5/♯11, ♯5/♭13, ♭7
- Notes: C, D♭, D♯, E, G♭, G♯, B♭
- Semitones from C: [0, 1, 3, 4, 6, 8, 10]
- Ordered playback/display notes: C3, C#3, D#3, E3, F#3, G#3, A#3, C4
- Reason/use: Contains all standard altered dominant tensions: b9, #9, b5/#11, #5/b13.

Non-root scale association derived by the app:

- Name: C# Melodic Minor / jazz minor
- Root: C# (1 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2, ♭3, 4/11, 5, 6/13, 7
- Notes/pitch classes: C#, D#, E, F#, G#, A#, C
- Semitones from C: [1, 3, 4, 6, 8, 10, 0]
- Relationship explanation: C# Melodic Minor / jazz minor is a non-C relative view of C Altered / C Super Locrian; same notes, different starting point. It still fits C7alt because it contains C, E, A#, C#, D#, F#, G#.

### 59. Caug — augmented triad

- ID: `Caug`
- Aliases: C+, C#5
- Family: augmented
- Commonness: 3 / 5
- Tags: augmented
- Chord formula: 1, 3, ♯5
- Chord notes: C, E, G♯
- Semitones from C: [0, 4, 8]
- Ascending app chord playback/display notes: C3, E3, G#3
- Scale choices displayed: 2

#### Chord Tone Roles

| Formula | Note | Semitone | App display note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- |
| 1 | C | 0 | C3 | root | #d84b4b |
| 3 | E | 4 | E3 | third | #ff4fb8 |
| ♯5 | G♯ | 8 | G#3 | sharp alteration | #8d5cff |

#### App Voicing

The voicing below is generated by the app voicing rules: root + seventh in the shell octave, then third/sus tone, fifth, and extensions in the upper octave.

| Voicing group | Formula | Note | Semitone | App display/play note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Shell octave | 1 | C | 0 | C3 | root | #d84b4b |
| Upper octave | 3 | E | 4 | E4 | third | #ff4fb8 |
| Upper octave | ♯5 | G# | 8 | G#4 | sharp alteration | #8d5cff |

#### Associated Scale Choices

##### 1. C Whole Tone

- Scale ID: `C_whole_tone`
- Role in source data: primary dominant/augmented
- Family: symmetric
- Formula: 1, 2/9, 3, ♯4/♯11, ♯5/♭13, ♭7
- Notes: C, D, E, F♯, G♯, B♭
- Semitones from C: [0, 2, 4, 6, 8, 10]
- Ordered playback/display notes: C3, D3, E3, F#3, G#3, A#3, C4
- Reason/use: Common augmented collection.

Non-root scale association derived by the app:

- Name: D Whole Tone
- Root: D (2 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2/9, 3, ♯4/♯11, ♯5/♭13, ♭7
- Notes/pitch classes: D, E, F#, G#, A#, C
- Semitones from C: [2, 4, 6, 8, 10, 0]
- Relationship explanation: D Whole Tone is a non-C relative view of C Whole Tone; same notes, different starting point. It still fits Caug because it contains C, E, G#.

##### 2. C Lydian Augmented

- Scale ID: `C_lydian_augmented`
- Role in source data: major seventh option
- Family: melodic minor modes
- Formula: 1, 2, 3, ♯4/♯11, ♯5, 6, 7
- Notes: C, D, E, F♯, G♯, A, B
- Semitones from C: [0, 2, 4, 6, 8, 9, 11]
- Ordered playback/display notes: C3, D3, E3, F#3, G#3, A3, B3, C4
- Reason/use: Use if a major 7 / #11 color is desired.

Non-root scale association derived by the app:

- Name: D Lydian Dominant / D Mixolydian #11
- Root: D (2 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2/9, 3, ♯4/♯11, 5, 6/13, ♭7
- Notes/pitch classes: D, E, F#, G#, A, B, C
- Semitones from C: [2, 4, 6, 8, 9, 11, 0]
- Relationship explanation: D Lydian Dominant / D Mixolydian #11 is a non-C relative view of C Lydian Augmented; same notes, different starting point. It still fits Caug because it contains C, E, G#.

### 60. Cdim7 — diminished seventh

- ID: `Cdim7`
- Aliases: Co7, C°7
- Family: diminished
- Commonness: 4 / 5
- Tags: diminished, passing chord
- Chord formula: 1, ♭3, ♭5, 𝄫7
- Chord notes: C, E♭, G♭, A
- Semitones from C: [0, 3, 6, 9]
- Ascending app chord playback/display notes: C3, D#3, F#3, A3
- Scale choices displayed: 1

#### Chord Tone Roles

| Formula | Note | Semitone | App display note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- |
| 1 | C | 0 | C3 | root | #d84b4b |
| ♭3 | E♭ | 3 | D#3 | third | #ff4fb8 |
| ♭5 | G♭ | 6 | F#3 | flat alteration | #3f7ee8 |
| 𝄫7 | A | 9 | A3 | seventh | #c88719 |

#### App Voicing

The voicing below is generated by the app voicing rules: root + seventh in the shell octave, then third/sus tone, fifth, and extensions in the upper octave.

| Voicing group | Formula | Note | Semitone | App display/play note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Shell octave | 1 | C | 0 | C3 | root | #d84b4b |
| Shell octave | 𝄫7 | A | 9 | A3 | seventh | #c88719 |
| Upper octave | ♭3 | D# | 3 | D#4 | third | #ff4fb8 |
| Upper octave | ♭5 | F# | 6 | F#4 | flat alteration | #3f7ee8 |

#### Associated Scale Choices

##### 1. C Whole-Half Diminished

- Scale ID: `C_whole_half_diminished`
- Role in source data: primary
- Family: diminished/octatonic
- Formula: 1, 2/9, ♭3, 4/11, ♭5, ♭13, 13/𝄫7, 7
- Notes: C, D, E♭, F, G♭, A♭, A, B
- Semitones from C: [0, 2, 3, 5, 6, 8, 9, 11]
- Ordered playback/display notes: C3, D3, D#3, F3, F#3, G#3, A3, B3, C4
- Reason/use: Direct diminished seventh chord-scale.

Non-root scale association derived by the app:

- Name: D Half-Whole Diminished
- Root: D (2 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, ♭9, ♯9, 3, ♯11/♭5, 5, 13, ♭7
- Notes/pitch classes: D, D#, F, F#, G#, A, B, C
- Semitones from C: [2, 3, 5, 6, 8, 9, 11, 0]
- Relationship explanation: D Half-Whole Diminished is a non-C relative view of C Whole-Half Diminished; same notes, different starting point. It still fits Cdim7 because it contains C, D#, F#, A.

### 61. CdimMaj7 — diminished major seventh

- ID: `CdimMaj7`
- Aliases: C°maj7
- Family: diminished
- Commonness: 1 / 5
- Tags: rare, advanced
- Chord formula: 1, ♭3, ♭5, 7
- Chord notes: C, E♭, G♭, B
- Semitones from C: [0, 3, 6, 11]
- Ascending app chord playback/display notes: C3, D#3, F#3, B3
- Scale choices displayed: 1

#### Chord Tone Roles

| Formula | Note | Semitone | App display note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- |
| 1 | C | 0 | C3 | root | #d84b4b |
| ♭3 | E♭ | 3 | D#3 | third | #ff4fb8 |
| ♭5 | G♭ | 6 | F#3 | flat alteration | #3f7ee8 |
| 7 | B | 11 | B3 | seventh | #c88719 |

#### App Voicing

The voicing below is generated by the app voicing rules: root + seventh in the shell octave, then third/sus tone, fifth, and extensions in the upper octave.

| Voicing group | Formula | Note | Semitone | App display/play note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Shell octave | 1 | C | 0 | C3 | root | #d84b4b |
| Shell octave | 7 | B | 11 | B3 | seventh | #c88719 |
| Upper octave | ♭3 | D# | 3 | D#4 | third | #ff4fb8 |
| Upper octave | ♭5 | F# | 6 | F#4 | flat alteration | #3f7ee8 |

#### Associated Scale Choices

##### 1. C Whole-Half Diminished

- Scale ID: `C_whole_half_diminished`
- Role in source data: closest common source
- Family: diminished/octatonic
- Formula: 1, 2/9, ♭3, 4/11, ♭5, ♭13, 13/𝄫7, 7
- Notes: C, D, E♭, F, G♭, A♭, A, B
- Semitones from C: [0, 2, 3, 5, 6, 8, 9, 11]
- Ordered playback/display notes: C3, D3, D#3, F3, F#3, G#3, A3, B3, C4
- Reason/use: Whole-half diminished contains the diminished triad and major 7 color.

Non-root scale association derived by the app:

- Name: D Half-Whole Diminished
- Root: D (2 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, ♭9, ♯9, 3, ♯11/♭5, 5, 13, ♭7
- Notes/pitch classes: D, D#, F, F#, G#, A, B, C
- Semitones from C: [2, 3, 5, 6, 8, 9, 11, 0]
- Relationship explanation: D Half-Whole Diminished is a non-C relative view of C Whole-Half Diminished; same notes, different starting point. It still fits CdimMaj7 because it contains C, D#, F#, B.

### 62. Cadd9 — major add nine

- ID: `Cadd9`
- Aliases: None
- Family: major
- Commonness: 4 / 5
- Tags: add chord, pop, funk
- Chord formula: 1, 3, 5, 9
- Chord notes: C, E, G, D
- Semitones from C: [0, 4, 7, 2]
- Ascending app chord playback/display notes: C3, E3, G3, D4
- Scale choices displayed: 2

#### Chord Tone Roles

| Formula | Note | Semitone | App display note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- |
| 1 | C | 0 | C3 | root | #d84b4b |
| 3 | E | 4 | E3 | third | #ff4fb8 |
| 5 | G | 7 | G3 | fifth | #ffc2df |
| 9 | D | 2 | D4 | extension | #28a87d |

#### App Voicing

The voicing below is generated by the app voicing rules: root + seventh in the shell octave, then third/sus tone, fifth, and extensions in the upper octave.

| Voicing group | Formula | Note | Semitone | App display/play note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Shell octave | 1 | C | 0 | C3 | root | #d84b4b |
| Upper octave | 3 | E | 4 | E4 | third | #ff4fb8 |
| Upper octave | 5 | G | 7 | G4 | fifth | #ffc2df |
| Upper octave | 9 | D | 2 | D4 | extension | #28a87d |

#### Associated Scale Choices

##### 1. C Major Pentatonic

- Scale ID: `C_major_pentatonic`
- Role in source data: primary
- Family: pentatonic
- Formula: 1, 2, 3, 5, 6
- Notes: C, D, E, G, A
- Semitones from C: [0, 2, 4, 7, 9]
- Ordered playback/display notes: C3, D3, E3, G3, A3, C4
- Reason/use: Directly contains 1-2-3-5.

Non-root scale association derived by the app:

- Name: A Minor Pentatonic
- Root: A (9 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, ♭3, 4/11, 5, ♭7
- Notes/pitch classes: A, C, D, E, G
- Semitones from C: [9, 0, 2, 4, 7]
- Relationship explanation: A Minor Pentatonic is a non-C relative view of C Major Pentatonic; same notes, different starting point. It still fits Cadd9 because it contains C, E, G, D.

##### 2. C Ionian / C major

- Scale ID: `C_ionian`
- Role in source data: inside/basic
- Family: major modes
- Formula: 1, 2, 3, 4, 5, 6, 7
- Notes: C, D, E, F, G, A, B
- Semitones from C: [0, 2, 4, 5, 7, 9, 11]
- Ordered playback/display notes: C3, D3, E3, F3, G3, A3, B3, C4
- Reason/use: Plain major add9 sound.

Non-root scale association derived by the app:

- Name: D Dorian
- Root: D (2 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2, ♭3, 4/11, 5, 6/13, ♭7
- Notes/pitch classes: D, E, F, G, A, B, C
- Semitones from C: [2, 4, 5, 7, 9, 11, 0]
- Relationship explanation: D Dorian is a non-C relative view of C Ionian / C major; same notes, different starting point. It still fits Cadd9 because it contains C, E, G, D.

### 63. Cmadd9 — minor add nine

- ID: `Cmadd9`
- Aliases: C- add9
- Family: minor
- Commonness: 4 / 5
- Tags: add chord, minor
- Chord formula: 1, ♭3, 5, 9
- Chord notes: C, E♭, G, D
- Semitones from C: [0, 3, 7, 2]
- Ascending app chord playback/display notes: C3, D#3, G3, D4
- Scale choices displayed: 2

#### Chord Tone Roles

| Formula | Note | Semitone | App display note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- |
| 1 | C | 0 | C3 | root | #d84b4b |
| ♭3 | E♭ | 3 | D#3 | third | #ff4fb8 |
| 5 | G | 7 | G3 | fifth | #ffc2df |
| 9 | D | 2 | D4 | extension | #28a87d |

#### App Voicing

The voicing below is generated by the app voicing rules: root + seventh in the shell octave, then third/sus tone, fifth, and extensions in the upper octave.

| Voicing group | Formula | Note | Semitone | App display/play note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Shell octave | 1 | C | 0 | C3 | root | #d84b4b |
| Upper octave | ♭3 | D# | 3 | D#4 | third | #ff4fb8 |
| Upper octave | 5 | G | 7 | G4 | fifth | #ffc2df |
| Upper octave | 9 | D | 2 | D4 | extension | #28a87d |

#### Associated Scale Choices

##### 1. C Dorian

- Scale ID: `C_dorian`
- Role in source data: primary
- Family: major modes
- Formula: 1, 2, ♭3, 4/11, 5, 6/13, ♭7
- Notes: C, D, E♭, F, G, A, B♭
- Semitones from C: [0, 2, 3, 5, 7, 9, 10]
- Ordered playback/display notes: C3, D3, D#3, F3, G3, A3, A#3, C4
- Reason/use: Minor add9 with natural 6 available.

Non-root scale association derived by the app:

- Name: A# Ionian / A# major
- Root: A# (10 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2, 3, 4, 5, 6, 7
- Notes/pitch classes: A#, C, D, D#, F, G, A
- Semitones from C: [10, 0, 2, 3, 5, 7, 9]
- Relationship explanation: A# Ionian / A# major is a non-C relative view of C Dorian; same notes, different starting point. It still fits Cmadd9 because it contains C, D#, G, D.

##### 2. C Melodic Minor / jazz minor

- Scale ID: `C_melodic_minor`
- Role in source data: tonic minor option
- Family: melodic minor
- Formula: 1, 2, ♭3, 4/11, 5, 6/13, 7
- Notes: C, D, E♭, F, G, A, B
- Semitones from C: [0, 2, 3, 5, 7, 9, 11]
- Ordered playback/display notes: C3, D3, D#3, F3, G3, A3, B3, C4
- Reason/use: Minor add9 with major 7/natural 6 color.

Non-root scale association derived by the app:

- Name: D# Lydian Augmented
- Root: D# (3 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, 2, 3, ♯4/♯11, ♯5, 6, 7
- Notes/pitch classes: D#, F, G, A, B, C, D
- Semitones from C: [3, 5, 7, 9, 11, 0, 2]
- Relationship explanation: D# Lydian Augmented is a non-C relative view of C Melodic Minor / jazz minor; same notes, different starting point. It still fits Cmadd9 because it contains C, D#, G, D.

### 64. Csus2 — suspended second

- ID: `Csus2`
- Aliases: None
- Family: suspended
- Commonness: 4 / 5
- Tags: sus2, open voicing
- Chord formula: 1, 2, 5
- Chord notes: C, D, G
- Semitones from C: [0, 2, 7]
- Ascending app chord playback/display notes: C3, D3, G3
- Scale choices displayed: 2

#### Chord Tone Roles

| Formula | Note | Semitone | App display note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- |
| 1 | C | 0 | C3 | root | #d84b4b |
| 2 | D | 2 | D3 | extension | #28a87d |
| 5 | G | 7 | G3 | fifth | #ffc2df |

#### App Voicing

The voicing below is generated by the app voicing rules: root + seventh in the shell octave, then third/sus tone, fifth, and extensions in the upper octave.

| Voicing group | Formula | Note | Semitone | App display/play note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Shell octave | 1 | C | 0 | C3 | root | #d84b4b |
| Upper octave | 2 | D | 2 | D4 | extension | #28a87d |
| Upper octave | 5 | G | 7 | G4 | fifth | #ffc2df |

#### Associated Scale Choices

##### 1. C Major Pentatonic

- Scale ID: `C_major_pentatonic`
- Role in source data: primary bright/simple
- Family: pentatonic
- Formula: 1, 2, 3, 5, 6
- Notes: C, D, E, G, A
- Semitones from C: [0, 2, 4, 7, 9]
- Ordered playback/display notes: C3, D3, E3, G3, A3, C4
- Reason/use: Open sus2 major-pentatonic sound.

Non-root scale association derived by the app:

- Name: A Minor Pentatonic
- Root: A (9 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, ♭3, 4/11, 5, ♭7
- Notes/pitch classes: A, C, D, E, G
- Semitones from C: [9, 0, 2, 4, 7]
- Relationship explanation: A Minor Pentatonic is a non-C relative view of C Major Pentatonic; same notes, different starting point. It still fits Csus2 because it contains C, D, G.

##### 2. C Sus Pentatonic

- Scale ID: `C_sus_pentatonic`
- Role in source data: dominant/funk option
- Family: pentatonic
- Formula: 1, 2/9, 4/11, 5, ♭7
- Notes: C, D, F, G, B♭
- Semitones from C: [0, 2, 5, 7, 10]
- Ordered playback/display notes: C3, D3, F3, G3, A#3, C4
- Reason/use: Adds 4 and b7 for funk sus color.

Non-root scale association derived by the app:

- Name: G Minor Pentatonic
- Root: G (7 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, ♭3, 4/11, 5, ♭7
- Notes/pitch classes: G, A#, C, D, F
- Semitones from C: [7, 10, 0, 2, 5]
- Relationship explanation: G Minor Pentatonic is a non-C relative view of C Sus Pentatonic; same notes, different starting point. It still fits Csus2 because it contains C, D, G.

### 65. Csus4 — suspended fourth

- ID: `Csus4`
- Aliases: None
- Family: suspended
- Commonness: 4 / 5
- Tags: sus4, quartal
- Chord formula: 1, 4, 5
- Chord notes: C, F, G
- Semitones from C: [0, 5, 7]
- Ascending app chord playback/display notes: C3, F3, G3
- Scale choices displayed: 2

#### Chord Tone Roles

| Formula | Note | Semitone | App display note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- |
| 1 | C | 0 | C3 | root | #d84b4b |
| 4 | F | 5 | F3 | extension | #28a87d |
| 5 | G | 7 | G3 | fifth | #ffc2df |

#### App Voicing

The voicing below is generated by the app voicing rules: root + seventh in the shell octave, then third/sus tone, fifth, and extensions in the upper octave.

| Voicing group | Formula | Note | Semitone | App display/play note | Role/color group | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Shell octave | 1 | C | 0 | C3 | root | #d84b4b |
| Upper octave | 4 | F | 5 | F4 | extension | #28a87d |
| Upper octave | 5 | G | 7 | G4 | fifth | #ffc2df |

#### Associated Scale Choices

##### 1. C Sus Pentatonic

- Scale ID: `C_sus_pentatonic`
- Role in source data: primary funk/modal
- Family: pentatonic
- Formula: 1, 2/9, 4/11, 5, ♭7
- Notes: C, D, F, G, B♭
- Semitones from C: [0, 2, 5, 7, 10]
- Ordered playback/display notes: C3, D3, F3, G3, A#3, C4
- Reason/use: Compact sus vocabulary.

Non-root scale association derived by the app:

- Name: G Minor Pentatonic
- Root: G (7 semitones from C)
- Same pitch collection as selected scale: yes
- Formula: 1, ♭3, 4/11, 5, ♭7
- Notes/pitch classes: G, A#, C, D, F
- Semitones from C: [7, 10, 0, 2, 5]
- Relationship explanation: G Minor Pentatonic is a non-C relative view of C Sus Pentatonic; same notes, different starting point. It still fits Csus4 because it contains C, F, G.

##### 2. C Dominant Sus / Mixolydian Sus

- Scale ID: `C_dominant_sus`
- Role in source data: dominant option
- Family: suspended dominant
- Formula: 1, 2/9, 4/11, 5, 6/13, ♭7
- Notes: C, D, F, G, A, B♭
- Semitones from C: [0, 2, 5, 7, 9, 10]
- Ordered playback/display notes: C3, D3, F3, G3, A3, A#3, C4
- Reason/use: Adds 9, 13, b7.

Non-root scale association derived by the app:

- Name: D# Ionian / D# major
- Root: D# (3 semitones from C)
- Same pitch collection as selected scale: no
- Formula: 1, 2, 3, 4, 5, 6, 7
- Notes/pitch classes: D#, F, G, G#, A#, C, D
- Semitones from C: [3, 5, 7, 8, 10, 0, 2]
- Relationship explanation: D# Ionian / D# major is not the same pitch collection as C Dominant Sus / Mixolydian Sus, but it fits Csus4 because it contains C, F, G.

## Pentatonic Rows Derived By The App

The app now adds optional pentatonic rows below each scale row. A pentatonic row is shown only when the pentatonic scale is a subset of the parent scale and shares at least three chord tones with the chord. Parent scales that are already pentatonic do not receive a duplicate pentatonic row.

- Root/selected-scale pentatonic rows shown across all scale choices: 75
- Non-root-scale pentatonic rows shown across all scale choices: 76
- Total optional pentatonic rows shown across all scale choices: 151

| Chord | Selected scale | Pentatonic under selected scale | Non-root scale | Pentatonic under non-root scale |
| --- | --- | --- | --- | --- |
| Cmaj7 | C Lydian | C Major Pentatonic | G Ionian / G major | G Major Pentatonic |
| Cmaj7 | C Ionian / C major | C Major Pentatonic | D Dorian | D Sus Pentatonic |
| Cmaj9 | C Lydian | C Major Pentatonic | G Ionian / G major | G Major Pentatonic |
| Cmaj9 | C Ionian / C major | C Major Pentatonic | D Dorian | D Minor Pentatonic |
| Cmaj13 | C Lydian | C Major Pentatonic | G Ionian / G major | G Major Pentatonic |
| Cmaj13 | C Ionian / C major | C Major Pentatonic | D Dorian | D Minor Pentatonic |
| C6 | C Major Pentatonic | None | A Minor Pentatonic | None |
| C6 | C Ionian / C major | C Major Pentatonic | D Dorian | D Minor Pentatonic |
| C6/9 | C Major Pentatonic | None | A Minor Pentatonic | None |
| C6/9 | C Lydian | C Major Pentatonic | G Ionian / G major | G Major Pentatonic |
| Cmaj7#11 | C Lydian | C Major Pentatonic | G Ionian / G major | G Major Pentatonic |
| Cmaj9#11 | C Lydian | C Major Pentatonic | G Ionian / G major | G Major Pentatonic |
| Cmaj13#11 | C Lydian | C Major Pentatonic | G Ionian / G major | G Major Pentatonic |
| Cmaj7#5 | C Lydian Augmented | E Dominant Pentatonic | D Lydian Dominant / D Mixolydian #11 | E Dominant Pentatonic |
| Cmaj7#5 | C Augmented Scale | None | E Augmented Scale | None |
| Cmaj9#5 | C Lydian Augmented | D Major Pentatonic | D Lydian Dominant / D Mixolydian #11 | D Dominant Pentatonic |
| Cmaj7#5#11 | C Lydian Augmented | D Major Pentatonic | D Lydian Dominant / D Mixolydian #11 | D Dominant Pentatonic |
| Cm7 | C Dorian | C Minor Pentatonic | A# Ionian / A# major | A# Major Pentatonic |
| Cm7 | C Aeolian / natural minor | C Minor Pentatonic | D# Ionian / D# major | D# Major Pentatonic |
| Cm7 | C Minor Pentatonic | None | D# Major Pentatonic | None |
| Cm9 | C Dorian | C Minor Pentatonic | A# Ionian / A# major | A# Major Pentatonic |
| Cm9 | C Melodic Minor / jazz minor | D Minor Pentatonic | D# Ionian / D# major | D# Major Pentatonic |
| Cm11 | C Dorian | C Minor Pentatonic | A# Ionian / A# major | A# Major Pentatonic |
| Cm11 | C Minor Pentatonic | None | D# Ionian / D# major | D# Major Pentatonic |
| Cm13 | C Dorian | C Minor Pentatonic | A# Ionian / A# major | A# Major Pentatonic |
| Cm6 | C Melodic Minor / jazz minor | D Minor Pentatonic | D# Lydian Augmented | D Minor Pentatonic |
| Cm6 | C Dorian | C Minor Pentatonic | A# Ionian / A# major | D# Major Pentatonic |
| Cm6/9 | C Melodic Minor / jazz minor | D Minor Pentatonic | D# Lydian Augmented | D Minor Pentatonic |
| Cm6/9 | C Dorian | C Minor Pentatonic | A# Ionian / A# major | A# Major Pentatonic |
| Cm(maj7) | C Melodic Minor / jazz minor | F Dominant Pentatonic | D# Lydian Augmented | F Dominant Pentatonic |
| Cm(maj7) | C Harmonic Minor | None | G Phrygian Dominant / Mixolydian b9 b13 | None |
| Cm(maj9) | C Melodic Minor / jazz minor | D Minor Pentatonic | D# Lydian Augmented | D Minor Pentatonic |
| Cm(maj13) | C Melodic Minor / jazz minor | D Minor Pentatonic | D# Lydian Augmented | D Minor Pentatonic |
| Cm7b13 | C Aeolian / natural minor | C Minor Pentatonic | D# Ionian / D# major | D# Major Pentatonic |
| Cm7b13 | C Phrygian | C Minor Pentatonic | G# Ionian / G# major | G# Major Pentatonic |
| Cm7b9 | C Phrygian | C Minor Pentatonic | G# Ionian / G# major | G# Major Pentatonic |
| Cm11b9 | C Phrygian | C Minor Pentatonic | G# Ionian / G# major | G# Major Pentatonic |
| Cm7b5 | C Locrian Natural 2 | G# Dominant Pentatonic | D Altered / D Super Locrian | F Minor Pentatonic |
| Cm7b5 | C Locrian | G# Dominant Pentatonic | C# Ionian / C# major | G# Major Pentatonic |
| Cm9b5 | C Locrian Natural 2 | G# Dominant Pentatonic | D Altered / D Super Locrian | F Minor Pentatonic |
| Cm11b5 | C Locrian Natural 2 | F Minor Pentatonic | D Altered / D Super Locrian | F Minor Pentatonic |
| C7 | C Mixolydian | C Dominant Pentatonic | F Ionian / F major | C Major Pentatonic |
| C7 | C Bebop Dominant | C Dominant Pentatonic | G Mixolydian Blues | G Minor Pentatonic |
| C7 | C Mixolydian Blues | C Dominant Pentatonic | F Bebop Dominant | F Sus Pentatonic |
| C9 | C Mixolydian | C Dominant Pentatonic | F Ionian / F major | F Major Pentatonic |
| C9 | C Dominant Pentatonic | None | F Ionian / F major | F Major Pentatonic |
| C11 | C Mixolydian | C Dominant Pentatonic | F Ionian / F major | F Major Pentatonic |
| C11 | C Dominant Sus / Mixolydian Sus | C Sus Pentatonic | F Ionian / F major | F Major Pentatonic |
| C13 | C Mixolydian | C Dominant Pentatonic | F Ionian / F major | F Major Pentatonic |
| C13 | C Bebop Dominant | C Dominant Pentatonic | G Mixolydian Blues | G Major Pentatonic |
| C13 | C Mixolydian Blues | C Dominant Pentatonic | F Bebop Dominant | F Dominant Pentatonic |
| C7sus4 | C Dominant Sus / Mixolydian Sus | C Sus Pentatonic | D# Ionian / D# major | D# Major Pentatonic |
| C7sus4 | C Sus Pentatonic | None | G Minor Pentatonic | None |
| C7sus4 | C Minor Pentatonic | None | D# Major Pentatonic | None |
| C9sus4 | C Dominant Sus / Mixolydian Sus | C Sus Pentatonic | D# Ionian / D# major | D# Major Pentatonic |
| C9sus4 | C Sus Pentatonic | None | G Minor Pentatonic | None |
| C13sus4 | C Dominant Sus / Mixolydian Sus | C Sus Pentatonic | F Ionian / F major | F Major Pentatonic |
| C13sus4 | C Dorian | C Minor Pentatonic | A# Ionian / A# major | A# Major Pentatonic |
| C7sus2 | C Sus Pentatonic | None | G Minor Pentatonic | None |
| C7sus2 | C Dominant Sus / Mixolydian Sus | C Sus Pentatonic | D# Ionian / D# major | D# Major Pentatonic |
| C7sus4b9 | C Phrygian | C Minor Pentatonic | G# Ionian / G# major | G# Major Pentatonic |
| C7sus4b9 | C Phrygian Dominant / Mixolydian b9 b13 | None | F Harmonic Minor | None |
| C7#11 | C Lydian Dominant / C Mixolydian #11 | C Dominant Pentatonic | E Locrian Natural 2 | A Minor Pentatonic |
| C7#11 | C Whole Tone | None | C# Whole-Half Diminished | None |
| C9#11 | C Lydian Dominant / C Mixolydian #11 | C Dominant Pentatonic | E Locrian Natural 2 | A Minor Pentatonic |
| C13#11 | C Lydian Dominant / C Mixolydian #11 | C Dominant Pentatonic | E Locrian Natural 2 | A Minor Pentatonic |
| C7b5 | C Lydian Dominant / C Mixolydian #11 | C Dominant Pentatonic | E Locrian Natural 2 | C Dominant Pentatonic |
| C7b5 | C Altered / C Super Locrian | G# Dominant Pentatonic | C# Melodic Minor / jazz minor | G# Dominant Pentatonic |
| C9b5 | C Lydian Dominant / C Mixolydian #11 | C Dominant Pentatonic | E Locrian Natural 2 | A Minor Pentatonic |
| C7#5 | C Whole Tone | None | D Whole Tone | None |
| C7#5 | C Altered / C Super Locrian | G# Dominant Pentatonic | C# Melodic Minor / jazz minor | G# Dominant Pentatonic |
| C9#5 | C Whole Tone | None | D Whole Tone | None |
| C7b9 | C Half-Whole Diminished | None | C# Whole-Half Diminished | None |
| C7b9 | C Phrygian Dominant / Mixolydian b9 b13 | None | F Harmonic Minor | None |
| C7b9 | C Altered / C Super Locrian | F# Dominant Pentatonic | C# Whole-Half Diminished | None |
| C7#9 | C Half-Whole Diminished | None | C# Whole-Half Diminished | None |
| C7#9 | C Altered / C Super Locrian | G# Dominant Pentatonic | C# Whole-Half Diminished | None |
| C7#9 | C Mixolydian Blues | C Dominant Pentatonic | F Bebop Dominant | F Dominant Pentatonic |
| C7b13 | C Phrygian Dominant / Mixolydian b9 b13 | None | F Harmonic Minor | None |
| C7b13 | C Altered / C Super Locrian | G# Dominant Pentatonic | D Locrian Natural 2 | G Minor Pentatonic |
| C9b13 | C Mixolydian | C Dominant Pentatonic | D Locrian Natural 2 | G Minor Pentatonic |
| C9b13 | C Altered / C Super Locrian | G# Dominant Pentatonic | D Locrian Natural 2 | G Minor Pentatonic |
| C9b13 | C Whole Tone | None | D Locrian Natural 2 | G Minor Pentatonic |
| C7b9b13 | C Phrygian Dominant / Mixolydian b9 b13 | None | F Harmonic Minor | None |
| C7b9b13 | C Altered / C Super Locrian | G# Dominant Pentatonic | F Harmonic Minor | None |
| C7#9b13 | C Altered / C Super Locrian | G# Dominant Pentatonic | C# Melodic Minor / jazz minor | G# Dominant Pentatonic |
| C7#9b13 | C Half-Whole Diminished | None | C# Melodic Minor / jazz minor | G# Dominant Pentatonic |
| C7b9#5 | C Altered / C Super Locrian | G# Dominant Pentatonic | C# Melodic Minor / jazz minor | D# Minor Pentatonic |
| C7#9#5 | C Altered / C Super Locrian | G# Dominant Pentatonic | C# Melodic Minor / jazz minor | G# Dominant Pentatonic |
| C7b5b9 | C Half-Whole Diminished | None | C# Whole-Half Diminished | None |
| C7b5b9 | C Altered / C Super Locrian | G# Dominant Pentatonic | C# Melodic Minor / jazz minor | D# Minor Pentatonic |
| C7b5#9 | C Altered / C Super Locrian | G# Dominant Pentatonic | C# Melodic Minor / jazz minor | G# Dominant Pentatonic |
| C7b5#9 | C Half-Whole Diminished | None | C# Whole-Half Diminished | None |
| C13b9 | C Half-Whole Diminished | None | C# Whole-Half Diminished | None |
| C13#9 | C Half-Whole Diminished | None | C# Whole-Half Diminished | None |
| C13#9 | C Mixolydian Blues | C Dominant Pentatonic | F Bebop Dominant | F Dominant Pentatonic |
| C13b9#11 | C Half-Whole Diminished | None | C# Whole-Half Diminished | None |
| C7#11#5 | C Whole Tone | None | D Whole Tone | None |
| C9#11#5 | C Whole Tone | None | D Whole Tone | None |
| C7alt | C Altered / C Super Locrian | G# Dominant Pentatonic | C# Melodic Minor / jazz minor | D# Minor Pentatonic |
| Caug | C Whole Tone | None | D Whole Tone | None |
| Caug | C Lydian Augmented | None | D Lydian Dominant / D Mixolydian #11 | None |
| Cdim7 | C Whole-Half Diminished | None | D Half-Whole Diminished | None |
| CdimMaj7 | C Whole-Half Diminished | None | D Half-Whole Diminished | None |
| Cadd9 | C Major Pentatonic | None | A Minor Pentatonic | None |
| Cadd9 | C Ionian / C major | C Major Pentatonic | D Dorian | D Minor Pentatonic |
| Cmadd9 | C Dorian | C Minor Pentatonic | A# Ionian / A# major | A# Major Pentatonic |
| Cmadd9 | C Melodic Minor / jazz minor | D Minor Pentatonic | D# Lydian Augmented | D Minor Pentatonic |
| Csus2 | C Major Pentatonic | None | A Minor Pentatonic | None |
| Csus2 | C Sus Pentatonic | None | G Minor Pentatonic | None |
| Csus4 | C Sus Pentatonic | None | G Minor Pentatonic | None |
| Csus4 | C Dominant Sus / Mixolydian Sus | C Sus Pentatonic | D# Ionian / D# major | D# Major Pentatonic |

## Machine-Readable Caveat

This Markdown preserves the user-facing music vocabulary and app-derived relationships. If exact runtime behavior is needed, use the app source files alongside this document because the app also includes UI rendering and Web Audio playback behavior.
