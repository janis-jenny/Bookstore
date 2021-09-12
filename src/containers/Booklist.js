/* eslint-disable no-console */
import React from 'react';
import { useStore, useDispatch } from 'react-redux';
import Book from '../components/Book';
import * as actions from '../actions/index';

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
    dispatch(actions.REMOVEBOOK(bookDelete));
  };

  const booksHtml = booksList.map((book) => {
    const { id, title, category } = book;
    return (
      <Book
        key={id}
        id={id}
        title={title}
        category={category}
        clickhandler={handleRemoveBook}
        book={book}
      />
    );
  });

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
          {booksHtml}
        </tr>
      </tbody>
    </table>
  );
};

export default BookList;
