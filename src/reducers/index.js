import { combineReducers } from 'redux';
import myvarsReducer from './myvarsReducer';

const rootReducer = combineReducers({
  myvars: myvarsReducer,
});

export default rootReducer;
