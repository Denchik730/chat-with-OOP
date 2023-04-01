import Message from "./Message.js";

export default class DefaultMessage extends Message {
  constructor(data, templateSelector) {
    super(templateSelector);
    this._text = data.text;
    this._image = data.image;
  }

  generate() {
    this._element = super._getElement();

    this._element.querySelector(".message__avatar").src = this._image;
    this._element.querySelector(".message__paragraph").textContent = this._text;

    super._setEventListeners();

    return this._element;
  }
}
