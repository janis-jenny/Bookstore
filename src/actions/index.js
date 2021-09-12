const CREATEBOOK = (book) => ({
  type: 'CREATE_BOOK',
  payload: book,
});

const REMOVEBOOK = (book) => ({
  type: 'REMOVE_BOOK',
  payload: book,
});

export { CREATEBOOK, REMOVEBOOK };
