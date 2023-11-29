import { writable } from "svelte/store";

export let user = writable(null);
export let estado = writable(localStorage.getItem("refresh_token") ? "loading" : "unlogged");