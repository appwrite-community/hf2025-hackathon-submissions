# CalmWave (working title)

## Mission

To provide **immediate, evidence-based grounding and calming** to users during panic or anxiety attacks, via simple visual + audio interventions and brief psychoeducational support — entirely free, offline-able, and open source.



## Core Principles & Guiding Philosophy

1. **Immediate access** — reduce time to relief; minimal friction.
2. **Nonintrusive, intuitive UI** — let users focus on calming, not navigating.
3. **Evidence-based interventions** — breathing, grounding, nature sound.
4. **Safety first** — disclaimers and crisis signposting built in.
5. **Offline functionality** — core calming scenes must work without connectivity.
6. **Open source & extensible** — license permissively (MIT / Apache 2.0) so others can contribute and adapt.



## Key Features & User Flows

### 1. **One-Tap Calm / Instant Mode**

* On app launch, show a screen with one prominent button: **“Calm Now”** (or “Begin Calm”).
* Tapping it immediately triggers the core calming module (visual + audio + optional voice prompts).
* Avoid blocking screens (login, onboarding, ads) before calm mode.

### 2. **Core Calming Module**

This is the heart of the app. It includes:

* **Visual wave (or nature scene overlay):**

  * A fluid, gently pulsing wave form or abstract shape that expands/contracts in sync with breathing.
  * Scene variations available (ocean, forest mist, mountain mist, safe place imagery).

* **Audio: nature / ambient sound + optional low-arousal music:**

  * Preloaded loops (waves, forest sounds, rain, wind).
  * Option to include a soft voice prompting breathing (optional toggle).

* **Breathing pacing control:**

  * Built-in presets (e.g. 4 / 4, 4 / 6).
  * Visual sync: wave scale or opacity changes synchronized to inhale/exhale cycle.

* **Minimal controls:**

  * Mute / unmute button
  * Scene selector (compact, top or bottom)
  * Exit or back to home

### 3. **Scene Selector (“Change Scenery”)**

* Accessible from a small button or icon (e.g. top right corner).
* Tapping opens a small overlay or thumbnail grid of scenes (beach, forest, mountain, safe place).
* On scene change, swap visual + audio loops promptly (≤200 ms fade).
* Preload top 2–3 scenes for instant switching.

### 4. **Supplemental Tools & Screens**

From the home or menu, allow the user to optionally access:

* **Grounding technique page** (5-4-3-2-1, sensory prompts)
* **Brief psychoeducation / reassurance page**:

  * One screen: “What is a panic attack?”, “You’re safe, you can ride this out,” short physiology explanation
* **Crisis / Help button**:

  * “If you feel unsafe or in crisis, tap here” → show local emergency contact, hotlines, call or text option
* **Settings & Preferences**:

  * Toggle breathing prompts on/off
  * Adjust breathing preset
  * Theme (dark/light)
  * Accessibility (font size, color contrast)
  * Option to opt into anonymized analytics (symptom logging optional)

### 5. **First Launch & Onboarding (minimal)**

* On first launch, a “Welcome” tooltip or overlay explaining: “Tap ‘Calm Now’ to begin. Use the top button to change scenery. All features work offline.”
* No forced registration; user should never be blocked from calm mode.


## Technical & Performance Requirements

* **Offline functionality:**

  * Bundle 2–3 core scenes (audio + visual assets) inside the binary so essential calm mode works without network.
  * Optional additional scenes can be downloadable (but nonessential).

* **Low latency / smooth UI:**

  * Preload assets at app startup.
  * Use short audio loops (low bitrate) to minimize memory/CPU usage.
  * Graphics: simple shader or procedural wave animations (avoid heavy particle systems).

* **Visual-audio sync:**

  * Tie breathing cycles to visual oscillation (e.g. `scale(t) = 1 + A * sin(…)`)
  * Smooth eases for transitions.
  * When a new scene is selected, crossfade audio and fade visuals in/out seamlessly.

* **Autoplay & privacy compliance:**

  * Because some platforms restrict autoplay of audio, default to muted or require a first tap to start sound.
  * Respect user’s hardware mute / Do Not Disturb settings.

* **Accessibility:**

  * High-contrast or optional alternate color themes.
  * Scalable fonts.
  * Screen-reader friendly texts.
  * Option to disable motion for users sensitive to animations.

* **Data & privacy:**

  * Default: **no data collected**.
  * Optional opt-in analytics or symptom logging, with clear consent.
  * All data stored locally by default.
  * If remote analytics used, anonymize and encrypt.

* **License & open source:**

  * Use MIT or Apache 2.0 license (or other permissive license).
  * Host repository (e.g. on GitHub) with clear contributor guidelines.
  * Structure code modularly (e.g. scenes, audio engine, UI, grounding module).


## Safety & Legal / Ethical Constraints

* **Disclaimer:** On app info screen and first launch, include a short statement like:

  > “This app is a self-help tool, not a medical device or substitute for therapy. If you are in crisis or thinking of harming yourself, contact local emergency services or visit a hospital.”

* **Crisis protocol:** The “Crisis / Help” button should be always visible or easily accessible. It must not attempt to lock the user into routes — allow exit, or to place a call/text.

* **No overpromising:** Don’t claim “cures panic” or “treats anxiety disorders.” Use phrasing like “designed to help reduce the intensity of panic/anxiety symptoms” and “for acute calming support.”

* **Clinical review:** Before releasing, have a licensed mental health professional review the scripts, voice prompts, content flow, and crisis pathways.

* **User feedback / reporting:** Add a simple feedback option so users can report negative experiences or suggestions. Monitor for adverse events if you scale.


## Suggested Tech Stack (flexible / modular)

* Mobile: **React Native** or **Flutter** (fast cross-platform)
* Audio engine: minimal audio playback library (e.g. AVAudioEngine (iOS), OpenSL / ExoPlayer (Android), or cross-platform plugin)
* Graphics: simple vector or shader animations (e.g. canvas, Skia, WebGL)
* State management: lightweight (e.g. Redux / Riverpod / Context)
* Local storage: SQLite / secure local storage
* Optional analytics: e.g. Firebase Analytics (opt-in) or an open privacy-preserving alternative


## Milestones / Roadmap (version 1.0)

1. Skeleton app with “Calm Now” button and one bundled scene (visual + audio + breathing pacing)
2. Scene selector UI + ability to switch scenes
3. Add grounding technique and psychoeducation screens
4. Crisis / help flow and disclaimer
5. Settings / preferences + accessibility options
6. Offline mode validation & performance tuning
7. Beta testing with users, feedback, revision
8. Clinical review & validation
9. Publish as open source, releases for iOS / Android

