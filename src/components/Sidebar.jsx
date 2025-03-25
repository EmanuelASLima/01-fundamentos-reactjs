import { PencilLine } from "phosphor-react";
import App from "../App";
import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img src="src/assets/2b.jpg" width={261} height={174} />
      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://avatars.githubusercontent.com/u/202536518?v=4"
        />
        <strong>Manel</strong>
        <span>Professor</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} /> Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
