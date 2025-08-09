import { Outlet } from "react-router-dom";
import decor from "../../assets/icons/decor.svg";

const LoginLayout: React.FC = () => {
  return (
    <div className='wrapper login'>
      <img src={decor} loading='lazy' width={363} height={260} />
      <div className="divider"></div>
      <Outlet />
    </div>
  );
};

export default LoginLayout;
