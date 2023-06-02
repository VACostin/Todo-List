export default class fieldPopup {

  static init() {
    this.wrapperAddProject = document.querySelector('#wrapperAddProject');
    this.popupField = document.querySelector('#fieldPopupLeft');
    this.inputText = document.querySelector('#inputProject');
  }

  static clickConfirm(processUserInput) {
    const button = document.querySelector('#buttonConfirmLeft');
    button.addEventListener('click', () => processUserInput());
  }

  static clickCancel(resetFields) {
    const button = document.querySelector('#buttonCancelLeft');
    button.addEventListener('click', () => resetFields());
  }

  static show() {
    if (!document.querySelector('#fieldPopupLeft'))
      this.wrapperAddProject.appendChild(this.popupField);
  }

  static hide() {
    if (document.querySelector('#fieldPopupLeft')) {
      this.inputText.value = ''
      this.popupField.remove();
    }
  }

  static hasValidInput() {
    return this.inputText.value.length > 0 //&& notDuplicate()
  }

  static getInput() {
    return this.inputText.value;
  }
}