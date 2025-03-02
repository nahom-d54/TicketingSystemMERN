# Ticketing System

A role-based support ticketing system built with React, Vite, and Tailwind CSS. Users can create tickets while admins manage them using different dashboards.

## Project Structure

- **Frontend**
  - [src/App.jsx](src/App.jsx): Main application routing including protected and unprotected routes.
  - [src/components/AuthProvider.jsx](src/components/AuthProvider.jsx): Provides authentication context.
  - [src/components/TicketContext.jsx](src/components/TicketContext.jsx): Provides context for ticket management.
  - [src/components/ui](src/components/ui): UI components (Button, Card, Input, etc.).
  - [src/pages](src/pages): Page components for Home, Login, Signup, and Dashboards.
  - [src/hooks](src/hooks): Custom hooks for authentication and ticket operations.
  - [src/lib/api-client.js](src/lib/api-client.js): Axios instance with token interception.
  - [vite.config.js](vite.config.js): Vite configuration with alias support.
  - [tailwind.config.js](tailwind.config.js): Custom Tailwind CSS settings.

## Getting Started

1. **Install Dependencies:**  
   Run the following command in your project root:

   ```sh
   npm install
   ```

2. **Development Server:**  
   Start the Vite development server with:

   ```sh
   npm run dev
   ```

   Open [http://localhost:5173](http://localhost:5173) (or the port provided) to view the app.

3. **Build for Production:**  
   Build the optimized production bundle:

   ```sh
   npm run build
   ```

4. **Preview Production Build:**  
   Preview the build locally:
   ```sh
   npm run serve
   ```

## Features

- **Authentication:**  
  Managed in `AuthProvider` using custom hooks from `useAuth`.

- **Ticket Management:**  
  Tickets are created and updated via functions defined in `TicketContext` and hooked with React Query (`useTickets`, `useCreateTicket`, `useUpdateTicketStatus`) in `useTickets`.

- **Role-Based Routing:**  
  Routes are protected using `ProtectedRoute` and `UnProtectedRoute`.

## Environment

- **API Base URL:**  
  The API is configured in `api-client` with `baseURL` set to `http://localhost:5000/api`. Update accordingly if necessary.

## Contributing

Feel free to open issues or pull requests to improve the project.

## License

This project is licensed under the MIT License.
