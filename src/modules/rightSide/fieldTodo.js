export default class fieldTodo {
  static init() {
    this.right = document.querySelector('#right');
    this.div = document.createElement('div');
    fieldTodo.manipulateDOM();
  };

  static manipulateDOM() {
    this.div.classList.add('task');
    const todoName = document.createElement('p');
    const todoDate = document.createElement('p');
    this.div.appendChild(todoName);
    this.div.appendChild(todoDate);
  }

  static renderTodos(todoList) {
    fieldTodo.removeAllChildNodes(this.right);
    todoList.forEach(todoObject => fieldTodo.add(todoObject));
  };

  static removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

  static add(todoObject) {
    const todoItem = this.div.cloneNode(true);
    todoItem.setAttribute('id', todoObject.todo);
    todoItem.firstChild.textContent = `Name: ${todoObject.todo}`;
    todoItem.lastChild.textContent = `Date: ${todoObject.dateEnd}`;
    this.right.appendChild(todoItem);
  };

  static remove() {

  };
}