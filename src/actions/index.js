export const CREATE_BOOK = 'CREATE_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';
export const CHANGE_FILTER = 'CHANGE_FILTER';

const createBookAction = (book) => ({
  type: CREATE_BOOK,
  payload: book,
});

const removeBookAction = (book) => ({
  type: REMOVE_BOOK,
  payload: book,
});

const filterBookAction = (book) => ({
  type: CHANGE_FILTER,
  payload: book,
});

export { createBookAction, removeBookAction, filterBookAction };
