export const fetchProduct = () => {
  // seu código aqui
};

export const fetchProductsList = async () => {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/search?q=$QUERY');
  console.log('response:', response);
  const data = await response.json();
  return data;
};
fetchProductsList();
