# Ticketing System Backend

This backend is built using Node.js and Mongoose to manage data for the Ticketing System application.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your system
- [MongoDB](https://www.mongodb.com/) installed and running (default connection string: `mongodb://localhost:27017/ticketing-system`)
- npm package manager

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://your-repository-url.git
   ```

2. **Navigate to the Backend Directory:**

   ```bash
   cd ticketing-system/backend
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

## Configuration

The application connects to MongoDB using the connection string in the seeder and other configuration files. If your MongoDB instance is running on a different host or port, update the connection string in the relevant files (e.g., in userSeeder.js).

## Seeding the Database

A seeder is provided to populate the database with default user accounts. To run the seeder:

```bash
node seeders/userSeeder.js
```

This will create the following accounts:

- **John Doe**

  - Email: `user@example.com`
  - Role: `user`
  - Password: `password`

- **Admin**
  - Email: `admin@example.com`
  - Role: `admin`
  - Password: `password`

The seeder uses a transaction to ensure data integrity during the insert operation.

## Running the Application

To start the backend server, run:

```bash
npm start
```

Ensure that your MongoDB instance is running before starting the server.

## Project Structure

- **models/**  
  Contains the Mongoose models for the application.

- **seeders/**  
  Scripts to seed the database with initial data.

- **routes/**  
  API endpoint definitions.

- **controllers/**  
  Application logic for handling API requests.

- **config/** (optional)  
  Configuration files for the application.

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes.
4. Submit a pull request.
