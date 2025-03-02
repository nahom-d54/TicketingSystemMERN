import { useAuth } from "./AuthProvider";
import { Button } from "./ui/Button";
import { Link } from "react-router-dom";

export function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-secondary text-secondary-foreground p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to={user?.role === "admin" ? "/admin/dashboard" : "/dashboard"}
          className="text-xl font-bold"
        >
          Ticketing System
        </Link>
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <span className="text-sm">
                Welcome, {user.name} ({user.role})
              </span>
              <Button variant="highlight" size="sm" onClick={logout}>
                Logout
              </Button>
            </>
          ) : (
            <div className="flex gap-2">
              <Button variant="highlight" size="sm" asChild>
                <Link to="/login">Login</Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link to="/signup">Signup</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
