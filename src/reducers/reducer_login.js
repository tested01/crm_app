import { LOGIN＿SUCCESS,
         SIGN_OUT
      } from '../actions';

export default function (state = null, action) {
  if (action) {
    switch (action.type) {
      case LOGIN＿SUCCESS:
        return action.payload;
      case SIGN_OUT:
        return action.payload;
      default:
        return {};
    }
  }
  return state;
}
