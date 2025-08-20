import { ProfileWidget } from "../../entities/Profile";
import styles from "./styles.module.scss";

const TabBar: React.FC = () => {
  return (
    <aside className={styles.tabbar}>
      <ProfileWidget />
      <ul>
        <li></li>
      </ul>
    </aside>
  );
};

export default TabBar;
