import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import { showLoading, hideLoading, errorLoading } from './loading';

const fetchApiList = async () => {
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

// com os dados de fetchProduct, criar o elemento com a função creatCartProductElement
// adicionar esse element como filho da class = cart__products

document.addEventListener('DOMContentLoaded', fetchApiList());
document.querySelector('.cep-button').addEventListener('click', searchCep);
