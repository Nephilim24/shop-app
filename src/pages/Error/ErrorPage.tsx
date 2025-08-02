import { useNavigate } from "react-router-dom";
import "./ErrorPage.scss";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="error">
      <h1>Ошибка...</h1>
      <button onClick={() => navigate("/main")}>На главную</button>
    </div>
  );
};

export default ErrorPage;
