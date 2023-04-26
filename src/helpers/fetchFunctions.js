export const fetchProduct = () => {
  // seu código aqui
};

export const fetchProductsList = async (endPoint) => {
  if (!endPoint) {
    throw new Error('Termo de busca não informado');
  }
  try {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${endPoint}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    return 'Termo de busca não informado';
  }
};
