import { Outlet, useNavigate } from "react-router-dom";
import TabBar from "../../widgets/TabBar/TabBar";
import { useEffect } from "react";

const MainLayout: React.FC = () => {
  const navigate = useNavigate();
  useEffect(()=> {navigate('/menu')}, [navigate])
  return (
    <div className="wrapper main">
      <TabBar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
