import { USERINFO } from '../actions/actionType';

const INITIAL_STATE = {
  user: {
    name: '',
    email: '',
  }
}

function reducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case USERINFO:
      return {
          ...state,
          user: action.payload,
        };

    default:
      return state;
  }
}

export default reducer;
