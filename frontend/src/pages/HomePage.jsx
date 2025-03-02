import { Button } from "../components/ui/Button"
import { Link } from "react-router-dom"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to the Ticketing System</h1>
        <p className="text-xl mb-8 max-w-2xl">
          A role-based support ticketing system where users can create tickets and admins can manage them.
        </p>
        <div className="flex gap-4">
          <Button asChild size="lg">
            <Link to="/login">Login</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/signup">Sign Up</Link>
          </Button>
        </div>
      </main>
    </div>
  )
}

