import { createContext, useContext } from "react";
import {
  useTickets,
  useCreateTicket,
  useUpdateTicketStatus,
} from "../hooks/useTickets";

export const TicketContext = createContext(undefined);

export function TicketProvider({ children }) {
  const { data: tickets = [], isLoading, error } = useTickets();
  const createTicketMutation = useCreateTicket();
  const updateTicketStatusMutation = useUpdateTicketStatus();

  const addTicket = async (title, description) => {
    await createTicketMutation.mutateAsync({
      title,
      description,
    });
  };

  const updateTicketStatus = async (id, status) => {
    await updateTicketStatusMutation.mutateAsync({ id, status });
  };

  const getUserTickets = (userId) => {
    console.log("tickets", tickets);
    return tickets?.tickets?.filter((ticket) => ticket.userId === userId);
  };

  return (
    <TicketContext.Provider
      value={{
        tickets,
        isLoading,
        error,
        addTicket,
        updateTicketStatus,
        getUserTickets,
      }}
    >
      {children}
    </TicketContext.Provider>
  );
}

export function useTicketContext() {
  const context = useContext(TicketContext);
  if (context === undefined) {
    throw new Error("useTicketContext must be used within a TicketProvider");
  }
  return context;
}
