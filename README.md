<<<<<<< HEAD
# CalmWave 🌊
=======
# Appwrite Hacktoberfest 2025 Hackathon
>>>>>>> 448a06f (Update repo to HF2025)

[![Live Demo](https://img.shields.io/badge/Live%20Demo-relax.appwrite.network-4A90B8?style=for-the-badge&logo=appwrite&logoColor=white)](https://relax.appwrite.network/)

<<<<<<< HEAD
> **Immediate, evidence-based grounding and calming during panic or anxiety attacks**
=======
- [Timeline](#timeline)
- [Prizes](#prizes)
- [How To Submit Your Project?](#how-to-submit-your-project)
- [Judging Criteria](#judging-criteria)
- [Rules and Code of Conduct](#rules-and-code-of-conduct)
>>>>>>> 448a06f (Update repo to HF2025)

CalmWave is a free, open-source React Native mobile app that provides instant access to calming interventions through breathing exercises, grounding techniques, nature sounds, and visual relaxation. Built with offline-first functionality to ensure help is always available when you need it most.

<<<<<<< HEAD
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![React Native](https://img.shields.io/badge/React%20Native-0.76-61DAFB.svg)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-~52.0-000020.svg)](https://expo.dev/)
[![Powered by Appwrite](https://img.shields.io/badge/Powered%20by-Appwrite-F02E65.svg)](https://appwrite.io)
=======
* **Start Date and Time:** Oct 1st, 2025 at 12:00 AM UTC
* **End Date and Time:** Oct 31st, 2025 at 11:59 PM UTC
>>>>>>> 448a06f (Update repo to HF2025)

## ✨ Features

<<<<<<< HEAD
### Core Calming Tools

- **🌊 One-Tap Calm Mode** - Instant access to calming exercises without navigation friction
- **🫁 Breathing Exercises** - Multiple evidence-based patterns (4-4 basic, 4-7-8 sleep, extended)
- **🎵 Nature Sounds** - Ocean waves, forest sounds, gentle rain, mountain breeze
- **👁️ Visual Wave Animation** - Fluid, pulsing animations synchronized with breathing
- **🌲 Scene Selector** - Multiple calming environments (beach, forest, mountain, safe place)

### Support Features

- **5-4-3-2-1 Grounding Exercise** - Sensory-based technique to anchor you in the present
- **📚 Psychoeducation** - Brief, reassuring information about panic and anxiety
- **🆘 Crisis Resources** - Quick access to emergency contacts and mental health hotlines
- **⚙️ Customizable Settings** - Adjust breathing patterns, themes, and preferences

### Technical Features

- **📱 Offline-First** - Core features work without internet connectivity
- **🎨 Beautiful UI** - Clean, minimal design that doesn't distract from calming
- **♿ Accessible** - Built with accessibility in mind
- **🔒 Privacy-Focused** - No forced accounts, optional anonymous analytics
=======
- **Top 5 projects**
  - Appwriter swag kits
    - Customized hoodie with GitHub username
    - T-shirt
    - Mouse pad
    - Sticker sheet

## How To Submit Your Project?
>>>>>>> 448a06f (Update repo to HF2025)

## 🚀 Getting Started

### Quick Start (10 minutes)

See the [Quick Start Guide](docs/quick-start.md) for a streamlined setup process.

<<<<<<< HEAD
### Prerequisites
=======
- [Sign up](https://apwr.dev/hf2025-hackathon) for the Hackathon.
>>>>>>> 448a06f (Update repo to HF2025)

- Node.js (v18 or higher)
- npm or yarn
- [Expo Go](https://expo.dev/go) app on your phone (for development)
- Appwrite instance ([cloud](https://cloud.appwrite.io) or [self-hosted](https://appwrite.io/docs/advanced/self-hosting))

### Installation

<<<<<<< HEAD
1. **Clone the repository**
=======
- Visit the `submissions/` directory and create a copy of the `TEMPLATE_SUBMISSION.md` with the same filename as your project title.
>>>>>>> 448a06f (Update repo to HF2025)

````bash
git clone https://github.com/YOUR_USERNAME/calmwave.git
cd calmwave
npm install
```2. **Install dependencies**

   ```bash
   npm install
````

<<<<<<< HEAD
3. **Configure Appwrite**
=======
### Step 3: Submit PR details on the hackathon website

- Head back to the [hackathon website](https://apwr.dev/hf2025-hackathon).

- Visit the hacker dashboard, and create a submission.
>>>>>>> 448a06f (Update repo to HF2025)

<<<<<<< HEAD
   Create a `.env` file in the root directory:
=======
## Judging Criteria

Projects will be judged based on the following criteria:

  1. **Impact of idea**
    - Usefulness of the project in a real-world scenario.
    - Completeness of the features implemented.

  2. **Creativity in design**
    - The overall look, layout, color usage, and positioning in the application.

  3. **Technical execution**
    - `(clean code, proper naming conventions, use of linter);`
    - Use of engineering best practices.

  4. **Usage of Appwrite**
    - Is Appwrite central to the functioning of your project?
    - How many and how well the different Appwrite services have been leveraged

## Rules and Code of Conduct
>>>>>>> 26a849e (Move judging criteria from RULES to README)

<<<<<<< HEAD
   ```bash
   cp .env.example .env
   ```

   Update the values with your Appwrite credentials:

   ```env
   EXPO_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
   EXPO_PUBLIC_APPWRITE_PROJECT_ID=your_project_id
   ```

4. **Set up Appwrite backend**

   Follow the setup guide in [`docs/appwrite-setup.md`](docs/appwrite-setup.md) to create:

   - Storage bucket for scene assets
   - Database collections for scene metadata
   - Optional user preferences collection

5. **Start the development server**

   ```bash
   npm start
   ```

   Then scan the QR code with Expo Go on your phone.

### Development Commands

```bash
npm start          # Start Expo dev server
npm run android    # Run on Android emulator
npm run ios        # Run on iOS simulator
npm run web        # Run in web browser
npm run lint       # Run ESLint
npm test          # Run tests
```

## 📱 App Structure

```
relax/
├── app/                    # Expo Router app directory
│   ├── index.tsx          # Main home/navigation screen
│   └── _layout.tsx        # Root layout with fonts
├── src/
│   ├── assets/            # Images, audio, icons
│   │   ├── audio/        # Bundled nature sounds (offline-first)
│   │   ├── icons/        # App icons
│   │   └── images/       # Visual assets
│   ├── components/        # Reusable UI components
│   ├── context/          # React Context providers
│   ├── screens/          # Main app screens
│   │   ├── CalmWaveScreen.tsx    # Breathing + calming
│   │   ├── GroundingScreen.tsx   # 5-4-3-2-1 exercise
│   │   ├── CrisisScreen.tsx      # Emergency resources
│   │   └── SettingsScreen.tsx    # User preferences
│   ├── services/         # API and business logic
│   │   ├── appwrite.ts   # Appwrite client setup
│   │   └── sceneService.ts # Scene management
│   ├── styles/           # Theme and typography
│   ├── types/            # TypeScript type definitions
│   └── utils/            # Helper functions
└── docs/                 # Documentation
```

## 🏗️ Architecture

CalmWave follows an **offline-first architecture**:

1. **Core assets** (2-3 audio loops, essential visuals) are bundled in the app binary
2. **Optional assets** can be downloaded from Appwrite Storage on-demand
3. **Scene metadata** is fetched from Appwrite Database but cached locally
4. **User preferences** sync to Appwrite when online (optional, opt-in only)

See [`docs/architecture.md`](docs/architecture.md) for detailed information.

## 📚 Documentation

- **[Quick Start Guide](docs/quick-start.md)** - Get up and running in 10 minutes
- **[Architecture Documentation](docs/architecture.md)** - Technical architecture and design
- **[Appwrite Setup Guide](docs/appwrite-setup.md)** - Backend configuration
- **[Contributing Guidelines](CONTRIBUTING.md)** - How to contribute
- **[Development Roadmap](docs/roadmap.md)** - Feature planning and milestones
- **[Project Status](docs/project-status.md)** - Current progress and next steps
- **[App Purpose](docs/app-purpose.md)** - Product vision and requirements

## 🤝 Contributing

We welcome contributions! Please see [`CONTRIBUTING.md`](CONTRIBUTING.md) for guidelines.

### Quick Contribution Guide

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Crisis Resources

**If you're in immediate danger or experiencing a mental health crisis:**

- **US**: National Suicide Prevention Lifeline: 988 or 1-800-273-8255
- **US**: Crisis Text Line: Text HOME to 741741
- **UK**: Samaritans: 116 123
- **International**: [Find your local crisis line](https://findahelpline.com/)

## 🙏 Acknowledgments

- Built with [React Native](https://reactnative.dev/) and [Expo](https://expo.dev/)
- Backend powered by [Appwrite](https://appwrite.io)
- Breathing techniques based on evidence-based practices
- Inspired by mindfulness and grounding therapy

## 📞 Contact & Support

- **Issues**: [GitHub Issues](https://github.com/YOUR_USERNAME/calmwave/issues)
- **Discussions**: [GitHub Discussions](https://github.com/YOUR_USERNAME/calmwave/discussions)

---

**Note**: This app is not a replacement for professional mental health care. If you're struggling with anxiety, panic attacks, or other mental health concerns, please seek support from a qualified mental health professional.
=======
All participants must agree to the [Rules](RULES.md) and [Code of Conduct](CODE_OF_CONDUCT.md) to participate in the Hackathon.
>>>>>>> 448a06f (Update repo to HF2025)
