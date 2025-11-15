# Hackathon Submission: Appwrite AI Duplicates Detector (AADD)

## GitHub handle
_Enter your GitHub handle_

@devikaharshey

## Project Title
_What is the name of your project?_

Appwrite AI Duplicates Detector (AADD)

## Project Description    
_What have you built during the hackathon?_

Appwrite AI Duplicates Detector (AADD) is a full-stack web app built to detect, visualize, and manage duplicates across Appwrite databases and storage using AI-powered similarity detection and perceptual hashing.
It supports multiple file types — text, images, videos, audio, PDFs, spreadsheets, and more — combining semantic embeddings and hash-based techniques for precise detection.

Users can securely connect multiple Appwrite projects, view detailed similarity scores, perform bulk deletions, and automate regular scans with email reminders.
All credentials are Fernet-encrypted, ensuring complete data security.

The app features an intuitive, responsive dashboard, real-time data visualizations, and an engaging “AI Garden” gamification system that reflects your data hygiene progress.
Built with Next.js, Tailwind, Flask, and Gemini AI, AADD blends intelligent data cleaning with a modern, delightful user experience.

## Inspiration behind the Project  
_What is the story behind this project? Why did you choose to work on this specific idea?_

The idea for AADD originated from my recent project FunDocs, created for the Appwrite Sites Hackathon. 
While testing it, I noticed that multiple entries of the same profile image were being stored in Appwrite for a single signup action — which caused profile pictures to fail loading.

That led me to wonder —
- What if it’s not just images, but also videos, audios, PPTs, Excel/CSV files, docs, PDFs, and text files getting duplicated?
- What if, despite unique IDs, duplicate files still existed in databases and storages?
- What if I could measure the similarity between files — as an actual percentage score?
- And what if all this could be implemented into a single, interactive app to help Appwrite users manage their data better?

Those “what ifs” turned into Appwrite AI Duplicates Detector (AADD) — an experimental yet practical step toward AI-driven data hygiene and visualization for Appwrite projects.

## Tech Stack    
_How have you built this project? Mention the technologies/methods/platforms you used to build your project_

### **Frontend**
- **Framework:** Next.js 15  
- **Language:** TypeScript + React  
- **Styling:** Tailwind CSS + shadcn/ui  
- **Animations:** Framer Motion  
- **Visualizations:** Nivo, Recharts
- **API Handling:** Axios  

### **Backend**
- **Framework:** Flask (Python)  
- **Core Integration:** Appwrite SDK (Python)  
- **Database, Auth & Storage:** Appwrite 
- **Security:** Cryptography (Fernet Encryption)  
- **Environment Management:** python-dotenv  
- **Email Notifications:** SendGrid API  

### **AI & Duplicate Detection**
- **Text Similarity:** Sentence Transformers (`all-MiniLM-L6-v2`)  
- **Image Duplicates:** ImageHash (aHash, pHash, dHash)  
- **Video Analysis:** OpenCV (ORB descriptor matching)  
- **Audio Comparison:** Librosa (MFCC feature extraction)  
- **PDF Parsing:** PyPDF2  
- **Spreadsheet Comparison:** pandas, openpyxl  
- **Presentation Analysis:** python-pptx  
- **Exact Duplicates:** MD5 Hashing (fallback mechanism)  

### **AI Integration**
- **Google Gemini API:** For AI Gardener chat and intelligent insights  

### **Other Tools & Deployment**
- **Version Control:** GitHub  
- **Backend Hosting:** Huggingface Spaces  
- **Frontend Deployment:** Appwrite Sites  

### Appwrite products
_Select all the Appwrite products you have used in your project_

- [x] Auth
- [x] Databases
- [x] Storage
- [ ] Functions
- [ ] Messaging
- [ ] Realtime
- [x] Sites

## Project Repo  
_Share a public repo link of your project_

[https://github.com/devikaharshey/aadd](https://github.com/devikaharshey/aadd)

## Deployed Site URL
_Share a `.appwrite.network` URL for your project_

[https://appwrite-ai-duplicates-detector-aadd.appwrite.network/](https://appwrite-ai-duplicates-detector-aadd.appwrite.network/)

## Demo Video/Photos  
_Share a 2-3 minute demo video of your project_

[https://youtu.be/VjmDfk_CCQ8](https://youtu.be/VjmDfk_CCQ8)
