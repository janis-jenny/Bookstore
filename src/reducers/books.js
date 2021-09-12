const CREATEBOOK = 'CREATE_BOOK';
const REMOVEBOOK = 'REMOVE_BOOK';

const reducerBooks = (state, action) => {
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
