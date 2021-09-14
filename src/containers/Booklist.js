import React, { useState } from 'react';
import { useStore, useDispatch } from 'react-redux';
import Book from '../components/Book';
import * as actions from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

const BookList = () => {
  const store = useStore();
  const { books } = store.getState();
  const dispatch = useDispatch();
  const [category, setCategory] = useState([]);

  const handleFilterChange = (e) => {
    setCategory(e.target.value);
    dispatch(actions.filterBookAction(e.target.value));
  };

  const filterBooksByCategory = () => {
    if (category === 'All') return books;
    return books.filter((book) => book.category === category);
  };

  const booksToDisplay = filterBooksByCategory();
  const booksHtml = booksToDisplay.map((book) => (
    <Book
      key={book.id}
      id={book.id}
      book={book}
    />
  ));

  return (
    <>
      <CategoryFilter callback={handleFilterChange} value={category} />
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {booksHtml}
        </tbody>
      </table>
    </>
  );
};

export default BookList;
