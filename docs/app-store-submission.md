# App Store Submission Guide

## 📱 MVP Publishing Checklist

This guide covers everything needed to publish **CalmWave** to the Apple App Store and Google Play Store.

---

## 🎯 Pre-Submission Requirements

### ✅ Technical Requirements

- [x] All screens implemented and tested
- [x] Navigation working properly
- [x] Error handling implemented
- [ ] App icon (1024x1024px) created
- [ ] Splash screen designed
- [ ] Testing on physical iOS device
- [ ] Testing on physical Android device
- [ ] Privacy policy published
- [ ] Terms of service (optional for MVP)

### ✅ App Store Accounts

#### Apple Developer Program

- **Cost**: $99/year USD
- **URL**: https://developer.apple.com/programs/
- **Requirements**: Apple ID, credit card, identity verification
- **Processing Time**: 24-48 hours

#### Google Play Console

- **Cost**: $25 one-time fee
- **URL**: https://play.google.com/console/signup
- **Requirements**: Google account, credit card
- **Processing Time**: Immediate

---

## 📋 Step-by-Step Publishing Process

### Phase 1: Project Configuration (30 minutes)

#### 1. Update `app.json`

```json
{
  "expo": {
    "name": "CalmWave",
    "slug": "calmwave",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "automatic",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#4A90B8"
    },
    "ios": {
      "supportsTablet": false,
      "bundleIdentifier": "com.yourcompany.calmwave",
      "buildNumber": "1",
      "infoPlist": {
        "NSMicrophoneUsageDescription": "CalmWave uses the microphone for optional guided meditation features."
      }
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#4A90B8"
      },
      "package": "com.yourcompany.calmwave",
      "versionCode": 1,
      "permissions": []
    },
    "plugins": ["expo-router"]
  }
}
```

#### 2. Install EAS CLI

```bash
npm install -g eas-cli
eas login
eas build:configure
```

---

### Phase 2: Asset Creation (2-3 hours)

#### App Icon Requirements

**iOS:**

- 1024x1024px PNG (no transparency)
- Must fill entire square
- Rounded corners applied automatically

**Android:**

- 1024x1024px PNG
- Adaptive icon: 512x512px foreground + background color

**Design Tips:**

- Simple, recognizable design
- Centered wave icon with gradient
- Test at small sizes (read ability)

**Tool Recommendations:**

- Figma (free): https://figma.com
- Canva (free): https://canva.com
- Affinity Designer ($)
- Adobe Illustrator ($)

#### Icon Generation Command:

```bash
# Place your icon.png (1024x1024) in /assets/
npx expo-optimize
```

#### Splash Screen Design:

- Same as icon or simpler
- Keep critical elements in center "safe zone"
- Background: `#4A90B8` (CalmWave blue)

---

### Phase 3: Privacy Policy (1 hour)

Create `docs/privacy-policy.md` and host it publicly (GitHub Pages works).

**Required Sections:**

1. **Data Collection**: What data you collect (if any)
2. **Data Usage**: How you use collected data
3. **Data Storage**: Where data is stored (local only for MVP)
4. **Third-party Services**: List any SDKs (Expo, Appwrite)
5. **User Rights**: How users can request data deletion
6. **Contact Information**: Email for privacy inquiries

**For CalmWave MVP:**

- No account required = minimal data collection
- Offline-first = no data transmission
- Settings stored locally = no cloud backup

**Template:**

```markdown
# Privacy Policy for CalmWave

**Effective Date:** [Today's Date]

## 1. Introduction

CalmWave ("we," "our," "us") is committed to protecting your privacy. This policy explains how we handle your information.

## 2. Data Collection

CalmWave does not collect, store, or transmit personal information. All app settings and preferences are stored locally on your device.

## 3. Local Storage

- Breathing pattern preferences
- Audio settings
- Dark mode preference
  All stored using device-local storage (AsyncStorage). Never transmitted to external servers.

## 4. Third-party Services

- **Expo**: Framework for app development (privacy: https://expo.dev/privacy)
- **Appwrite** (optional): If you choose to create an account (privacy: https://appwrite.io/privacy)

## 5. Analytics

We do not use analytics or tracking services in version 1.0.

## 6. Children's Privacy

CalmWave is suitable for all ages. No personal data is collected from any users.

## 7. Changes to This Policy

We may update this policy. Check this page periodically.

## 8. Contact Us

Email: support@calmwave.app
```

**Hosting Options:**

1. GitHub Pages (free): Push to `docs/` folder, enable in repo settings
2. Netlify (free): Auto-deploy from GitHub
3. Your own domain (optional)

---

### Phase 4: App Store Screenshots (2-3 hours)

#### iOS Screenshot Requirements:

- **6.7" Display** (iPhone 14 Pro Max): 1290 x 2796 pixels
- **6.5" Display** (iPhone 11 Pro Max): 1242 x 2688 pixels
- **5.5" Display** (iPhone 8 Plus): 1242 x 2208 pixels

**Minimum Required:** 3 screenshots
**Recommended:** 5-8 screenshots

#### Android Screenshot Requirements:

- **Minimum Resolution:** 320px
- **Maximum Resolution:** 3840px
- **Aspect Ratio:** 16:9 to 2:1

**Required:** 2 screenshots minimum
**Recommended:** 8 screenshots

#### Screenshot Strategy:

1. **Home Screen** - Show main navigation
2. **Calm Now** - Breathing exercise in action
3. **Grounding Exercise** - 5-4-3-2-1 interface
4. **Crisis Resources** - Emergency help screen
5. **Settings** - Customization options
6. **Scene Selector** - Different nature scenes
7. **Pattern Selector** - Breathing patterns
8. **Info/Benefits** - Why use CalmWave

**Tools:**

```bash
# Use iOS Simulator
xcrun simctl io booted screenshot screenshot1.png

# Use Android Emulator
adb shell screencap -p /sdcard/screenshot.png
adb pull /sdcard/screenshot.png
```

**Enhancement Tools:**

- **Rotato**: Add device frames (https://rotato.app)
- **Previewed**: Marketing screenshots (https://previewed.app)
- **Figma**: Custom designs

---

### Phase 5: EAS Build Setup (1 hour)

#### Create `eas.json`:

```json
{
  "cli": {
    "version": ">= 5.0.0"
  },
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal",
      "ios": {
        "simulator": true
      }
    },
    "preview": {
      "distribution": "internal",
      "ios": {
        "simulator": false
      }
    },
    "production": {
      "autoIncrement": true,
      "ios": {
        "buildNumber": "1.0.0"
      },
      "android": {
        "buildType": "apk"
      }
    }
  },
  "submit": {
    "production": {
      "ios": {
        "appleId": "your-apple-id@example.com",
        "ascAppId": "1234567890",
        "appleTeamId": "ABCDE12345"
      },
      "android": {
        "serviceAccountKeyPath": "./google-service-account.json",
        "track": "internal"
      }
    }
  }
}
```

#### Build Commands:

```bash
# iOS Production Build
eas build --platform ios --profile production

# Android Production Build (AAB for Play Store)
eas build --platform android --profile production

# Both platforms
eas build --platform all --profile production
```

**Build Time:** 10-30 minutes per platform

---

### Phase 6: iOS App Store Submission (2-3 hours)

#### Prerequisites:

1. Apple Developer Account ($99/year)
2. Enrolled in Apple Developer Program
3. iOS production build from EAS

#### Steps:

1. **App Store Connect Setup**

   - Go to: https://appstoreconnect.apple.com
   - Click "My Apps" → "+" → "New App"
   - Fill in:
     - Platform: iOS
     - Name: CalmWave
     - Primary Language: English (U.S.)
     - Bundle ID: com.yourcompany.calmwave
     - SKU: calmwave-ios (unique identifier)

2. **App Information**

   - **Category**: Health & Fitness (Primary), Lifestyle (Secondary)
   - **Content Rights**: No third-party content
   - **Age Rating**: 4+ (No objectionable content)
   - **Privacy Policy URL**: https://yourdomain.com/privacy
   - **Support URL**: https://github.com/AlainS7/relax

3. **Pricing & Availability**

   - **Price**: Free
   - **Availability**: All territories

4. **Prepare for Submission**

   - **App Description** (4000 char max):

   ```
   Find immediate calm when anxiety strikes. CalmWave provides evidence-based breathing exercises, grounding techniques, and crisis resources—all in a beautiful, easy-to-use interface.

   ✨ KEY FEATURES:
   • Guided breathing exercises with visual feedback
   • 5-4-3-2-1 grounding technique for anxiety relief
   • Multiple calming nature scenes (ocean, forest, rain, mountain)
   • Customizable breathing patterns
   • 24/7 crisis hotline access
   • 100% offline - no account required
   • No ads, no tracking, no subscriptions

   🌊 BREATHING EXERCISES:
   Choose from proven breathing patterns:
   - Basic (4-4): Balanced breathing for general calm
   - Sleep (4-7-8): Fall asleep faster
   - Extended (6-6): Deep relaxation

   👁️ GROUNDING TECHNIQUE:
   The 5-4-3-2-1 sensory exercise helps anchor you in the present moment during panic or anxiety.

   🆘 CRISIS SUPPORT:
   Quick access to emergency mental health hotlines with click-to-call functionality.

   💙 PRIVACY-FIRST:
   Your mental health journey is private. All data stays on your device. No tracking, no ads, no accounts required.

   ⚕️ IMPORTANT: CalmWave is a wellness tool and is not a substitute for professional medical advice, diagnosis, or treatment.
   ```

   - **Keywords** (100 char max):

   ```
   anxiety,panic,breathing,meditation,calm,grounding,mindfulness,stress,mental health,wellness
   ```

   - **Promotional Text** (170 char):

   ```
   Immediate calm when you need it most. Evidence-based breathing exercises and grounding techniques. 100% free, no ads, works offline.
   ```

   - **What's New** (4000 char max):

   ```
   Welcome to CalmWave 1.0! 🌊

   • Beautiful breathing exercises with animated visuals
   • 4 calming nature scenes
   • 5-4-3-2-1 grounding technique
   • Crisis resources with 24/7 hotlines
   • Customizable breathing patterns
   • Dark mode support
   • 100% offline, privacy-first design

   Thank you for supporting mental health wellness! ❤️
   ```

5. **Upload Build**

   ```bash
   eas submit --platform ios
   ```

6. **App Review Information**

   - **Contact Information**: Your email/phone
   - **Demo Account**: Not needed (no login)
   - **Notes**: "No account required. All features work offline."

7. **Version Release**

   - Select: "Manually release this version"
   - (Gives you control after approval)

8. **Submit for Review**

**Review Time:** 24-48 hours typically

---

### Phase 7: Google Play Store Submission (2-3 hours)

#### Prerequisites:

1. Google Play Console account ($25 one-time)
2. Android production build (.aab file)

#### Steps:

1. **Create Application**

   - Go to: https://play.google.com/console
   - Click "Create app"
   - Fill in:
     - App name: CalmWave
     - Default language: English (United States)
     - App or game: App
     - Free or paid: Free

2. **Store Listing**

   - **Short Description** (80 char):

   ```
   Breathing exercises & grounding techniques for anxiety relief. Works offline.
   ```

   - **Full Description** (4000 char):

   ```
   Find immediate calm when anxiety strikes. CalmWave provides evidence-based breathing exercises, grounding techniques, and crisis resources—all in a beautiful, easy-to-use interface.

   ✨ KEY FEATURES:
   • Guided breathing exercises with visual feedback
   • 5-4-3-2-1 grounding technique for anxiety relief
   • Multiple calming nature scenes (ocean, forest, rain, mountain)
   • Customizable breathing patterns
   • 24/7 crisis hotline access
   • 100% offline - no account required
   • No ads, no tracking, no subscriptions

   🌊 BREATHING EXERCISES:
   Choose from proven breathing patterns:
   - Basic (4-4): Balanced breathing for general calm
   - Sleep (4-7-8): Fall asleep faster
   - Extended (6-6): Deep relaxation

   👁️ GROUNDING TECHNIQUE:
   The 5-4-3-2-1 sensory exercise helps anchor you in the present moment during panic or anxiety.

   🆘 CRISIS SUPPORT:
   Quick access to emergency mental health hotlines with click-to-call functionality.

   💙 PRIVACY-FIRST:
   Your mental health journey is private. All data stays on your device. No tracking, no ads, no accounts required.

   ⚕️ IMPORTANT: CalmWave is a wellness tool and is not a substitute for professional medical advice, diagnosis, or treatment.

   ---

   ABOUT THE DEVELOPER:
   CalmWave is built with care for people experiencing anxiety and panic. This app was creeated to provide immediate, accessible relief.

   FEEDBACK:
   We'd love to hear from you! Email: support@example.com

   JOIN OUR MISSION:
   Help make mental health support accessible to everyone. Share CalmWave with someone who might need it.
   ```

   - **App icon**: Upload 512x512 PNG
   - **Feature graphic**: 1024 x 500 PNG
   - **Screenshots**: Upload 2-8 screenshots

3. **Content Rating**

   - Fill out questionnaire
   - Expected: ESRB Everyone, PEGI 3

4. **App Category**

   - Category: Health & Fitness
   - Tags: Mental health, wellness, anxiety, meditation

5. **Contact Details**

   - Email: support@example.com
   - Privacy policy: https://yourdomain.com/privacy

6. **Store Settings**

   - **App availability**: All countries
   - **Pricing**: Free

7. **App Content**

   - [ ] Privacy policy
   - [ ] Ads: No
   - [ ] In-app purchases: No
   - [ ] Content rating questionnaire
   - [ ] Target audience: All ages
   - [ ] COVID-19 contact tracing: No
   - [ ] Data safety: Complete questionnaire

8. **Upload Build**

   ```bash
   eas submit --platform android
   ```

9. **Release**
   - Choose: Internal testing → Closed testing → Production
   - OR: Direct to production (risky for MVP)

**Review Time:** 1-7 days (first app takes longer)

---

## 🚀 Recommended Launch Strategy

### Soft Launch (Week 1)

1. **Internal Testing**: Family & friends (10-20 people)
2. **Closed Beta**: TestFlight (iOS) + Internal testing (Android)
3. **Gather feedback**: Fix critical bugs

### Public Launch (Week 2-3)

1. **Submit to App Store**: Wait for approval
2. **Submit to Play Store**: Wait for approval
3. **Social media announcement**: Prepare posts
4. **Product Hunt launch** (optional): https://producthunt.com

### Post-Launch (Week 4+)

1. **Monitor reviews**: Respond within 24 hours
2. **Track crashes**: Expo Application Services
3. **Gather analytics** (optional): Add privacy-friendly analytics
4. **Plan v1.1**: Based on user feedback

---

## 📊 Success Metrics (MVP)

### Week 1

- 50-100 downloads
- 4.0+ rating
- < 5% crash rate

### Month 1

- 500-1000 downloads
- 10+ reviews
- < 2% crash rate
- Plan feature updates

---

## 🔧 Testing Checklist

Before submitting:

### Functional Testing

- [ ] All screens load correctly
- [ ] Navigation works (home → screens → back)
- [ ] Breathing exercise starts/stops properly
- [ ] Animations are smooth (60fps)
- [ ] Scene selector changes backgrounds
- [ ] Pattern selector changes timings
- [ ] Crisis hotlines open phone dialer
- [ ] Settings save and persist

### Device Testing

- [ ] iPhone (iOS 16+)
- [ ] iPad (optional for v1.0)
- [ ] Android phone (Android 10+)
- [ ] Android tablet (optional)
- [ ] Test on low-end device

### Edge Cases

- [ ] No internet connection (offline mode)
- [ ] Airplane mode
- [ ] Background/foreground transitions
- [ ] Phone call interruption
- [ ] Low battery mode

---

## 💰 Cost Breakdown

| Item                            | Cost          | Frequency    |
| ------------------------------- | ------------- | ------------ |
| Apple Developer Program         | $99           | Annual       |
| Google Play Console             | $25           | One-time     |
| App icon design (DIY)           | $0            | One-time     |
| App icon design (Fiverr)        | $20-100       | One-time     |
| Privacy policy hosting (GitHub) | $0            | Free forever |
| Domain (optional)               | $12           | Annual       |
| **Total Year 1**                | **$111-$236** |              |
| **Total Year 2+**               | **$99-$111**  |              |

---

## 🎯 MVP Feature Scope

**INCLUDE in v1.0:**

- ✅ Breathing exercises (4 scenes, 3 patterns)
- ✅ Grounding technique (5-4-3-2-1)
- ✅ Crisis resources (hotlines)
- ✅ Settings (pattern, scene preferences)
- ✅ Offline support
- ✅ Dark mode

**EXCLUDE from v1.0** (plan for v1.1+):

- ❌ Audio playback (add in v1.1)
- ❌ User accounts (Appwrite integration)
- ❌ Progress tracking
- ❌ Reminders/notifications
- ❌ Custom breathing patterns
- ❌ Learn section (anxiety education)
- ❌ Meditation timer
- ❌ Favorites/bookmarks

**Why?** Launch faster, gather feedback, iterate.

---

## 📱 Quick Commands Reference

```bash
# Install EAS CLI
npm install -g eas-cli
eas login

# Configure project
eas build:configure

# Create production builds
eas build --platform ios --profile production
eas build --platform android --profile production

# Submit to stores
eas submit --platform ios
eas submit --platform android

# Check build status
eas build:list

# Run on device for testing
expo run:ios --device
expo run:android --device
```

---

## 🆘 Common Issues & Solutions

### "Build failed: provisioning profile"

- Ensure Apple Developer account is active
- Check bundle identifier matches in app.json and Apple Developer Portal
- Regenerate certificates: `eas credentials`

### "APK size too large"

- Use AAB format instead: Set `"buildType": "aab"` in eas.json
- Remove unused assets
- Optimize images

### "App rejected: missing privacy policy"

- Ensure privacy policy URL is publicly accessible
- Must use HTTPS (GitHub Pages works)

### "Cannot connect to device"

- iOS: Trust developer certificate in Settings → General → VPN & Device Management
- Android: Enable USB debugging in Developer Options

---

## 📞 Support Resources

- **Expo Documentation**: https://docs.expo.dev
- **EAS Build**: https://docs.expo.dev/build/introduction/
- **Apple App Store Guidelines**: https://developer.apple.com/app-store/review/guidelines/
- **Google Play Policies**: https://play.google.com/about/developer-content-policy/
- **Expo Discord**: https://chat.expo.dev

---

## ✅ Final Pre-Launch Checklist

- [ ] App runs without errors on iOS device
- [ ] App runs without errors on Android device
- [ ] All screens tested and functional
- [ ] App icon created (1024x1024)
- [ ] Splash screen created
- [ ] Screenshots captured (5-8 per platform)
- [ ] Privacy policy written and hosted
- [ ] App Store listing copy written
- [ ] Play Store listing copy written
- [ ] Bundle identifiers set in app.json
- [ ] Version numbers set (1.0.0)
- [ ] EAS build successful for iOS
- [ ] EAS build successful for Android
- [ ] Apple Developer account active
- [ ] Google Play Console account created
- [ ] Test on friend's device (external testing)
- [ ] Final code review
- [ ] README updated with store links
- [ ] Social media announcement prepared

---

**Ready to launch?** You've got this! 🚀

Remember: Perfect is the enemy of done. Launch your MVP, gather feedback, and improve iteratively.

**Questions?** Open an issue on GitHub or email support@example.com
