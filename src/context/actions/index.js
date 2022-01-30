import { AUTH_LOGIN } from './auth';

export function auth_login(data) {
  return {
    type: AUTH_LOGIN,
    payload: data
  };
}