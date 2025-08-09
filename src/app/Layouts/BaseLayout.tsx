import { Outlet } from "react-router-dom";
import { AuthProvider } from "../Providers/AuthProvider";

const BaseLayout: React.FC = () => {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
};
export default BaseLayout;
