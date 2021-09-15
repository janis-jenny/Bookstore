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
  switch (type) {
    case CREATE_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return [...state].filter((obj) => obj.id !== book);
    default:
      return state;
  }
};

export default reducerBooks;
