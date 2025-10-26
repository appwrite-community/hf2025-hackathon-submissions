# Hackathon Submission: Felearn AI

## GitHub handle
@namandhakad712

## Project Title
Felearn AI - Learn with Cute Cat Stories

## Project Description    
Felearn AI is an innovative educational platform that transforms complex concepts into engaging visual stories featuring adorable cats. Built with React, TypeScript, and powered by Google's Gemini 2.0 Flash multimodal AI, it generates coordinated text-image stories that make learning fun and memorable.

**Key Features:**
- 🎨 AI-powered visual storytelling with cute cat illustrations
- 📊 Smart quota system (15 stories/day with automatic midnight reset)
- 📚 Personal story library with search, filter, and pin functionality
- 📄 PDF export with high-quality images
- 🎭 Beautiful glassmorphism UI with dark/light theme support
- ⚡ Real-time streaming story generation
- 🔒 Secure authentication with OAuth (Google, GitHub)
- 📱 Fully responsive design for all devices

The platform uses a single multimodal AI model to generate both story text and images together, ensuring perfect coherence between narrative and visuals. Stories are automatically saved, and users can manage their library with advanced features like pinning favorites, searching, and exporting to PDF.

## Inspiration behind the Project  
The inspiration for Felearn AI came from observing how difficult it can be to understand complex technical concepts through traditional text-based explanations. I wanted to create a platform that makes learning enjoyable and memorable by combining:

1. **Visual Learning**: Research shows people retain information better with visual aids
2. **Storytelling**: Narratives help contextualize abstract concepts
3. **Emotional Connection**: Cute cats create positive associations with learning
4. **Accessibility**: Making complex topics approachable for everyone

The goal was to build an educational tool that doesn't feel like studying - where learning happens naturally through engaging, illustrated stories. By leveraging the latest multimodal AI technology (Gemini 2.0 Flash Image Preview), I could create a seamless experience where text and images are generated together, ensuring perfect coordination and context.

The smart quota system ensures fair usage while the glassmorphism UI makes the entire experience delightful. Whether you're learning about neural networks, quantum physics, or blockchain technology, Felearn AI transforms it into an adventure with adorable cats as your guides.

## Tech Stack    
**Frontend:**
- React 18 with TypeScript for type-safe development
- Tailwind CSS for utility-first styling
- Framer Motion & GSAP for smooth 60fps animations
- React Router for client-side routing
- Vite for fast builds and hot module replacement
- Styled Components for CSS-in-JS

**Backend & Services:**
- Appwrite (Backend-as-a-Service)
  - Database (NoSQL) for user and story management
  - Authentication with email verification and OAuth
  - File Storage for images and PDFs
  - Real-time subscriptions for live updates
- Google Gemini 2.0 Flash Image Preview (Multimodal AI)
  - Text and image generation in single API call
  - Streaming responses for real-time updates
  - Structured JSON output support
- Vercel for deployment and hosting

**Key Libraries:**
- jsPDF & pdf-lib for PDF generation
- html2canvas for high-quality exports
- react-pageflip for interactive book view
- Chart.js for analytics visualization

**Development Tools:**
- ESLint & Prettier for code quality
- TypeScript for static type checking
- PostCSS & Autoprefixer for CSS processing

### Appwrite products
- [x] Auth
- [x] Databases
- [x] Storage
- [x] Functions
- [x] Messaging
- [x] Realtime
- [x] Sites

## Project Repo  
https://github.com/namandhakad712/Felearn

## Deployed Site URL
https://felearn.vercel.app
https://felearn.appwrite.network

## Demo Video/Photos  
YT video- https://youtu.be/x1bI-iErw7Q
<img width="1175" height="783" alt="felearn-ai" src="https://github.com/user-attachments/assets/e56c292c-1b50-4aa5-9319-5757f5dff6e7" />

