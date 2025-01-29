// import axios from 'axios';

const API_URL =
  "https://my-json-server.typicode.com/shehwar-ahmad/greyball/products";

export const fetchProducts = async () => {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
};
