export default class localStore {

  static load(projectName) {
    console.log(`fetching data for ${projectName}`);
    const todoList = JSON.parse(localStorage.getItem(projectName))
    return todoList;
  }

  static loadAll(dateRange) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const day = 86400000
    let dateEnd;
    switch (dateRange) {
      case 'all': dateEnd = new Date(today.getTime() + day * 100000);
        break;
      case 'today': dateEnd = new Date(today.getTime() + day);
        break;
      case 'thisWeek': dateEnd = new Date(today.getTime() + day * 7)
        break;
    }

    const projectList = localStore.getAllProjects();
    let fullList = []
    projectList.forEach(project => {
      const todoList = localStore.load(project);
      const todoListFiltered = todoList.filter((todo) => {
        const date = new Date(todo.dateEnd);
        return (date <= dateEnd && date >= today);
      });
      fullList = fullList.concat(todoListFiltered);
    })
    return fullList;
  }

  static exists(projectName) {
    return localStorage.getItem(projectName);
  }

  static initProject(projectName) {
    const project = new Array();
    localStorage.setItem(projectName, JSON.stringify(project));
  }

  static deleteProject(projectName) {
    localStorage.removeItem(projectName);
  }

  static insert(object, projectName) {
    if (!localStore.exists(projectName))
      localStore.initProject(projectName);

    const todoList = JSON.parse(localStorage.getItem(projectName));
    todoList.push(object);
    localStorage.setItem(projectName, JSON.stringify(todoList));
  }

  static delete(object, projectName) {
    const todoList = JSON.parse(localStorage.getItem(projectName));
    const index = todoList.findIndex((objectTarget) => objectTarget.todo == object.todo);
    todoList.splice(index, 1);
    localStorage.setItem(projectName, JSON.stringify(todoList));
  }

  static getAllProjects() {
    const projectList = new Array();
    (Object.keys(localStorage)).forEach(key => {
      projectList.push(key);
    });
    return projectList;
  }

  static clear() {
    localStorage.clear();
  }
}