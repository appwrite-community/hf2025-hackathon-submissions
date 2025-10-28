# Hackathon Submission: FaceGen.io

## GitHub handle
SharanRP

## Project Title
FaceGen - AI-Powered Avatar Generation API & Landing Page

## Project Description    
FaceGen provides a simple REST API for generating unique AI-powered avatars based on natural language descriptions. The project includes a comprehensive landing page and API documentation, deployed on **Appwrite Sites**, and a fast semantic avatar service built on Cloudflare Workers that serves curated avatar images from Appwrite.

Users can request avatars by simply describing what they want (e.g., "professional", "doctor-smile", "creative-designer") and the service uses semantic search to intelligently match descriptions with curated avatar images stored in **Appwrite Storage**, returning results globally via Cloudflare's edge network.

The project demonstrates a sophisticated microservices architecture with two cooperating services:
- **facegen-generation**: Handles image generation on-demand with semantic matching, storing results in Appwrite Storage
- **facegen-api**: Exposes the public API, manages request routing via Appwrite Databases, queuing in Appwrite, and serves avatar results from Appwrite Storage

**Key Appwrite Integration:**
- **Appwrite Sites**: Hosts the landing page and API documentation
- **Appwrite Storage**: Stores all curated and generated avatar images
- **Appwrite Databases**: Maintains metadata about avatars, semantic search indices, and request history

## Inspiration behind the Project  
The inspiration came from recognizing the limitations of existing avatar generation solutions. Services like DiceBear provide random avatar generation, but lack the ability to generate realistic, semantically-aware avatars based on natural language descriptions. FaceGen.io bridges this gap by combining:

1. Semantic AI understanding - interpreting user descriptions naturally
2. Real image generation - creating genuine, high-quality avatars
3. Global edge distribution - leveraging Cloudflare Workers for fast worldwide delivery
4. Intelligent caching - quickly serving high-confidence matches while generating new avatars asynchronously

This solution enables modern applications to provide personalized, AI-powered avatar selection experiences without complex UX or backend complexity.

## Tech Stack    
- **Frontend**: Modern web landing page and API documentation
- **Backend Services**: 
  - Cloudflare Workers for edge computing and global distribution
  - Node.js-based microservices for image generation and API management
- **Database**: Appwrite for storing curated avatar images and metadata
- **AI/ML**: Semantic search and image generation models
- **Infrastructure**: Cloudflare Workers, Appwrite Cloud
- **Architecture**: Microservices with semantic matching and async generation

### Appwrite products
- [x] Databases
- [x] Storage
- [ ] Auth
- [ ] Functions
- [ ] Messaging
- [ ] Realtime
- [x] Sites

## Project Repo  
https://github.com/SharanRP/facegen-web

## Related Repositories
- API Service: https://github.com/SharanRP/facegen-api
- Image Generation: https://github.com/SharanRP/facegen-generator

## Deployed Site URL
https://facegen.appwrite.network


