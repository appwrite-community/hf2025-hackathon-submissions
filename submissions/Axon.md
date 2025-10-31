# Hackathon Submission: Axon

## GitHub handle

@Itz-Agasta

## Project Title

Axon - Decentralized Memory Layer for AI Agents

## Project Description

Axon is a **decentralized AI memory platform** that enables AI agents to store and retrieve memories permanently on blockchain infrastructure, powered by Appwrite's backend services.

The project consists of three main components:

1. **Backend API Server (Hono + Bun)**: A high-performance REST API that integrates Appwrite's Authentication, Database, and Messaging services with my custom EizenDB vector database running on Arweave blockchain. It handles user management, subscription tracking, memory operations, and blockchain contract deployment.

2. **Web Dashboard (Next.js 15)**: A modern, responsive web interface built with Next.js and Appwrite SDK that allows users to manage their AI memories, view usage analytics, deploy vector database instances, and generate API keys for programmatic access.

3. **EizenDB Vector Database**: A custom-built vector database implementing the HNSW (Hierarchical Navigable Small Worlds) algorithm that runs entirely on Arweave blockchain, providing `O(log N)` search complexity across millions of high-dimensional vectors with permanent, censorship-resistant storage.

Key features include semantic memory search using natural language, automatic text-to-vector embedding generation with local models, per-user isolated blockchain contracts, subscription-based quota management, and comprehensive API documentation.


## Inspiration behind the Project  

The inspiration for Axon came from a critical problem I observed in the AI landscape: AI agents have no permanent, user-controlled memory. When you interact with ChatGPT, Claude, or any AI assistant, your conversation history is stored on corporate servers, subject to data loss, censorship, or vendor lock-in. Companies charge monthly fees to store YOUR conversations, and if they shut down or change policies, your AI's memory disappears forever.

I built Context0 (prev. archiveNET) a few months ago to solve this problem using decentralized blockchain storage. and validated that permanent AI memory on blockchain is not just possible but practical. However, Context0 was a proof-of-concept that lacked production-ready infrastructure for user management, billing, and scalability.

When I discovered the Appwrite Hackathon, I saw the perfect opportunity to transform Context0 into Axon - a complete ecosystem. Appwrite's backend services (Authentication, Database, Messaging, Functions) provide exactly what I needed to build a production-ready platform without spending months on infrastructure.

My vision for Axon is ambitious: it will become the universal memory layer for AI agents worldwide. Just as databases like PostgreSQL became the standard for application data, Axon will become the standard for AI memory. The roadmap includes developer SDKs in multiple languages, integration with LangChain and LlamaIndex, Model Context Protocol servers, and eventually a general-purpose decentralized database beyond just AI memory.

What excites me most is the hybrid architecture: Appwrite handles metadata, user accounts, and subscriptions with blazing speed, while the blockchain handles vector embeddings with permanence and censorship resistance. This "best of both worlds" approach delivers both performance and decentralization.

I chose this idea because I believe in a future where users own their AI interactions, where memories last forever without monthly fees, and where no single company controls the infrastructure that powers AI agents.

## Tech Stack

**Backend (API Server):**
- Hono - Ultra-fast web framework for building the REST API
- Bun - Modern JavaScript runtime (3x faster than Node.js)
- Appwrite Node SDK - Integration with all Appwrite services
- TypeScript - Type-safe development across the entire stack
- Zod - Runtime schema validation for API requests
- Winston - Structured logging with multiple transports
- Bcryptjs - Secure password and API key hashing

**Appwrite Services Integrated:**
- Appwrite Auth - User registration, login, OAuth, session management
- Appwrite Databases - Four collections (Subscriptions, Instances, API Keys, Memory Metadata) with real-time capabilities
- Appwrite Storage - Planned for file attachments and memory exports
- Appwrite Messaging - For email notifications and alerts
- Appwrite Functions - Planned for background jobs and scheduled tasks
- Appwrite Realtime - Live updates for dashboard statistics

**Blockchain & Vector Storage:**
- Arweave - Permanent blockchain storage (pay once, store forever)
- Warp Contracts - Smart contracts framework for Arweave
- HollowDB - Key-value store on Arweave for contract state
- EizenDB - Custom HNSW vector database (1500+ LOC, built from scratch)
- Protocol Buffers - Efficient serialization reducing storage costs by 60%
- Redis - Caching layer for Warp contract state
- ArLocal - Local Arweave testnet for development

**AI & Embeddings:**
- Xenova Transformers - Local embedding generation (no external API costs)
- ONNX Runtime - Efficient model inference
- all-MiniLM-L6-v2 - 384-dimensional embedding model

**Frontend (Dashboard):**
- Next.js 15 - React framework with App Router and Server Components
- React 19 - Latest React with concurrent features
- Appwrite Web SDK - Client-side authentication and database access
- TypeScript - End-to-end type safety
- Tailwind CSS 4 - Utility-first styling
- Radix UI - Accessible headless component library
- TanStack Query - Server state management and caching
- GSAP - Professional animations
- Lenis - Smooth scrolling
- Recharts - Data visualization for analytics
- Wagmi + Viem - Web3 integration (wallet connection)


### Appwrite products

- [x] Auth
- [x] Databases
- [ ] Storage
- [ ] Functions
- [X] Messaging
- [x] Realtime
- [ ] Sites

## Project Repo

https://github.com/Itz-Agasta/axon

## Deployed Site URL
https://axon-client-one.vercel.app/

## Demo Video/Photos
https://youtu.be/-ykz3zIt7X4