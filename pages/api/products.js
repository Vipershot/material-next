// api/products.js

import axios from "axios";

export default async function handler(req, res) {
  // Manejo de la lógica de la API
  const {data} = await axios(`https://fakestoreapi.com`);
  console.log(req);
  return {data}
}
