import { ThumbsUp, Trash } from "phosphor-react";

import { Avatar } from "./Avatar";

import styles from "./Comment.module.css";

export function Comment({content, onDeleteComment}) {

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/diego3g.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Rodrigo Baggio</strong>
              <time title="06 de Junho as 16:41" dateTime="2022-06-06 16:41:20">
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Excluir comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
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
