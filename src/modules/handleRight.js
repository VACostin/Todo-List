import storage from './storage';
import fieldAddTodo from './rightSide/fieldAddTodo';
import fieldPopup from './rightSide/fieldPopup';

export default class handleRight {

  static load() {
    fieldAddTodo.clickAddTodo(handleRight.prepareUserInput);
    fieldPopup.clickConfirm(handleRight.processUserInput);
    fieldPopup.clickCancel(handleRight.resetFields);
    handleRight.loadAll();
  }

  static loadAll() {
    handleRight.resetFields();
    const dateStart = new Date('2023.06.01');
    const dateEnd = new Date('2100.01.01');
    handleRight.load(dateStart, dateEnd);
  }

  static loadToday() {
    handleRight.hideBothFields();
  }

  static loadThisWeek() {
    handleRight.hideBothFields();
  }

  static loadProject(name) {
    console.log(`loaded${name}`);
  }

  static prepareUserInput() {
    fieldPopup.show();
    fieldAddTodo.hide();
  }

  static processUserInput() {
    if(fieldPopup.hasValidInput()){
      handleRight.insertNewTodo();
      handleRight.resetFields();
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

  static insertNewTodo() {
    // storage magic
    // dom magic
    handleRight.resetFields();
  }

  static load(dateStart, dateEnd) {
    console.log(localStorage);
  }

  static fill(bigObject) {

    //bigObject.forEach(todo => {
      //do DOM magic      
   // });
  }

}