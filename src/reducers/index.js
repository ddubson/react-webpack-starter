import { combineReducers } from 'redux';
import myvarsReducer from './myvardReducer';

const rootReducer = combineReducers({
  myvars: myvarsReducer,
});

export default rootReducer;
