# Chords Voicings Scales

Static web app for browsing jazz/funk chords with chord voicings, compatible scales, root transposition, graphical keyboards, and playback.

Secret scanning is configured with a Gitleaks pre-commit hook:

```bash
git config core.hooksPath .githooks
```

Run or refresh the temporary tunnel:

```bash
python3 ~/.codex/skills/serve-static-tunnel/scripts/serve_static_tunnel.py "/Users/robertfiedor/Documents/Chords Voicings Scales" --name chords-voicings-scales
```
