import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import REMOVE_BOOK from '../reducers/books';

const BookList = (props) => {
  const { books, removebook } = props;

  const handleRemoveBook = (book) => {
    const bookDelete = books.find((bookDel) => book.id === bookDel.id);
    removebook(bookDelete);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {books.map((book) => (
            <Book
              key={book.id}
              book={book}
              clickhandler={handleRemoveBook}
            />
          )) }
        </tr>
      </tbody>
    </table>
  );
};

const mapState = (state) => state;
const mapDispatch = (dispatch) => ({
  removebook: (book) => dispatch(REMOVE_BOOK(book)),
});

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  removebook: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(BookList);
