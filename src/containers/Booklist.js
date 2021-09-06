import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

const BookList = (props) => {
  const { books } = props;

  const bookHtml = books.map((book) => {
    const { id, title, category } = book;
    return (<Book key={id} id={id} title={title} category={category} />);
  });

  return (
    <table>
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
      <tr>
        {bookHtml}
      </tr>
    </table>
  );
};

const mapState = (state) => state;

export default connect(mapState, null)(BookList);

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
