import { API_AUTH_KEY } from "../constants";

export async function getKey(name) {
  const response = await fetch(API_AUTH_KEY, {
    method: 'post',
    headers: {
      Authorization: `Bearer ${localStorage.token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name })
  })

  if (response.ok) {
    return (await response.json()).data
  }

  throw new Error("Auth Error: Could not get an API key")
}