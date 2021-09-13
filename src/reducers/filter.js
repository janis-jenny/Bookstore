import { CHANGE_FILTER } from '../actions/index';

const filterReducer = (state = 'All', action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return {
        filter: action.payload,
      };
    default:
      return state;
  }
};

export default filterReducer;
