# VIBRA - Feel the Music. Live the Moment.

> **Academic Project**: B.Tech First Year (Second Semester) Web Development Project  
> **Topic**: Modern Responsive Music Streaming Web Platform  
> **Tech Stack**: HTML5, CSS3, Vanilla JavaScript (ES6+), HTML5 Audio API, LocalStorage  

---

## 🌟 Project Overview

**VIBRA** is a commercial-quality, ultra-responsive music streaming web platform designed with an obsidian-black and electric-purple dark interface. Inspired by modern streaming leaders like Spotify and Apple Music, VIBRA demonstrates core frontend web engineering capabilities without relying on external UI libraries, commercial music licenses, or paid backend services.

---

## 🎨 Visual Identity & UI/UX Design System

- **Color Palette**:
  - Obsidian & Charcoal Backgrounds: `#08080a`, `#0e0e13`, `#13131a`, `#181822`
  - Electric Purple Brand & Glow: `#a855f7`, `#c084fc`, `#7e22ce`, `rgba(168, 85, 247, 0.38)`
  - Vibrant Neon Accents: Neon Cyan (`#06b6d4`), Magenta (`#ec4899`), Warm Amber (`#f59e0b`)
- **Visual Design Elements**:
  - Glassmorphism (`backdrop-filter: blur(20px)`)
  - Smooth micro-interactions & hover transformations
  - Animated soundwave equalizer in the brand logo and active playing track table rows
  - Responsive layouts optimized across desktop monitors, tablets, and mobile devices
  - Clean typographic hierarchy using system sans-serif fonts

---

## 📂 Project Structure

```
VIBRA/
├── index.html                   # Semantic HTML5 Application Shell
├── style.css                    # Complete CSS3 Design System & Responsive Rules
├── script.js                    # Core Application Logic, State & Audio Player
├── server.js                    # Node.js HTTP Server with Byte-Range Audio Streaming
├── test_app.js                  # Automated Integrity & DOM Test Suite
├── generate_audio.js            # Node.js Multi-Track Harmonic WAV Synthesizer
├── generate_artwork.js          # SVG Vector Album Art & Artist Avatar Generator
├── assets/
│   ├── audio/
│   │   ├── track1.wav           # "Midnight Cyber Pulse" (Synthwave)
│   │   ├── track2.wav           # "Electric Horizon" (Future Bass)
│   │   ├── track3.wav           # "Maya (Illusion of Love)" (Telugu Indie)
│   │   ├── track4.wav           # "Cosmic Velvet" (Chill Vibes)
│   │   ├── track5.wav           # "Velocity Overdrive" (Workout Energy)
│   │   ├── track6.wav           # "Chandamama Beats" (Telugu Hits)
│   │   ├── track7.wav           # "Deep Focus Alpha" (Focus Music 432Hz)
│   │   ├── track8.wav           # "Pranama (Breath of Heart)" (Telugu Melodic)
│   │   ├── track9.wav           # "Starlight Serenade" (Romantic Melodies)
│   │   ├── track10.wav          # "Urban Monsoon" (Chill Neo-Soul)
│   │   ├── track11.wav          # "Titanium Drive" (Workout EDM)
│   │   └── track12.wav          # "Infinite Reverie" (Focus Music)
│   └── images/
│       ├── albums/              # Custom vector album artworks (album1 to album6)
│       ├── artists/             # Custom vector artist avatars (artist1 to artist6)
│       └── playlists/           # Vector curated playlist covers (trending, telugu, etc.)
└── README.md                    # Project Documentation
```

---

## 🚀 Key Functional Modules

### 1. Sidebar Navigation
- Animated equalizer brand logo with tagline.
- Main navigation: **Home**, **Explore**, **Artists**, **Albums**.
- Personal collection: **Playlists**, **Recently Played**, **Favorites** (with live count badge), **Library**.
- **Your Playlists**: Dynamic list of user-created playlists with quick-create button (`+`).
- Studio Lossless audio badge with interactive keyboard shortcuts trigger.

### 2. Top Navigation
- History navigation controls (`<` Back / `>` Forward).
- Real-time global search bar with instant autocomplete across songs, artists, albums, and genres.
- Notification bell with unread badge and dropdown popover.
- VIP Profile avatar with listening tier and user settings dropdown.
- Mobile hamburger menu for small screen drawer navigation.

### 3. Hero Section
- High-impact spotlight banner featuring "Cyber Nocturne".
- Glassmorphic glowing tags, track description, and metadata.
- One-click **Play Now** and **Explore Music** actions.
- Instant favorite toggle on the spotlight release.

### 4. Popular Tracks Table
- Track index with animated equalizer graphic when playing.
- Artwork thumbnail, song title, artist, album, genre tag, and duration.
- Row actions: **Play/Pause**, **Heart/Favorite**, and **Add to Playlist (`+`)**.

### 5. Curated Playlists
Six distinct curated mood categories:
1. **Trending Hits**
2. **Chill Vibes**
3. **Workout Energy**
4. **Romantic Melodies**
5. **Focus Music**
6. **Telugu Hits** (Featuring Tollywood and modern indie grooves)

### 6. Popular Artists & Featured Albums
- Circular artist avatars with monthly listeners and "View Discography" actions.
- Square album cards featuring release years, genre badges, and hover play action.

### 7. Playlist Management
- Full modal to create custom playlists (name, description, color tag).
- Modal to add any track from anywhere into custom playlists.
- Dedicated playlist detail view with track removal, play all, and playlist deletion.
- Persisted across browser sessions using `localStorage`.

### 8. Recently Played History
- Dynamically records every played track with relative timestamps (e.g. "Just now", "2m ago").
- Live preview on Home and full list on the Recently Played tab.
- Persisted in `localStorage` with a "Clear History" option.

### 9. Favorites System
- Instant heart toggle across all views and on the fixed bottom player.
- Live badge count in the sidebar and Library dashboard.
- "Play All Liked" queue action.
- Persisted in `localStorage`.

### 10. Fixed Bottom Music Player
- **HTML5 Audio Engine**: Native playback of 16-bit PCM WAV tracks.
- **Left**: Now playing thumbnail with active pulse ring, track title, artist, and favorite heart button.
- **Center**: Shuffle, Previous, Play/Pause (electric purple glowing button), Next, Repeat (Off/All/One), and interactive draggable scrubber with hover tooltip.
- **Right**:
  - Live Audio Visualizer canvas wave toggle.
  - "Up Next" Queue sliding drawer.
  - Interactive volume control with speaker icon mute/unmute toggle.
  - Fullscreen / Synced Lyrics modal launcher.

### 11. Fullscreen Player & Synced Lyrics
- Cinematic fullscreen immersion modal.
- Large rotating vinyl album artwork.
- Real-time synchronized lyrics highlighting and auto-scrolling with audio playback.

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
| --- | --- |
| `Space` | Play / Pause |
| `N` | Next Track |
| `P` | Previous Track |
| `M` | Toggle Mute / Unmute |
| `L` | Toggle Favorite for Active Track |
| `F` | Toggle Fullscreen & Live Lyrics |
| `↑` / `↓` | Increase / Decrease Volume by 5% |
| `→` / `←` | Seek Forward / Backward 5 Seconds |
| `Esc` | Close Open Modals / Exit Fullscreen |

---

## 💻 Running the Project

### Method 1: Using the Included Node.js Server (Recommended)
Open a terminal in the project directory and run:
```bash
node server.js
```
Then open your browser at:
```
http://localhost:8080/
```

### Method 2: Direct Browser Launch
Since all assets, scripts, audio files, and SVGs are 100% self-contained locally, you can also open `index.html` directly in any modern web browser (Google Chrome, Microsoft Edge, Firefox, or Safari).

---

## 🧪 Verification & Testing

To run the automated verification test suite:
```bash
node test_app.js
```
The test suite verifies:
- Syntax validity of HTML5, CSS3, and JavaScript.
- Presence of all 108 queried DOM element IDs.
- Integrity of all 12 WAV audio files (RIFF/WAVE 44.1kHz headers).
- Existence of all 6 album covers, 6 artist avatars, and 7 playlist covers.
- Local HTTP file serving with status 200 OK.

---

## 📜 Academic Integrity Note
- **Audio Assets**: All audio files were procedurally synthesized specifically for this project as royalty-free, original compositions using mathematical waveforms (sine, sawtooth, noise envelopes, frequency modulation). No copyrighted commercial audio is used.
- **Vector Artwork**: All album covers, artist portraits, and playlist graphics are hand-crafted SVG vectors styled in VIBRA's dark cyberpunk aesthetic.
