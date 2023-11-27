import { upsAlert } from "./alerts";
import { http } from "./http"

export const sendRequest = async (route, body, method = "POST") => {
  try {
    const access_token = localStorage.getItem("access_token");
    const res = await fetch(http + route, {
      method,
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": access_token ? `Bearer ${access_token}` : ""
      },
      body: body ? JSON.stringify(body) : undefined
    });
    if(res.ok) {
      const resJson = await res.json();
      return resJson;
    }
    return null;
  } catch (e) {
    upsAlert("Algo salió mal, intentalo de nuevo.");
  }
}