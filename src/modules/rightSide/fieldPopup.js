import { format } from 'date-fns'

export default class fieldPopup {

  static init() {
    this.right = document.querySelector('#right');
    this.popupField = document.querySelector('#fieldPopup');
    this.inputText = document.querySelector('#inputText');
    this.inputDate = document.querySelector('#inputDate');
  }

  static clickConfirm(processUserInput) {
    const button = document.querySelector('#buttonConfirm');
    button.addEventListener('click', () => processUserInput());
  }

  static clickCancel(resetFields) {
    const button = document.querySelector('#buttonCancel');
    button.addEventListener('click', () => resetFields());
  }

  static show() {
    if (!document.querySelector('#fieldPopup'))
      this.right.appendChild(this.popupField);
  }

  static hide() {
    if (document.querySelector('#fieldPopup')) {
      this.inputText.value = ''
      this.popupField.remove();
    }
  }

  static hasValidInput() {
    return this.inputText.value.length > 0 && this.inputDate.value.length > 0;
  }

  static getInput() {
    const object = {
      todo: this.inputText.value,
      dateEnd: this.inputDate.value
    };
    return object;
  }
}