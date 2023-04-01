const messageList = [
  {
    image:
      "https://kartinkin.net/pics/uploads/posts/2022-07/thumbs/1658430253_5-kartinkin-net-p-dovolnii-slon-zhivotnie-krasivo-foto-5.jpg",
    text: "Привет, нам срочно требуется доработать чат!",
  },
  {
    image:
      "https://kartinkin.net/pics/uploads/posts/2022-07/thumbs/1658430253_5-kartinkin-net-p-dovolnii-slon-zhivotnie-krasivo-foto-5.jpg",
    text: "Теперь мы можем создавать сколько угодно карточек!",
  },
];

class Message {
  constructor(data, templateSelector) {
    this._text = data.text;
    this._image = data.image;
    this._templateSelector = templateSelector;
  }

  _getElement = () => {
    const messageElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".message")
      .cloneNode(true);

    return messageElement;
  };

  _setEventListeners = () => {
    this._element.addEventListener("click", this._handleMessageClick);
  };

  _handleMessageClick = () => {
    this._element
      .querySelector(".message__text")
      .classList.toggle("message__text_is-active");
  };

  generate() {
    this._element = this._getElement();

    this._element.querySelector(".message__avatar").src = this._image;
    this._element.querySelector(".message__paragraph").textContent = this._text;

    this._setEventListeners();

    return this._element;
  }
}

messageList.forEach((item) => {
  const message = new Message(item, ".message-template_default");

  document.body.append(message.generate());
});
