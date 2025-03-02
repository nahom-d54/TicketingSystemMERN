# Ticketing System

A role-based support ticketing system divided into two main parts: the [Backend](backend/README.md) and the [Frontend](frontend/README.md).

## Project Structure

- **backend/**  
  Contains the Node.js/Express server, Mongoose models, controllers, routes, and database configuration.

  - [server.js](backend/server.js) – Starts the backend server.
  - [models/](backend/models) – Contains the Mongoose models for tickets and users.
  - [controllers/](backend/controllers) – API logic for handling authentication and tickets.
  - [routes/](backend/routes) – API endpoint definitions for auth and tickets.

- **frontend/**  
  Contains the React application set up with Vite and styled with Tailwind CSS.
  - [src/App.jsx](frontend/src/App.jsx) – Main routes and entry point for the application.
  - [src/components/](frontend/src/components) – Contains UI components, authentication, ticket management, and routing components.
  - [pages/](frontend/src/pages) – Defines the pages such as Home, Login, Signup, UserDashboard, and AdminDashboard.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14+ recommended)
- [MongoDB](https://www.mongodb.com/) running locally or remotely

### Installation

1. **Clone the Repository:**

   ```sh
   git clone https://your-repository-url.git
   ```

2. **Backend Setup:**

   ```sh
   cd ticketing-system/backend
   npm install
   cp .env.example .env
   # Update .env with your configuration values if necessary
   ```

3. **Frontend Setup:**

   ```sh
   cd ticketing-system/frontend
   npm install
   ```

### Running the Application

- **Start the Backend Server**

  From the backend directory:

  ```sh
  npm run dev
  ```

  This will start the server at [http://localhost:5000](http://localhost:5000).

- **Start the Frontend Application**

  From the frontend directory:

  ```sh
  npm run dev
  ```

  This starts the Vite development server (typically at [http://localhost:5173](http://localhost:5173)).

## Seeding the Database

To populate the database with demo users, run the seeder in the backend:

```sh
node backend/seeders/userSeeder.js
```

## Environment Variables

- **Backend**: See .env.example
- **Frontend**: Create a `.env` file if needed (e.g., to override the default API URL)

## License

This project is licensed under the MIT License.
