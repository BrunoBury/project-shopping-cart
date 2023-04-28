import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import { showLoading, hideLoading } from './loading';

const fetchApi = async () => {
  try {
    showLoading();
    const productsEl = document.querySelector('.products');
    const productsApi = await fetchProductsList('computador');
    productsApi.forEach((element) => {
      productsEl.appendChild(createProductElement(element));
    });
  } catch (error) {
    console.error(error);
  } finally {
    hideLoading();
  }
};

document.addEventListener('DOMContentLoaded', fetchApi());
document.querySelector('.cep-button').addEventListener('click', searchCep);
