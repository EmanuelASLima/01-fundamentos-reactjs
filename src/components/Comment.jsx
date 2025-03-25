import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://avatars.githubusercontent.com/u/202536518?v=4" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Manel</strong>
              <time
                title="publicado em 25-03-2025 00:47"
                dateTime="25-03-2025 00:47"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar Comentario">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito Bom, só o pips</p>
        </div>
        <footer>
          <button>
            <ThumbsUp /> Show! <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
