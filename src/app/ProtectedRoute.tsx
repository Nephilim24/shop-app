import { Navigate } from "react-router-dom";
import { useAuth } from "./Providers/AuthProvider";

interface ProtectedRouteProps {
  element: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const { isAuth } = useAuth();
  if (!isAuth) {
    return <Navigate to={"/login/auth"} />;
  } else {
  }
  return 
  (
    element
  );
};

export default ProtectedRoute;
