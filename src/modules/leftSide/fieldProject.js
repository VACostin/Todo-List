export default class fieldProject {
  static init(loadTodos, removeProject) {
    this.loadTodos = loadTodos;
    this.removeProject = removeProject;
    this.left = document.querySelector('#left');
    this.div = document.createElement('div');
    this.wrapperAddProject = document.querySelector('#wrapperAddProject');
    fieldProject.manipulateDOM();
  }

  static manipulateDOM() {
    const p = document.createElement('p');
    const button = document.createElement('button');
    const buttonRemove = document.createElement('button');

    this.div.classList.add('section');
    buttonRemove.textContent = 'remove';

    p.appendChild(button);
    p.appendChild(buttonRemove);
    this.div.appendChild(p);
  }

  static renderProjects(projectList) {
    if (projectList.includes('noProject')) {
      const index = projectList.indexOf('noProject');
      projectList.splice(index, 1);
    }
    projectList.forEach(project => fieldProject.add(project));
  }

  static add(projectName) {
    const project = this.div.cloneNode(true);
    const button = project.firstChild.firstChild;
    const buttonRemove = project.firstChild.lastChild

    button.textContent = projectName;

    project.setAttribute('id', projectName);
    button.setAttribute('id', `button${projectName}`);
    buttonRemove.setAttribute('id', `buttonRemove${projectName}`);

    button.addEventListener('click', () => this.loadTodos(projectName));
    buttonRemove.addEventListener('click', ()=> this.removeProject(projectName));

    this.left.insertBefore(project, this.wrapperAddProject);
  }

  static remove(projectName) {
    const project = document.querySelector(`#${projectName}`);
    this.left.removeChild(project);
  }
}