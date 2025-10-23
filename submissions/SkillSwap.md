# Hackathon Submission: SkillSwap

## GitHub handle
nikunj-kohli

## Project Title
SkillSwap

## Project Description
SkillSwap is a peer-to-peer skill exchange platform that connects people who want to learn new skills with those who can teach them. Users can list skills they can teach and skills they want to learn, find matches, arrange exchanges, and leave reviews after sessions. The platform uses a trust score system to maintain quality and build community trust.

## Inspiration behind the Project
In today's world, everyone has unique skills and talents, but formal education or paid courses aren't always accessible or necessary. SkillSwap was inspired by the idea of creating a community where people can trade their knowledge freely - whether it's learning guitar in exchange for teaching cooking, or swapping programming lessons for language tutoring. This promotes collaborative learning, builds communities, and makes skill development accessible to everyone.

## Tech Stack
- **Frontend**: React with Vite
- **Backend**: Appwrite Cloud
- **Deployment**: Appwrite Sites
- **Database**: Appwrite Databases
- **Authentication**: Appwrite Auth (Email/Password)
- **Storage**: Appwrite Storage (for user avatars)

### Appwrite products
- [x] Auth
- [x] Databases
- [x] Storage
- [ ] Functions
- [ ] Messaging
- [ ] Realtime
- [x] Sites

## Project Repo
https://github.com/nikunj-kohli/skillswap-app

## Deployed Site URL
https://react-starter-personal-projects-skillswap.appwrite.network

## Demo Video/Photos
The application features a clean, modern interface built with React and deployed on Appwrite Sites. The database includes four main collections:
1. **Users** - Stores user profiles with name, email, bio, location, avatar, and trust score
2. **Skills** - Catalogs skills users can teach or want to learn with proficiency levels and categories  
3. **Exchanges** - Manages skill exchange sessions between users
4. **Reviews** - Enables users to rate and review their exchange experiences
