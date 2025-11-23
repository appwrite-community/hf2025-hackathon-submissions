# AppWriteUp 📝

A modern, full-stack blogging platform built with React and powered by Appwrite Backend-as-a-Service (BaaS). Create, manage, and share your thoughts with a beautiful, responsive interface.

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=flat&logo=react)
![Appwrite](https://img.shields.io/badge/Appwrite-20.0.0-F02E65?style=flat&logo=appwrite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.14-38B2AC?style=flat&logo=tailwind-css)
![Redux](https://img.shields.io/badge/Redux_Toolkit-2.9.0-764ABC?style=flat&logo=redux)
![Vite](https://img.shields.io/badge/Vite-7.1.2-646CFF?style=flat&logo=vite)

---

## ✨ Features

### 🔐 Authentication & User Management
- **Secure Authentication**: Email/password-based user registration and login
- **Session Management**: Persistent user sessions with automatic state management
- **Protected Routes**: Role-based access control for authenticated users
- **User Profiles**: Account creation with profile information

### 📄 Blog Post Management
- **Create Posts**: Rich text editor (TinyMCE) for creating formatted blog content
- **Edit & Update**: Full CRUD operations for managing your posts
- **Delete Posts**: Remove unwanted content with confirmation
- **Status Control**: Draft and publish functionality for content workflow
- **Featured Images**: Upload and display featured images for each post

### 🖼️ Media Management
- **Image Upload**: Seamless file upload to Appwrite Storage
- **Image Preview**: Real-time preview of uploaded images
- **File Download**: Download capability for stored media
- **Automatic Optimization**: Efficient file handling and storage

### 🎨 Modern UI/UX
- **Responsive Design**: Mobile-first approach with TailwindCSS
- **Reusable Components**: Modular component architecture
- **Form Validation**: Client-side validation with React Hook Form
- **Loading States**: Smooth loading indicators and transitions
- **Error Handling**: User-friendly error messages and notifications

---

## 🛠️ Tech Stack

### Frontend
- **React 19.1.1** - Modern UI library with latest features
- **Redux Toolkit 2.9.0** - State management for authentication and app state
- **React Router DOM 7.8.2** - Client-side routing and navigation
- **TailwindCSS 4.1.14** - Utility-first CSS framework
- **React Hook Form 7.62.0** - Performant form validation
- **TinyMCE** - Rich text editor for blog content
- **HTML React Parser** - Safely render HTML content

### Backend Services (Appwrite)
- **Authentication** - User management and session handling
- **Database** - Document storage for blog posts
- **Storage** - File and image management
- **Queries** - Advanced data filtering and retrieval

### Development Tools
- **Vite 7.1.2** - Lightning-fast build tool and dev server
- **ESLint** - Code quality and consistency
- **TypeScript Support** - Type-safe components

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager
- **Appwrite Instance** (Cloud or Self-hosted)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/s-cube-15/AppWriteUp.git
cd AppWriteUp
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Appwrite

Create a `.env` file in the root directory and add your Appwrite credentials:

```env
VITE_APPWRITE_URL=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id
VITE_APPWRITE_BUCKET_ID=your_bucket_id
```

#### Setting up Appwrite:

1. **Create an Appwrite Project**
   - Go to [Appwrite Cloud](https://cloud.appwrite.io/) or your self-hosted instance
   - Create a new project and copy the Project ID

2. **Create a Database**
   - Navigate to Databases section
   - Create a new database and copy the Database ID

3. **Create a Collection**
   - Inside your database, create a collection with the following attributes:
     - `title` (String, required)
     - `content` (String, required)
     - `status` (String, required)
     - `userId` (String, required)
     - `featuredImage` (String)
     - `slug` (String, required)
   - Set appropriate permissions (Document Security)

4. **Create a Storage Bucket**
   - Navigate to Storage section
   - Create a new bucket for blog images
   - Configure file size limits and allowed file types
   - Copy the Bucket ID

### 4. Run the Development Server

```bash
npm run dev
```

The application will start at `http://localhost:5173`

### 5. Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` folder.

---

## 📁 Project Structure

```
AppWriteUp/
├── public/                 # Static assets
├── src/
│   ├── appwrite/          # Appwrite service configurations
│   │   ├── auth.js        # Authentication service
│   │   └── conf.js        # Database & storage service
│   ├── assets/            # Images, icons, etc.
│   ├── components/        # Reusable React components
│   │   ├── Button.tsx
│   │   ├── Input.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── PostCard.jsx
│   │   ├── Select.jsx
│   │   ├── Container/
│   │   ├── Footer/
│   │   └── Header/
│   ├── config/            # Environment configuration
│   │   └── config.js
│   ├── store/             # Redux store and slices
│   │   ├── store.js
│   │   └── authSlice.js
│   ├── App.jsx            # Main application component
│   ├── App.css
│   ├── main.jsx           # Application entry point
│   └── index.css
├── .env                   # Environment variables (create this)
├── package.json
├── vite.config.js
└── README.md
```

---

## 🔑 Key Features Breakdown

### Authentication Flow
1. Users can sign up with email, password, and name
2. Login creates an authenticated session
3. Redux manages global authentication state
4. Protected routes redirect unauthenticated users
5. Logout clears session and resets state

### Post Management Workflow
1. **Create**: Users write posts with rich text editor and upload featured images
2. **Read**: All posts displayed with preview cards
3. **Update**: Authors can edit their own posts
4. **Delete**: Authors can delete their own posts
5. **Status**: Posts can be saved as drafts or published

### Service Layer Architecture
- **AuthService**: Handles all authentication operations
- **Service**: Manages database and storage operations
- **Error Handling**: Graceful error management throughout

---

## 🎯 Usage

### Creating Your First Post
1. Sign up or log in to your account
2. Navigate to "Create Post"
3. Write your content using the rich text editor
4. Upload a featured image (optional)
5. Choose post status (draft/active)
6. Click "Publish"

### Managing Posts
- View all your posts on the dashboard
- Click on any post to view details
- Edit or delete posts you've created
- Toggle between draft and published status

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style
- Follow ESLint rules configured in the project
- Use meaningful variable and function names
- Add comments for complex logic
- Keep components small and focused

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Sudhanshu Sabale**

- GitHub: [@s-cube-15](https://github.com/s-cube-15)
- LinkedIn: [Sudhanshu Sabale](https://www.linkedin.com/in/sudhanshu-sabale-28ab4520a/)
- Email: sudhanshussable2@gmail.com

---

## 🙏 Acknowledgments

- Built for [Appwrite Hacktoberfest 2025 Hackathon](https://apwr.dev/hf2025-hackathon)
- Powered by [Appwrite](https://appwrite.io/)
- UI components styled with [TailwindCSS](https://tailwindcss.com/)
- Rich text editing by [TinyMCE](https://www.tiny.cloud/)

---

## 📸 Screenshots

_Coming soon..._

---

## 🐛 Known Issues

- None reported yet

---

## 🗺️ Roadmap

- [ ] Add comment system for posts
- [ ] Implement post categories and tags
- [ ] Add user profile pages
- [ ] Enable social sharing
- [ ] Implement search functionality
- [ ] Add post analytics
- [ ] Support for multiple authors
- [ ] Dark mode support

---

## 📞 Support

If you encounter any issues or have questions:
- Open an issue in the [GitHub repository](https://github.com/s-cube-15/AppWriteUp/issues)
- Contact via email: sudhanshussable2@gmail.com

---

<div align="center">
  <p>Made with ❤️ by Sudhanshu Sabale</p>
  <p>⭐ Star this repo if you find it helpful!</p>
</div>
