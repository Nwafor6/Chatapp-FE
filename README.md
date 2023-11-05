---

# Chat Application Frontend

This is a simple chat application frontend developed using React.js, providing. The aim of this project is not to focus on an ATTRACTIVE UI but to implement a complete chat system functionalities. which enables users to register, log in, add friends, create private chats, and exchange real-time messages seamlessly.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js:** The application runs on Node.js. If you haven't installed it yet, you can download it from [here](https://nodejs.org/).
- **Chat Application Backend:** Ensure the backend server of the Chat Application is up and running. You can find the backend code and setup instructions in the [Chat Application Backend Repository](https://github.com/Nwafor6/Chatapp-BE.git).

## Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Nwafor6/Chatapp-FE.git
   cd <project-folder>
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Set Environment Variables:**
   If your frontend application communicates with the backend, make sure to set the appropriate backend API endpoint as an environment variable in your `.env` file.

4. **Start the Application:**
   ```bash
   npm start
   ```

## Features

- **User Authentication:** Users can register and log in securely.
- **User Interface:** Intuitive and responsive UI for seamless user experience.
- **Friend Management:** Users can add friends and view their friends list.
- **Chat Interface:** Interactive chat interface for exchanging real-time messages.
- **Real-time Messaging:** Messages are delivered in real-time using Socket.io, providing a seamless chat experience.
- **User Profile:** Users can view and edit their profile information.

## Folder Structure

The React.js frontend application follows a standard folder structure:

- **`public/`**: Contains the HTML file and other assets required for the application.
- **`src/`**: Contains the React components, styles, and other frontend-related files.
  - **`components/`**: Reusable React components used in the application.
  - **`context/`**: Context providers for managing application state.
  - **`styles/`**: CSS or SCSS files for styling the components.
  - **`services/`**: Services for handling API requests and Socket.io connections.
  - **`utils/`**: Utility functions or constants used throughout the application.

## Technologies Used

- **React.js:** JavaScript library for building user interfaces.
- **React Router:** Library for handling navigation in React applications.
- **Socket.io Client:** Client-side library for Socket.io to enable real-time communication with the server.

## Fullstack Set repo
- [Chat Application Backend Repository](https://github.com/Nwafor6/Chatapp-BE.git)
-[Chat Application Frontend Repository](https://github.com/Nwafor6/Chatapp-FE.git)
-[Chat Application Socket.io Repository](https://github.com/Nwafor6/Chatapp-Socket-io.git)
---
