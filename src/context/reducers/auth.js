import { AUTH_LOGIN } from '../actions/auth';

const authReducer = (state = authInitialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return { 
        ...state,
        user: action.payload 
      };
    default:
      return state;
  }
}

export const authInitialState = {
  user: {
    id: 'test',
    pw: '234',
    realName: 'EricLiu'
  }
}

export default authReducer