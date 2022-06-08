import { ThumbsUp, Trash } from "phosphor-react";

import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/Baggio25.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Rodrigo Baggio</strong>
              <time title="06 de Junho as 16:41" dateTime="2022-06-06 16:41:20">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Excluir comentário">
              <Trash size={24}/>
            </button>
          </header>

          <p>Muito bom Dev, parabéns!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>          
        </footer>
      </div>
    </div>
  );
}
