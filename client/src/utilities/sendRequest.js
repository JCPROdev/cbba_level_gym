import { upsAlert } from "./alerts";
import { http } from "./http"

export const sendRequest = async (route, body, method = "POST") => {
  try {
    let res;
    res = await sendData(route, body, method);
    if(res.status === 403) {
      const refresh_token = document.cookie.replace("refresh_token=", "");
      let newToken;
      const tokenRes = await sendRequest("token", {
        token: refresh_token
      });
      newToken = tokenRes.data.access_token;
      localStorage.setItem("access_token", newToken);
      res = await sendData(route, body, method);
    }
    if(res.ok) {
      const resJson = await res.json();
      return resJson;
    }
    return null;
  } catch (e) {
    upsAlert("Algo salió mal, intentalo de nuevo.");
  }
}

const sendData = (route, body, method = "POST") => {
  const access_token = localStorage.getItem("access_token");
  const res = fetch(http + route, {
    method,
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": access_token ? `Bearer ${access_token}` : ""
    },
    body: body ? JSON.stringify(body) : undefined
  });
  return res;
}