import { Navbar } from "../components/Navbar";
import { TicketItem } from "../components/TicketItem";
import { useTicketContext } from "../components/TicketContext";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";

export default function AdminDashboard() {
  const { tickets, isLoading, error, updateTicketStatus } = useTicketContext();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto p-4 md:p-6">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {tickets.ticketStatus.map((status, index) => (
            <Card key={index}>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">
                  {status._id}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {status.count}
                  <Badge
                    variant={
                      status._id === "Open"
                        ? "highlight"
                        : status._id === "In Progress"
                        ? "accent"
                        : status._id === "Resolved"
                        ? "default"
                        : "secondary"
                    }
                    className="ml-2"
                  >
                    {status.status}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4">All Tickets</h2>
        {tickets.length === 0 ? (
          <p className="text-muted-foreground">No tickets found.</p>
        ) : (
          <div className="space-y-4">
            {tickets.tickets.map((ticket) => (
              <TicketItem
                key={ticket.id}
                ticket={ticket}
                onStatusChange={updateTicketStatus}
                isAdmin={true}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
