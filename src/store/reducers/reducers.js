import { combineReducers } from 'redux';
import { tableReducer } from '../table-reducer';

// eslint-disable-next-line import/prefer-default-export
export const rootReducer = combineReducers({
  table: tableReducer,
});
