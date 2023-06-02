export default class fieldAddProject {

  static init() {
    this.wrapperAddProject = document.querySelector('#wrapperAddProject');
    this.addProjectField = document.querySelector('#fieldAddProject');
  }

  static clickAddProject(prepareUserInput) {
    const button = document.querySelector('#buttonAddProject');
    button.addEventListener('click', () => prepareUserInput());
  }

  static show() {
    if (!document.querySelector('#fieldAddProject'))
      this.wrapperAddProject.appendChild(this.addProjectField);
  }

  static hide() {
    if (document.querySelector('#fieldAddProject')) {
      this.addProjectField.remove();
    }
  }
}