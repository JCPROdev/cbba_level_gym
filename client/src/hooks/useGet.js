import { onMount } from "svelte";
import { getRequest } from "../utilities/getRequest";
import { writable } from "svelte/store";

export const useGet = (route) => {
  let data = writable(null);

  const getData = async () => {
    const res = await getRequest(route);
    data.set(res.data);
  }
  onMount(getData);

  return { data, getData };
}