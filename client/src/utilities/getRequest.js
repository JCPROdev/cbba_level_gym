import { http } from "./http"

export const getRequest = (route) => {
  return fetch(http + route).then(res => res.json());
}