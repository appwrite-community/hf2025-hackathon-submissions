# App Icon & Splash Screen Guide

## 🎨 Creating Your App Icon

Your app icon is the first thing users see. For CalmWave, we want something calming, recognizable, and professional.

### Design Concept for CalmWave

**Theme:** Wave representing calm, relaxation, and flow
**Colors:** Blue gradient (#4A90B8 → #5B8C5A)
**Style:** Minimal, modern, soothing

### Requirements

#### iOS Icon

- **Size:** 1024 x 1024 pixels
- **Format:** PNG (no transparency)
- **Color space:** sRGB or P3
- **Must be square** (iOS adds rounded corners automatically)
- **File:** `assets/images/icon.png`

#### Android Adaptive Icon

- **Foreground:** 1024 x 1024 pixels PNG (with transparency OK)
- **Background:** Solid color (#4A90B8) or 1024x1024 PNG
- **Safe zone:** Keep important content within center 66% (684px circle)
- **File:** `assets/images/adaptive-icon.png`

### Quick Start Options

#### Option 1: Use Figma Template (Free)

1. Go to [Figma Community](https://www.figma.com/community)
2. Search "app icon template"
3. Download and customize with wave emoji 🌊 or simple wave curve
4. Export as PNG at 1024x1024

#### Option 2: Canva (Free)

1. Go to [Canva](https://www.canva.com)
2. Create custom size: 1024 x 1024
3. Add gradient background (#4A90B8 to #5B8C5A)
4. Add wave emoji 🌊 or search "wave" in elements
5. Download as PNG

#### Option 3: Hire a Designer

- **Fiverr:** $20-50 for app icon set
- **Upwork:** $50-150 for professional design
- **Dribbble:** Find designers specializing in mobile icons

#### Option 4: Use AI (Quick & Easy)

Generate with AI tools like:

- **DALL-E:** "Modern app icon, calming blue wave, gradient background, minimalist"
- **Midjourney:** "app icon design, ocean wave, mental health, calm blue gradient --ar 1:1"
- **Stable Diffusion:** Similar prompts

### Design Tips

✅ **DO:**

- Keep it simple and recognizable
- Use calming colors (blues, greens)
- Test at small sizes (read ability)
- Use centered composition
- Ensure good contrast

❌ **DON'T:**

- Use text (too small to read)
- Use photos (don't scale well)
- Use too many colors
- Use transparency on iOS icon
- Use gradients that are too subtle

## 🚀 Splash Screen

The splash screen appears briefly when the app launches.

### Requirements

- **Size:** 1024 x 1024 pixels (scaled automatically)
- **Format:** PNG
- **Background color:** #4A90B8 (defined in app.json)
- **Content:** Simple wave or app name
- **File:** `assets/images/splash.png`

### Design

Can be the same as your icon or simpler. Keep critical content in center "safe zone" (middle 50%).

## 📦 Temporary Placeholder Solution

Until you create proper icons, create simple placeholder files:

### Using Image Editor (Preview/GIMP/Photoshop)

1. **Create 1024x1024 canvas**
2. **Fill with #4A90B8** (CalmWave blue)
3. **Add white wave emoji or text** in center
4. **Save as PNG:**
   - `icon.png` → `assets/images/`
   - `adaptive-icon.png` → `assets/images/`
   - `splash.png` → `assets/images/`

### Using Online Tools

**Method 1: favicon.io**

1. Go to [favicon.io/favicon-generator](https://favicon.io/favicon-generator)
2. Text: 🌊 or "CW"
3. Background: #4A90B8
4. Font: Rounded
5. Download and resize to 1024x1024

**Method 2: Icons8**

1. Go to [icons8.com/icons](https://icons8.com/icons)
2. Search "wave"
3. Download at 1024x1024
4. Add blue gradient background in image editor

## 🛠️ Generate Icons with Expo

Once you have your base icon:

```bash
# Install expo-optimize
npx expo-optimize

# This generates all required icon sizes automatically
```

## 📐 Icon Size Requirements Reference

### iOS

- App Store: 1024x1024
- iPhone: 180x180, 120x120, 87x87
- iPad: 167x167, 152x152, 76x76
- Notification: 40x40, 60x60, 80x80

### Android

- Play Store: 512x512
- xxxhdpi: 192x192
- xxhdpi: 144x144
- xhdpi: 96x96
- hdpi: 72x72
- mdpi: 48x48

**Note:** Expo handles all these sizes automatically from your 1024x1024 source.

## ✅ Quick Checklist

Before building:

- [ ] Create icon.png (1024x1024)
- [ ] Create adaptive-icon.png (1024x1024 with transparency)
- [ ] Create splash.png (1024x1024)
- [ ] Place all in `assets/images/` folder
- [ ] Update `app.json` paths (already done)
- [ ] Run `npx expo-optimize` (optional)
- [ ] Test on simulator/device

## 🎨 CalmWave Icon Color Palette

Use these exact colors for consistency:

- **Primary Blue:** #4A90B8
- **Forest Green:** #5B8C5A
- **Mountain Gray:** #6B7C8C
- **White (text/icon):** #FFFFFF

## 📱 Example Icon Designs

### Simple Emoji Approach

```
Background: Gradient (#4A90B8 to #5B8C5A)
Center: 🌊 (white or light blue)
Style: Clean, minimal
```

### Geometric Wave

```
Background: Solid #4A90B8
Shape: Curved wave line (white)
Style: Modern, abstract
```

### Circle + Wave

```
Background: Gradient
Circle: White with 80% opacity
Wave: Blue curve inside circle
Style: Professional, clean
```

## 🚀 Next Steps

1. **Create placeholder icons** (10 minutes)

   - Simple blue square with white wave emoji
   - Good enough for testing and initial builds

2. **Test the build** (30 minutes)

   - Run `eas build --platform ios --profile preview`
   - Verify icon appears correctly

3. **Upgrade icon** (2-3 hours or hire designer)

   - Design professional icon before App Store submission
   - Get feedback from friends/family

4. **Final polish** (before submission)
   - Ensure icon follows platform guidelines
   - Test on multiple device sizes
   - Verify it looks good next to other apps

## 📞 Need Help?

- **Expo Icon Docs:** https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/
- **Apple HIG Icons:** https://developer.apple.com/design/human-interface-guidelines/app-icons
- **Material Design:** https://m3.material.io/styles/icons/overview

---

**Remember:** Your icon represents your app. Take time to make it great, but don't let perfection stop you from launching!
