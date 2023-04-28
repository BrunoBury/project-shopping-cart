export const showLoading = () => {
  const loadingDiv = document.createElement('div');
  loadingDiv.classList.add('loading');
  const loadingLabel = document.createElement('label');
  loadingLabel.innerText = 'carregando...';
  loadingDiv.appendChild(loadingLabel);
  document.body.appendChild(loadingDiv);
};
export const hideLoading = () => {
  const loadings = document.getElementsByClassName('loading');
  if (loadings.length) {
    loadings[0].remove();
  }
};
