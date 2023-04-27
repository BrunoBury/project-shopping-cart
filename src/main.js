import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);
const productsEL = document.querySelector('.products');

const productsApi = await fetchProductsList('computador');
productsApi.forEach((element) => {
  productsEL.appendChild(createProductElement(element));
});
