import Container from './Container';
import FormAddBook from './FormAddBook';
import BookList from './BookList';

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

  const onAddBook = newBook => {
    addBook(newBook).unwrap();
  };

  const onRemoveBook = id => {
    removeBook(id).unwrap();
  };

  return (
    <div className={styles.books}>
      {isLoading && <p>...Loading Books</p>}
      {isError && <p>...Error load Books</p>}
      <Container title="Добавить книгу">
        <FormAddBook onSubmit={onAddBook} />
      </Container>
      <Container title="Список книг">
        <BookList books={data} removeBook={onRemoveBook} />
      </Container>
    </div>
  );
};

export default MyBooks;
