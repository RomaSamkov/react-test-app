import useForm from '../../../shared/hooks/useForm';

import styles from './form-add-book.module.scss';

import { initialState } from './initialState';

const FormAddBook = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { title, author, favorite } = state;

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className={styles.group}>
        <label className={styles.label} htmlFor="">
          Title:
        </label>
        <input
          value={title}
          name="title"
          onChange={handleChange}
          className={styles.input}
          type="text"
          placeholder="Title of book"
        />
      </div>
      <div className={styles.group}>
        <label className={styles.label} htmlFor="">
          Author:
        </label>
        <input
          value={author}
          name="author"
          onChange={handleChange}
          className={styles.input}
          type="text"
          placeholder="Author of book"
        />
      </div>
      <div className={styles.group}>
        <label className={styles.label} htmlFor="">
          Favorite:
        </label>
        <input
          name="favorite"
          checked={favorite}
          onChange={handleChange}
          type="checkbox"
        />
      </div>
      <div className={styles.group}>
        <button type="submit" className={styles.btn}>
          Add Book
        </button>
      </div>
    </form>
  );
};

export default FormAddBook;
