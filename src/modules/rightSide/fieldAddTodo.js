export default class fieldAddTodo {

  right = document.querySelector('#right');
  addTodoField = document.querySelector('#fieldAddTodo');

  static clickAddTodo(prepareUserInput) {
    button = document.querySelector('#buttonAddTodo');
    button.addEventListener('click', () => prepareUserInput());
  }

  static show() {
    if (!document.querySelector('#fieldAddTodo'))
      right.appendChild(addTodoField);
  }

  static hide() {
    addTodoField.remove();
  }

}