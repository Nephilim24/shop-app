import styles from "./styles.module.scss";
import menuIcon from "../../../assets/icons/menu-icon.svg";
import cartIcon from "../../../assets/icons/cart-icon.svg";
import profileIcon from "../../../assets/icons/profile-icon.svg";
import quitIcon from "../../../assets/icons/quit.svg";
import type { LinkModel } from "../../../shared/linkModel";
import { NavLink } from "react-router-dom";

const ProfileWidget: React.FC = () => {
  const links: LinkModel[] = [
    { name: "Меню", img: menuIcon, to: "/" },
    { name: "Корзина", img: cartIcon, to: "/" },
    { name: "Профиль", img: profileIcon, to: "/" },
  ];

  return (
    <div className={styles.profile}>
      <div>
        <img src="" alt="" />
      </div>
      <p>Антон Ларичев</p>
      <span>alaricode@ya.ru</span>
      <ul>
        {links.map((link) => (
          <li key={link.to}>
            <NavLink to={link.to}>
              <img src={link.img} alt="" />
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <button>
        <img src={quitIcon} alt="" />
        Выйти
      </button>
    </div>
  );
};

export default ProfileWidget;
