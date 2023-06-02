const buttonAll = (() => {

  const init = (loadAll) => {
    const button = document.querySelector('#buttonAll');
    button.addEventListener('click', () => loadAll());
  };

  return {
    init,
  };
})();

export default buttonAll;