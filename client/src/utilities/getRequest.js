import { http } from "./http"
import { sendRequest } from "./sendRequest";

export const getRequest = (route) => {
  const res = getData(route).then(res => {
    if(res.status === 403) {
      console.log("Refrescando token");
      const refresh_token = document.cookie.replace("refresh_token=", "");
      let newToken;
      sendRequest("token", {
        token: refresh_token
      }).then(res => {
        newToken = res.data.access_token;
        localStorage.setItem("access_token", newToken);
      });
      return getData(route).then(res => res.json());
    }
    return res.json();
  });
  return res;
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