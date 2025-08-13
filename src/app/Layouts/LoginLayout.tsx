import { Outlet } from "react-router-dom";
import decor from '../../assets/images/decor.svg';
const LoginLayout: React.FC = () => {
    return (
        <div className="wrapper login">
            <img src={decor} alt={decor} loading="lazy" width={364} height={260} />
            <div className="divider"></div>
            <Outlet />
        </div>
    );
}

export default LoginLayout;