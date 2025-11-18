# Hackathon Submission: Lemongrab
## GitHub handle
@suzarilshah

## Project Title
_What is the name of your project?_

LemonGrab - AI Video Generation Platform

## Project Description    
_What have you built during the hackathon?_

LemonGrab is a sophisticated web application that transforms text prompts into professional-quality videos using Azure OpenAI's Sora models (Sora 1 and Sora 2). The platform provides an intuitive interface for users to create AI-generated videos with precise control over resolution, duration, and creative parameters. Beyond basic text-to-video generation, LemonGrab supports advanced modes including image-to-video conversion (where users upload reference images to guide video generation), and video-to-video remix (allowing users to reuse the structure, motion, and framing of previously generated videos with new prompts).

The application features a comprehensive video library system powered by Appwrite backend, where all generated videos are automatically downloaded from Azure, stored securely in cloud storage buckets, and made accessible through a rich gallery interface. Users can track their generation history, monitor costs with real-time price estimation, and manage multiple Azure API profiles for different projects or use cases. The platform includes an intelligent prompt builder that leverages AI to help users craft detailed, effective video prompts by breaking down elements like camera angles, artistic styles, lighting conditions, and scene composition.

With support for both Sora 1 (offering flexible resolutions from 480x480 to 1920x1080 with custom durations) and Sora 2 (optimized for 720x1280 and 1280x720 at 4, 8, 12, or 20 seconds), LemonGrab caters to various video production needs—from social media content to cinematic productions. The application provides real-time progress tracking during generation, detailed API console logging for debugging, and robust error handling to ensure a smooth user experience.



## Inspiration behind the Project  
_What is the story behind this project? Why did you choose to work on this specific idea?_

The Inspiration: The rise of AI-generated content has democratized creative production, but video generation remains technically complex and fragmented. While AI models like Sora have incredible potential, accessing them requires dealing with API integrations, managing cloud infrastructure, handling video downloads, and navigating complex pricing models. Most users—content creators, marketers, educators, and small business owners—lack the technical expertise or time to build custom solutions around these APIs.

LemonGrab was born from the vision of making enterprise-grade AI video generation accessible to everyone, regardless of technical background. The platform eliminates the friction between creative ideas and finished videos by providing a single, cohesive interface that handles all the technical complexity behind the scenes.

The Problem Statement:

- Technical Barriers: Direct integration with Azure OpenAI's Sora API requires understanding RESTful APIs, authentication flows, job polling mechanisms, and error handling—skills many creative professionals don't possess.
- Fragmented Workflow: The typical workflow involves generating videos through API calls, manually downloading them from temporary Azure URLs, organizing files locally, and keeping track of costs across multiple generations—a tedious, error-prone process.
- Lack of Visibility: Users need to understand generation costs upfront, track their usage over time, and manage multiple API configurations without exposing sensitive credentials.
- Limited Creative Tools: Crafting effective prompts for AI video generation requires understanding shot composition, lighting, camera movements, and artistic styles—knowledge that takes time to develop through trial and error.
- No Permanent Storage: Azure provides temporary download links for generated videos, but users need a reliable, organized library to store, preview, and manage their creations over time.

LemonGrab's Solution: LemonGrab addresses these challenges by providing a complete, user-friendly platform that handles API integration, video storage, cost tracking, prompt assistance, and library management—all while maintaining security through proper authentication and permission controls. Users can focus on creativity while the platform handles the technical complexity, making professional AI video generation accessible to anyone with an idea and an internet connection.

## Tech Stack    
_How have you built this project? Mention the technologies/methods/platforms you used to build your project_

Tech Stack
LemonGrab is built on a modern, performant technology stack optimized for real-time web applications:

Frontend:

- React 18 with TypeScript for type-safe component development
- Vite as the build tool for lightning-fast development and optimized production builds
- Tailwind CSS for utility-first styling with custom theming support (light/dark modes)
- shadcn/ui component library built on Radix UI primitives for accessible, customizable UI components
- React Router DOM for client-side routing and navigation
- TanStack Query for efficient server state management and caching
- Framer Motion for smooth animations and transitions
- Sonner for elegant toast notifications

Backend & Infrastructure:

- Appwrite as the Backend-as-a-Service (BaaS) platform, providing:
  - User authentication and session management
  - Document databases for storing video metadata, user profiles, generation history, and cost tracking
  - Storage buckets for video file hosting with permission-based access control
  - Serverless functions (Node.js 18) for:
    - Video ingestion (downloading from Azure and uploading to Appwrite)
    - AI-powered prompt generation using GPT-5
    - Bulk permission migration for existing videos
- Azure OpenAI Service for Sora 1 and Sora 2 video generation models

Key Libraries:

- Zod for runtime schema validation
- React Hook Form with Hookform Resolvers for form state management
- Lucide React for consistent iconography
- Recharts for data visualization in cost tracking
- date-fns for date manipulation in generation logs

### Appwrite products
_Select all the Appwrite products you have used in your project_


- [X] Auth
- [X] Databases
- [X] Storage
- [X] Functions
- [ ] Messaging
- [ ] Realtime
- [X] Sites

## Project Repo  
_Share a public repo link of your project_
https://github.com/suzarilshah/lemongrab-visions

## Deployed Site URL
_Share a `.appwrite.network` URL for your project_
https://lemongrab.appwrite.network/


## Demo Video/Photos  
_Share a 2-3 minute demo video of your project_
https://www.youtube.com/watch?v=OLNxa8C3Hwg
