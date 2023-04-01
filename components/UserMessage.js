import Message from "./Message.js";

export default class UserMessage extends Message {
  constructor(data, templateSelector) {
    super(templateSelector);
    this._text = data.text;
  }

  _handleClick() {
    super._handleMessageClick();

    this._element.classList.toggle("message_is-active");
  }

  generate() {
    this._element = super._getElement();

    this._element.querySelector(".message__paragraph").textContent = this._text;

    super._setEventListeners();

    return this._element;
  }
}
