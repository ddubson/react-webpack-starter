import update from 'immutability-helper';
import { actions } from '../constants';

const initialState = () => ({
  myVar: 'Hello World!',
});

export default function myvarsReducer(state = initialState(), action) {
  switch (action.type) {
    case actions.UPDATE_MY_VAR: {
      return update(state, { myVar: { $set: 'Hello Again World!' } });
    }
    default: {
      return state;
    }
  }
}
