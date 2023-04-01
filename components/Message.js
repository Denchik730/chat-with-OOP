export default class Message {
  constructor(templateSelector) {
    this._templateSelector = templateSelector;
  }

  _getElement() {
    const messageElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".message")
      .cloneNode(true);

    return messageElement;
  }

  _setEventListeners() {
    this._element.addEventListener("click", () => {
      this._handleMessageClick();
    });
  }

  _handleMessageClick() {
    this._element
      .querySelector(".message__text")
      .classList.toggle("message__text_is-active");
  }
}
