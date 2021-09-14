import { CREATE_BOOK, REMOVE_BOOK, CHANGE_FILTER } from '../actions/index';

const reducerBooks = (state, action) => {
  const newBooks = [...state.books];
  switch (action.type) {
    case CREATE_BOOK:
      return {
        ...state,
        books: newBooks.concat(action.payload),
      };
    case REMOVE_BOOK:
      return {
        books: newBooks.filter((obj) => obj.id !== action.payload),
      };
    case CHANGE_FILTER:
      return {
        filter: action.payload,
        books: newBooks,
      };
    default:
      return state;
  }
};

export default reducerBooks;
