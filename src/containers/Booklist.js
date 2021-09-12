/* eslint-disable no-console */
import React from 'react';
import { useStore, useDispatch } from 'react-redux';
import Book from '../components/Book';
import REMOVE_BOOK from '../reducers/books';

const BookList = () => {
  const store = useStore();
  const dispatch = useDispatch();
  const { books } = store.getState();
  const booksList = books;
  console.log('STORE');
  console.log(books);
  console.log(booksList);

  const handleRemoveBook = (book) => {
    const bookDelete = books.find((bookDel) => book.id === bookDel.id);
    dispatch(REMOVE_BOOK(bookDelete));
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
          {booksList.map((book) => (
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

export default BookList;
