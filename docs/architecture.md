# CalmWave Architecture

This document describes the architecture, design patterns, and technical decisions behind CalmWave.

## Table of Contents

- [Overview](#overview)
- [Architecture Principles](#architecture-principles)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Data Flow](#data-flow)
- [Offline-First Strategy](#offline-first-strategy)
- [State Management](#state-management)
- [Navigation](#navigation)
- [Audio System](#audio-system)
- [Backend Integration](#backend-integration)
- [Performance Considerations](#performance-considerations)

## Overview

CalmWave is built as a React Native mobile application using Expo for cross-platform development. The app follows an **offline-first architecture** to ensure calming features are always accessible, even without internet connectivity.

```
┌─────────────────────────────────────────────────────┐
│                  Mobile App (React Native + Expo)    │
│                                                       │
│  ┌──────────────┐  ┌──────────────┐  ┌────────────┐ │
│  │   Screens    │  │  Components  │  │   Hooks    │ │
│  └──────┬───────┘  └──────┬───────┘  └─────┬──────┘ │
│         │                 │                 │        │
│  ┌──────┴─────────────────┴─────────────────┴──────┐ │
│  │              State Management                    │ │
│  │         (Context API + Local State)              │ │
│  └──────┬──────────────────────────────────┬───────┘ │
│         │                                   │         │
│  ┌──────┴──────┐                   ┌───────┴───────┐ │
│  │   Services  │                   │  Local Storage │ │
│  │  (API/Logic)│                   │  (AsyncStorage)│ │
│  └──────┬──────┘                   └───────────────┘ │
│         │                                             │
└─────────┼─────────────────────────────────────────────┘
          │
          │ HTTP/REST
          ▼
┌─────────────────────────────────────────────────────┐
│              Appwrite Backend                        │
│  ┌──────────┐  ┌──────────┐  ┌──────────────────┐  │
│  │ Database │  │  Storage │  │  Functions (opt) │  │
│  └──────────┘  └──────────┘  └──────────────────┘  │
└─────────────────────────────────────────────────────┘
```

## Architecture Principles

### 1. Offline-First

Core calming features must work without internet:

- Essential audio files bundled in app
- Scenes preloaded on first launch
- Graceful degradation when offline
- Background sync when online

### 2. Performance

Anxiety/panic requires immediate relief:

- Asset preloading at startup
- Optimized animations (60 fps)
- Lazy loading for non-critical features
- Minimal time-to-interactive

### 3. Simplicity

Reduce cognitive load during distress:

- One-tap access to calming
- Minimal navigation depth
- Clear visual hierarchy
- No blocking screens

### 4. Accessibility

Support diverse user needs:

- Screen reader compatible
- Dynamic type support
- High contrast mode
- Reduced motion support

### 5. Privacy

Respect user privacy:

- No forced authentication
- Optional analytics
- Local-first data
- Transparent data usage

## Tech Stack

### Core Framework

- **React Native 0.76** - Cross-platform mobile development
- **Expo ~52.0** - Development tooling and managed workflow
- **TypeScript 5.3** - Type safety

### UI & Animations

- **React Native Reanimated 3.16** - Smooth 60fps animations
- **Expo Linear Gradient** - Visual effects
- **React Navigation 7.0** - Navigation
- **@gorhom/bottom-sheet** - Bottom sheet modals

### Backend & Data

- **Appwrite 17.0** - Backend-as-a-Service
  - Database (scene metadata, user prefs)
  - Storage (audio files, images)
  - Functions (optional processing)
- **AsyncStorage** - Local persistent storage

### Audio

- **Expo AV** - Audio playback
- Bundled MP3/OGG files for offline use

### Development Tools

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Jest** - Unit testing
- **TypeScript** - Type checking

## Project Structure

```
relax/
├── app/                        # Expo Router - App entry points
│   ├── index.tsx              # Home/navigation hub
│   ├── _layout.tsx            # Root layout
│   ├── calm.tsx               # Calm mode screen (future)
│   └── settings.tsx           # Settings screen (future)
│
├── src/
│   ├── assets/                # Static assets
│   │   ├── audio/            # Bundled audio files (CRITICAL for offline)
│   │   │   ├── ocean-waves.mp3
│   │   │   ├── forest-sounds.mp3
│   │   │   ├── gentle-rain.mp3
│   │   │   └── mountain-breeze.mp3
│   │   ├── icons/            # UI icons
│   │   └── images/           # Image assets
│   │
│   ├── components/            # Reusable UI components
│   │   ├── Button.tsx        # Custom button
│   │   ├── Card.tsx          # Card container
│   │   ├── Header.tsx        # App header
│   │   └── status-lines/     # Status indicators
│   │
│   ├── screens/               # Full-screen components
│   │   ├── CalmWaveScreen.tsx      # Main breathing/calming
│   │   ├── GroundingScreen.tsx     # 5-4-3-2-1 grounding
│   │   ├── CrisisScreen.tsx        # Crisis resources
│   │   └── SettingsScreen.tsx      # User settings
│   │
│   ├── context/               # React Context providers
│   │   └── AppContext.tsx    # Global app state
│   │
│   ├── services/              # Business logic & API
│   │   ├── appwrite.ts       # Appwrite client setup
│   │   ├── sceneService.ts   # Scene management
│   │   └── audioService.ts   # Audio playback (future)
│   │
│   ├── hooks/                 # Custom React hooks
│   │   ├── useBreathing.ts   # Breathing logic (future)
│   │   └── useAudio.ts       # Audio playback (future)
│   │
│   ├── types/                 # TypeScript definitions
│   │   ├── index.ts          # General types
│   │   └── log.ts            # Log types
│   │
│   ├── utils/                 # Helper functions
│   │   └── helpers.ts        # Utility functions
│   │
│   └── styles/                # Theming & design system
│       ├── theme.ts          # Colors, spacing, etc.
│       └── font.ts           # Typography
│
├── docs/                      # Documentation
│   ├── app-purpose.md        # Product vision
│   ├── info.md               # Technical info
│   ├── appwrite-setup.md     # Backend setup
│   └── architecture.md       # This file
│
└── Configuration files
    ├── app.json              # Expo configuration
    ├── tsconfig.json         # TypeScript config
    ├── package.json          # Dependencies
    └── .env                  # Environment variables
```

## Data Flow

### Scene Loading Flow

```
App Launch
    │
    ├─► Check bundled assets (immediate access)
    │       └─► Load ocean, forest, rain, mountain
    │
    ├─► Check AsyncStorage for cached scenes
    │       └─► Load previously downloaded scenes
    │
    └─► Fetch from Appwrite (background, when online)
            ├─► List scene metadata from Database
            ├─► Compare with local cache
            └─► Download new/updated scenes to Storage
```

### Breathing Exercise Flow

```
User taps "Calm Now"
    │
    ├─► Navigate to CalmWaveScreen
    │
    ├─► Load selected scene
    │       ├─► Visual: Start wave animation
    │       └─► Audio: Play nature sound loop
    │
    ├─► Start breathing cycle
    │       ├─► Inhale (visual expands)
    │       ├─► Hold (visual steady)
    │       ├─► Exhale (visual contracts)
    │       └─► Repeat
    │
    └─► User controls
            ├─► Change scene
            ├─► Adjust breathing pattern
            └─► Exit when calm
```

### Settings Sync Flow

```
User changes setting
    │
    ├─► Update local state (immediate)
    │
    ├─► Save to AsyncStorage (persist locally)
    │
    └─► If online & opted-in
            └─► Sync to Appwrite Database (background)
```

## Offline-First Strategy

### Critical Assets (Bundled)

These are included in the app binary for immediate offline access:

- **Audio files** (4 core scenes, ~2-3 MB total)

  - `ocean-waves.mp3` (500 KB)
  - `forest-sounds.mp3` (500 KB)
  - `gentle-rain.mp3` (500 KB)
  - `mountain-breeze.mp3` (500 KB)

- **Visual assets**
  - Scene thumbnails
  - Icons
  - Gradient overlays

### Optional Assets (Downloaded)

These can be fetched from Appwrite when available:

- Additional scene audio files
- High-resolution images
- Updated content
- User-generated scenes (future)

### Caching Strategy

```typescript
// Pseudo-code for asset loading priority

async function loadScene(sceneId: string) {
  // 1. Try bundled assets first (immediate)
  const bundled = getBundledAsset(sceneId);
  if (bundled) return bundled;

  // 2. Check local cache
  const cached = await getFromCache(sceneId);
  if (cached) return cached;

  // 3. Download from Appwrite (if online)
  if (isOnline()) {
    const remote = await downloadFromAppwrite(sceneId);
    await saveToCache(sceneId, remote);
    return remote;
  }

  // 4. Fallback to default
  return getDefaultScene();
}
```

## State Management

### Global State (Context API)

```typescript
// AppContext.tsx - Global app state

interface AppState {
  // User preferences
  breathingPattern: "basic" | "sleep" | "extended";
  currentScene: string;
  volume: number;
  darkMode: boolean;

  // App state
  isOnline: boolean;
  scenes: Scene[];

  // Actions
  setBreathingPattern: (pattern) => void;
  setCurrentScene: (scene) => void;
  // ...
}
```

### Local State (Component-level)

Use React hooks for component-specific state:

- Animation states
- Form inputs
- UI toggles
- Loading states

### Persistent State (AsyncStorage)

Store user preferences locally:

```typescript
// Keys used in AsyncStorage
const STORAGE_KEYS = {
  BREATHING_PATTERN: "@calmwave:breathing_pattern",
  CURRENT_SCENE: "@calmwave:current_scene",
  VOLUME: "@calmwave:volume",
  DARK_MODE: "@calmwave:dark_mode",
  CACHED_SCENES: "@calmwave:cached_scenes",
  LAST_SYNC: "@calmwave:last_sync",
};
```

## Navigation

Using Expo Router (file-based routing):

```
app/
├── index.tsx           → /           (Home/Navigator)
├── calm.tsx           → /calm        (Calm Mode)
├── grounding.tsx      → /grounding   (Grounding Exercise)
├── crisis.tsx         → /crisis      (Crisis Resources)
├── settings.tsx       → /settings    (Settings)
└── _layout.tsx        → Root layout
```

### Navigation Patterns

1. **Home Hub** - Central navigation screen
2. **Instant Calm** - One-tap to calm mode (bypass navigation)
3. **Back to Safety** - Always easy to exit exercises
4. **Deep Linking** - Support `calmwave://calm` for shortcuts

## Audio System

### Requirements

- Low-latency playback (<100ms)
- Smooth looping (no gaps)
- Background audio support
- Volume control
- Multiple simultaneous sounds (optional)

### Implementation

```typescript
// Using Expo AV

import { Audio } from "expo-av";

// Initialize audio
await Audio.setAudioModeAsync({
  playsInSilentModeIOS: true,
  staysActiveInBackground: true,
  shouldDuckAndroid: true,
});

// Load and play
const { sound } = await Audio.Sound.createAsync(
  require("@/assets/audio/ocean-waves.mp3"),
  { isLooping: true, volume: 0.8 }
);
await sound.playAsync();
```

### Audio Optimization

- Use compressed formats (MP3, OGG)
- Keep loops short (30-60 seconds)
- Preload next scene during playback
- Crossfade between scene changes

## Backend Integration

### Appwrite Services Used

#### Database

**Collections:**

1. `scene_metadata` - Scene information

   ```json
   {
     "title": "Ocean Waves",
     "description": "Gentle ocean waves",
     "fileId": "audio_file_id",
     "category": "nature",
     "tags": ["ocean", "water"],
     "duration": 180,
     "isOfflineBundle": true
   }
   ```

2. `user_prefs` (optional) - User settings
   ```json
   {
     "userId": "user123",
     "breathingPattern": "basic",
     "lastScene": "ocean",
     "analyticsOptIn": false
   }
   ```

#### Storage

**Buckets:**

1. `scenes` - Audio and visual assets
   - Public read access
   - Admin-only write
   - Max file size: 10MB

#### Functions (Optional)

- `process-upload` - Generate thumbnails, transcode audio
- `analytics-aggregate` - Process anonymous usage data
- `notify-updates` - Notify users of new scenes

### API Service Layer

```typescript
// src/services/sceneService.ts

export const sceneService = {
  // List available scenes
  listScenes: async () => {
    const response = await appwriteDB.listDocuments(
      DATABASE_ID,
      "scene_metadata"
    );
    return response.documents;
  },

  // Download scene file
  downloadScene: async (fileId: string) => {
    const url = appwriteStorage.getFileDownload("scenes", fileId);
    // Download and cache locally
    return downloadAndCache(url, fileId);
  },

  // Get scene metadata
  getScene: async (sceneId: string) => {
    return await appwriteDB.getDocument(DATABASE_ID, "scene_metadata", sceneId);
  },
};
```

## Performance Considerations

### App Startup

Target: <2 seconds to interactive

1. Preload critical assets (0-500ms)
2. Initialize audio system (500-1000ms)
3. Load cached data (1000-1500ms)
4. Render UI (1500-2000ms)
5. Background: Fetch updates

### Animation Performance

Target: 60 fps smooth animations

- Use `react-native-reanimated` for animations
- Run animations on UI thread
- Avoid re-renders during animation
- Use `useSharedValue` for animated values

### Memory Management

- Unload unused audio files
- Clear cache when space is low
- Limit simultaneous animations
- Optimize images (WebP format)

### Battery Optimization

- Pause audio when app backgrounded
- Reduce animation when battery low
- Batch network requests
- Use efficient polling intervals

## Security & Privacy

### Data Collection

**Collected (with opt-in):**

- Anonymous usage statistics
- Crash reports
- Feature usage patterns

**Never collected:**

- Personal information
- Location data
- Health data
- Contact information

### Data Storage

**Local (device):**

- User preferences
- Cached scenes
- Usage history (anonymous)

**Remote (Appwrite):**

- Optional user preferences (encrypted)
- Scene metadata (public)
- Anonymous analytics (aggregated)

## Future Architecture Considerations

### Scalability

- CDN for scene assets
- Database sharding for users
- Caching layer (Redis)
- Rate limiting

### New Features

- User accounts (optional)
- Custom scene uploads
- Community sharing
- Progress tracking
- Push notifications
- Apple Watch / Wear OS support

### Internationalization

- Multi-language support
- Locale-specific crisis resources
- Cultural adaptations

### Testing Strategy

- Unit tests (services, utils)
- Integration tests (flows)
- E2E tests (critical paths)
- Accessibility tests
- Performance tests

## Diagrams

### Component Hierarchy

```
App
└── AppProvider (Context)
    └── NavigationContainer
        ├── HomeScreen
        │   ├── Header
        │   ├── CalmButton (Quick action)
        │   └── NavigationCards
        │
        ├── CalmWaveScreen
        │   ├── SceneSelector
        │   ├── WaveAnimation
        │   ├── AudioPlayer
        │   └── BreathingGuide
        │
        ├── GroundingScreen
        │   └── StepByStepGuide
        │
        ├── CrisisScreen
        │   └── ResourceList
        │
        └── SettingsScreen
            └── PreferenceForm
```

## References

- [React Native Performance](https://reactnative.dev/docs/performance)
- [Expo Best Practices](https://docs.expo.dev/guides/best-practices/)
- [Appwrite Documentation](https://appwrite.io/docs)
- [Offline-First Architecture](https://offlinefirst.org/)
