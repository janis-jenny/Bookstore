/* eslint-disable no-console */
const CREATEBOOK = 'CREATE_BOOK';
const REMOVEBOOK = 'REMOVE_BOOK';

const reducerBooks = (state, action) => {
  console.log('AQUI');
  console.log(action.type);
  console.log(action.payload);
  switch (action.type) {
    case CREATEBOOK:
      return { books: [...state.books, action.payload] };
    case REMOVEBOOK:
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1, state.length),
      ];
    default:
      return state;
  }
};

export default reducerBooks;
