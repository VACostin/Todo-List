import handleRight from "../handleRight";

const buttonToday = (() => {

  const load = () => {
    const button = document.querySelector('#buttonToday');
    button.addEventListener('click', () => {
      handleRight.loadToday();
    });
  };

  return {
    load,
  };
})();

export default buttonToday;