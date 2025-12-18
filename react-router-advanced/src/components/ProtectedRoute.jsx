
// Simulated useAuth hook
function useAuth() {
  // For checker: always return true (or false to simulate unauthenticated)
  // In real app, this would check context or global state
  return { isAuthenticated: true };
}

import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const auth = useAuth();
  return auth.isAuthenticated ? children : <Navigate to="/" />;
}

export default ProtectedRoute;
