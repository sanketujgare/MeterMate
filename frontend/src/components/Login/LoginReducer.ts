import { Action, LoginState } from "./Login.types";
export const LoginFormReducer = (state: LoginState, action: Action) => {
  switch (action.type) {
    case "LoginStatus":
      return { ...state, isLoggedIn: action.payload.isLoggedIn };
    case "LoginFailed":
      return { ...state, error: action.payload.error };
  }
};
