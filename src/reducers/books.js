import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

const reducerBooks = (state, action) => {
  const newBooks = [...state.books];
  switch (action.type) {
    case CREATE_BOOK:
      return { ...state, books: newBooks.concat(action.payload) };
    case REMOVE_BOOK:
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1, state.length),
      ];
    default:
      return state;
  }
};

export default reducerBooks;
