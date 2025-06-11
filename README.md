# We-Chat - Real-time Chat Application

A modern real-time chat application built with Next.js 14, Stream Chat, and Clerk Authentication. Features both forum-style discussions and direct messaging capabilities.

## 🚀 Features

- **Authentication & User Management**
  - Secure user authentication via Clerk
  - User profiles with customizable avatars
  - Protected routes and API endpoints

- **Chat Capabilities**
  - Real-time messaging using Stream Chat
  - Public forum discussions
  - Direct messaging between users
  - Thread conversations
  - Channel/Forum categories:
    - Python
    - JavaScript
    - General Development
    - We-Chat Feedback

- **Modern UI/UX**
  - Responsive design using Tailwind CSS
  - Dark/Light mode support
  - Real-time typing indicators
  - Message threads and replies
  - User presence indicators

## 🛠️ Tech Stack

- **Frontend:**
  - Next.js 14 (React Framework)
  - Tailwind CSS (Styling)
  - Stream Chat React SDK
  - Lucide React (Icons)

- **Backend:**
  - Next.js API Routes
  - Stream Chat Server SDK
  - Clerk Authentication

- **Authentication:**
  - Clerk for user management
  - JWT tokens for Stream Chat

## 🏗️ Architecture

### Authentication Flow
1. Users sign up/login through Clerk
2. Upon authentication, a Stream Chat token is generated
3. Token is stored in Clerk's user metadata
4. Token is used for real-time chat authentication

### Chat Implementation
1. **Forums:**
   - Each forum has a unique channel
   - Channels are created with the forum slug
   - Users can join multiple forums

2. **Direct Messages:**
   - One-to-one messaging capabilities
   - Real-time message delivery
   - User presence detection

## 💻 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/we-chat.git

# Install dependencies
cd we-chat
npm install

# Set up environment variables
cp .env.example .env.local

# Add your credentials
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_secret_key

# Run the development server
npm run dev
```

## 🔧 Configuration

### Clerk Setup
1. Create a Clerk application
2. Add authentication credentials to `.env.local`
3. Configure Clerk webhooks (if needed)

### Stream Chat Setup
1. Create a Stream Chat application
2. Add API credentials to `.env.local`
3. Configure chat permissions and roles

## 📝 API Routes

- `/api/create` - Creates user tokens and initializes channels

## 📚 Project Structure

```
we-chat/
├── app/
│   ├── api/create
│   ├── chat/
│   ├── forum/[slug]
│   ├── forums/
│   └── layout.js
├── components/
│   ├── ChatForum.js
│   └── Navbar.js
└── public/
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.