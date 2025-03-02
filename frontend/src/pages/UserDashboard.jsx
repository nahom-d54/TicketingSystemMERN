"use client";

import { Navbar } from "../components/Navbar";
import { CreateTicketForm } from "../components/CreateTicketForm";
import { TicketItem } from "../components/TicketItem";
import { useAuth } from "../components/AuthProvider";
import { useTicketContext } from "../components/TicketContext";
import { useEffect, useState } from "react";

export default function UserDashboard() {
  const { tickets, isLoading, error, getUserTickets } = useTicketContext();
  const { user } = useAuth();
  const [userTickets, setUserTickets] = useState([]);

  useEffect(() => {
    if (user) {
      setUserTickets(getUserTickets(user.id));
    }
  }, [user, getUserTickets]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto p-4 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">My Tickets</h2>
            {tickets.length === 0 ? (
              <p className="text-muted-foreground">
                You haven't created any tickets yet.
              </p>
            ) : (
              <div>
                {tickets?.tickets?.map((ticket) => (
                  <TicketItem key={ticket.id} ticket={ticket} />
                ))}
              </div>
            )}
          </div>
          <div>
            <CreateTicketForm />
          </div>
        </div>
      </main>
    </div>
  );
}
