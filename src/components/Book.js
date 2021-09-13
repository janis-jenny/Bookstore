import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import * as actions from '../actions/index';

const Book = ({ book: { id, title, category } }) => {
  const dispatch = useDispatch();

  const handleRemoveBook = (e) => {
    e.preventDefault();
    dispatch(actions.removeBookAction(id));
  };
  return (
    <tr key={id}>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td>
        <button
          type="submit"
          onClick={(event) => {
            handleRemoveBook(event);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  book: PropTypes.string.isRequired,
};

export default Book;
