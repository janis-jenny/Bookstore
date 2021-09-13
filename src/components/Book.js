/* eslint-disable react/prop-types */
import React from 'react';
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

export default Book;
