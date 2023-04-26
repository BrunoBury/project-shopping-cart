import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';
// jest.mock('node-fetch')
// implemente seus testes aqui
describe('Teste a função fetchProductsList', () => {
  it('fetchProductsList é uma função', () => {
    expect(typeof fetchProductsList).toBe('function')
  });
  it('fetch é chamado ao executar fetchProductsList', async  () => {
    expect(await fetchProductsList('computador')).not.toThrow()
  });
  it('fetch é chamado com o endpoint correto ao executar fetchProductsList', async () => {     
    const url = ('https://api.mercadolibre.com/sites/MLB/search?q=computador')
    expect(fetch).toHaveBeenCalledWith(url) 
  });
  it('Verifica se estrutura de dados do retorno da função está correto ', async () => {
    expect(await fetchProductsList('computador')).toEqual(computadorSearch)
  });
  it('Verifica se a função sem argumento retorna mensagem de erro', async () => {
    expect(await fetchProductsList()).toThrow('Termo de busca não informado')
  });
});
