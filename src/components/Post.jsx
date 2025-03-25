import styles from "./Post.module.css";
import { Comment } from "./Comment";
export default function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/202536518?v=4"
          />
          <div className={styles.authorInfo}>
            <strong>Manel</strong>
            <span>Professor</span>
          </div>
        </div>

        <time title="publicado em 25-03-2025 00:47" dateTime="25-03-2025 00:47">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>
          <a href="#">Possas crer!</a>
        </p>
        <p>
          <a href="#">Vai dar certo meu chapa!</a>
        </p>
        <p>
          <a href="#">Tamo Junto!!!</a>{" "}
          <a href="#">Clique aqui para o nosso site</a> <a href="#">#github</a>{" "}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Comentário</strong>
        <textarea placeholder="Comente aqui!" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
