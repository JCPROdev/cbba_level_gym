import { upsAlert } from "./alerts";
import { http } from "./http"

export const sendRequest = async (route, body, method = "POST") => {
  try {
    const res = await fetch(http + route, {
      method,
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
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