import { useTicketContext } from "./TicketContext";
import { Badge } from "./ui/Badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/Card";
import { formatDistanceToNow } from "date-fns";

export function TicketItem({ ticket, onStatusChange, isAdmin = false }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "open":
        return "highlight";
      case "in-progress":
        return "accent";
      case "resolved":
        return "default";
      case "closed":
        return "secondary";
      default:
        return "default";
    }
  };

  return (
    <Card className="mb-4">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{ticket.title}</CardTitle>
            <CardDescription>
              {isAdmin ? `Submitted by ${ticket.createdBy?.name}` : ""} •{" "}
              {formatDistanceToNow(new Date(ticket.createdAt), {
                addSuffix: true,
              })}
            </CardDescription>
          </div>
          <Badge variant={getStatusColor(ticket.status)} className="capitalize">
            {ticket.status.replace("-", " ")}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm">{ticket.description}</p>
      </CardContent>
      {isAdmin && onStatusChange && (
        <CardFooter className="flex justify-end gap-2 pt-2">
          <select
            className="text-xs rounded border p-1"
            value={ticket.status}
            onChange={(e) => onStatusChange(ticket._id, e.target.value)}
          >
            <option value="open">Open</option>
            <option value="in-progress">In Progress</option>
            <option value="resolved">Resolved</option>
            <option value="closed">Closed</option>
          </select>
        </CardFooter>
      )}
    </Card>
  );
}
