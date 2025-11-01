# Hackathon Submission: CalmWave

## GitHub handle

AlainS7

## Project Title

CalmWave - Mental Health Support App

## Project Description

CalmWave is a free, open-source React Native mobile app that provides immediate, evidence-based mental health support during moments of anxiety and panic. The app features animated breathing exercises, a 5-4-3-2-1 grounding technique, crisis resources, and customizable settings—all designed with an offline-first architecture to ensure help is always available when needed most.

**Key Features:**

- 🌊 Animated breathing exercises with 4 calming nature scenes (ocean, forest, rain, mountain)
- 🫁 3 evidence-based breathing patterns (basic 4-4, sleep 4-7-8, extended 6-6)
- 👁️ 5-4-3-2-1 sensory grounding exercise for anxiety relief
- 🆘 Crisis resources with international hotlines and click-to-call functionality
- ⚙️ Customizable settings for personalized experience
- 📱 100% offline-first - core features work without internet
- 🎨 Beautiful, calming UI with smooth animations
- 🔒 Privacy-first design - no forced accounts, no tracking

## Inspiration behind the Project

Anxiety and panic attacks affect millions of people worldwide, often striking unexpectedly and leaving individuals feeling helpless. As someone who understands these challenges, I wanted to create an accessible tool that provides immediate, evidence-based relief right when it's needed most.

The inspiration came from recognizing that during a panic attack, people need simple, immediate interventions—not complex apps requiring internet connectivity or account creation. CalmWave was built to be the calm companion in your pocket, always ready to help ground you, guide your breathing, and connect you to professional support if needed.

The goal is to make mental health support as accessible as checking the time—something that's always there, works offline, respects your privacy, and genuinely helps when anxiety strikes.

## Tech Stack

**Frontend:**

- React Native 0.76 - Cross-platform mobile development
- TypeScript 5.3 - Type safety and better developer experience
- Expo ~52.0 - Simplified development and deployment
- expo-router - File-based navigation
- React Native Reanimated 3.16 - Smooth 60fps animations
- expo-linear-gradient - Beautiful gradient backgrounds

**Backend (Optional):**

- Appwrite 17.0 - Backend-as-a-Service for optional features
- Storage API - Audio file hosting for nature sounds
- Database API - User preferences sync (future feature)

**Development & Deployment:**

- EAS Build - Production-ready builds for iOS and Android
- EAS Submit - Automated App Store and Play Store submissions
- Git & GitHub - Version control and collaboration

**Architecture:**

- Offline-first design pattern
- Local state management with React hooks
- AsyncStorage for persistent settings
- Modular component architecture

### Appwrite products

The project currently implements basic Appwrite integration with plans to expand:

- [ ] Auth - Planned for v1.1 (optional user accounts)
- [ ] Databases - Planned for v1.1 (settings sync across devices)
- [x] Storage - Used for hosting audio files (nature sounds)
- [ ] Functions - Planned for v2.0 (personalized recommendations)
- [ ] Messaging - Planned for v1.2 (optional reminder notifications)
- [ ] Realtime - Planned for v2.0 (community support features)
- [ ] Sites - Not applicable (native mobile app)

**Note:** The MVP focuses on offline-first functionality, with Appwrite integration being optional to ensure the app works without internet connectivity. Storage is used for hosting audio assets that are cached locally after first download.

## Project Repo

https://github.com/alains7/relax

**Additional Resources:**

- Comprehensive documentation in `/docs` folder
- App Store submission guide
- Contributing guidelines for open source community
- Architecture and technical documentation

## Deployed Site URL

https://relax.appwrite.network/

## Demo Video/Photos

## Demo Video

[![Watch the demo](https://img.youtube.com/vi/7xyril0PZv8/0.jpg)](https://youtu.be/7xyril0PZv8)

---

## Additional Information

**Project Status:** MVP Complete

- All core features implemented and tested
- Comprehensive documentation included
- Ready for App Store submission
- Open source and accepting contributions

**Why CalmWave Stands Out:**

1. **Offline-First**: Will work without internet connectivity when needed most
2. **Evidence-Based**: Uses proven techniques (breathing exercises, grounding)
3. **Privacy-Focused**: No forced accounts, no tracking, data stays on device
4. **Beautiful UX**: Professional design with calming animations
5. **Open Source**: Community-driven development with MIT license
6. **Production-Ready**: Complete with publishing guides and documentation

**Community Impact:**
Mental health support should be accessible to everyone, everywhere. CalmWave is built to help people in their most vulnerable moments, and being open source means the community can contribute to making it even better.

**Future Roadmap:**

- v1.1: Audio playback for nature sounds, user accounts (optional)
- v1.2: Progress tracking, reminder notifications
- v2.0: Community features, personalized recommendations
- Long-term: Multiple languages, accessibility enhancements, therapist resources

**Thank you to Appwrite for hosting this hackathon and providing excellent tools for developers!** 🚀
