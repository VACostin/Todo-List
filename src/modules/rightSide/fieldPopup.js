export default class fieldPopup {

  right = document.querySelector('#right');
  popupField = document.querySelector('#fieldPopup');
  input = document.querySelector('input');

  static clickConfirm(processUserInput) {
    const button = document.querySelector('confirmButton');
    button.addEventListener('click', processUserInput);
  }

  static clickCancel(resetFields) {
    const button = document.querySelector('cancelButton');
    button.addEventListener('click', resetFields);
  }

  static show() {
    if (!document.querySelector('#fieldPopup'))
      right.appendChild(popupField);
  }

  static hide() {
    input.value = '';
    popupField.remove();
  }

  static hasValidInput() {
    return input.value.length > 0;
  }

  static getInput() {
    return input;
  }
}