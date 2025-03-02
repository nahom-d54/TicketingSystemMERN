import { useMutation } from "@tanstack/react-query";
import apiClient from "../lib/api-client";

export function useSignup() {
  return useMutation({
    mutationFn: (userData) => apiClient.post("/auth/signup", userData),
  });
}

export function useLogin() {
  return useMutation({
    mutationFn: (credentials) => apiClient.post("/auth/login", credentials),
  });
}
