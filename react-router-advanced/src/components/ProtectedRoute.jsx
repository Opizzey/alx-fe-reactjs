import { Navigate } from "react-router-dom";

function ProtectedRoute({ isAuth, children }) {
  return isAuth ? children : <Navigate to="/" />;
}
export default ProtectedRoute;
