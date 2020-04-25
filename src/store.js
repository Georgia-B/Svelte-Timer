import { writable } from "svelte/store";

export const finished = writable(false);
export const minuteInput = writable(null);
export const secondInput = writable(null);

