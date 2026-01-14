# Hacker News Clone

A full-stack web application that replicates the core functionality of Hacker News, featuring a modern React frontend and a robust Node.js backend. This project demonstrates a complete social news aggregation platform where users can share links, ask questions, engage in discussions, and build their online reputation.

## 🚀 Features

### User Authentication & Profiles
- **Secure Registration & Login**: JWT-based authentication with HTTP-only cookies for enhanced security
- **User Profiles**: Customizable user accounts with karma points, bio, and account creation tracking
- **Session Management**: Persistent login sessions with automatic token verification

### Content Management
- **Dual Post Types**: 
  - **URL Posts**: Share interesting links from across the web
  - **Ask Posts**: Pose questions to the community with text-based content
- **Post Submission**: Intuitive form-based post creation with URL validation and text support
- **Post Categorization**: Automatic classification between news links and discussion threads

### Community Engagement
- **Upvoting System**: One-click upvoting to boost quality content (prevents duplicate votes)
- **Nested Comments**: Deeply threaded comment discussions with unlimited nesting levels
- **Comment Replies**: Reply directly to comments to create engaging conversation threads
- **Real-time Updates**: Dynamic post and comment counts that update as users interact

### Content Discovery
- **News Feed**: Browse the latest URL submissions from the community
- **Ask Feed**: Explore questions and discussions posted by users
- **Newest Posts**: Chronologically sorted view of the most recent submissions
- **Post Details**: Full post pages with complete comment threads and engagement metrics

### User Experience
- **Responsive Design**: Clean, minimalist interface inspired by Hacker News
- **Smart Navigation**: Context-aware routing with protected routes for authenticated actions
- **Timestamp Display**: Human-readable relative timestamps (e.g., "2 hours ago")
- **Hostname Extraction**: Automatic URL parsing to display source domains

## 🛠️ Tech Stack

### Frontend
- **React 19**: Latest React with modern hooks and context API
- **Vite**: Lightning-fast build tool and development server
- **React Router v7**: Client-side routing with nested route support
- **React Hook Form**: Performant form handling with validation
- **CSS Modules**: Scoped styling for component isolation

### Backend
- **Node.js**: JavaScript runtime environment
- **Express 5**: Fast, minimalist web framework
- **MongoDB**: NoSQL database for flexible data storage
- **Mongoose**: Elegant MongoDB object modeling with schema validation
- **JWT (jsonwebtoken)**: Secure token-based authentication
- **bcrypt**: Password hashing for secure credential storage
- **Cookie Parser**: HTTP cookie management
- **CORS**: Cross-origin resource sharing configuration

### Development Tools
- **ESLint**: Code quality and consistency enforcement
- **Nodemon**: Automatic server restart during development

## 📁 Project Structure

```
hacker_news/
├── client/                 # React frontend application
│   ├── src/
│   │   ├── components/
│   │   │   ├── complex/   # Feature-rich components
│   │   │   │   ├── AddPost/    # Post creation form
│   │   │   │   ├── Ask/        # Ask posts feed
│   │   │   │   ├── Auth/       # Login/Registration
│   │   │   │   ├── Header/     # Navigation bar
│   │   │   │   ├── Layout/     # App layout wrapper
│   │   │   │   ├── Newest/     # Newest posts feed
│   │   │   │   ├── News/       # News posts feed
│   │   │   │   ├── Post/       # Post detail page
│   │   │   │   ├── Profile/    # User profile page
│   │   │   │   └── Reply/      # Comment reply page
│   │   │   └── primitive/      # Reusable UI components
│   │   │       ├── Comment/    # Comment display component
│   │   │       └── PostItem/   # Post list item component
│   │   ├── lib/
│   │   │   ├── api.js      # API client functions
│   │   │   ├── context.js  # React context for user state
│   │   │   └── helpers.js  # Utility functions
│   │   ├── App.jsx         # Main app component with routing
│   │   └── main.jsx        # Application entry point
│   └── package.json
│
└── server/                 # Node.js backend API
    ├── controllers/        # Request handlers
    │   ├── authController.js    # Authentication logic
    │   ├── commentController.js # Comment operations
    │   ├── postController.js    # Post operations
    │   └── userController.js    # User operations
    ├── models/             # Database schemas
    │   ├── User.js         # User model
    │   ├── Post.js         # Post model
    │   └── Comment.js      # Comment model
    ├── routes/             # API route definitions
    │   ├── authRouter.js   # Auth endpoints
    │   ├── commentRouter.js # Comment endpoints
    │   ├── postRouter.js   # Post endpoints
    │   ├── userRouter.js   # User endpoints
    │   └── routes.js       # Route aggregator
    ├── index.js            # Server entry point
    └── package.json
```

## 🎯 Key Functionality Highlights

### Authentication Flow
The application implements a secure authentication system using JWT tokens stored in HTTP-only cookies. When users register or log in, their credentials are validated, passwords are hashed with bcrypt, and a secure token is issued. The token is automatically verified on protected routes, ensuring seamless user experience while maintaining security.

### Nested Comment Threading
One of the most interesting features is the recursive comment system. Comments can have unlimited nested replies, creating deep discussion threads. The frontend recursively renders comment trees, while the backend maintains parent-child relationships through MongoDB references, enabling efficient querying and rendering of complex conversation structures.

### Post Type Detection
The system intelligently distinguishes between URL posts and Ask posts. When a user submits a post with a URL, it's automatically classified as a "url" type and links externally. Posts without URLs become "ask" type posts, creating internal discussion threads. This dual-mode system provides flexibility for different types of content sharing.

### Upvote Tracking
The upvoting system prevents duplicate votes by tracking which users have upvoted each post. Users can only upvote once per post, and the system maintains a list of user IDs who have contributed points, ensuring fair engagement metrics.

## 🚦 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas connection string)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd hacker_news
   ```

2. **Install server dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd ../client
   npm install
   ```

4. **Configure MongoDB connection**
   - Update the MongoDB connection string in `server/index.js` with your database credentials

5. **Start the development server**
   ```bash
   # In the server directory
   npm run dev
   ```

6. **Start the client application**
   ```bash
   # In the client directory (new terminal)
   npm run dev
   ```

7. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000

## 📝 API Endpoints

### Authentication
- `POST /api/auth/registration` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/verify` - Verify authentication token
- `GET /api/auth/logout` - Logout user

### Posts
- `POST /api/post/add` - Create a new post
- `POST /api/post/get` - Get posts by type (url/ask)
- `GET /api/post/get/newest` - Get newest posts
- `GET /api/post/get/:id` - Get post by ID
- `POST /api/post/upvote` - Upvote a post

### Comments
- `POST /api/comment/add` - Add a comment to a post
- `GET /api/comment/get/:postId` - Get all comments for a post
- `GET /api/comment/getById/:id` - Get comment by ID
- `POST /api/comment/reply` - Reply to a comment

### Users
- `GET /api/user/get/:id` - Get user by ID
- `POST /api/user/update` - Update user information

## 🎨 Design Philosophy

This project follows a component-based architecture with a clear separation between complex feature components and primitive reusable components. The styling uses CSS Modules to ensure style encapsulation, and the application maintains a clean, minimalist aesthetic reminiscent of the original Hacker News while incorporating modern web development practices.

## 🔒 Security Features

- Password hashing with bcrypt (8 salt rounds)
- JWT token-based authentication
- HTTP-only cookies for token storage
- CORS configuration for secure cross-origin requests
- Input validation on both client and server sides

## 📈 Future Enhancements

Potential areas for expansion:
- User karma calculation based on post/comment engagement
- Post hiding functionality
- Search and filtering capabilities
- Pagination for large content lists
- Real-time notifications
- Email verification
- Password reset functionality

---

Built with ❤️ using modern web technologies
