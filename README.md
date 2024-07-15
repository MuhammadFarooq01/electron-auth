# Electron-Auth

Electron-Auth is a learning project that demonstrates how to build an Electron application with authentication features. The current version is a static app where you can log in using `admin@gmail.com` and the password `admin`. The app is built using Electron, ReactJS, and Tailwind CSS. In the future, I will add a backend using Express.js and MongoDB.

## Features

- **Electron**: Desktop application framework
- **ReactJS**: Frontend framework
- **Tailwind CSS**: CSS framework for styling
- **Static Authentication**: Log in with hardcoded credentials
- **Future Backend**: Will integrate Express.js and MongoDB for user authentication

## Folder Structure

```
electron-auth/
├── renderer/       # React app folder
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── ...
├── main.js         # Electron main process file
├── package.json
└── ...
```

## Getting Started

### Prerequisites

- Node.js installed on your system
- npm or yarn as your package manager

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/electron-auth.git
   cd electron-auth
   ```

2. **Install dependencies for the Electron app**:

   ```bash
   npm install
   ```

3. **Navigate to the renderer folder and install dependencies for the React app**:

   ```bash
   cd renderer
   npm install
   ```

4. **Return to the root directory**:

   ```bash
   cd ..
   ```

5. **Start the React development server**:

   ```bash
   cd renderer
   npm run dev
   ```

6. **In a new terminal, start the Electron app**:

   ```bash
   npx electronmon .
   ```

## Future Enhancements

- **Backend Integration**: Plan to integrate a backend using Express.js and MongoDB to handle user authentication
- **Enhanced Features**: More features will be added as I learn and improve the app
