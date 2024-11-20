# Node.js JWT Authentication Project

This is a basic Node.js project that implements authentication using **JSON Web Tokens (JWT)** and **MongoDB**.

---

## Features

- User sign-up, login, and logout functionality.
- JWT-based authentication with tokens stored in cookies.
- Middleware for checking user authentication and dynamic rendering.

---
## Folder Structure
- controllers/: Handles route logic.
- middleware/: Authentication and user-checking middleware.
- models/: Mongoose models for user data.
- public/: Static files (CSS, JS).
- views/: EJS templates for dynamic rendering.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- [MongoDB](https://www.mongodb.com/) set up locally or a connection string for a MongoDB database.

### Installation

1. Clone the repository:  
   ```bash
   git clone <repository-url>
   cd <repository-folder>
2. Install dependencies:
   ```bash
   npm install
3. Create a .env file in the root directory and add the following:
    ```bash
    SECRET_KEY=your_secret_key
    MONGO_URI=your_mongo_connection_string
4. Start the server:
   ```bash
   npm start
5. Open your browser and go to http://localhost:3000.
