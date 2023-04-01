const messageList = [
  {
    image:
      "https://kartinkin.net/pics/uploads/posts/2022-07/thumbs/1658430253_5-kartinkin-net-p-dovolnii-slon-zhivotnie-krasivo-foto-5.jpg",
    text: "Привет, нам срочно требуется доработать чат!",
  },
  {
    text: "Это карточка пользователя",
    isOwner: true, // добавили свойство isOwner сообщению пользователя
  },
  {
    image:
      "https://kartinkin.net/pics/uploads/posts/2022-07/thumbs/1658430253_5-kartinkin-net-p-dovolnii-slon-zhivotnie-krasivo-foto-5.jpg",
    text: "Ответ!",
  },
];

class Message {
  constructor(templateSelector) {
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
}

class UserMessage extends Message {
  constructor(data, templateSelector) {
    super(templateSelector);
    this._text = data.text;
  }

  generate() {
    this._element = this._getElement();

    this._element.querySelector(".message__paragraph").textContent = this._text;

    this._setEventListeners();

    return this._element;
  }
}

class DefaultMessage extends Message {
  constructor(data, templateSelector) {
    super(templateSelector);
    this._text = data.text;
    this._image = data.image;
  }

  generate() {
    this._element = this._getElement();

    this._element.querySelector(".message__avatar").src = this._image;
    this._element.querySelector(".message__paragraph").textContent = this._text;

    this._setEventListeners();

    return this._element;
  }
}

messageList.forEach((item) => {
  const message = item.isOwner
    ? new UserMessage(item, ".message-template_type_user")
    : new DefaultMessage(item, ".message-template_type_default");

  document.body.append(message.generate());
});
