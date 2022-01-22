import { writable } from 'svelte/store';
const products = writable([]);
const modal = writable('none');
const isLoading = writable(false);

export {products, modal, isLoading};