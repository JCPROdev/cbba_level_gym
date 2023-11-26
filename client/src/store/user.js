import { writable } from "svelte/store";

export let user = writable(null);
export let accessToken = writable(null);