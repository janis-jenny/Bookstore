import { createBook, removeBook } from '../actions/index';

const reducerBooks = (state, action) => {
  switch (action.type) {
    case createBook:
      return { books: [...state.books, action.payload] };
    case removeBook:
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1, state.length),
      ];
    default:
      return state;
  }
};

export default reducerBooks;
