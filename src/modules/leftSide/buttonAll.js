import handleRight from "../handleRight";

const buttonAll = (() => {

  const load = () => {
    const button = document.querySelector('#buttonAll');
    button.addEventListener('click', () => {
      handleRight.loadAll();
    });
  };

  return {
    load,
  };
})();

export default buttonAll;