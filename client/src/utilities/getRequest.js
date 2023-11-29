import { getCookie } from "./getCookie";
import { http } from "./http"
import { sendRequest } from "./sendRequest";

export const getRequest = async (route) => {
  const res = await getData(route);
  if(res.status === 403) {
    const refresh_token = localStorage.getItem("refresh_token");
    let newToken;
    const tokenRes = await sendRequest("token", {
      token: refresh_token
    });
    newToken = tokenRes.data.access_token;
    localStorage.setItem("access_token", newToken);
    const res = await getData(route);
    return res.json();
  }
  return res.json();
}

const getData = (route) => {
  const access_token = localStorage.getItem("access_token");
  const res = fetch(http + route, {
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": access_token ? `Bearer ${access_token}` : ""
    }
  })
  return res;
}