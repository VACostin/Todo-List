import todoList from './todoList.json';

function checkStorage() {
  if (localStorage.getItem("todoList") == null)
    initStorage();
}

function initStorage() {
  const todoList = [{
    "project": "all",
    "list": []
  }];
  localStorage.setItem('todoList', JSON.stringify(todoList));
}

checkStorage();

export default class storage {

  static load(dateStart, dateEnd) {
    //const filteredList = localStorage.filter((todo) => {
    //  return (new Date(todo.date) > dateStart && new Date(todo.date) < dateEnd);
    //})
    //return filteredList;
  }

  static insert() {
    //const item = JSON.parse(localStorage.getItem('todoList'));
    //console.log(item);
  }

  static clear() {
    //localStorage.clear();
    //console.log(localStorage);
  }
}