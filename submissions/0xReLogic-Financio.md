# Hackathon Submission: Financio - The Founder's First Dashboard

## GitHub handle

0xReLogic

## Project Title

Financio - The Founder's First Dashboard

## Project Description    

Financio is a comprehensive financial management dashboard specifically designed for bootstrapped founders and SMEs. It helps them transition from chaotic Excel spreadsheets to a clean, visual, and intelligent financial management system.

The platform features:
- **Real-time Dashboard**: Live financial overview with income, expenses, balance tracking, and trend analysis
- **Smart Transaction Management**: Quick entry forms, receipt uploads, search & filters, date range selection
- **AI-Powered Financial Advisor**: One-click comprehensive financial analysis powered by Google Gemini 2.0 Flash, providing actionable insights and recommendations
- **Category Management**: Custom income/expense categories with color coding and icon selection
- **Visual Analytics**: Interactive charts (pie charts, cashflow line charts) for better financial visualization
- **Automated Email Reports**: Weekly financial summary emails sent automatically
- **Receipt Management**: Upload and attach receipts (images) to transactions for better record-keeping
- **Analysis History**: Timeline of past AI analyses with export to PDF functionality
- **Full Authentication System**: Secure registration, login, password recovery, and session management
- **Dark Mode Support**: Professional UI with full dark mode and responsive design

All powered by Appwrite's comprehensive backend services, making it a production-ready SaaS application.

## Inspiration behind the Project  

The inspiration for Financio came from observing the struggles of bootstrapped founders and SME owners who are overwhelmed with managing their finances. Many small business owners:

- Struggle with Excel spreadsheets that are error-prone and not visual
- Have no clear picture of their cashflow situation
- Make business decisions based on gut feeling rather than data
- Need simple tools that provide instant financial clarity

I wanted to create a solution that:
1. **Removes friction**: No complex setup, just sign up and start tracking
2. **Provides immediate value**: AI-powered insights from day one
3. **Empowers decision-making**: Visual dashboards and actionable recommendations
4. **Automates reporting**: Weekly email summaries without manual work
5. **Scales with growth**: Built on robust Appwrite infrastructure

The goal was to build what every founder needs on day 1 - a simple, beautiful, and intelligent financial dashboard that helps them make data-driven decisions and focus on growing their business instead of wrestling with spreadsheets.

By leveraging Appwrite's powerful backend services and Google's Gemini AI, Financio delivers enterprise-grade features with a startup-friendly experience.

## Tech Stack    

**Frontend:**
- React 18 + TypeScript 5.x for type-safe component development
- Vite as the build tool for fast development experience
- Tailwind CSS + Shadcn UI for professional, accessible UI components
- Wouter for lightweight client-side routing
- TanStack Query (React Query) for server state management and caching
- Zustand for client-side state management (auth state)
- Recharts for interactive data visualizations
- React Markdown for rendering AI-generated advice
- React Hook Form + Zod for form validation
- date-fns for date formatting
- Framer Motion for smooth animations
- jsPDF (PDF generation)
**Backend & Services:**
- Appwrite Cloud (NYC region) for all backend services
- Python 3.12 for serverless functions
- Google Generative AI (gemini-2.0-flash-exp) for AI financial analysis
- SendGrid for email delivery with verified domain

**Deployment:**
- Appwrite Sites for production deployment with edge distribution
- Node 22 runtime with static adapter

**Architecture Highlights:**
- Document-level security for user data isolation
- WebSocket-based real-time updates for live dashboard
- Platform-managed API keys for zero-friction AI features
- Lifetime credit system (10 free AI analyses per user)
- Automated weekly email reports with user preference filtering
- Receipt storage with automatic cleanup on updates/deletes

### Appwrite products

- [x] Auth
- [x] Databases
- [x] Storage
- [x] Functions
- [x] Messaging
- [x] Realtime
- [x] Sites

## Project Repo  

https://github.com/0xReLogic/Financio-The-Founders-First-Dashboard-

## Deployed Site URL

https://Financio.appwrite.network

## Demo Video/Photos  

https://youtu.be/sFwejhJLQ5s
