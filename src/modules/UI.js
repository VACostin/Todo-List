import handleLeft from './handleLeft';
import handleRight from './handleRight';

export default class UI {

  static loadHomepage() {
    UI.loadLeft();
    UI.loadRight();
  }

  static loadLeft() {
    handleLeft.load();
  }

  static loadRight() {
    handleRight.loadAll();
  }

}