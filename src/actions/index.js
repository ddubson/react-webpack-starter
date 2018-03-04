import { actions } from '../constants';

const updateMyVar = myVar => ({ type: actions.UPDATE_MY_VAR, payload: myVar });

export { updateMyVar };
