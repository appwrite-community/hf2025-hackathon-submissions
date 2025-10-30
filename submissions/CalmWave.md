# Hackathon Submission: CalmWave

## GitHub handle
alains7

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
This is a native mobile application built with React Native/Expo, not a web application. However, we have prepared:

**Mobile App Distribution:**
- iOS TestFlight: Coming soon (pending App Store review)
- Android APK: Available for testing via EAS Build
- Expo Go: Development version available

**Repository & Documentation:**
- Live documentation: https://github.com/alains7/relax
- Setup guide: See `docs/quick-start.md`
- Production deployment: See `GETTING_TO_PRODUCTION.md`

For testing purposes, developers can:
1. Clone the repository
2. Run `npm install`
3. Run `npx expo start`
4. Test via Expo Go app (iOS/Android) or simulators

**Future App Store URLs:**
- Apple App Store: Submission planned for December 2025
- Google Play Store: Submission planned for December 2025

## Demo Video/Photos  

**Demo Screenshots:**

*Home Screen - Main Navigation Hub*
- Beautiful gradient background with brand colors
- Prominent "Calm Now" CTA for immediate access
- Quick access cards for Grounding, Crisis Resources, and Settings
- Clean, minimal design that doesn't distract during moments of anxiety

*Breathing Exercise Screen*
- Animated wave visualization synchronized with breathing rhythm
- Scene selector: Choose from Ocean 🌊, Forest 🌲, Rain 🌧️, or Mountain ⛰️
- Pattern selector: Basic (4-4), Sleep (4-7-8), or Extended (6-6)
- Real-time countdown and phase tracking (inhale, hold, exhale)
- Smooth scale and opacity animations for calming effect

*Grounding Exercise Screen*
- Step-by-step 5-4-3-2-1 sensory technique
- Interactive prompts: "5 things you can see", "4 things you can touch", etc.
- Progress indicator showing current step
- Example prompts to guide users through the exercise
- Fade-in animations for gentle progression

*Crisis Resources Screen*
- Emergency banner for immediate attention
- International crisis hotlines (US, UK, Canada, Australia)
- Click-to-call and SMS functionality
- 24/7 availability information
- Links to additional mental health resources

*Settings Screen*
- Breathing pattern preferences
- Audio volume controls
- Dark mode toggle
- Privacy and data management
- App information and version

**Video Demo:** 
A 2-3 minute walkthrough video demonstrating all features is available upon request. The video showcases:
1. App launch and home screen navigation
2. Breathing exercise with scene changes and pattern selection
3. Complete 5-4-3-2-1 grounding exercise walkthrough
4. Crisis resources with hotline access
5. Settings customization
6. Smooth animations and transitions throughout

**Key Highlights:**
- Offline functionality demonstration
- Smooth 60fps animations on breathing wave
- Intuitive navigation and user experience
- Calming color palette and professional design
- Accessibility features for all users

---

## Additional Information

**Project Status:** MVP Complete ✅
- All core features implemented and tested
- Comprehensive documentation included
- Ready for App Store submission
- Open source and accepting contributions

**Why CalmWave Stands Out:**
1. **Offline-First**: Works without internet connectivity when needed most
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
