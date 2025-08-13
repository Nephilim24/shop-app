import { Outlet } from "react-router-dom";
import TabBar from "../../widgets/TabBar/TabBar";

const MainLayout: React.FC = () => {
  return (
    <div className='wrapper main'>
      <TabBar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
