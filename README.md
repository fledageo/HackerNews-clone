# Hacker News Clone

A full-stack clone of Hacker News built with React and Node.js. Users can share links, ask questions, upvote posts, and have threaded discussions in nested comments.

## What it does

- **Post sharing**: Submit URL links or text-based "Ask" posts
- **Upvoting**: One-click upvotes (no duplicate votes allowed)
- **Nested comments**: Unlimited comment threading with replies
- **User accounts**: Registration, login, profiles with karma points
- **Feeds**: Browse news links, ask posts, or newest submissions

## Tech stack

**Frontend:**
- React 19 with hooks and context
- Vite for fast development
- React Router for navigation
- React Hook Form for forms
- CSS Modules for styling

**Backend:**
- Node.js with Express
- MongoDB with Mongoose
- JWT authentication (stored in HTTP-only cookies)
- bcrypt for password hashing

## Getting started

1. Install dependencies:
   ```bash
   cd server && npm install
   cd ../client && npm install
   ```

2. Set up MongoDB connection in `server/index.js`

3. Run both servers:
   ```bash
   # Terminal 1 - Backend
   cd server && npm run dev

   # Terminal 2 - Frontend  
   cd client && npm run dev
   ```

4. Open http://localhost:5173

## Project structure

```
client/          # React frontend
  └── src/
      ├── components/    # UI components (complex & primitive)
      └── lib/          # API calls, context, helpers

server/          # Node.js backend
  ├── controllers/     # Request handlers
  ├── models/          # MongoDB schemas
  └── routes/          # API endpoints
```

## Cool features

The nested comment system is probably the most interesting part - comments can reply to other comments infinitely deep, and the frontend recursively renders the whole tree. The app also automatically detects if you're posting a URL link or a text-based question, and handles them differently.

Upvotes track which users voted to prevent duplicates, and everything uses JWT tokens stored securely in cookies for authentication.
