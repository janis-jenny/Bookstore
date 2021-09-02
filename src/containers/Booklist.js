/* import { connect } from 'react-redux';
import PropTypes from 'prop-types'; */
import Book from '../components/Book';

const Booklist = (props) => {
  const { books } = props;

  const bookHtml = books.map((book) => {
    const { id, title, category } = book;
    return (<Book key={id} id={id} title={title} category={category} />);
  });

  return (
    <table>
      <tr>
        <th>Id</th>
        <th>Tile</th>
        <th>Category</th>
      </tr>
      <tr>
        {bookHtml}
      </tr>
    </table>
  );
};
