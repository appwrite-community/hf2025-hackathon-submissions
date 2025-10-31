# Hackathon Submission: Aura

![Aura](https://github.com/DawnSaju/Aura/blob/master/public/brand/Aura.png?raw=true)

## GitHub handle
@DawnSaju

<!--
@adityaoberai
-->

## Project Title
Aura

<!--
CodeCapture
-->

## Project Description    
Aura is an AI powered video editing platform that makes professional video editing accessible to everyone. It's a web-based editor that combines the simplicity of modern design with intelligent features like automatic caption generation, a timeline-based editor with text overlays, and an AI chat assistant that helps you edit videos using natural language commands. As of now, it is at MVP Stage 1. 

## Inspiration behind the Project  
Honestly, I got frustrated watching my friends struggle with complicated video editing software just to add simple captions or trim their content for social media. Most "beginner friendly" editors are either too basic or have such a deep learning curve that you give up halfway through. I wanted to create something different—a tool that feels natural to use, where you can literally chat with an AI and say "add a title here" or "make this text bigger," and it just works. The goal was to bring the power of professional editing tools but take away all the complexity that frustrates people.

## Tech Stack    
I built Aura using **Next.js** and **TypeScript** for the frontend, styled with **Tailwind CSS** to keep the UI clean and responsive. The entire backend is powered by **Appwrite** I'm using their Auth for user management, Databases to store project metadata and editing history, Storage for handling video uploads (which can get pretty large), and Functions for processing tasks like caption generation. The UI components are built with **Lucide React** icons, and I spent a lot of time making sure the video player and timeline editor feel smooth and intuitive. 

The architecture is pretty straightforward: users upload videos to Appwrite Storage, the metadata gets stored in Databases, and when they need AI features (like caption generation), it triggers an Appwrite Function that processes everything server side. Everything stays in sync in realtime, so you can see your edits instantly.

### Appwrite products
_Select all the Appwrite products you have used in your project_

- [x] Auth
- [x] Databases
- [x] Storage
- [x] Functions
- [ ] Messaging
- [ ] Realtime
- [x] Sites

## Project Repo  
https://github.com/DawnSaju/Aura

<!-- Replace with your actual GitHub repository URL -->

## Deployed Site URL
https://aura.appwrite.network

<!-- Replace with your actual Appwrite deployment URL once deployed -->

## Demo Video/Photos  
_Share a 2-3 minute demo video of your project_

<!--
https://www.youtube.com/watch?v=9IBaX1avYWc
-->
