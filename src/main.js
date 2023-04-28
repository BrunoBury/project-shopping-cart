import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import { showLoading, hideLoading, errorLoading } from './loading';

const fetchApi = async () => {
  try {
    showLoading();
    const productsEl = document.querySelector('.products');
    const productsApi = await fetchProductsList('computador');
    productsApi.forEach((element) => {
      productsEl.appendChild(createProductElement(element));
    });
  } catch (error) {
    errorLoading('Algum erro ocorreu, recarregue a página e tente novamente');
  } finally {
    hideLoading();
  }
};

document.addEventListener('DOMContentLoaded', fetchApi());
document.querySelector('.cep-button').addEventListener('click', searchCep);
