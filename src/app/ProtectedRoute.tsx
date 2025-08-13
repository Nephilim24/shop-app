import { Navigate } from "react-router-dom";
import { useAuth } from "./providers/AuthProvider";

interface ProtectedRouteProps {
    element: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
    const { isAuth } = useAuth();

    if (!isAuth && isAuth) {
        return <Navigate to={'/login/auth'} />
    }

    return (
        element
    );
}

export default ProtectedRoute;