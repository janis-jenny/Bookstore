import React, { useState } from 'react';
import { useStore, useDispatch } from 'react-redux';
import Book from '../components/Book';
import * as actions from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

const BookList = () => {
  const store = useStore();
  const { books } = store.getState();
  const dispatch = useDispatch();
  const [category, setCategory] = useState('All');

  const handleFilterChange = (e) => {
    setCategory(e.target.value);
    dispatch(actions.filterBookAction(e.target.value));
  };

  const booksFilter = () => {
    let list;
    if (category === 'All') {
      list = books;
    } else {
      list = books.filter((book) => book.category === category);
    }
    return list;
  };

  return (
    <div>
      <CategoryFilter callback={handleFilterChange} value={category} />
      <div>
        {booksFilter().map((book) => (
          <Book
            key={book.id}
            id={book.id}
            book={book}
          />
        ))}
      </div>
    </div>
  );
};

export default BookList;
