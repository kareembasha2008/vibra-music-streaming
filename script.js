/**
 * ==============================================================================
 * VIBRA - Premium Music Streaming Platform JavaScript Engine
 * HTML5 Audio API • State Persistence • Responsive Navigation • Visualizer
 * ==============================================================================
 */

// 1. MUSIC CATALOG & DATA DEFINITIONS
const TRACKS_DATA = [
  {
    id: 1,
    title: "Midnight Cyber Pulse",
    artist: "Neon Mirage",
    artistId: 1,
    album: "Cyber Nocturne",
    albumId: 1,
    genre: "Synthwave",
    duration: "2:48",
    durationSec: 168,
    file: "assets/audio/track1.wav",
    cover: "assets/images/albums/album1.svg",
    year: 2026,
    lyrics: [
      { time: 0, text: "[Analog synthesizer arpeggios rising]" },
      { time: 3, text: "Neon reflections on the wet asphalt..." },
      { time: 7, text: "Chasing the cyber pulse through the midnight vault..." },
      { time: 11, text: "Electric memories that never fade away," },
      { time: 15, text: "We ride the digital wave until the break of day!" }
    ]
  },
  {
    id: 2,
    title: "Electric Horizon",
    artist: "Aura Vance",
    artistId: 4,
    album: "Electric Dreams",
    albumId: 2,
    genre: "Future Bass",
    duration: "3:12",
    durationSec: 192,
    file: "assets/audio/track2.wav",
    cover: "assets/images/albums/album2.svg",
    year: 2026,
    lyrics: [
      { time: 0, text: "[Future bass saw chords expanding]" },
      { time: 4, text: "Beyond the clouds where colors collide..." },
      { time: 8, text: "I see your silhouette dancing in the tide..." },
      { time: 13, text: "Electric horizon, take me higher," },
      { time: 17, text: "Burning with celestial fire!" }
    ]
  },
  {
    id: 3,
    title: "Maya (Illusion of Love)",
    artist: "Ananya Varma",
    artistId: 2,
    album: "Hyderabad Sunset",
    albumId: 3,
    genre: "Telugu Indie",
    duration: "3:35",
    durationSec: 215,
    file: "assets/audio/track3.wav",
    cover: "assets/images/albums/album3.svg",
    year: 2025,
    lyrics: [
      { time: 0, text: "[Melodic flute & acoustic strums resonate]" },
      { time: 4, text: "Nee chupullo edo maya undi priya..." },
      { time: 8, text: "Eda lothullo prema poole virise vela..." },
      { time: 12, text: "Charminar sandhya velalo nee jathaga," },
      { time: 16, text: "Kala laage migilindi ee kshanam sadaa!" }
    ]
  },
  {
    id: 4,
    title: "Cosmic Velvet",
    artist: "Luna Eclipse",
    artistId: 6,
    album: "Mind State 432Hz",
    albumId: 6,
    genre: "Chill Vibes",
    duration: "2:54",
    durationSec: 174,
    file: "assets/audio/track4.wav",
    cover: "assets/images/albums/album6.svg",
    year: 2026,
    lyrics: [
      { time: 0, text: "[Vinyl crackle and warm Rhodes chords]" },
      { time: 4, text: "Floating across purple nebulae..." },
      { time: 9, text: "Soft velvet beats wash the world away..." },
      { time: 14, text: "Breathe in, let the gravity unwind..." }
    ]
  },
  {
    id: 5,
    title: "Velocity Overdrive",
    artist: "HyperRhythm",
    artistId: 3,
    album: "Apex Pulse",
    albumId: 4,
    genre: "Workout Energy",
    duration: "2:38",
    durationSec: 158,
    file: "assets/audio/track5.wav",
    cover: "assets/images/albums/album4.svg",
    year: 2026,
    lyrics: [
      { time: 0, text: "[134 BPM rolling bassline drop]" },
      { time: 3, text: "Heart rate rising, pushing to the edge!" },
      { time: 7, text: "Break through the limits, keep the pledge!" },
      { time: 12, text: "Full throttle velocity overdrive!" },
      { time: 16, text: "Feel the adrenaline come alive!" }
    ]
  },
  {
    id: 6,
    title: "Chandamama Beats",
    artist: "Siddharth Reddy",
    artistId: 5,
    album: "Prema Tarangalu",
    albumId: 5,
    genre: "Telugu Hits",
    duration: "3:20",
    durationSec: 200,
    file: "assets/audio/track6.wav",
    cover: "assets/images/albums/album5.svg",
    year: 2026,
    lyrics: [
      { time: 0, text: "[Acoustic plucks and cheerful rhythm claps]" },
      { time: 4, text: "Chandamama rave jabilli rave..." },
      { time: 8, text: "Chakkanaina beat-u tho sandadi cheyave..." },
      { time: 13, text: "Manasanta uyyalaluguthondi ee reyi," },
      { time: 17, text: "Vibra sangeetham tho chinduleyyi!" }
    ]
  },
  {
    id: 7,
    title: "Deep Focus Alpha",
    artist: "Neural Stream",
    artistId: 6,
    album: "Mind State 432Hz",
    albumId: 6,
    genre: "Focus Music",
    duration: "4:02",
    durationSec: 242,
    file: "assets/audio/track7.wav",
    cover: "assets/images/albums/album6.svg",
    year: 2026,
    lyrics: [
      { time: 0, text: "[Lush 432Hz ambient sound waves]" },
      { time: 5, text: "Alpha waves synchronizing cortex hemispheres..." },
      { time: 11, text: "Clarity unfolds, quiet mind appears..." },
      { time: 17, text: "Unbroken focus in pure flow..." }
    ]
  },
  {
    id: 8,
    title: "Pranama (Breath of Heart)",
    artist: "Siddharth Reddy",
    artistId: 5,
    album: "Prema Tarangalu",
    albumId: 5,
    genre: "Telugu Hits",
    duration: "3:45",
    durationSec: 225,
    file: "assets/audio/track8.wav",
    cover: "assets/images/albums/album5.svg",
    year: 2025,
    lyrics: [
      { time: 0, text: "[Soulful violin and delicate piano melody]" },
      { time: 4, text: "Pranama... naalo praanam nuvve kadha..." },
      { time: 9, text: "Prathi swasa lo nee gnapakam vadhalaka..." },
      { time: 14, text: "Ningilo tharala velugai unnavu," },
      { time: 18, text: "Nannu viduvaka thodu undi povaa!" }
    ]
  },
  {
    id: 9,
    title: "Starlight Serenade",
    artist: "Luna Eclipse",
    artistId: 6,
    album: "Electric Dreams",
    albumId: 2,
    genre: "Romantic Melodies",
    duration: "3:15",
    durationSec: 195,
    file: "assets/audio/track9.wav",
    cover: "assets/images/albums/album2.svg",
    year: 2026,
    lyrics: [
      { time: 0, text: "[Glistening celestial harp chords]" },
      { time: 4, text: "Under the silver canopy of stars..." },
      { time: 9, text: "Whispering our secrets from afar..." },
      { time: 14, text: "Hold my hand through the endless night," },
      { time: 18, text: "Bathed in eternal starlight." }
    ]
  },
  {
    id: 10,
    title: "Urban Monsoon",
    artist: "Aura Vance",
    artistId: 4,
    album: "Hyderabad Sunset",
    albumId: 3,
    genre: "Chill Vibes",
    duration: "3:08",
    durationSec: 188,
    file: "assets/audio/track10.wav",
    cover: "assets/images/albums/album3.svg",
    year: 2025,
    lyrics: [
      { time: 0, text: "[Rainfall ambient backdrop and jazz chords]" },
      { time: 4, text: "Rain drops drumming on the cafe window glass..." },
      { time: 9, text: "Warm cup in hand as the city rushes past..." },
      { time: 14, text: "Slow down the world, just for a little while," },
      { time: 18, text: "Find your peace inside the rain's smile." }
    ]
  },
  {
    id: 11,
    title: "Titanium Drive",
    artist: "HyperRhythm",
    artistId: 3,
    album: "Apex Pulse",
    albumId: 4,
    genre: "Workout Energy",
    duration: "2:50",
    durationSec: 170,
    file: "assets/audio/track11.wav",
    cover: "assets/images/albums/album4.svg",
    year: 2026,
    lyrics: [
      { time: 0, text: "[Heavy electro synth assault]" },
      { time: 4, text: "Unstoppable force, forged in iron and steel!" },
      { time: 8, text: "No slowing down, keep it real!" },
      { time: 13, text: "Power unleashed, heart in the race," },
      { time: 17, text: "Titanium drive setting the pace!" }
    ]
  },
  {
    id: 12,
    title: "Infinite Reverie",
    artist: "Neon Mirage",
    artistId: 1,
    album: "Cyber Nocturne",
    albumId: 1,
    genre: "Focus Music",
    duration: "3:28",
    durationSec: 208,
    file: "assets/audio/track12.wav",
    cover: "assets/images/albums/album1.svg",
    year: 2026,
    lyrics: [
      { time: 0, text: "[Hypnotic bell arpeggios and deep sub-bass]" },
      { time: 4, text: "Dissolving boundaries of time and space..." },
      { time: 9, text: "Drifting into this tranquil place..." },
      { time: 14, text: "Infinite reverie, steady and clear..." }
    ]
  }
];

// Curated Playlists
const CURATED_PLAYLISTS = [
  {
    id: "trending",
    name: "Trending Hits",
    tagline: "Top Chartbusters & Viral Sensations",
    cover: "assets/images/playlists/trending.svg",
    trackIds: [1, 2, 3, 5, 8]
  },
  {
    id: "chill",
    name: "Chill Vibes",
    tagline: "Lofi, Neo-Soul & Mellow Electronic Beats",
    cover: "assets/images/playlists/chill.svg",
    trackIds: [4, 10, 12, 7]
  },
  {
    id: "workout",
    name: "Workout Energy",
    tagline: "130+ BPM High-Octane Workout Banger Tracks",
    cover: "assets/images/playlists/workout.svg",
    trackIds: [5, 11, 2, 1]
  },
  {
    id: "romantic",
    name: "Romantic Melodies",
    tagline: "Heartfelt Love Songs, Strings & Soul",
    cover: "assets/images/playlists/romantic.svg",
    trackIds: [9, 8, 3, 6]
  },
  {
    id: "focus",
    name: "Focus Music",
    tagline: "Deep Flow States & Alpha Waves",
    cover: "assets/images/playlists/focus.svg",
    trackIds: [7, 12, 4]
  },
  {
    id: "telugu",
    name: "Telugu Hits",
    tagline: "Tollywood & Modern Telugu Indie Grooves",
    cover: "assets/images/playlists/telugu.svg",
    trackIds: [3, 6, 8]
  }
];

// Popular Artists
const ARTISTS_DATA = [
  {
    id: 1,
    name: "Neon Mirage",
    genre: "Synthwave / Cyber Electro",
    monthlyListeners: "2,420,150",
    image: "assets/images/artists/artist1.svg",
    bio: "Pioneering the modern retro-futurism sound with analog synthesizers, driving 80s drums, and cinematic nocturnal soundscapes.",
    topTrackIds: [1, 12]
  },
  {
    id: 2,
    name: "Ananya Varma",
    genre: "Telugu Indie & Soul",
    monthlyListeners: "1,850,420",
    image: "assets/images/artists/artist2.svg",
    bio: "Blending classical Telugu ragas with indie folk and modern electronic beats. Known for viral chart-topper Maya.",
    topTrackIds: [3, 8]
  },
  {
    id: 3,
    name: "HyperRhythm",
    genre: "Workout EDM & Bass",
    monthlyListeners: "3,110,800",
    image: "assets/images/artists/artist3.svg",
    bio: "High-octane electronic powerhouse behind festival anthems and gym workout soundtracks across the globe.",
    topTrackIds: [5, 11]
  },
  {
    id: 4,
    name: "Aura Vance",
    genre: "Future Bass & Melodic",
    monthlyListeners: "1,520,300",
    image: "assets/images/artists/artist4.svg",
    bio: "Crafting lush ethereal soundscapes with rich sidechained chords, punchy bass, and vocal atmospheres.",
    topTrackIds: [2, 10]
  },
  {
    id: 5,
    name: "Siddharth Reddy",
    genre: "Telugu Melodies & Pop",
    monthlyListeners: "2,890,600",
    image: "assets/images/artists/artist5.svg",
    bio: "Acclaimed playback singer and composer delivering emotional Telugu love ballads and acoustic chart hits.",
    topTrackIds: [8, 6]
  },
  {
    id: 6,
    name: "Luna Eclipse",
    genre: "Ambient Celestial & Lofi",
    monthlyListeners: "1,240,750",
    image: "assets/images/artists/artist6.svg",
    bio: "Creating dreamy cosmic melodies, ambient 432Hz sound journeys, and soothing celestial lofi beats.",
    topTrackIds: [4, 7, 9]
  }
];

// Featured Albums
const ALBUMS_DATA = [
  {
    id: 1,
    title: "Cyber Nocturne",
    artist: "Neon Mirage",
    year: 2026,
    genre: "Synthwave",
    cover: "assets/images/albums/album1.svg",
    trackIds: [1, 12]
  },
  {
    id: 2,
    title: "Electric Dreams",
    artist: "Aura Vance",
    year: 2026,
    genre: "Future Bass",
    cover: "assets/images/albums/album2.svg",
    trackIds: [2, 9]
  },
  {
    id: 3,
    title: "Hyderabad Sunset",
    artist: "Ananya Varma",
    year: 2025,
    genre: "Telugu Indie",
    cover: "assets/images/albums/album3.svg",
    trackIds: [3, 10]
  },
  {
    id: 4,
    title: "Apex Pulse",
    artist: "HyperRhythm",
    year: 2026,
    genre: "Workout EDM",
    cover: "assets/images/albums/album4.svg",
    trackIds: [5, 11]
  },
  {
    id: 5,
    title: "Prema Tarangalu",
    artist: "Siddharth Reddy",
    year: 2025,
    genre: "Telugu Melodies",
    cover: "assets/images/albums/album5.svg",
    trackIds: [8, 6]
  },
  {
    id: 6,
    title: "Mind State 432Hz",
    artist: "Neural Stream & Luna",
    year: 2026,
    genre: "Focus Ambient",
    cover: "assets/images/albums/album6.svg",
    trackIds: [7, 4]
  }
];

// 2. APPLICATION STATE
const AppState = {
  currentTrack: null,
  currentTrackIndex: 0,
  isPlaying: false,
  isShuffle: false,
  repeatMode: 'off', // 'off' | 'all' | 'one'
  volume: 0.8,
  isMuted: false,
  queue: [...TRACKS_DATA],
  history: [],
  favorites: [1, 3], // Default sample liked tracks
  userPlaylists: [
    {
      id: "upl-1",
      name: "My Midnight Drives",
      desc: "Cruising with retro synth & lofi vibes",
      color: "purple",
      cover: "assets/images/playlists/custom.svg",
      trackIds: [1, 4, 10]
    }
  ],
  currentView: "home",
  viewHistory: ["home"],
  pendingAddToTrack: null
};

// 3. DOM ELEMENT REFERENCES
const DOM = {
  // Navigation & Shell
  sidebar: document.getElementById("sidebar"),
  mobileHamburger: document.getElementById("mobile-hamburger-btn"),
  mobileSidebarClose: document.getElementById("mobile-sidebar-close"),
  navLinks: document.querySelectorAll(".nav-link"),
  mobileNavLinks: document.querySelectorAll(".mobile-nav-link"),
  views: document.querySelectorAll(".view-section"),
  brandHomeLink: document.getElementById("brand-home-link"),
  navBackBtn: document.getElementById("nav-back-btn"),
  navForwardBtn: document.getElementById("nav-forward-btn"),
  globalSearchInput: document.getElementById("global-search-input"),
  searchClearBtn: document.getElementById("search-clear-btn"),
  
  // Notification & Profile
  notificationBtn: document.getElementById("notification-btn"),
  notificationPopover: document.getElementById("notification-popover"),
  notificationBadge: document.getElementById("notification-badge"),
  markNotificationsRead: document.getElementById("mark-notifications-read"),
  userProfileBtn: document.getElementById("user-profile-btn"),
  profileMenu: document.getElementById("profile-menu"),
  menuResetStorageBtn: document.getElementById("menu-reset-storage-btn"),
  menuShortcutsBtn: document.getElementById("menu-shortcuts-btn"),
  openShortcutsBtn: document.getElementById("open-shortcuts-btn"),

  // Audio Engine & Player
  audio: document.getElementById("audio-engine"),
  playerThumb: document.getElementById("player-thumb"),
  playerTitle: document.getElementById("player-title"),
  playerArtist: document.getElementById("player-artist"),
  playerLikeBtn: document.getElementById("player-like-btn"),
  playerThumbTrigger: document.getElementById("player-thumb-trigger"),
  btnPlayPause: document.getElementById("btn-play-pause"),
  playPauseIcon: document.getElementById("play-pause-icon"),
  btnPrev: document.getElementById("btn-prev"),
  btnNext: document.getElementById("btn-next"),
  btnShuffle: document.getElementById("btn-shuffle"),
  btnRepeat: document.getElementById("btn-repeat"),
  repeatBadge: document.getElementById("repeat-badge"),
  currentTime: document.getElementById("current-time"),
  totalDuration: document.getElementById("total-duration"),
  progressWrapper: document.getElementById("progress-wrapper"),
  progressFill: document.getElementById("progress-fill"),
  progressThumb: document.getElementById("progress-thumb"),
  timeTooltip: document.getElementById("time-tooltip"),
  btnToggleVisualizer: document.getElementById("btn-toggle-visualizer"),
  btnToggleQueue: document.getElementById("btn-toggle-queue"),
  btnFullscreenPlayer: document.getElementById("btn-fullscreen-player"),
  btnVolumeIcon: document.getElementById("btn-volume-icon"),
  volumeSvgIcon: document.getElementById("volume-svg-icon"),
  volumeSlider: document.getElementById("volume-slider"),
  volumeFill: document.getElementById("volume-fill"),
  visualizerCanvas: document.getElementById("player-visualizer-canvas"),

  // Home View Containers
  heroPlayBtn: document.getElementById("hero-play-btn"),
  heroExploreBtn: document.getElementById("hero-explore-btn"),
  heroFavBtn: document.getElementById("hero-fav-btn"),
  filterPills: document.querySelectorAll(".filter-pill"),
  homeTracksTbody: document.getElementById("home-popular-tracks-tbody"),
  homePlaylistsGrid: document.getElementById("home-playlists-grid"),
  homeArtistsGrid: document.getElementById("home-artists-grid"),
  homeAlbumsGrid: document.getElementById("home-albums-grid"),
  homeRecentSection: document.getElementById("home-recent-section"),
  homeRecentGrid: document.getElementById("home-recent-grid"),
  viewAllTracksBtn: document.getElementById("view-all-tracks-btn"),

  // Other Views
  exploreGenresGrid: document.getElementById("explore-genres-grid"),
  exploreTracksTbody: document.getElementById("explore-tracks-tbody"),
  allArtistsGrid: document.getElementById("all-artists-grid"),
  allAlbumsGrid: document.getElementById("all-albums-grid"),
  allCuratedPlaylistsGrid: document.getElementById("all-curated-playlists-grid"),
  userPlaylistsGrid: document.getElementById("user-playlists-grid"),
  playlistsCreateBtn: document.getElementById("playlists-create-btn"),
  sidebarCreatePlaylistBtn: document.getElementById("sidebar-create-playlist-btn"),
  sidebarUserPlaylists: document.getElementById("sidebar-user-playlists"),
  sidebarFavCount: document.getElementById("sidebar-fav-count"),
  recentlyPlayedTbody: document.getElementById("recently-played-tbody"),
  clearRecentBtn: document.getElementById("clear-recent-btn"),
  favoritesTbody: document.getElementById("favorites-tbody"),
  playAllFavoritesBtn: document.getElementById("play-all-favorites-btn"),
  libFavCount: document.getElementById("lib-fav-count"),
  libPlaylistCount: document.getElementById("lib-playlist-count"),
  libPlayedCount: document.getElementById("lib-played-count"),

  // Detail View
  detailCoverImg: document.getElementById("detail-cover-img"),
  detailTypeBadge: document.getElementById("detail-type-badge"),
  detailTitle: document.getElementById("detail-title"),
  detailDescription: document.getElementById("detail-description"),
  detailMeta: document.getElementById("detail-meta"),
  detailTrackCount: document.getElementById("detail-track-count"),
  detailPlayAllBtn: document.getElementById("detail-play-all-btn"),
  detailDeletePlaylistBtn: document.getElementById("detail-delete-playlist-btn"),
  detailTracksTbody: document.getElementById("detail-tracks-tbody"),

  // Search View
  searchQueryDisplay: document.getElementById("search-query-display"),
  searchResultsContent: document.getElementById("search-results-content"),
  searchTabs: document.querySelectorAll(".search-tab"),

  // Queue Drawer
  queueDrawer: document.getElementById("queue-drawer"),
  closeQueueBtn: document.getElementById("close-queue-btn"),
  queueListContainer: document.getElementById("queue-list-container"),
  queueCountLabel: document.getElementById("queue-count-label"),

  // Modals
  createPlaylistModal: document.getElementById("create-playlist-modal"),
  closePlaylistModalBtn: document.getElementById("close-playlist-modal-btn"),
  cancelPlaylistBtn: document.getElementById("cancel-playlist-btn"),
  createPlaylistForm: document.getElementById("create-playlist-form"),
  playlistNameInput: document.getElementById("playlist-name-input"),
  playlistDescInput: document.getElementById("playlist-desc-input"),

  addToPlaylistModal: document.getElementById("add-to-playlist-modal"),
  closeAddModalBtn: document.getElementById("close-add-modal-btn"),
  targetSongTitle: document.getElementById("target-song-title"),
  selectPlaylistContainer: document.getElementById("select-playlist-container"),
  quickCreateFromAddBtn: document.getElementById("quick-create-from-add-btn"),

  shortcutsModal: document.getElementById("shortcuts-modal"),
  closeShortcutsModalBtn: document.getElementById("close-shortcuts-modal-btn"),

  fullscreenPlayerModal: document.getElementById("fullscreen-player-modal"),
  fsCloseBtn: document.getElementById("fs-close-btn"),
  fsAlbumArt: document.getElementById("fs-album-art"),
  fsTitle: document.getElementById("fs-title"),
  fsArtist: document.getElementById("fs-artist"),
  fsAlbum: document.getElementById("fs-album"),
  fsBackdropBg: document.getElementById("fs-backdrop-bg"),
  fsLyricsContainer: document.getElementById("fs-lyrics-container"),

  toastContainer: document.getElementById("toast-container")
};

// 4. STORAGE PERSISTENCE
function loadStateFromStorage() {
  try {
    const savedFavs = localStorage.getItem("vibra_favorites");
    if (savedFavs) AppState.favorites = JSON.parse(savedFavs);

    const savedHistory = localStorage.getItem("vibra_history");
    if (savedHistory) AppState.history = JSON.parse(savedHistory);

    const savedPlaylists = localStorage.getItem("vibra_user_playlists");
    if (savedPlaylists) AppState.userPlaylists = JSON.parse(savedPlaylists);

    const savedVol = localStorage.getItem("vibra_volume");
    if (savedVol !== null) {
      AppState.volume = parseFloat(savedVol);
      DOM.volumeSlider.value = AppState.volume;
      DOM.volumeFill.style.width = `${AppState.volume * 100}%`;
      DOM.audio.volume = AppState.volume;
    }
  } catch (err) {
    console.error("Failed to load state from localStorage:", err);
  }
}

function saveFavoritesToStorage() {
  localStorage.setItem("vibra_favorites", JSON.stringify(AppState.favorites));
  updateCounts();
}

function saveHistoryToStorage() {
  localStorage.setItem("vibra_history", JSON.stringify(AppState.history));
  updateCounts();
}

function savePlaylistsToStorage() {
  localStorage.setItem("vibra_user_playlists", JSON.stringify(AppState.userPlaylists));
  renderSidebarPlaylists();
  updateCounts();
}

function updateCounts() {
  if (DOM.sidebarFavCount) DOM.sidebarFavCount.textContent = AppState.favorites.length;
  if (DOM.libFavCount) DOM.libFavCount.textContent = AppState.favorites.length;
  if (DOM.libPlaylistCount) DOM.libPlaylistCount.textContent = AppState.userPlaylists.length;
  if (DOM.libPlayedCount) DOM.libPlayedCount.textContent = AppState.history.length;
}

// 5. AUDIO PLAYBACK ENGINE (HTML5 Audio API)
function initAudioEngine() {
  DOM.audio.volume = AppState.volume;

  // Listen to time updates
  DOM.audio.addEventListener("timeupdate", () => {
    if (!DOM.audio.duration || isNaN(DOM.audio.duration)) return;
    const cur = DOM.audio.currentTime;
    const dur = DOM.audio.duration;
    const percent = (cur / dur) * 100;

    DOM.progressFill.style.width = `${percent}%`;
    DOM.progressThumb.style.left = `${percent}%`;
    DOM.currentTime.textContent = formatTime(cur);

    // Sync fullscreen lyrics
    updateFullscreenLyrics(cur);
  });

  // Track metadata loaded
  DOM.audio.addEventListener("loadedmetadata", () => {
    DOM.totalDuration.textContent = formatTime(DOM.audio.duration);
  });

  // Handle track finished
  DOM.audio.addEventListener("ended", () => {
    if (AppState.repeatMode === "one") {
      DOM.audio.currentTime = 0;
      DOM.audio.play();
    } else {
      playNextTrack();
    }
  });

  // Graceful error handling
  DOM.audio.addEventListener("error", (e) => {
    console.warn("Audio playback error encountered:", e);
    AppState.isPlaying = false;
    updatePlayerUI();
    showToast("Notice: Audio source unreachable. Switching track.", "error");
    setTimeout(() => {
      playNextTrack();
    }, 1200);
  });

  // Load initial track (Track 1) in paused state
  loadTrack(TRACKS_DATA[0], false);
}

function loadTrack(track, autoPlay = true) {
  if (!track) return;
  AppState.currentTrack = track;
  AppState.currentTrackIndex = AppState.queue.findIndex(t => t.id === track.id);
  if (AppState.currentTrackIndex === -1) {
    AppState.currentTrackIndex = 0;
  }

  DOM.audio.src = track.file;
  DOM.playerTitle.textContent = track.title;
  DOM.playerArtist.textContent = track.artist;
  DOM.playerThumb.src = track.cover;
  DOM.totalDuration.textContent = track.duration;

  // Sync favorites button on player
  updatePlayerLikeBtn();

  // Fullscreen modal info
  if (DOM.fsAlbumArt) DOM.fsAlbumArt.src = track.cover;
  if (DOM.fsTitle) DOM.fsTitle.textContent = track.title;
  if (DOM.fsArtist) DOM.fsArtist.textContent = track.artist;
  if (DOM.fsAlbum) DOM.fsAlbum.textContent = `${track.album} • ${track.year}`;
  if (DOM.fsBackdropBg) DOM.fsBackdropBg.style.backgroundImage = `url('${track.cover}')`;
  renderFullscreenLyrics(track.lyrics);

  // Record to history if autoplay
  if (autoPlay) {
    recordToHistory(track);
    playAudio();
  } else {
    AppState.isPlaying = false;
    updatePlayerUI();
  }

  highlightActiveTrackRows();
}

function playAudio() {
  DOM.audio.play()
    .then(() => {
      AppState.isPlaying = true;
      updatePlayerUI();
      highlightActiveTrackRows();
    })
    .catch((err) => {
      console.warn("Playback prevented or interrupted:", err);
      AppState.isPlaying = false;
      updatePlayerUI();
    });
}

function pauseAudio() {
  DOM.audio.pause();
  AppState.isPlaying = false;
  updatePlayerUI();
  highlightActiveTrackRows();
}

function togglePlayPause() {
  if (!AppState.currentTrack) {
    loadTrack(TRACKS_DATA[0], true);
    return;
  }
  if (AppState.isPlaying) {
    pauseAudio();
  } else {
    playAudio();
  }
}

function playNextTrack() {
  if (AppState.queue.length === 0) return;

  if (AppState.isShuffle) {
    let nextIdx = Math.floor(Math.random() * AppState.queue.length);
    if (nextIdx === AppState.currentTrackIndex && AppState.queue.length > 1) {
      nextIdx = (nextIdx + 1) % AppState.queue.length;
    }
    loadTrack(AppState.queue[nextIdx], true);
  } else {
    let nextIdx = AppState.currentTrackIndex + 1;
    if (nextIdx >= AppState.queue.length) {
      if (AppState.repeatMode === "all") {
        nextIdx = 0;
      } else {
        pauseAudio();
        return;
      }
    }
    loadTrack(AppState.queue[nextIdx], true);
  }
}

function playPrevTrack() {
  if (AppState.queue.length === 0) return;

  if (DOM.audio.currentTime > 3) {
    DOM.audio.currentTime = 0;
    return;
  }

  let prevIdx = AppState.currentTrackIndex - 1;
  if (prevIdx < 0) {
    prevIdx = AppState.queue.length - 1;
  }
  loadTrack(AppState.queue[prevIdx], true);
}

function recordToHistory(track) {
  // Remove duplicate if exists
  AppState.history = AppState.history.filter(item => item.id !== track.id);
  // Unshift with timestamp
  AppState.history.unshift({
    ...track,
    playedAt: Date.now()
  });
  // Cap at 40
  if (AppState.history.length > 40) AppState.history.pop();
  saveHistoryToStorage();
  renderRecentlyPlayed();
  renderHomeRecentlyPlayed();
}

// 6. UI UPDATES
function updatePlayerUI() {
  const isPlaying = AppState.isPlaying;

  // Update Play/Pause Icon
  if (isPlaying) {
    DOM.playPauseIcon.innerHTML = `<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>`;
    DOM.btnPlayPause.classList.add("playing");
    document.body.classList.add("track-playing");
  } else {
    DOM.playPauseIcon.innerHTML = `<path d="M8 5v14l11-7z"/>`;
    DOM.btnPlayPause.classList.remove("playing");
    document.body.classList.remove("track-playing");
  }

  // Shuffle button state
  if (AppState.isShuffle) {
    DOM.btnShuffle.classList.add("active");
  } else {
    DOM.btnShuffle.classList.remove("active");
  }

  // Repeat button state
  if (AppState.repeatMode === "off") {
    DOM.btnRepeat.classList.remove("active");
    DOM.repeatBadge.style.display = "none";
  } else if (AppState.repeatMode === "all") {
    DOM.btnRepeat.classList.add("active");
    DOM.repeatBadge.style.display = "none";
  } else if (AppState.repeatMode === "one") {
    DOM.btnRepeat.classList.add("active");
    DOM.repeatBadge.style.display = "flex";
  }

  updatePlayerLikeBtn();
}

function updatePlayerLikeBtn() {
  if (!AppState.currentTrack) return;
  const isLiked = AppState.favorites.includes(AppState.currentTrack.id);
  if (isLiked) {
    DOM.playerLikeBtn.classList.add("liked");
  } else {
    DOM.playerLikeBtn.classList.remove("liked");
  }

  if (DOM.heroFavBtn) {
    const heroTrackId = parseInt(DOM.heroFavBtn.getAttribute("data-track-id"), 10);
    if (AppState.favorites.includes(heroTrackId)) {
      DOM.heroFavBtn.classList.add("active");
    } else {
      DOM.heroFavBtn.classList.remove("active");
    }
  }
}

function highlightActiveTrackRows() {
  const rows = document.querySelectorAll("tr[data-track-id]");
  rows.forEach(row => {
    const trackId = parseInt(row.getAttribute("data-track-id"), 10);
    const numEl = row.querySelector(".col-num");
    const isThisTrack = AppState.currentTrack && AppState.currentTrack.id === trackId;

    if (isThisTrack) {
      row.classList.add("playing-row");
      if (numEl) {
        if (AppState.isPlaying) {
          numEl.innerHTML = `<div class="table-equalizer"><span></span><span></span><span></span></div>`;
        } else {
          numEl.innerHTML = `<span style="color: var(--primary-light); font-weight:700;">▶</span>`;
        }
      }
    } else {
      row.classList.remove("playing-row");
      const originalIdx = row.getAttribute("data-index");
      if (numEl && originalIdx) {
        numEl.innerHTML = `
          <div class="track-index-wrap">
            <span class="track-number">${originalIdx}</span>
            <button class="track-table-play-btn" aria-label="Play">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            </button>
          </div>
        `;
      }
    }
  });
}

function formatTime(seconds) {
  if (isNaN(seconds) || seconds < 0) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
}

// 7. FAVORITES & PLAYLIST OPERATIONS
function toggleFavorite(trackId) {
  trackId = parseInt(trackId, 10);
  const idx = AppState.favorites.indexOf(trackId);
  const track = TRACKS_DATA.find(t => t.id === trackId);
  const title = track ? track.title : "Track";

  if (idx > -1) {
    AppState.favorites.splice(idx, 1);
    showToast(`Removed "${title}" from Favorites`);
  } else {
    AppState.favorites.push(trackId);
    showToast(`Added "${title}" to Favorites`, "favorite");
  }

  saveFavoritesToStorage();
  updatePlayerLikeBtn();
  renderFavorites();
  renderExploreTracks();
  renderHomePopularTracks();
}

function createUserPlaylist(name, desc = "", color = "purple") {
  if (!name || name.trim() === "") return;

  const newPlaylist = {
    id: `upl-${Date.now()}`,
    name: name.trim(),
    desc: desc.trim() || "User Created Collection",
    color: color,
    cover: "assets/images/playlists/custom.svg",
    trackIds: []
  };

  AppState.userPlaylists.push(newPlaylist);
  savePlaylistsToStorage();
  showToast(`Created playlist "${newPlaylist.name}"`);
  renderUserPlaylists();
}

function deleteUserPlaylist(playlistId) {
  const pl = AppState.userPlaylists.find(p => p.id === playlistId);
  if (!pl) return;

  AppState.userPlaylists = AppState.userPlaylists.filter(p => p.id !== playlistId);
  savePlaylistsToStorage();
  showToast(`Deleted playlist "${pl.name}"`);
  renderUserPlaylists();
  showView("playlists");
}

function addTrackToPlaylist(trackId, playlistId) {
  trackId = parseInt(trackId, 10);
  const pl = AppState.userPlaylists.find(p => p.id === playlistId);
  const track = TRACKS_DATA.find(t => t.id === trackId);
  if (!pl || !track) return;

  if (pl.trackIds.includes(trackId)) {
    showToast(`"${track.title}" is already in "${pl.name}"`);
  } else {
    pl.trackIds.push(trackId);
    savePlaylistsToStorage();
    showToast(`Added "${track.title}" to "${pl.name}"`);
  }

  closeModal(DOM.addToPlaylistModal);
}

function removeTrackFromPlaylist(trackId, playlistId) {
  trackId = parseInt(trackId, 10);
  const pl = AppState.userPlaylists.find(p => p.id === playlistId);
  if (!pl) return;

  pl.trackIds = pl.trackIds.filter(id => id !== trackId);
  savePlaylistsToStorage();
  showToast(`Removed track from "${pl.name}"`);
  showPlaylistDetail(playlistId, true);
}

// 8. RENDERERS
function renderTrackRow(track, index, includeAlbum = true, includeGenre = true) {
  const isLiked = AppState.favorites.includes(track.id);
  const isPlaying = AppState.currentTrack && AppState.currentTrack.id === track.id;

  return `
    <tr data-track-id="${track.id}" data-index="${index}" class="${isPlaying ? 'playing-row' : ''}">
      <td class="col-num">
        <div class="track-index-wrap">
          <span class="track-number">${index}</span>
          <button class="track-table-play-btn" aria-label="Play">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          </button>
        </div>
      </td>
      <td class="col-title">
        <div class="track-title-cell">
          <img src="${track.cover}" alt="${track.title}" class="track-thumb">
          <div class="track-meta">
            <span class="track-name">${track.title}</span>
            <span class="track-artist">${track.artist}</span>
          </div>
        </div>
      </td>
      ${includeAlbum ? `<td class="col-album">${track.album}</td>` : ''}
      ${includeGenre ? `<td class="col-genre"><span class="genre-tag">${track.genre}</span></td>` : ''}
      <td class="col-duration">${track.duration}</td>
      <td class="col-actions">
        <div class="action-btn-group">
          <button class="track-action-btn like-btn ${isLiked ? 'liked' : ''}" data-track-id="${track.id}" title="${isLiked ? 'Unlike' : 'Like'}">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
          </button>
          <button class="track-action-btn add-btn" data-track-id="${track.id}" title="Add to Playlist">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
          </button>
        </div>
      </td>
    </tr>
  `;
}

function renderHomePopularTracks(filterGenre = "all") {
  let tracks = [...TRACKS_DATA];
  if (filterGenre !== "all") {
    tracks = tracks.filter(t => t.genre.toLowerCase().includes(filterGenre.toLowerCase()));
  }
  const displayTracks = tracks.slice(0, 6);
  DOM.homeTracksTbody.innerHTML = displayTracks.map((t, idx) => renderTrackRow(t, idx + 1)).join("");
  highlightActiveTrackRows();
}

function renderCuratedPlaylists() {
  const html = CURATED_PLAYLISTS.map(pl => `
    <div class="media-card" data-playlist-id="${pl.id}">
      <div class="card-img-wrapper">
        <img src="${pl.cover}" alt="${pl.name}" class="card-img">
        <button class="card-play-btn play-playlist-btn" data-playlist-id="${pl.id}" title="Play Playlist">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
        </button>
      </div>
      <div class="card-info">
        <h4 class="card-title">${pl.name}</h4>
        <p class="card-subtitle">${pl.tagline}</p>
        <span class="card-badge">${pl.trackIds.length} Tracks</span>
      </div>
    </div>
  `).join("");

  DOM.homePlaylistsGrid.innerHTML = html;
  if (DOM.allCuratedPlaylistsGrid) DOM.allCuratedPlaylistsGrid.innerHTML = html;
}

function renderPopularArtists() {
  const html = ARTISTS_DATA.map(art => `
    <div class="artist-card" data-artist-id="${art.id}">
      <div class="artist-avatar-wrapper">
        <img src="${art.image}" alt="${art.name}" class="artist-avatar">
      </div>
      <h4 class="artist-name">${art.name}</h4>
      <span class="artist-genre">${art.genre}</span>
      <span class="artist-listeners">${art.monthlyListeners} monthly listeners</span>
      <button class="artist-action-btn view-artist-btn" data-artist-id="${art.id}">View Discography</button>
    </div>
  `).join("");

  DOM.homeArtistsGrid.innerHTML = html;
  if (DOM.allArtistsGrid) DOM.allArtistsGrid.innerHTML = html;
}

function renderFeaturedAlbums() {
  const html = ALBUMS_DATA.map(alb => `
    <div class="media-card" data-album-id="${alb.id}">
      <div class="card-img-wrapper">
        <img src="${alb.cover}" alt="${alb.title}" class="card-img">
        <button class="card-play-btn play-album-btn" data-album-id="${alb.id}" title="Play Album">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
        </button>
      </div>
      <div class="card-info">
        <h4 class="card-title">${alb.title}</h4>
        <p class="card-subtitle">${alb.artist} • ${alb.year}</p>
        <span class="card-badge">${alb.genre}</span>
      </div>
    </div>
  `).join("");

  DOM.homeAlbumsGrid.innerHTML = html;
  if (DOM.allAlbumsGrid) DOM.allAlbumsGrid.innerHTML = html;
}

function renderUserPlaylists() {
  const createCard = `
    <div class="media-card create-new-card" id="card-create-playlist-btn">
      <div class="create-card-icon">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
      </div>
      <h4 class="card-title">Create Playlist</h4>
      <p class="card-subtitle">Custom vibes & mixes</p>
    </div>
  `;

  const userCards = AppState.userPlaylists.map(pl => `
    <div class="media-card" data-user-playlist-id="${pl.id}">
      <div class="card-img-wrapper">
        <img src="${pl.cover}" alt="${pl.name}" class="card-img">
        <button class="card-play-btn play-user-playlist-btn" data-user-playlist-id="${pl.id}" title="Play Playlist">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
        </button>
      </div>
      <div class="card-info">
        <h4 class="card-title">${pl.name}</h4>
        <p class="card-subtitle">${pl.desc}</p>
        <span class="card-badge">${pl.trackIds.length} Tracks</span>
      </div>
    </div>
  `).join("");

  if (DOM.userPlaylistsGrid) {
    DOM.userPlaylistsGrid.innerHTML = createCard + userCards;
  }
  renderSidebarPlaylists();
}

function renderSidebarPlaylists() {
  if (!DOM.sidebarUserPlaylists) return;
  DOM.sidebarUserPlaylists.innerHTML = AppState.userPlaylists.map(pl => `
    <li>
      <a href="#playlist-${pl.id}" class="nav-link" data-open-user-playlist="${pl.id}">
        <svg viewBox="0 0 24 24" class="nav-icon"><path d="M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5z"/></svg>
        <span>${pl.name}</span>
      </a>
    </li>
  `).join("");
}

function renderHomeRecentlyPlayed() {
  if (AppState.history.length === 0) {
    DOM.homeRecentSection.style.display = "none";
    return;
  }
  DOM.homeRecentSection.style.display = "block";
  const recentSlice = AppState.history.slice(0, 5);
  DOM.homeRecentGrid.innerHTML = recentSlice.map(t => `
    <div class="media-card" data-track-id="${t.id}">
      <div class="card-img-wrapper">
        <img src="${t.cover}" alt="${t.title}" class="card-img">
        <button class="card-play-btn play-track-btn" data-track-id="${t.id}">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
        </button>
      </div>
      <div class="card-info">
        <h4 class="card-title">${t.title}</h4>
        <p class="card-subtitle">${t.artist}</p>
      </div>
    </div>
  `).join("");
}

function renderRecentlyPlayed() {
  if (AppState.history.length === 0) {
    DOM.recentlyPlayedTbody.innerHTML = `
      <tr>
        <td colspan="5" style="text-align: center; padding: 40px; color: var(--text-muted);">
          No listening history recorded yet. Play any track to see it here!
        </td>
      </tr>
    `;
    return;
  }

  DOM.recentlyPlayedTbody.innerHTML = AppState.history.map((t, idx) => `
    <tr data-track-id="${t.id}" data-index="${idx + 1}" class="${AppState.currentTrack && AppState.currentTrack.id === t.id ? 'playing-row' : ''}">
      <td class="col-num">
        <div class="track-index-wrap">
          <span class="track-number">${idx + 1}</span>
          <button class="track-table-play-btn" aria-label="Play">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          </button>
        </div>
      </td>
      <td class="col-title">
        <div class="track-title-cell">
          <img src="${t.cover}" alt="${t.title}" class="track-thumb">
          <div class="track-meta">
            <span class="track-name">${t.title}</span>
            <span class="track-artist">${t.artist}</span>
          </div>
        </div>
      </td>
      <td class="col-album">${t.album}</td>
      <td class="col-duration">${formatTimeAgo(t.playedAt)}</td>
      <td class="col-actions">
        <div class="action-btn-group">
          <button class="track-action-btn like-btn ${AppState.favorites.includes(t.id) ? 'liked' : ''}" data-track-id="${t.id}" title="Like">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
          </button>
          <button class="track-action-btn add-btn" data-track-id="${t.id}" title="Add to Playlist">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
          </button>
        </div>
      </td>
    </tr>
  `).join("");
}

function formatTimeAgo(timestamp) {
  if (!timestamp) return "Recently";
  const seconds = Math.floor((Date.now() - timestamp) / 1000);
  if (seconds < 60) return "Just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  return "Yesterday";
}

function renderFavorites() {
  const favoriteTracks = TRACKS_DATA.filter(t => AppState.favorites.includes(t.id));
  if (favoriteTracks.length === 0) {
    DOM.favoritesTbody.innerHTML = `
      <tr>
        <td colspan="6" style="text-align: center; padding: 48px; color: var(--text-muted);">
          <h3>No Liked Tracks Yet</h3>
          <p style="margin-top: 8px;">Heart any song to add it to your personal favorites collection.</p>
        </td>
      </tr>
    `;
    return;
  }

  DOM.favoritesTbody.innerHTML = favoriteTracks.map((t, idx) => renderTrackRow(t, idx + 1)).join("");
  highlightActiveTrackRows();
}

function renderExploreTracks() {
  if (DOM.exploreTracksTbody) {
    DOM.exploreTracksTbody.innerHTML = TRACKS_DATA.map((t, idx) => renderTrackRow(t, idx + 1)).join("");
  }
}

function renderExploreGenres() {
  const genres = [
    { name: "Telugu Hits", color: "linear-gradient(135deg, #701a75 0%, #ec4899 100%)", icon: "🎵" },
    { name: "Synthwave", color: "linear-gradient(135deg, #1e1b4b 0%, #9333ea 100%)", icon: "⚡" },
    { name: "Workout Energy", color: "linear-gradient(135deg, #991b1b 0%, #ea580c 100%)", icon: "🔥" },
    { name: "Chill Vibes", color: "linear-gradient(135deg, #065f46 0%, #06b6d4 100%)", icon: "☕" },
    { name: "Romantic Melodies", color: "linear-gradient(135deg, #831843 0%, #f43f5e 100%)", icon: "💖" },
    { name: "Focus 432Hz", color: "linear-gradient(135deg, #0f172a 0%, #4338ca 100%)", icon: "🌌" }
  ];

  if (DOM.exploreGenresGrid) {
    DOM.exploreGenresGrid.innerHTML = genres.map(g => `
      <div class="genre-card" style="background: ${g.color};" data-genre-filter="${g.name}">
        <span class="genre-card-title">${g.name}</span>
        <span class="genre-card-desc">Stream top mixes</span>
        <span class="genre-card-icon" style="font-size: 50px;">${g.icon}</span>
      </div>
    `).join("");
  }
}

function renderQueue() {
  DOM.queueCountLabel.textContent = `${AppState.queue.length} tracks`;
  DOM.queueListContainer.innerHTML = AppState.queue.map((t, idx) => `
    <div class="queue-item ${AppState.currentTrack && AppState.currentTrack.id === t.id ? 'active' : ''}" data-queue-index="${idx}">
      <img src="${t.cover}" alt="${t.title}" class="queue-thumb">
      <div class="queue-meta">
        <h5 class="queue-title">${t.title}</h5>
        <span class="queue-artist">${t.artist}</span>
      </div>
      <span style="font-size: 0.75rem; color: var(--text-muted);">${t.duration}</span>
    </div>
  `).join("");
}

// 9. DETAIL VIEWS (Playlist, Album, Artist)
function showPlaylistDetail(playlistId, isUser = false) {
  let playlist, tracks;

  if (isUser) {
    playlist = AppState.userPlaylists.find(p => p.id === playlistId);
    if (!playlist) return;
    tracks = TRACKS_DATA.filter(t => playlist.trackIds.includes(t.id));
    DOM.detailTypeBadge.textContent = "USER PLAYLIST";
    DOM.detailDeletePlaylistBtn.style.display = "inline-flex";
    DOM.detailDeletePlaylistBtn.setAttribute("data-delete-id", playlist.id);
  } else {
    playlist = CURATED_PLAYLISTS.find(p => p.id === playlistId);
    if (!playlist) return;
    tracks = TRACKS_DATA.filter(t => playlist.trackIds.includes(t.id));
    DOM.detailTypeBadge.textContent = "CURATED PLAYLIST";
    DOM.detailDeletePlaylistBtn.style.display = "none";
  }

  DOM.detailCoverImg.src = playlist.cover;
  DOM.detailTitle.textContent = playlist.name;
  DOM.detailDescription.textContent = playlist.tagline || playlist.desc;
  DOM.detailTrackCount.textContent = `${tracks.length} tracks`;

  if (tracks.length === 0) {
    DOM.detailTracksTbody.innerHTML = `
      <tr>
        <td colspan="6" style="text-align: center; padding: 40px; color: var(--text-muted);">
          This playlist is currently empty. Click (+) on any track to add it here!
        </td>
      </tr>
    `;
  } else {
    DOM.detailTracksTbody.innerHTML = tracks.map((t, idx) => renderTrackRow(t, idx + 1)).join("");
  }

  // Play All action
  DOM.detailPlayAllBtn.onclick = () => {
    if (tracks.length > 0) {
      AppState.queue = [...tracks];
      loadTrack(tracks[0], true);
      renderQueue();
    }
  };

  showView("detail");
  highlightActiveTrackRows();
}

function showAlbumDetail(albumId) {
  albumId = parseInt(albumId, 10);
  const album = ALBUMS_DATA.find(a => a.id === albumId);
  if (!album) return;

  const tracks = TRACKS_DATA.filter(t => album.trackIds.includes(t.id));

  DOM.detailCoverImg.src = album.cover;
  DOM.detailTypeBadge.textContent = "OFFICIAL ALBUM";
  DOM.detailTitle.textContent = album.title;
  DOM.detailDescription.textContent = `${album.artist} • ${album.genre} • Released in ${album.year}`;
  DOM.detailTrackCount.textContent = `${tracks.length} tracks`;
  DOM.detailDeletePlaylistBtn.style.display = "none";

  DOM.detailTracksTbody.innerHTML = tracks.map((t, idx) => renderTrackRow(t, idx + 1)).join("");

  DOM.detailPlayAllBtn.onclick = () => {
    if (tracks.length > 0) {
      AppState.queue = [...tracks];
      loadTrack(tracks[0], true);
      renderQueue();
    }
  };

  showView("detail");
  highlightActiveTrackRows();
}

function showArtistDetail(artistId) {
  artistId = parseInt(artistId, 10);
  const artist = ARTISTS_DATA.find(a => a.id === artistId);
  if (!artist) return;

  const tracks = TRACKS_DATA.filter(t => t.artistId === artistId || artist.topTrackIds.includes(t.id));

  DOM.detailCoverImg.src = artist.image;
  DOM.detailTypeBadge.textContent = "VERIFIED ARTIST";
  DOM.detailTitle.textContent = artist.name;
  DOM.detailDescription.textContent = `${artist.genre} • ${artist.monthlyListeners} monthly listeners. ${artist.bio}`;
  DOM.detailTrackCount.textContent = `${tracks.length} tracks`;
  DOM.detailDeletePlaylistBtn.style.display = "none";

  DOM.detailTracksTbody.innerHTML = tracks.map((t, idx) => renderTrackRow(t, idx + 1)).join("");

  DOM.detailPlayAllBtn.onclick = () => {
    if (tracks.length > 0) {
      AppState.queue = [...tracks];
      loadTrack(tracks[0], true);
      renderQueue();
    }
  };

  showView("detail");
  highlightActiveTrackRows();
}

// 10. SEARCH FUNCTIONALITY
function executeSearch(query) {
  if (!query || query.trim() === "") {
    showView("home");
    return;
  }

  query = query.trim().toLowerCase();
  DOM.searchQueryDisplay.textContent = `Showing results for "${query}"`;
  showView("search");

  const matchedTracks = TRACKS_DATA.filter(t => 
    t.title.toLowerCase().includes(query) ||
    t.artist.toLowerCase().includes(query) ||
    t.album.toLowerCase().includes(query) ||
    t.genre.toLowerCase().includes(query)
  );

  const matchedArtists = ARTISTS_DATA.filter(a =>
    a.name.toLowerCase().includes(query) ||
    a.genre.toLowerCase().includes(query)
  );

  const matchedAlbums = ALBUMS_DATA.filter(a =>
    a.title.toLowerCase().includes(query) ||
    a.artist.toLowerCase().includes(query) ||
    a.genre.toLowerCase().includes(query)
  );

  const totalResults = matchedTracks.length + matchedArtists.length + matchedAlbums.length;

  if (totalResults === 0) {
    DOM.searchResultsContent.innerHTML = `
      <div class="search-empty-state">
        <svg viewBox="0 0 24 24" class="search-empty-icon" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
        <h3>No melodies found for "${query}"</h3>
        <p>Try searching for artist names like "Ananya", "Neon Mirage", or vibes like "Telugu", "Synthwave", or "Workout".</p>
        <button class="btn btn-secondary" onclick="DOM.globalSearchInput.value=''; executeSearch('');">Clear Search</button>
      </div>
    `;
    return;
  }

  // Render combined results
  let html = "";

  if (matchedTracks.length > 0) {
    html += `
      <div class="section-container">
        <h3 class="section-title">Matching Songs (${matchedTracks.length})</h3>
        <div class="tracks-table-container">
          <table class="tracks-table">
            <thead>
              <tr>
                <th class="col-num">#</th>
                <th class="col-title">TITLE</th>
                <th class="col-album">ALBUM</th>
                <th class="col-genre">GENRE</th>
                <th class="col-duration">TIME</th>
                <th class="col-actions">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              ${matchedTracks.map((t, idx) => renderTrackRow(t, idx + 1)).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  if (matchedArtists.length > 0) {
    html += `
      <div class="section-container">
        <h3 class="section-title">Artists</h3>
        <div class="artists-grid">
          ${matchedArtists.map(a => `
            <div class="artist-card" data-artist-id="${a.id}">
              <div class="artist-avatar-wrapper">
                <img src="${a.image}" alt="${a.name}" class="artist-avatar">
              </div>
              <h4 class="artist-name">${a.name}</h4>
              <span class="artist-genre">${a.genre}</span>
              <button class="artist-action-btn view-artist-btn" data-artist-id="${a.id}">View Discography</button>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  }

  if (matchedAlbums.length > 0) {
    html += `
      <div class="section-container">
        <h3 class="section-title">Albums</h3>
        <div class="cards-grid">
          ${matchedAlbums.map(alb => `
            <div class="media-card" data-album-id="${alb.id}">
              <div class="card-img-wrapper">
                <img src="${alb.cover}" alt="${alb.title}" class="card-img">
                <button class="card-play-btn play-album-btn" data-album-id="${alb.id}">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                </button>
              </div>
              <div class="card-info">
                <h4 class="card-title">${alb.title}</h4>
                <p class="card-subtitle">${alb.artist}</p>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  }

  DOM.searchResultsContent.innerHTML = html;
  highlightActiveTrackRows();
}

// 11. NAVIGATION & VIEW SWITCHER
function showView(viewId, pushHistory = true) {
  DOM.views.forEach(view => {
    view.classList.remove("active-view");
    if (view.id === `view-${viewId}`) {
      view.classList.add("active-view");
    }
  });

  DOM.navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("data-view") === viewId) {
      link.classList.add("active");
    }
  });

  DOM.mobileNavLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("data-view") === viewId) {
      link.classList.add("active");
    }
  });

  if (pushHistory && AppState.currentView !== viewId) {
    AppState.viewHistory.push(viewId);
  }
  AppState.currentView = viewId;

  // View specific refresh
  if (viewId === "favorites") renderFavorites();
  if (viewId === "recently-played") renderRecentlyPlayed();
  if (viewId === "playlists") renderUserPlaylists();

  // Close mobile sidebar if open
  DOM.sidebar.classList.remove("open");
}

// 12. FULLSCREEN & LYRICS MODAL
function renderFullscreenLyrics(lyrics) {
  if (!lyrics || lyrics.length === 0) {
    DOM.fsLyricsContainer.innerHTML = `<p class="lyrics-placeholder">Instrumental or live audio. Feel the rhythm!</p>`;
    return;
  }

  DOM.fsLyricsContainer.innerHTML = lyrics.map((line, idx) => `
    <div class="lyric-line ${idx === 0 ? 'active' : ''}" data-time="${line.time}">
      ${line.text}
    </div>
  `).join("");
}

function updateFullscreenLyrics(currentTime) {
  const lines = DOM.fsLyricsContainer.querySelectorAll(".lyric-line");
  if (!lines || lines.length === 0) return;

  let activeIndex = 0;
  lines.forEach((line, idx) => {
    const time = parseFloat(line.getAttribute("data-time"));
    if (currentTime >= time) {
      activeIndex = idx;
    }
  });

  lines.forEach((line, idx) => {
    if (idx === activeIndex) {
      line.classList.add("active");
      line.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      line.classList.remove("active");
    }
  });
}

// 13. REAL-TIME CANVAS VISUALIZER
let visualizerAnimationId = null;
let visualizerActive = true;

function initCanvasVisualizer() {
  const canvas = DOM.visualizerCanvas;
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  function resizeCanvas() {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;
  }
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  let phase = 0;

  function draw() {
    if (!visualizerActive) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (AppState.isPlaying) {
      phase += 0.04;
      const width = canvas.width;
      const height = canvas.height;
      const bars = Math.floor(width / 14);

      for (let i = 0; i < bars; i++) {
        const x = i * 14;
        const sinVal = Math.sin(phase + i * 0.18) * Math.cos(phase * 0.5 + i * 0.1);
        const barHeight = Math.max(6, Math.abs(sinVal) * (height * 0.65));
        const y = height - barHeight;

        const grad = ctx.createLinearGradient(0, height, 0, y);
        grad.addColorStop(0, "rgba(168, 85, 247, 0.45)");
        grad.addColorStop(1, "rgba(6, 182, 212, 0.7)");

        ctx.fillStyle = grad;
        ctx.fillRect(x, y, 6, barHeight);
      }
    }

    visualizerAnimationId = requestAnimationFrame(draw);
  }

  draw();
}

// 14. MODAL UTILITIES
function openModal(modal) {
  if (modal) modal.classList.add("open");
}

function closeModal(modal) {
  if (modal) modal.classList.remove("open");
}

function openAddToPlaylistModal(trackId) {
  const track = TRACKS_DATA.find(t => t.id === parseInt(trackId, 10));
  if (!track) return;

  AppState.pendingAddToTrack = track;
  DOM.targetSongTitle.textContent = `${track.title} - ${track.artist}`;

  if (AppState.userPlaylists.length === 0) {
    DOM.selectPlaylistContainer.innerHTML = `<p style="color:var(--text-muted); padding:10px;">No playlists yet. Create one below!</p>`;
  } else {
    DOM.selectPlaylistContainer.innerHTML = AppState.userPlaylists.map(pl => `
      <div class="select-playlist-item" data-add-to-pl-id="${pl.id}">
        <span class="select-playlist-name">${pl.name}</span>
        <span class="select-playlist-count">${pl.trackIds.length} tracks</span>
      </div>
    `).join("");
  }

  openModal(DOM.addToPlaylistModal);
}

// 15. TOAST FEEDBACK SYSTEM
function showToast(message, type = "info") {
  const toast = document.createElement("div");
  toast.className = "toast";

  let icon = `
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="color:var(--primary-light);">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    </svg>
  `;

  if (type === "favorite") {
    icon = `
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="color:var(--accent-pink);">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    `;
  }

  toast.innerHTML = `${icon}<span>${message}</span>`;
  DOM.toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// 16. EVENT LISTENERS SETUP
function setupEventListeners() {
  // Mobile drawer open/close
  if (DOM.mobileHamburger) {
    DOM.mobileHamburger.addEventListener("click", () => {
      DOM.sidebar.classList.add("open");
    });
  }
  if (DOM.mobileSidebarClose) {
    DOM.mobileSidebarClose.addEventListener("click", () => {
      DOM.sidebar.classList.remove("open");
    });
  }

  // Sidebar brand click -> Home
  if (DOM.brandHomeLink) {
    DOM.brandHomeLink.addEventListener("click", (e) => {
      e.preventDefault();
      showView("home");
    });
  }

  // Navigation Links
  DOM.navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const view = link.getAttribute("data-view");
      if (view) showView(view);
    });
  });

  DOM.mobileNavLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const view = link.getAttribute("data-view");
      if (view) showView(view);
    });
  });

  // History buttons
  DOM.navBackBtn.addEventListener("click", () => {
    if (AppState.viewHistory.length > 1) {
      AppState.viewHistory.pop();
      const prevView = AppState.viewHistory[AppState.viewHistory.length - 1];
      showView(prevView, false);
    }
  });
  DOM.navForwardBtn.addEventListener("click", () => {
    showToast("Navigation history end");
  });

  // Search input live filter
  let searchTimeout = null;
  DOM.globalSearchInput.addEventListener("input", (e) => {
    clearTimeout(searchTimeout);
    const query = e.target.value;
    if (query.trim().length > 0) {
      DOM.searchClearBtn.style.display = "flex";
    } else {
      DOM.searchClearBtn.style.display = "none";
    }
    searchTimeout = setTimeout(() => {
      executeSearch(query);
    }, 200);
  });

  DOM.searchClearBtn.addEventListener("click", () => {
    DOM.globalSearchInput.value = "";
    DOM.searchClearBtn.style.display = "none";
    executeSearch("");
  });

  // Search Tabs Filter
  DOM.searchTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      DOM.searchTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const tabType = tab.getAttribute("data-tab");
      const query = DOM.globalSearchInput.value.trim().toLowerCase();
      // Adjust visibility based on tab
      const containers = DOM.searchResultsContent.querySelectorAll(".section-container");
      containers.forEach(cont => {
        const title = cont.querySelector(".section-title")?.textContent.toLowerCase() || "";
        if (tabType === "all") cont.style.display = "block";
        else if (tabType === "songs" && title.includes("songs")) cont.style.display = "block";
        else if (tabType === "artists" && title.includes("artists")) cont.style.display = "block";
        else if (tabType === "albums" && title.includes("albums")) cont.style.display = "block";
        else cont.style.display = "none";
      });
    });
  });

  // Notification toggle
  DOM.notificationBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    DOM.notificationPopover.classList.toggle("open");
    DOM.profileMenu.classList.remove("open");
  });

  DOM.markNotificationsRead.addEventListener("click", () => {
    DOM.notificationBadge.style.display = "none";
    const unreadItems = DOM.notificationPopover.querySelectorAll(".notification-item.unread");
    unreadItems.forEach(item => item.classList.remove("unread"));
    showToast("All notifications marked as read");
  });

  // Profile menu toggle
  DOM.userProfileBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    DOM.profileMenu.classList.toggle("open");
    DOM.notificationPopover.classList.remove("open");
  });

  document.addEventListener("click", () => {
    DOM.notificationPopover.classList.remove("open");
    DOM.profileMenu.classList.remove("open");
  });

  // Transport Controls
  DOM.btnPlayPause.addEventListener("click", togglePlayPause);
  DOM.btnNext.addEventListener("click", playNextTrack);
  DOM.btnPrev.addEventListener("click", playPrevTrack);

  DOM.btnShuffle.addEventListener("click", () => {
    AppState.isShuffle = !AppState.isShuffle;
    updatePlayerUI();
    showToast(AppState.isShuffle ? "Shuffle On" : "Shuffle Off");
  });

  DOM.btnRepeat.addEventListener("click", () => {
    if (AppState.repeatMode === "off") AppState.repeatMode = "all";
    else if (AppState.repeatMode === "all") AppState.repeatMode = "one";
    else AppState.repeatMode = "off";

    updatePlayerUI();
    const modeName = AppState.repeatMode === "one" ? "Repeat Track" : (AppState.repeatMode === "all" ? "Repeat All" : "Repeat Off");
    showToast(modeName);
  });

  DOM.playerLikeBtn.addEventListener("click", () => {
    if (AppState.currentTrack) {
      toggleFavorite(AppState.currentTrack.id);
    }
  });

  // Hero Actions
  DOM.heroPlayBtn.addEventListener("click", () => {
    const track = TRACKS_DATA[0];
    loadTrack(track, true);
  });

  DOM.heroExploreBtn.addEventListener("click", () => {
    showView("explore");
  });

  DOM.heroFavBtn.addEventListener("click", () => {
    toggleFavorite(1);
  });

  DOM.viewAllTracksBtn.addEventListener("click", () => {
    AppState.queue = [...TRACKS_DATA];
    loadTrack(TRACKS_DATA[0], true);
    renderQueue();
    showToast("Playing all catalog tracks");
  });

  if (DOM.playAllFavoritesBtn) {
    DOM.playAllFavoritesBtn.addEventListener("click", () => {
      const favTracks = TRACKS_DATA.filter(t => AppState.favorites.includes(t.id));
      if (favTracks.length > 0) {
        AppState.queue = [...favTracks];
        loadTrack(favTracks[0], true);
        renderQueue();
        showToast("Playing all liked tracks");
      } else {
        showToast("No liked songs yet!");
      }
    });
  }

  // Genre filter pills
  DOM.filterPills.forEach(pill => {
    pill.addEventListener("click", () => {
      DOM.filterPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      const genre = pill.getAttribute("data-genre");
      renderHomePopularTracks(genre);
    });
  });

  // Progress Bar Seek & Tooltip
  DOM.progressWrapper.addEventListener("click", (e) => {
    if (!DOM.audio.duration) return;
    const rect = DOM.progressWrapper.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    DOM.audio.currentTime = pos * DOM.audio.duration;
  });

  DOM.progressWrapper.addEventListener("mousemove", (e) => {
    if (!DOM.audio.duration) return;
    const rect = DOM.progressWrapper.getBoundingClientRect();
    const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const seekTime = pos * DOM.audio.duration;
    DOM.timeTooltip.textContent = formatTime(seekTime);
    DOM.timeTooltip.style.left = `${pos * 100}%`;
  });

  // Volume Slider & Mute
  DOM.volumeSlider.addEventListener("input", (e) => {
    const val = parseFloat(e.target.value);
    AppState.volume = val;
    DOM.audio.volume = val;
    DOM.volumeFill.style.width = `${val * 100}%`;
    localStorage.setItem("vibra_volume", val);
    updateVolumeIcon(val);
  });

  DOM.btnVolumeIcon.addEventListener("click", () => {
    if (AppState.isMuted) {
      AppState.isMuted = false;
      DOM.audio.volume = AppState.volume;
      DOM.volumeSlider.value = AppState.volume;
      DOM.volumeFill.style.width = `${AppState.volume * 100}%`;
      updateVolumeIcon(AppState.volume);
    } else {
      AppState.isMuted = true;
      DOM.audio.volume = 0;
      DOM.volumeSlider.value = 0;
      DOM.volumeFill.style.width = "0%";
      DOM.volumeSvgIcon.innerHTML = `<path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>`;
    }
  });

  // Queue Drawer
  DOM.btnToggleQueue.addEventListener("click", () => {
    renderQueue();
    DOM.queueDrawer.classList.toggle("open");
  });
  DOM.closeQueueBtn.addEventListener("click", () => {
    DOM.queueDrawer.classList.remove("open");
  });

  // Visualizer Toggle
  DOM.btnToggleVisualizer.addEventListener("click", () => {
    visualizerActive = !visualizerActive;
    DOM.btnToggleVisualizer.classList.toggle("active", visualizerActive);
    showToast(visualizerActive ? "Visualizer On" : "Visualizer Off");
  });

  // Fullscreen / Lyrics Mode
  DOM.btnFullscreenPlayer.addEventListener("click", () => {
    openModal(DOM.fullscreenPlayerModal);
  });
  DOM.playerThumbTrigger.addEventListener("click", () => {
    openModal(DOM.fullscreenPlayerModal);
  });
  DOM.fsCloseBtn.addEventListener("click", () => {
    closeModal(DOM.fullscreenPlayerModal);
  });

  // Playlists Creation Modals
  const openCreateModal = () => openModal(DOM.createPlaylistModal);
  if (DOM.playlistsCreateBtn) DOM.playlistsCreateBtn.addEventListener("click", openCreateModal);
  if (DOM.sidebarCreatePlaylistBtn) DOM.sidebarCreatePlaylistBtn.addEventListener("click", openCreateModal);

  DOM.closePlaylistModalBtn.addEventListener("click", () => closeModal(DOM.createPlaylistModal));
  DOM.cancelPlaylistBtn.addEventListener("click", () => closeModal(DOM.createPlaylistModal));

  DOM.createPlaylistForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = DOM.playlistNameInput.value;
    const desc = DOM.playlistDescInput.value;
    const colorEl = document.querySelector('input[name="playlistColor"]:checked');
    const color = colorEl ? colorEl.value : "purple";

    createUserPlaylist(name, desc, color);
    DOM.createPlaylistForm.reset();
    closeModal(DOM.createPlaylistModal);
  });

  // Add to Playlist Modal
  DOM.closeAddModalBtn.addEventListener("click", () => closeModal(DOM.addToPlaylistModal));
  DOM.quickCreateFromAddBtn.addEventListener("click", () => {
    closeModal(DOM.addToPlaylistModal);
    openModal(DOM.createPlaylistModal);
  });

  DOM.selectPlaylistContainer.addEventListener("click", (e) => {
    const item = e.target.closest("[data-add-to-pl-id]");
    if (item && AppState.pendingAddToTrack) {
      const plId = item.getAttribute("data-add-to-pl-id");
      addTrackToPlaylist(AppState.pendingAddToTrack.id, plId);
    }
  });

  // Shortcuts Modal
  const openShortcuts = () => openModal(DOM.shortcutsModal);
  DOM.openShortcutsBtn.addEventListener("click", openShortcuts);
  DOM.menuShortcutsBtn.addEventListener("click", openShortcuts);
  DOM.closeShortcutsModalBtn.addEventListener("click", () => closeModal(DOM.shortcutsModal));

  // Reset Demo State
  DOM.menuResetStorageBtn.addEventListener("click", () => {
    if (confirm("Reset VIBRA demo state to fresh default?")) {
      localStorage.clear();
      location.reload();
    }
  });

  // Clear History
  DOM.clearRecentBtn.addEventListener("click", () => {
    AppState.history = [];
    saveHistoryToStorage();
    renderRecentlyPlayed();
    renderHomeRecentlyPlayed();
    showToast("Listening history cleared");
  });

  // Global Delegated Clicks (Track rows, like buttons, add buttons, play cards)
  document.addEventListener("click", (e) => {
    // Like Button
    const likeBtn = e.target.closest(".like-btn");
    if (likeBtn) {
      e.stopPropagation();
      const trackId = likeBtn.getAttribute("data-track-id");
      toggleFavorite(trackId);
      return;
    }

    // Add to Playlist Button
    const addBtn = e.target.closest(".add-btn");
    if (addBtn) {
      e.stopPropagation();
      const trackId = addBtn.getAttribute("data-track-id");
      openAddToPlaylistModal(trackId);
      return;
    }

    // Track Row Click -> Play
    const trackRow = e.target.closest("tr[data-track-id]");
    if (trackRow && !e.target.closest(".col-actions")) {
      const trackId = parseInt(trackRow.getAttribute("data-track-id"), 10);
      const track = TRACKS_DATA.find(t => t.id === trackId);
      if (track) loadTrack(track, true);
      return;
    }

    // Play Track Card Click
    const playTrackBtn = e.target.closest(".play-track-btn");
    if (playTrackBtn) {
      e.stopPropagation();
      const trackId = parseInt(playTrackBtn.getAttribute("data-track-id"), 10);
      const track = TRACKS_DATA.find(t => t.id === trackId);
      if (track) loadTrack(track, true);
      return;
    }

    // Curated Playlist Card Click
    const plCard = e.target.closest("[data-playlist-id]");
    if (plCard) {
      const plId = plCard.getAttribute("data-playlist-id");
      showPlaylistDetail(plId, false);
      return;
    }

    // User Playlist Card Click
    const uplCard = e.target.closest("[data-user-playlist-id]");
    if (uplCard) {
      const uplId = uplCard.getAttribute("data-user-playlist-id");
      showPlaylistDetail(uplId, true);
      return;
    }

    // Sidebar User Playlist Link
    const sidebarPlLink = e.target.closest("[data-open-user-playlist]");
    if (sidebarPlLink) {
      e.preventDefault();
      const plId = sidebarPlLink.getAttribute("data-open-user-playlist");
      showPlaylistDetail(plId, true);
      return;
    }

    // Album Card Click
    const albumCard = e.target.closest("[data-album-id]");
    if (albumCard) {
      const albumId = albumCard.getAttribute("data-album-id");
      showAlbumDetail(albumId);
      return;
    }

    // Artist Card Click
    const artistCard = e.target.closest("[data-artist-id]");
    if (artistCard) {
      const artistId = artistCard.getAttribute("data-artist-id");
      showArtistDetail(artistId);
      return;
    }

    // Genre filter card on Explore view
    const genreCard = e.target.closest("[data-genre-filter]");
    if (genreCard) {
      const genre = genreCard.getAttribute("data-genre-filter");
      DOM.globalSearchInput.value = genre;
      executeSearch(genre);
      return;
    }

    // Create Playlist card
    if (e.target.closest("#card-create-playlist-btn")) {
      openModal(DOM.createPlaylistModal);
      return;
    }

    // Queue Item Click
    const queueItem = e.target.closest(".queue-item");
    if (queueItem) {
      const qIdx = parseInt(queueItem.getAttribute("data-queue-index"), 10);
      loadTrack(AppState.queue[qIdx], true);
      renderQueue();
      return;
    }

    // Delete Playlist Button in Detail View
    const delBtn = e.target.closest("#detail-delete-playlist-btn");
    if (delBtn) {
      const plId = delBtn.getAttribute("data-delete-id");
      if (confirm("Are you sure you want to delete this custom playlist?")) {
        deleteUserPlaylist(plId);
      }
      return;
    }
  });

  // Keyboard Shortcuts Listener
  document.addEventListener("keydown", (e) => {
    // If typing in input or textarea, ignore shortcuts except Escape
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") {
      if (e.key === "Escape") {
        e.target.blur();
        closeModal(DOM.createPlaylistModal);
        closeModal(DOM.addToPlaylistModal);
      }
      return;
    }

    switch (e.code) {
      case "Space":
        e.preventDefault();
        togglePlayPause();
        break;
      case "KeyN":
        playNextTrack();
        break;
      case "KeyP":
        playPrevTrack();
        break;
      case "KeyM":
        DOM.btnVolumeIcon.click();
        break;
      case "KeyL":
        if (AppState.currentTrack) toggleFavorite(AppState.currentTrack.id);
        break;
      case "KeyF":
        if (DOM.fullscreenPlayerModal.classList.contains("open")) {
          closeModal(DOM.fullscreenPlayerModal);
        } else {
          openModal(DOM.fullscreenPlayerModal);
        }
        break;
      case "ArrowRight":
        if (DOM.audio.duration) {
          DOM.audio.currentTime = Math.min(DOM.audio.duration, DOM.audio.currentTime + 5);
        }
        break;
      case "ArrowLeft":
        if (DOM.audio.duration) {
          DOM.audio.currentTime = Math.max(0, DOM.audio.currentTime - 5);
        }
        break;
      case "ArrowUp":
        e.preventDefault();
        AppState.volume = Math.min(1, AppState.volume + 0.05);
        DOM.volumeSlider.value = AppState.volume;
        DOM.volumeSlider.dispatchEvent(new Event("input"));
        break;
      case "ArrowDown":
        e.preventDefault();
        AppState.volume = Math.max(0, AppState.volume - 0.05);
        DOM.volumeSlider.value = AppState.volume;
        DOM.volumeSlider.dispatchEvent(new Event("input"));
        break;
      case "Escape":
        closeModal(DOM.fullscreenPlayerModal);
        closeModal(DOM.createPlaylistModal);
        closeModal(DOM.addToPlaylistModal);
        closeModal(DOM.shortcutsModal);
        DOM.queueDrawer.classList.remove("open");
        break;
    }
  });
}

function updateVolumeIcon(val) {
  if (val === 0) {
    DOM.volumeSvgIcon.innerHTML = `<path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>`;
  } else if (val < 0.5) {
    DOM.volumeSvgIcon.innerHTML = `<path d="M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z"/>`;
  } else {
    DOM.volumeSvgIcon.innerHTML = `<path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>`;
  }
}

// 17. INITIALIZATION ON DOM READY
document.addEventListener("DOMContentLoaded", () => {
  console.log("VIBRA Music Platform Initializing...");
  loadStateFromStorage();
  initAudioEngine();
  renderHomePopularTracks();
  renderCuratedPlaylists();
  renderPopularArtists();
  renderFeaturedAlbums();
  renderUserPlaylists();
  renderRecentlyPlayed();
  renderHomeRecentlyPlayed();
  renderFavorites();
  renderExploreTracks();
  renderExploreGenres();
  updateCounts();
  initCanvasVisualizer();
  setupEventListeners();
  console.log("VIBRA Ready • Enjoy High Fidelity Streaming!");
});
