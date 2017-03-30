
export const LOGIN＿SUCCESS = 'LOGIN＿SUCCESS';
export const SIGN_OUT = 'SIGN_OUT';

export function loginSuccess(success = false, xAuth) {
  // loginSuccess is an ActionCreator, it needs
  // to return an action, an object with a 'type' property

  return {
    type: LOGIN＿SUCCESS,
    payload: {
      success,
      xAuth
    }
  };
}


export function signOut(success = false, xAuth) {
  // loginSuccess is an ActionCreator, it needs
  // to return an action, an object with a 'type' property

  return {
    type: SIGN_OUT,
    payload: {
      success: false,
      xAuth
    }
  };
}
