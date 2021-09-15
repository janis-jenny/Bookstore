import { combineReducers } from 'redux';
import reducerBooks from './books';
import filterReducer from './filter';

const rootReducer = combineReducers({
  filter: filterReducer,
  books: reducerBooks,
});

export default rootReducer;
