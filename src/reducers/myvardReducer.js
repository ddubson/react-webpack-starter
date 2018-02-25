import UPDATE_MY_VAR from '../constants/ActionTypes';

const initialState = {
  myVar: 'Hello World!',
};

export default function myvarsReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_MY_VAR: {
      return {
        ...state,
        myVar: 'Hello Again World!',
      };
    }
    default: {
      return state;
    }
  }
}
