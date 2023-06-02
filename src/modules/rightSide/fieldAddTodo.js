export default class fieldAddTodo {

  static init() {
    this.right = document.querySelector('#right');
    this.addTodoField = document.querySelector('#fieldAddTodo');
  }

  static clickAddTodo(prepareUserInput) {
    const button = document.querySelector('#buttonAddTodo');
    button.addEventListener('click', () => prepareUserInput());
  }

  static show() {
    if (!document.querySelector('#fieldAddTodo'))
      this.right.appendChild(this.addTodoField);
  }

  static hide() {
    this.addTodoField.remove();
  }

}