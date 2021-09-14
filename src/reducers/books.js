import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

const firstState = [{
  id: Math.floor(Math.random() * 1000) + 1,
  title: 'Game of Thrones',
  category: 'Action',
},
{
  id: Math.floor(Math.random() * 1000) + 1,
  title: 'Dracula',
  category: 'Horror',
},
{
  id: Math.floor(Math.random() * 1000) + 1,
  title: 'The Old Guard',
  category: 'Sci-Fi',
}];

const reducerBooks = (state = firstState, action) => {
  const { type, payload: book } = action;
  const newBooks = [...state];
  switch (type) {
    case CREATE_BOOK:
      return {
        ...state,
        books: newBooks.concat(book),
      };
    case REMOVE_BOOK:
      return {
        books: newBooks.filter((obj) => obj.id !== book),
      };
      /*     case CHANGE_FILTER:
      return {
        filter: action.payload,
        books: newBooks,
      }; */
    default:
      return state;
  }
};

export default reducerBooks;
