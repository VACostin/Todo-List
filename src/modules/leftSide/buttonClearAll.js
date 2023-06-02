const buttonClearAll = (() => {

  const init = (clearAll) => {
    const button = document.querySelector('#buttonClearAll');
    button.addEventListener('click', () => clearAll());
  };

  return {
    init,
  };
})();

export default buttonClearAll;