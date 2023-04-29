import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
   it('fetchProduct é uma função', () => {
    expect(typeof fetchProduct).toBe('function')
  });
  it('fetch é chamado ao executar fetchProduct', async  () => {
    await fetchProduct('MLB1405519561')
    expect(fetch).toHaveBeenCalled()
  });
  it('fetch é chamado com o endpoint correto ao executar fetchProduct', async () => {     
    const url = ('https://api.mercadolibre.com/items/MLB1405519561')
    await fetchProduct('MLB1405519561')
    expect(fetch).toHaveBeenCalledWith(url)
  });
  it('Verifica se estrutura de dados do retorno da função está correto ', async () => {
    expect(await fetchProduct('MLB1405519561')).toEqual(product)
  });
  it('Verifica se a função sem argumento retorna mensagem de erro', async () => {
    try {
      await fetchProduct();
    }
    catch (error) {
      expect(error.message).toEqual('ID não informado');
    }
  });
});