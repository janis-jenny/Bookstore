import Redux from 'redux';
import reducerBooks from './books';
import filterReducer from './filter';

const rootReducer = Redux.combineReducers({
  books: reducerBooks,
  filter: filterReducer,
});

export default rootReducer;
