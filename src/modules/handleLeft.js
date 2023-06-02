import fieldPopup from './leftSide/fieldPopup';
import fieldAddProject from './leftSide/fieldAddProject';
import fieldProject from './leftSide/fieldProject'
import localStore from './localStore';

export default class handleLeft {

  static init(loadTodos) {
    this.loadTodos = loadTodos;
    handleLeft.initProject();
    handleLeft.initPopup();
    handleLeft.initAddProject();
    handleLeft.resetFields();
  }

  static initProject() {
    const projectList = localStore.getAllProjects();
    fieldProject.init(this.loadTodos, handleLeft.removeProject);
    fieldProject.renderProjects(projectList);
  }

  static initPopup() {
    fieldPopup.init();
    fieldPopup.clickConfirm(handleLeft.processUserInput);
    fieldPopup.clickCancel(handleLeft.resetFields);
  }

  static initAddProject() {
    fieldAddProject.init();
    fieldAddProject.clickAddProject(handleLeft.prepareUserInput);
  }

  static prepareUserInput() {
    fieldPopup.show();
    fieldAddProject.hide();
  }

  static processUserInput() {
    if (fieldPopup.hasValidInput()) {
      const projectName = fieldPopup.getInput();
      handleLeft.addProject(projectName);
      localStore.initProject(projectName);
      handleLeft.resetFields();
    }
  }

  static addProject(projectName) {
    if (!localStore.exists(projectName))
      fieldProject.add(projectName);
  }

  static removeProject(projectName) {
    localStore.deleteProject(projectName);
    fieldProject.remove(projectName);
    this.loadTodos('noProject');
  }

  static resetFields() {
    fieldPopup.hide();
    fieldAddProject.show();
  }
}