import buttonAll from './leftSide/buttonAll';
import buttonToday from './leftSide/buttonToday';
import buttonThisWeek from './leftSide/buttonThisWeek';
import buttonClearAll from './leftSide/buttonClearAll';
import handleLeft from './handleLeft';
import handleRight from './handleRight';

export default class UI {

  static loadHomepage() {
    //"Left" is for  the left side of responsive content.
    //idem for right
    UI.initLeft();
    UI.initRight();
  }

  static initLeft() {
    //when we press anything on left side, right side should change
    //thus, to avoid tight coupling between the 2 handlers, we're using callbacks
    buttonAll.init(handleRight.loadAll)
    buttonToday.init(handleRight.loadToday);
    buttonThisWeek.init(handleRight.loadThisWeek);
    buttonClearAll.init(handleRight.clearAll);
    handleLeft.init(handleRight.loadProject);
  }

  static initRight() {
    handleRight.init();
  }
}