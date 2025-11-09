# FusionAI 

A full-stack AI-powered chat application built with the MERN stack and OpenAI API, featuring real-time conversations, thread history, and a modern user interface.

## Features

- **AI-Powered Conversations**: Integrate with OpenAI's API for intelligent responses
- **Thread History**: View and manage previous conversation threads
- **Real-time Chat Interface**: Smooth typing effects and interactive UI
- **Formatted Responses**: Properly formatted GPT replies with syntax highlighting
- **Responsive Design**: Material-UI components for a polished, mobile-friendly experience
- **Database Persistence**: Store and retrieve chat history using MongoDB
- **Loading States**: Visual feedback during API calls

## Tech Stack

**Frontend:**
- React.js
- Material-UI (MUI)
- JavaScript (ES6+)
- CSS3

**Backend:**
- Node.js
- Express.js
- MongoDB
- OpenAI API

##  Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or Atlas account)
- OpenAI API key

##  Installation

### 1. Clone the repository
```bash
git clone https://github.com/Omkarlaxmansurvase/FusionAi.git
cd FusionAi
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd Backend

# Install dependencies
npm install

# Create .env file (if not exists)
touch .env
```

Add the following to your `.env` file:
```env
OPENAI_API_KEY=your_openai_api_key_here
MONGODB_URL=your_mongodb_connection_string_here

```

### 3. Frontend Setup

```bash
# Navigate to frontend directory
cd Frontend

# Install dependencies
npm install
```

### 4. Run the Application

**Start Backend Server:**
```bash
# From Backend directory
npm start
# or
npm run dev
```

**Start Frontend:**
```bash
# From Frontend directory
npm run dev
```

The application should now be running on:
- Frontend: `http://localhost:3000`
- Backend: `http://localhost:5000`

## Project Structure

```
FUSIONAI/
├── Backend/
│   ├── models/
│   │   └── Thread.js           # MongoDB schema for chat threads
│   ├── routes/
│   │   └── chat.js             # Chat API endpoints
│   ├── utils/
│   │   └── OpenAi.js           # OpenAI utility functions
│   ├── node_modules/
│   ├── .env                    # Environment variables
│   ├── package-lock.json
│   ├── package.json
│   └── server.js               # Express server entry point
│
├── Frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/            # Static assets
│   │   ├── App.css            # Main app styles
│   │   ├── App.jsx            # Main app component
│   │   ├── Chat.css           # Chat component styles
│   │   ├── Chat.jsx           # Chat component
│   │   ├── ChatWindow.css     # Chat window styles
│   │   ├── ChatWindow.jsx     # Chat window component
│   │   ├── index.css          # Global styles
│   │   ├── main.jsx           # React entry point
│   │   ├── MyContext.jsx      # React Context for state management
│   │   ├── Sidebar.css        # Sidebar styles
│   │   └── Sidebar.jsx        # Sidebar component
│   ├── node_modules/
│   ├── .gitignore
│   └── eslint.config.js
│
└── README.md
```

## 🔌 API Endpoints

### Chat Routes
- `POST /api/chat` - Send a message and get AI response
- `GET /api/chat/history` - Retrieve chat history
- `POST /api/chat/new` - Start a new chat thread
- `GET /api/chat/threads` - Get all conversation threads

### Root Route
- `GET /api/test` - Test API connection

## Features Breakdown

### Completed Features 
1. **Setup & Explore OpenAI APIs** - Integration with OpenAI
2. **Using OpenAI with npm** - Package implementation
3. **Using OpenAI with API endpoints** - REST API setup
4. **Creating Models** - MongoDB schema design
5. **Setting up Utils** - Helper functions
6. **Connecting with Database** - MongoDB connection
7. **Setup Routes** - Express routing (root, chat)
8. **Frontend Setup** - React application initialization
9. **Building the Sidebar** - Navigation component
10. **Styling Sidebar** - UI polish with Material-UI
11. **Building ChatWindow** - Main chat interface
12. **Styling ChatWindow** - Chat UI design
13. **Get Reply for Prompt** - OpenAI integration
14. **Adding Loader** - Loading states
15. **Display Chats** - Message rendering
16. **Format GPT Reply** - Response formatting
17. **Add Typing Effect** - Smooth text animation
18. **Display Thread History** - Previous conversations

### In Progress 
- **Deployment** 

##  Environment Variables

Create a `.env` file in the server directory with:

```env
OPENAI_API_KEY=sk-...your-key-here
MONGODB_URL=mongodb://localhost:27017/fusionai
# or for MongoDB Atlas:
# MONGODB_URL=mongodb+srv://username:password@cluster.mongodb.net/fusionai
PORT=5000
NODE_ENV=development
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Author

**Omkar Laxman Survase**
- GitHub: [@Omkarlaxmansurvase](https://github.com/Omkarlaxmansurvase)

⭐ Star this repository if you find it helpful!
