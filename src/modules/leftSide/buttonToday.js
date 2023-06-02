const buttonToday = (() => {

  const init = (loadToday) => {
    const button = document.querySelector('#buttonToday');
    button.addEventListener('click', () => loadToday());
  };

  return {
    init,
  };
})();

export default buttonToday;