import handleRight from '../handleRight';

const buttonThisWeek = (() => {

  const load = () => {
    const button = document.querySelector('#buttonThisWeek');
    button.addEventListener('click', () => {
      handleRight.loadThisWeek();
    });
  };

  return {
    load,
  };
})();

export default buttonThisWeek;