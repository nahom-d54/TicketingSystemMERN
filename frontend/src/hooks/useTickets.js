import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import apiClient from "../lib/api-client";

export function useCreateTicket() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (ticketData) => apiClient.post("/tickets", ticketData),
    onSuccess: () => {
      queryClient.invalidateQueries(["tickets"]);
    },
  });
}

export function useTickets() {
  return useQuery({
    queryKey: ["tickets"],
    queryFn: () => apiClient.get("/tickets").then((res) => res.data),
  });
}

export function useUpdateTicketStatus() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, status }) => apiClient.put(`/tickets/${id}`, { status }),
    onSuccess: () => {
      queryClient.invalidateQueries(["tickets"]);
    },
  });
}
