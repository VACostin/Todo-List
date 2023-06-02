import { format, isToday } from 'date-fns';
import dateFormat from 'dateformat';
import localStore from './localStore';
import fieldAddTodo from './rightSide/fieldAddTodo';
import fieldPopup from './rightSide/fieldPopup';
import fieldTodo from './rightSide/fieldTodo';

export default class handleRight {

  static init() {
    handleRight.initPopup();
    fieldTodo.init();
    handleRight.initAddTodo();
    handleRight.loadAll();
  }

  static initAddTodo() {
    fieldAddTodo.init();
    fieldAddTodo.clickAddTodo(handleRight.prepareUserInput);
  }

  static initPopup() {
    fieldPopup.init();
    fieldPopup.clickConfirm(handleRight.processUserInput);
    fieldPopup.clickCancel(handleRight.resetFields);
  }

  static loadAll() {
    handleRight.project = 'noProject';
    const todoList = localStore.loadAll('all');
    fieldTodo.renderTodos(todoList);
    handleRight.resetFields();
  }

  static loadToday() {
    const todoList = localStore.loadAll('today');
    fieldTodo.renderTodos(todoList);
    handleRight.hideBothFields();
  }

  static loadThisWeek() {
    const todoList = localStore.loadAll('thisWeek');
    fieldTodo.renderTodos(todoList);
    handleRight.hideBothFields();
  }

  static loadProject(projectName) {
    handleRight.project = projectName;
    const todoList = localStore.load(projectName);
    fieldTodo.renderTodos(todoList);
    handleRight.resetFields();
  }

  static prepareUserInput() {
    fieldPopup.show();
    fieldAddTodo.hide();
  }

  static processUserInput() {
    if (fieldPopup.hasValidInput()) {
      const object = fieldPopup.getInput();
      localStore.insert(object, handleRight.project);
      if (handleRight.project == 'noProject')
        handleRight.loadAll();
      else
        handleRight.loadProject(handleRight.project);
    }
  }

  static resetFields() {
    fieldPopup.hide();
    fieldAddTodo.show();
  }

  static hideBothFields() {
    fieldPopup.hide();
    fieldAddTodo.hide();
  }

  static clearAll() {
    localStore.clear();
  }
}