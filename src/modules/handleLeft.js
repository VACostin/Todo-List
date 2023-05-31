import buttonAll from './leftSide/buttonAll';
import buttonToday from './leftSide/buttonToday';
import buttonThisWeek from './leftSide/buttonThisWeek';
import buttonAddProject from './leftSide/buttonAddProject';

export default class handleLeft {
  static load() {
    buttonAll.load();
    buttonToday.load();
    buttonThisWeek.load();
    //buttonAddProject.load();
  }
}