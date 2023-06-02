const buttonThisWeek = (() => {

  const init = (loadThisWeek) => {
    const button = document.querySelector('#buttonThisWeek');
    button.addEventListener('click', () => loadThisWeek());
  };

  return {
    init,
  };
})();

export default buttonThisWeek;