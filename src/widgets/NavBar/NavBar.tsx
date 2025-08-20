import "./NavBar.scss";
import filterIcon from "../../assets/icons/filter.svg";

const NavBar: React.FC = () => {
  return (
    <nav className="nav">
      <h1>Меню</h1>
      <div>
        <img src={filterIcon} alt="" />
        Сортировать по:
      </div>
    </nav>
  );
};

export default NavBar;
