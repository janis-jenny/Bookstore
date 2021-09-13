/* eslint-disable no-console */
import React from 'react';
import { useStore } from 'react-redux';
import Book from '../components/Book';

const BookList = () => {
  const store = useStore();
  const { books } = store.getState();

  console.log('STORE');
  console.log(store);
  console.log(books);

  const booksHtml = books.map((book) => {
    console.log('display!');
    console.log(book);
    return (
      <Book
        key={book.id}
        id={book.id}
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
        {booksHtml}
      </tbody>
    </table>
  );
};

export default BookList;
