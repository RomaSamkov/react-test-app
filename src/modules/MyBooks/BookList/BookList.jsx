import styles from './book-list.module.scss';

const BookList = ({ books, removeBook }) => {
  const elements = books.map(({ id, title, author }) => (
    <li key={id} className={styles.item}>
      <div>
        Title :<span className={styles.itemText}> "{title}".</span>
        Author: <span className={styles.itemText}> {author}.</span>
      </div>

      <button
        type="button"
        className={styles.btn}
        onClick={() => removeBook(id)}
      >
        X
      </button>
    </li>
  ));

  return (
    <ol type="1" className={styles.list}>
      {elements}
    </ol>
  );
};

export default BookList;
