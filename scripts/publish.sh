#!/bin/bash

# CalmWave - Quick Build & Publish Script
# This script helps prepare and publish app to the stores

set -e  # Exit on error

echo "🌊 CalmWave - MVP Publishing Assistant"
echo "======================================="
echo ""

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if in the right directory
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ Error: package.json not found. Are you in the project root?${NC}"
    exit 1
fi

echo "📋 Pre-Flight Checklist"
echo "======================="
echo ""

# Function to check a requirement
check_requirement() {
    local requirement=$1
    local command=$2
    
    if eval "$command" > /dev/null 2>&1; then
        echo -e "✅ ${GREEN}$requirement${NC}"
        return 0
    else
        echo -e "❌ ${RED}$requirement${NC}"
        return 1
    fi
}

# Check Node.js
check_requirement "Node.js installed" "node --version"

# Check npm
check_requirement "npm installed" "npm --version"

# Check Expo CLI
if check_requirement "Expo CLI installed" "npx expo --version"; then
    :
else
    echo -e "${YELLOW}Installing Expo CLI...${NC}"
    npm install -g expo-cli
fi

# Check EAS CLI
if check_requirement "EAS CLI installed" "eas --version"; then
    :
else
    echo -e "${YELLOW}Installing EAS CLI...${NC}"
    npm install -g eas-cli
fi

echo ""
echo "📱 What would you like to do?"
echo "==============================="
echo "1) Install dependencies"
echo "2) Run development server"
echo "3) Configure EAS Build"
echo "4) Create production build (iOS)"
echo "5) Create production build (Android)"
echo "6) Create production build (Both)"
echo "7) Submit to App Store"
echo "8) Submit to Play Store"
echo "9) Generate app icons (placeholder)"
echo "10) View publishing checklist"
echo "0) Exit"
echo ""
read -p "Enter your choice (0-10): " choice

case $choice in
    1)
        echo ""
        echo "📦 Installing dependencies..."
        npm install
        echo -e "${GREEN}✅ Dependencies installed!${NC}"
        ;;
    2)
        echo ""
        echo "🚀 Starting development server..."
        echo "Press 'i' for iOS simulator, 'a' for Android emulator, or scan QR with Expo Go"
        npx expo start
        ;;
    3)
        echo ""
        echo "⚙️ Configuring EAS Build..."
        
        if [ ! -f "eas.json" ]; then
            eas build:configure
        else
            echo -e "${YELLOW}eas.json already exists${NC}"
        fi
        
        echo ""
        echo "🔐 Setting up credentials..."
        eas login
        
        echo -e "${GREEN}✅ EAS Build configured!${NC}"
        echo ""
        echo "Next steps:"
        echo "1. Update app.json with your bundle identifiers"
        echo "2. Create app icons (run option 9)"
        echo "3. Build your app (option 4-6)"
        ;;
    4)
        echo ""
        echo "🍎 Creating iOS production build..."
        echo ""
        echo -e "${YELLOW}⚠️  Requirements:${NC}"
        echo "  - Active Apple Developer account (\$99/year)"
        echo "  - Bundle identifier configured in app.json"
        echo "  - App icons created"
        echo ""
        read -p "Continue? (y/n): " confirm
        
        if [ "$confirm" = "y" ]; then
            eas build --platform ios --profile production
            echo ""
            echo -e "${GREEN}✅ Build submitted! Check status with: eas build:list${NC}"
        fi
        ;;
    5)
        echo ""
        echo "🤖 Creating Android production build..."
        echo ""
        echo -e "${YELLOW}⚠️  Requirements:${NC}"
        echo "  - Google Play Console account (\$25 one-time)"
        echo "  - Package name configured in app.json"
        echo "  - App icons created"
        echo ""
        read -p "Continue? (y/n): " confirm
        
        if [ "$confirm" = "y" ]; then
            eas build --platform android --profile production
            echo ""
            echo -e "${GREEN}✅ Build submitted! Check status with: eas build:list${NC}"
        fi
        ;;
    6)
        echo ""
        echo "📱 Creating iOS and Android production builds..."
        echo ""
        echo -e "${YELLOW}⚠️  Requirements:${NC}"
        echo "  - Active Apple Developer account (\$99/year)"
        echo "  - Google Play Console account (\$25 one-time)"
        echo "  - Bundle identifiers configured"
        echo "  - App icons created"
        echo ""
        read -p "Continue? (y/n): " confirm
        
        if [ "$confirm" = "y" ]; then
            eas build --platform all --profile production
            echo ""
            echo -e "${GREEN}✅ Builds submitted! Check status with: eas build:list${NC}"
        fi
        ;;
    7)
        echo ""
        echo "🍎 Submitting to App Store..."
        echo ""
        echo -e "${YELLOW}⚠️  Requirements:${NC}"
        echo "  - Successful iOS production build"
        echo "  - App Store Connect app created"
        echo "  - Screenshots and metadata ready"
        echo ""
        read -p "Continue? (y/n): " confirm
        
        if [ "$confirm" = "y" ]; then
            eas submit --platform ios
            echo ""
            echo -e "${GREEN}✅ Submitted to App Store!${NC}"
            echo "Check status at: https://appstoreconnect.apple.com"
        fi
        ;;
    8)
        echo ""
        echo "🤖 Submitting to Play Store..."
        echo ""
        echo -e "${YELLOW}⚠️  Requirements:${NC}"
        echo "  - Successful Android production build"
        echo "  - Play Console app created"
        echo "  - Screenshots and metadata ready"
        echo ""
        read -p "Continue? (y/n): " confirm
        
        if [ "$confirm" = "y" ]; then
            eas submit --platform android
            echo ""
            echo -e "${GREEN}✅ Submitted to Play Store!${NC}"
            echo "Check status at: https://play.google.com/console"
        fi
        ;;
    9)
        echo ""
        echo "🎨 Generating placeholder app icons..."
        echo ""
        echo "This will create simple placeholder icons for testing."
        echo "For production, you'll want to create proper icons."
        echo ""
        echo "See docs/icon-guide.md for detailed instructions."
        echo ""
        read -p "Create placeholder icons? (y/n): " confirm
        
        if [ "$confirm" = "y" ]; then
            mkdir -p assets/images
            
            # Check if ImageMagick is installed
            if command -v convert > /dev/null 2>&1; then
                echo "Creating icons with ImageMagick..."
                
                # Create icon.png
                convert -size 1024x1024 xc:"#4A90B8" \
                    -font Arial -pointsize 300 -fill white \
                    -gravity center -annotate +0+0 "🌊" \
                    assets/images/icon.png
                
                # Create adaptive-icon.png
                convert -size 1024x1024 xc:"#4A90B8" \
                    -font Arial -pointsize 300 -fill white \
                    -gravity center -annotate +0+0 "🌊" \
                    assets/images/adaptive-icon.png
                
                # Create splash.png
                convert -size 1024x1024 xc:"#4A90B8" \
                    -font Arial -pointsize 300 -fill white \
                    -gravity center -annotate +0+0 "🌊" \
                    assets/images/splash.png
                
                echo -e "${GREEN}✅ Icons created!${NC}"
            else
                echo -e "${YELLOW}⚠️  ImageMagick not installed.${NC}"
                echo ""
                echo "Please create icons manually:"
                echo "1. Create 1024x1024 PNG images"
                echo "2. Use #4A90B8 background"
                echo "3. Add white wave emoji or text"
                echo "4. Save as:"
                echo "   - assets/images/icon.png"
                echo "   - assets/images/adaptive-icon.png"
                echo "   - assets/images/splash.png"
                echo ""
                echo "Or install ImageMagick: brew install imagemagick"
            fi
        fi
        ;;
    10)
        echo ""
        echo "📋 Publishing Checklist"
        echo "======================="
        echo ""
        echo "Pre-Submission:"
        echo "  [ ] Install dependencies (npm install)"
        echo "  [ ] Test app on simulator/emulator"
        echo "  [ ] Create app icons (1024x1024)"
        echo "  [ ] Update bundle identifiers in app.json"
        echo "  [ ] Write privacy policy"
        echo "  [ ] Configure EAS Build"
        echo ""
        echo "iOS Submission:"
        echo "  [ ] Apple Developer account (\$99/year)"
        echo "  [ ] Create app in App Store Connect"
        echo "  [ ] Build iOS production binary"
        echo "  [ ] Take screenshots (5-8 required)"
        echo "  [ ] Write app description"
        echo "  [ ] Submit for review"
        echo ""
        echo "Android Submission:"
        echo "  [ ] Google Play Console account (\$25 one-time)"
        echo "  [ ] Create app in Play Console"
        echo "  [ ] Build Android production binary"
        echo "  [ ] Take screenshots (2-8 required)"
        echo "  [ ] Complete content rating questionnaire"
        echo "  [ ] Submit for review"
        echo ""
        echo "Post-Launch:"
        echo "  [ ] Monitor reviews daily"
        echo "  [ ] Respond to user feedback"
        echo "  [ ] Track crashes and errors"
        echo "  [ ] Plan v1.1 features"
        echo ""
        echo "For detailed instructions, see docs/app-store-submission.md"
        ;;
    0)
        echo "👋 Goodbye!"
        exit 0
        ;;
    *)
        echo -e "${RED}❌ Invalid choice${NC}"
        exit 1
        ;;
esac

echo ""
echo "🌊 CalmWave - Mental Health Support for Everyone"
echo ""
