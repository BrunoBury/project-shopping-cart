import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProduct, fetchProductsList } from './helpers/fetchFunctions';
import { createCartProductElement, createProductElement } from './helpers/shopFunctions';
import { showLoading, hideLoading, errorLoading } from './loading';
import { getSavedCartIDs } from './helpers/cartFunctions';

const fetchApiList = async () => {
  try {
    showLoading();
    const productsEl = document.querySelector('.products');
    const productsApi = await fetchProductsList('computador');
    productsApi.forEach((element) => {
      productsEl.appendChild(createProductElement(element));
    });
    const savedLoc = getSavedCartIDs();
    const getOl = document.querySelector('.cart__products');
    const productStorage = await Promise.all(savedLoc.map((id) => fetchProduct(id)));
    productStorage.forEach((element) => {
      getOl.appendChild(createCartProductElement(element));
    });
  } catch (error) {
    errorLoading('Algum erro ocorreu, recarregue a página e tente novamente');
  } finally {
    hideLoading();
  }
};

document.addEventListener('DOMContentLoaded', fetchApiList());
document.querySelector('.cep-button').addEventListener('click', searchCep);
