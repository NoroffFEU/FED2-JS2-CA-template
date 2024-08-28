import { API_AUTH_REGISTER } from "../constants";

export async function register(userData) {
  const body = JSON.stringify(userData)

  const response = await fetch(API_AUTH_REGISTER, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'post',
    body
  })

  if (response.ok) {
    return await response.json()
  }

  throw new Error("Auth Error: Could not register account");
}
