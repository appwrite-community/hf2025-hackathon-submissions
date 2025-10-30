# Quick Start Guide

Get CalmWave up and running in 10 minutes!

## Prerequisites Checklist

- [ ] Node.js 18+ installed
- [ ] npm or yarn installed
- [ ] Expo Go app on your phone ([iOS](https://apps.apple.com/app/expo-go/id982107779) / [Android](https://play.google.com/store/apps/details?id=host.exp.exponent))
- [ ] Appwrite account ([sign up free](https://cloud.appwrite.io))

## Step 1: Clone and Install (2 minutes)

```bash
# Clone the repository
git clone https://github.com/AlainS7/relax.git
cd relax

# Install dependencies
npm install
```

## Step 2: Set Up Appwrite (5 minutes)

### Option A: Quick Setup (Recommended for testing)

1. Go to [Appwrite Cloud](https://cloud.appwrite.io)
2. Create a new project named "CalmWave"
3. Copy your Project ID
4. Create `.env` file:

```bash
cp .env.example .env
```

5. Edit `.env` and add your Project ID:

```env
EXPO_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
EXPO_PUBLIC_APPWRITE_PROJECT_ID=your_project_id_here
```

### Option B: Full Setup (For production)

Follow the complete guide: [docs/appwrite-setup.md](./appwrite-setup.md)

## Step 3: Run the App (1 minute)

```bash
# Start the development server
npm start
```

Then:

1. Open Expo Go on your phone
2. Scan the QR code
3. Wait for the app to load

## Step 4: Test the Features (2 minutes)

The app is now running! Try these features:

1. **Grounding Exercise** - Navigate to the 5-4-3-2-1 exercise
2. **Crisis Resources** - Check the crisis screen with emergency contacts
3. **Settings** - Explore breathing patterns and preferences

## Current State

✅ **Working:**

- Navigation structure
- Grounding exercise (5-4-3-2-1)
- Crisis resources with click-to-call
- Settings management
- Appwrite integration (basic)

🚧 **In Progress:**

- Audio playback system
- Breathing wave animation
- Scene selector UI
- Offline audio caching

## Next Development Steps

### If You Want to Continue Development

1. **Add Audio Files** (most important!)

   - Place MP3 files in `src/assets/audio/`
   - Files needed: ocean-waves.mp3, forest-sounds.mp3, gentle-rain.mp3, mountain-breeze.mp3
   - Each should be 30-60 seconds, seamless loop, ~500KB

2. **Enhance CalmWaveScreen**

   - Open `src/screens/CalmWaveScreen.tsx`
   - Add React Native Reanimated for wave animation
   - Integrate Expo AV for audio playback

3. **Test on Real Devices**

   ```bash
   # For iOS
   npm run ios

   # For Android
   npm run android
   ```

### If You Want Contributors

Your project is ready! The documentation covers:

- Project purpose and vision (docs/app-purpose.md)
- How to contribute (CONTRIBUTING.md)
- Architecture details (docs/architecture.md)
- Backend setup (docs/appwrite-setup.md)

Share your GitHub repo link in:

- r/reactnative
- r/mentalhealth (carefully, with mod approval)
- Open Source Mental Health communities
- Expo Discord

## Troubleshooting

### "Project not found" error

- Check your Project ID in `.env`
- Ensure endpoint URL is correct: `https://cloud.appwrite.io/v1`

### App won't load

```bash
# Clear cache and restart
npm start --clear
```

### Expo Go connection issues

- Ensure phone and computer are on same WiFi
- Try using tunnel mode: `npm start --tunnel`

### TypeScript errors

```bash
# Type check
npx tsc --noEmit
```

## Resources

- **Full Documentation**: See [README.md](../README.md)
- **Contributing Guide**: See [CONTRIBUTING.md](../CONTRIBUTING.md)
- **Architecture**: See [docs/architecture.md](./architecture.md)
- **Appwrite Setup**: See [docs/appwrite-setup.md](./appwrite-setup.md)
- **Roadmap**: See [docs/roadmap.md](./roadmap.md)

## Getting Help

- **Issues**: [Open an issue](https://github.com/AlainS7/relax/issues)
- **Questions**: [Start a discussion](https://github.com/AlainS7/relax/discussions)
- **Expo Docs**: https://docs.expo.dev
- **Appwrite Docs**: https://appwrite.io/docs

## What's Next?

Check [docs/project-status.md](./project-status.md) for a detailed breakdown of:

- What's completed
- What's remaining
- Priority order
- Testing checklist

---

**You're all set!** 🎉

The foundation is solid. Now it's time to build the core calming features!
