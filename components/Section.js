export default class Section {
  constructor({ dataItems, renderer }, selectorContainer) {
    this._initialArray = dataItems;
    this._renderer = renderer;
    this._container = document.querySelector(selectorContainer);
  }

  renderItems() {
    this._initialArray.forEach((item) => {
      this._renderer(item);
    });
  }

  setItem(element) {
    this._container.append(element);
  }
}
