export const CREATE_BOOK = 'CREATE_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';

const createBookAction = (book) => ({
  type: CREATE_BOOK,
  payload: book,
});

const removeBookAction = (book) => ({
  type: REMOVE_BOOK,
  payload: book,
});

export { createBookAction, removeBookAction };
