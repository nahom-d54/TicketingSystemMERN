import React, { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthProvider";

function UnProtectedRoute() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!loading && user && user.role === "admin") {
      navigate("/admin/dashboard");
    } else if (!loading && user && user.role === "user") {
      navigate("/dashboard");
    }
  }, [loading, user, navigate]);

  return <Outlet />;
}

export default UnProtectedRoute;
