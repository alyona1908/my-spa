/* eslint-disable array-callback-return */
import { tableData } from './item';
import { ADD_USER, UPDATE_USER, DELETE_USER } from './actions/actions';

// eslint-disable-next-line import/prefer-default-export
export const tableReducer = (state = tableData, action) => {
  switch (action.type) {
    case ADD_USER: {
      const item = action.payload;
      return [...state, item];
    }
    case UPDATE_USER: {
      console.log('reduser');
      const {
        id,
      } = action.payload;
      return state.map((item) => {
        // eslint-disable-next-line eqeqeq
        if (item.id == id) {
          return action.payload;
        }
        return item;
      });
    }
    case DELETE_USER: {
      const id = action.payload;
      return [...state.filter((item) => item.id !== id)];
    }
    // eslint-disable-next-line no-fallthrough
    default:
      return state;
  }
};
