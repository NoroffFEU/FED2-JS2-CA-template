import { API_AUTH_LOGIN } from "../constants";

export async function login(userData) {
  const body = JSON.stringify(userData)

  const response = await fetch(API_AUTH_LOGIN, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'post',
    body
  })

  if (response.ok) {
    const { accessToken: token, ...user } = (await response.json()).data;
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    return user
  }

  throw new Error("Auth Error: Could not login as " + email)
}
