# Contributing to CalmWave 🌊

Thank you for your interest in contributing to CalmWave! We're building a free, open-source mental health tool, and every contribution helps make mental health support more accessible.

## 🎯 Our Mission

To provide **immediate, evidence-based grounding and calming** to users during panic or anxiety attacks through simple, accessible technology.

## 🤝 Ways to Contribute

### Code Contributions

- Implement new features
- Fix bugs
- Improve performance
- Enhance accessibility
- Add tests
- Improve documentation

### Non-Code Contributions

- Report bugs
- Suggest features
- Improve documentation
- Design UI/UX improvements
- Create audio/visual assets
- Test the app
- Translate to other languages

### Mental Health Expertise

- Review breathing techniques for accuracy
- Suggest evidence-based interventions
- Improve psychoeducational content
- Help ensure clinical appropriateness

## 🚀 Getting Started

### 1. Set Up Your Development Environment

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/relax.git
   cd relax
   ```
3. Add upstream remote:
   ```bash
   git remote add upstream https://github.com/AlainS7/relax.git
   ```
4. Install dependencies:
   ```bash
   npm install
   ```
5. Copy environment file:
   ```bash
   cp .env.example .env
   ```
6. Set up Appwrite (see `docs/appwrite-setup.md`)

### 2. Create a Branch

Create a branch for your work:

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/bug-description
```

Branch naming conventions:

- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation changes
- `refactor/` - Code refactoring
- `test/` - Adding or updating tests
- `style/` - UI/styling changes

### 3. Make Your Changes

- Follow our coding standards (see below)
- Write clear, descriptive commit messages
- Add tests if applicable
- Update documentation as needed

### 4. Test Your Changes

```bash
# Run the app
npm start

# Run tests
npm test

# Run linter
npm run lint

# Type check
npx tsc --noEmit
```

### 5. Commit Your Changes

We use conventional commits:

```bash
git commit -m "feat: add new breathing pattern"
git commit -m "fix: resolve audio playback issue on Android"
git commit -m "docs: update installation instructions"
```

Commit types:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

### 6. Push and Create Pull Request

```bash
git push origin feature/your-feature-name
```

Then open a Pull Request on GitHub:

1. Go to your fork on GitHub
2. Click "Pull Request"
3. Fill out the PR template
4. Wait for review

## 📋 Coding Standards

### TypeScript/JavaScript

- Use TypeScript for all new code
- Follow ESLint configuration
- Use functional components with hooks
- Prefer named exports over default exports
- Use descriptive variable names

**Good:**

```typescript
export const BreathingExercise: React.FC<Props> = ({ pattern, onComplete }) => {
  const [isActive, setIsActive] = useState(false);
  // ...
};
```

**Avoid:**

```typescript
export default function BE(props) {
  const [a, setA] = useState(false);
  // ...
}
```

### React Native Components

- Keep components small and focused
- Extract reusable logic into custom hooks
- Use proper TypeScript types/interfaces
- Avoid inline styles (use StyleSheet)
- Handle loading and error states

**Component structure:**

```typescript
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ComponentProps {
  title: string;
  onPress?: () => void;
}

export const Component: React.FC<ComponentProps> = ({ title, onPress }) => {
  // Hooks
  const [state, setState] = useState(initialValue);

  // Effects
  useEffect(() => {
    // ...
  }, []);

  // Handlers
  const handlePress = () => {
    onPress?.();
  };

  // Render
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
```

### File Organization

```
src/
├── components/        # Reusable UI components
│   ├── Button.tsx
│   └── index.ts      # Export barrel
├── screens/          # Full screen components
├── services/         # API and business logic
├── hooks/            # Custom React hooks
├── utils/            # Helper functions
├── types/            # TypeScript types/interfaces
├── constants/        # App constants
└── styles/           # Theme and shared styles
```

### Styling

- Use the theme system (`src/styles/theme.ts`)
- Keep styles consistent with existing design
- Support both light and dark modes
- Ensure accessibility (contrast, touch targets)
- Test on multiple screen sizes

### Testing

- Write unit tests for utilities and services
- Write integration tests for complex features
- Test accessibility features
- Test offline functionality
- Test on both iOS and Android

## 🎨 UI/UX Guidelines

### Design Principles

1. **Simplicity** - Minimize cognitive load during anxiety/panic
2. **Accessibility** - Support screen readers, large text, high contrast
3. **Speed** - Instant access to calming features
4. **Privacy** - No forced sign-ups, optional analytics

### Colors

- Use calming colors (blues, greens, soft purples)
- Maintain WCAG AA contrast ratios
- Support dark mode

### Typography

- Use clear, readable fonts
- Support dynamic type sizes
- Minimum touch target: 44x44 points

### Animations

- Smooth, calming transitions
- Respect reduced motion preferences
- Synchronize with breathing patterns

## 🧪 Testing Checklist

Before submitting your PR, please verify:

- [ ] Code follows style guidelines
- [ ] TypeScript types are properly defined
- [ ] No console errors or warnings
- [ ] Tested on iOS (simulator or device)
- [ ] Tested on Android (emulator or device)
- [ ] Tested offline functionality
- [ ] Accessibility features work (VoiceOver/TalkBack)
- [ ] Dark mode works correctly
- [ ] No performance regressions
- [ ] Documentation updated if needed

## 🐛 Reporting Bugs

When reporting bugs, please include:

1. **Description** - Clear description of the issue
2. **Steps to Reproduce** - How to trigger the bug
3. **Expected Behavior** - What should happen
4. **Actual Behavior** - What actually happens
5. **Environment** - Device, OS version, app version
6. **Screenshots/Logs** - If applicable

Use the bug report template when creating issues.

## 💡 Suggesting Features

When suggesting features, please include:

1. **Problem Statement** - What problem does this solve?
2. **Proposed Solution** - Your suggested approach
3. **Alternatives** - Other solutions considered
4. **Impact** - Who benefits and how?
5. **Evidence** - Supporting research (especially for clinical features)

Use the feature request template when creating issues.

## 📖 Documentation

Good documentation helps everyone:

- Update README.md for user-facing changes
- Update docs/ for developer-facing changes
- Add inline comments for complex logic
- Update API documentation
- Include examples

## ⚠️ Important Considerations

### Mental Health Content

When contributing mental health content:

- Base recommendations on evidence-based practices
- Include appropriate disclaimers
- Avoid claiming to diagnose or treat conditions
- Direct users to professional help when appropriate
- Be sensitive to diverse experiences

### Crisis Resources

When adding crisis resources:

- Verify phone numbers and URLs
- Include international options
- Test that links work
- Update regularly

### Privacy & Security

- Never log sensitive user data
- Make analytics opt-in only
- Use secure connections
- Follow data minimization principles
- Document data collection clearly

## 🎓 Learning Resources

### React Native

- [React Native Docs](https://reactnative.dev/docs/getting-started)
- [Expo Docs](https://docs.expo.dev/)
- [React Navigation](https://reactnavigation.org/)

### Appwrite

- [Appwrite Docs](https://appwrite.io/docs)
- [Appwrite React Native](https://appwrite.io/docs/sdks#client)

### Mental Health

- [NIMH Anxiety Disorders](https://www.nimh.nih.gov/health/topics/anxiety-disorders)
- [Evidence-Based Grounding Techniques](https://www.healthline.com/health/grounding-techniques)

## 💬 Communication

- **GitHub Issues** - Bug reports, feature requests
- **GitHub Discussions** - Questions, ideas, general discussion
- **Pull Requests** - Code review and collaboration

## 📜 Code of Conduct

Be respectful, inclusive, and professional. We're all here to help people dealing with anxiety and panic. Let's create a welcoming environment.

## 🙏 Recognition

All contributors will be recognized in:

- README.md Contributors section
- Release notes
- About screen in the app (for significant contributions)

## ❓ Questions?

- Open a [GitHub Discussion](https://github.com/AlainS7/relax/discussions)
- Check existing issues and PRs
- Review documentation in `docs/`

Thank you for contributing to CalmWave! Together, we're making mental health support more accessible. 💙
