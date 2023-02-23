import { useSelector, useDispatch } from 'react-redux';

import Container from './Container';
import FormAddBook from './FormAddBook';
import BookList from './BookList';

import { setFilter } from '../../redux/filter/filter-actions';
import { getFilter } from '../../redux/filter/filter-selectors';

import styles from './my-books.module.css';
import {
  useAddBookMutation,
  useGetBooksQuery,
  useRemoveBookMutation,
} from 'redux/books/booksApi';

const MyBooks = () => {
  const { data = [], isLoading, isError } = useGetBooksQuery();
  // eslint-disable-next-line
  const [addBook, addInfo] = useAddBookMutation();
  // eslint-disable-next-line
  const [removeBook, removeInfo] = useRemoveBookMutation();

  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const onAddBook = newBook => {
    addBook(newBook).unwrap();
  };

  const onRemoveBook = id => {
    removeBook(id).unwrap();
  };

  const onSetFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <div className={styles.books}>
      {isLoading && <p>...Loading Books</p>}
      {isError && <p>...Error load Books</p>}
      <Container title="Добавить книгу">
        <FormAddBook onSubmit={onAddBook} />
      </Container>
      <Container title="Список книг">
        <input
          onChange={onSetFilter}
          value={filter}
          name="filter"
          type="text"
          placeholder="Введите название "
        />
        <BookList books={data} removeBook={onRemoveBook} />
      </Container>
    </div>
  );
};

export default MyBooks;
