# 🚀 Getting CalmWave to Production

## MVP Ready

App is functionally complete with:

- ✅ Animated breathing exercises
- ✅ 5-4-3-2-1 grounding technique
- ✅ Crisis resources with hotlines
- ✅ Settings and customization
- ✅ Beautiful UI/UX
- ✅ Offline-first architecture
- ✅ All errors fixed

**What's Next:** Publishing to the App Store and Google Play Store!

---

## 🎯 Three Steps to Launch

### Step 1: Create App Icons (1-2 hours)

**Need:**

- Icon: 1024x1024 PNG
- Adaptive Icon: 1024x1024 PNG (Android)
- Splash Screen: 1024x1024 PNG

**Quick Options:**

#### A. DIY with Canva (Free, 30 minutes)

1. Go to [canva.com](https://canva.com)
2. Create custom size: 1024 x 1024
3. Add gradient background (`#4A90B8` to `#5B8C5A`)
4. Add wave emoji 🌊 or search "wave" in elements
5. Center it, make it big
6. Download as PNG
7. Save 3 copies as:
   - `assets/images/icon.png`
   - `assets/images/adaptive-icon.png`
   - `assets/images/splash.png`

#### B. Hire on Fiverr ($20-50, 24-48 hours)

1. Go to [fiverr.com](https://fiverr.com)
2. Search "mobile app icon design"
3. Brief: "Mental health app called CalmWave, need calming blue wave icon, minimalist style"
4. Provide colors: `#4A90B8` (blue), `#5B8C5A` (green)
5. Request 1024x1024 PNG deliverables

#### C. AI Generation (15 minutes)

Use ChatGPT/DALL-E or Midjourney:

```
Prompt: "Modern mobile app icon, calming ocean wave, gradient from blue #4A90B8 to green #5B8C5A, minimalist, centered composition, mental health theme, soothing colors, 1024x1024, no text"
```

**Once have icons:**

```bash
# Place them in:
mkdir -p assets/images
# Copy files to:
# assets/images/icon.png
# assets/images/adaptive-icon.png
# assets/images/splash.png

# Update app.json (already configured, just uncomment the proper paths)
```

**See:** `docs/icon-guide.md` for detailed instructions

---

### Step 2: Build App (1-2 hours)

#### 2.1 Install EAS CLI

```bash
npm install -g eas-cli
eas login
```

(Create Expo account if needed: [expo.dev/signup](https://expo.dev/signup))

#### 2.2 Configure EAS

```bash
eas build:configure
```

This creates/updates `eas.json` (already done!)

#### 2.3 Update Bundle Identifiers

**IMPORTANT:** Change these in `app.json`:

```json
"ios": {
  "bundleIdentifier": "com.yourcompany.calmwave"
},
"android": {
  "package": "com.yourcompany.calmwave"
}
```

Replace `yourcompany` with:

- Your name: `com.yourname.calmwave`
- Your domain (reversed): `com.yourdomain.calmwave`
- Unique identifier: `com.unique12345.calmwave`

**Example:**

````json
Replace `yourcompany` with:
- Your name: `com.yourname.calmwave`
- Your domain (reversed): `com.yourdomain.calmwave`
- Unique identifier: `com.unique12345.calmwave`

**Example:**
```json
"ios": {
  "bundleIdentifier": "com.johndoe.calmwave"
},
"android": {
  "package": "com.johndoe.calmwave"
}
````

````

#### 2.4 Build for iOS

**Requirements:**

- Apple Developer account ($99/year): [developer.apple.com/programs](https://developer.apple.com/programs)
- Processing time: 24-48 hours for approval

```bash
# Build for iOS
eas build --platform ios --profile production
````

EAS will:

1. Ask for your Apple ID
2. Create certificates automatically
3. Build your app in the cloud (~15-20 minutes)
4. Give you a download link

#### 2.5 Build for Android

**Requirements:**

- Google Play Console account ($25 one-time): [play.google.com/console/signup](https://play.google.com/console/signup)
- Processing time: Immediate

```bash
# Build for Android
eas build --platform android --profile production
```

EAS will:

1. Create signing keys automatically
2. Build AAB file (~15-20 minutes)
3. Give you a download link

#### 2.6 Build Both (Recommended)

```bash
eas build --platform all --profile production
```

Builds iOS and Android simultaneously.

**Check status:**

```bash
eas build:list
```

---

### Step 3: Submit to Stores (2-3 hours per platform)

#### 3.1 iOS App Store

**Prepare:**

1. **Screenshots** (5-8 required)

   - Use iOS Simulator: `xcrun simctl io booted screenshot screenshot1.png`
   - Or use real device
   - Required sizes: iPhone 14 Pro Max (1290x2796)

2. **App Store Connect**

   - Go to: [appstoreconnect.apple.com](https://appstoreconnect.apple.com)
   - Click "My Apps" → "+" → "New App"
   - Fill in:
     - Name: CalmWave
     - Bundle ID: (must match app.json)
     - SKU: calmwave-ios

3. **Privacy Policy**

   - Host `docs/privacy-policy.md` on GitHub Pages
   - OR use: [pages.github.com](https://pages.github.com)
   - Add URL to App Store Connect

4. **App Information**

   ```
   Name: CalmWave
   Subtitle: Anxiety & Panic Relief
   Category: Health & Fitness
   Price: Free

   Description:
   Find immediate calm when anxiety strikes. CalmWave provides evidence-based breathing exercises, grounding techniques, and crisis resources.

   ✨ KEY FEATURES:
   • Guided breathing with visual feedback
   • 5-4-3-2-1 grounding technique
   • Multiple nature scenes
   • Crisis hotline access
   • 100% offline, no ads

   Keywords:
   anxiety, panic, breathing, meditation, calm, grounding, mindfulness, stress, mental health
   ```

5. **Submit Binary**

   ```bash
   eas submit --platform ios
   ```

6. **Submit for Review**
   - In App Store Connect, click "Submit for Review"
   - Review time: 24-48 hours

**Full Guide:** `docs/app-store-submission.md` (lines 212-327)

#### 3.2 Google Play Store

**Prepare:**

1. **Screenshots** (2-8 required)

   - Use Android Emulator: `adb shell screencap -p /sdcard/screenshot.png`
   - Any resolution between 320px - 3840px

2. **Play Console**

   - Go to: [play.google.com/console](https://play.google.com/console)
   - Click "Create app"
   - Fill in basic info

3. **Store Listing**

   ```
   Short Description (80 chars):
   Breathing exercises & grounding techniques for anxiety relief. Works offline.

   Full Description:
   (Same as iOS, see docs/app-store-submission.md line 350)
   ```

4. **Content Rating**

   - Complete questionnaire
   - Expected: Everyone

5. **Submit Build**

   ```bash
   eas submit --platform android
   ```

6. **Release**
   - Choose "Production" track
   - Review time: 1-7 days

**Full Guide:** `docs/app-store-submission.md` (lines 329-435)

---

## 📊 Time & Cost Breakdown

### Time Investment

- **Icon creation:** 1-2 hours (or hire: $20-50)
- **EAS setup & builds:** 1-2 hours
- **iOS submission:** 2-3 hours
- **Android submission:** 2-3 hours
- **Total:** ~6-10 hours of active work

### Cost

| Item                                 | Cost          | Frequency |
| ------------------------------------ | ------------- | --------- |
| Apple Developer Program              | $99           | Annual    |
| Google Play Console                  | $25           | One-time  |
| App icons (optional hire)            | $20-50        | One-time  |
| Domain for privacy policy (optional) | $12           | Annual    |
| **Total Year 1**                     | **$111-$186** |           |
| **Total Year 2+**                    | **$99-$111**  |           |

---

## 🛠️ Quick Start Script

Created an interactive script to help:

```bash
./scripts/publish.sh
```

This will walk through:

1. Installing dependencies
2. Running dev server
3. Configuring EAS
4. Creating builds
5. Submitting to stores

---

## 📋 Pre-Launch Checklist

Before starting:

### Technical

- [ ] App runs without errors locally
- [ ] Tested on iOS simulator/device
- [ ] Tested on Android emulator/device
- [ ] All screens functional
- [ ] Navigation works properly
- [ ] Animations smooth

### Assets

- [ ] App icon created (1024x1024)
- [ ] Adaptive icon created
- [ ] Splash screen created
- [ ] Screenshots taken (5-8 per platform)

### Configuration

- [ ] Bundle identifiers updated in app.json
- [ ] Version set to 1.0.0
- [ ] App name set to "CalmWave"
- [ ] Splash background color set (#4A90B8)

### Legal & Marketing

- [ ] Privacy policy written
- [ ] Privacy policy hosted (GitHub Pages)
- [ ] App description written
- [ ] Keywords researched
- [ ] Support email ready

### Accounts

- [ ] Expo account created
- [ ] Apple Developer account ($99)
- [ ] Google Play Console account ($25)

---

## 🚨 Common Issues & Solutions

### "Cannot find icon.png"

**Solution:**

```bash
# Temporarily use existing icons while creating proper ones:
mkdir -p assets/images
cp src/assets/images/splash-icon.png assets/images/icon.png
cp src/assets/images/splash-icon.png assets/images/adaptive-icon.png
cp src/assets/images/splash-icon.png assets/images/splash.png
```

### "Build failed: provisioning profile"

**Solution:**

- Ensure Apple Developer account is active
- Run: `eas credentials`
- Regenerate certificates

### "Bundle identifier already in use"

**Solution:**

- Change in app.json to something unique
- Example: `com.yourname.calmwave.app`

### "Privacy policy URL not accessible"

**Solution:**

- Use GitHub Pages (free, easy)
- Push to `docs/` folder
- Enable in repo settings → Pages
- URL: `https://yourusername.github.io/relax/privacy-policy`

---

## 🎯 Launch Day Checklist

### Day Before Launch

- [ ] Final testing on real devices
- [ ] Screenshots finalized
- [ ] Store listings proofread
- [ ] Privacy policy published
- [ ] Support email configured
- [ ] Social media posts prepared

### Launch Day

- [ ] Submit to App Store
- [ ] Submit to Play Store
- [ ] Post on social media
- [ ] Tell friends and family
- [ ] Monitor for crashes
- [ ] Respond to reviews

### Week After Launch

- [ ] Check reviews daily
- [ ] Fix critical bugs if found
- [ ] Gather user feedback
- [ ] Plan v1.1 features
- [ ] Thank early users

---

## 📈 Post-Launch Strategy

### First Week Goals

- 50-100 downloads
- 4.0+ star rating
- < 5% crash rate
- Positive user feedback

### First Month Goals

- 500-1000 downloads
- 10+ reviews
- < 2% crash rate
- Feature requests collected

### Version 1.1 (Plan for 2-4 weeks after launch)

**Based on user feedback, add:**

- Audio playback for breathing exercises
- Haptic feedback
- Dark mode improvements
- Additional breathing patterns
- Progress tracking (optional)
- User accounts (optional)

---

## 📞 Need Help?

### Resources

- **Expo Documentation:** [docs.expo.dev](https://docs.expo.dev)
- **EAS Build Guide:** [docs.expo.dev/build/introduction](https://docs.expo.dev/build/introduction)
- **App Store Guidelines:** [developer.apple.com/app-store/review/guidelines](https://developer.apple.com/app-store/review/guidelines)
- **Play Store Policies:** [play.google.com/about/developer-content-policy](https://play.google.com/about/developer-content-policy)

### Project Documentation

- `README.md` - Project overview
- `docs/app-store-submission.md` - Detailed submission guide
- `docs/icon-guide.md` - Icon creation guide
- `docs/privacy-policy.md` - Privacy policy template
- `CONTRIBUTING.md` - Development guidelines

### Community

- **Expo Discord:** [chat.expo.dev](https://chat.expo.dev)
- **GitHub Issues:** [github.com/YOUR_USERNAME/calmwave/issues](https://github.com/YOUR_USERNAME/calmwave/issues)

---

## 🎉 Ready to Launch!

App is **production-ready**. The only things standing between having CalmWave in the app stores are:

1. **Create icons** (1-2 hours)
2. **Run builds** (1 hour)
3. **Submit to stores** (2-3 hours per platform)

**Total time to launch:** 6-10 hours of focused work

**Remember:** Done is better than perfect. Launch MVP, gather feedback, and improve iteratively.

**Questions?** Open an issue on GitHub or reach out to the community.

**Ready to start?** Run: `./scripts/publish.sh` or follow Step 1 above.

**Good luck!** 💙🌊
