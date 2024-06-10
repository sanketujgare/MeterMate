export interface LoginProps {}

export interface LoginInput {
  username: string;
  password: string;
}
export interface LoginState {
  isLoggedIn: boolean;
  error: string | null;
}

export type Action =
  | { type: "LoginStatus"; payload: { isLoggedIn: boolean } }
  | { type: "LoginFailed"; payload: { error: string } };
