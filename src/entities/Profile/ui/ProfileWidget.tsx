import styles from "./styles.module.scss";
import profileImg from "../../../assets/images/profile-Icon.png";
import menuIcon from "../../../assets/icons/menu-icon.svg";
import cartIcon from "../../../assets/icons/cart-icon.svg";
import profileIcon from "../../../assets/icons/profile-icon.svg";

interface LinkModel {
  name: string;
  icon: string;
}

const ProfileWidget: React.FC = () => {
  const links: LinkModel[] = [
    { name: "Меню", icon: menuIcon },
    { name: "Корзина", icon: cartIcon },
    { name: "Профиль", icon: profileIcon },
  ];

  return (
    <div className={styles.profile}>
      <img src={profileImg} alt='' />
      <h2>Антон Ларичев</h2>
      <p>alaricode@ya.ru</p>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <img src={link.icon} alt='' />
            <span>{link.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileWidget;
