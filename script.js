class Message {
  constructor(text, image) {
    this._text = text;
    this._image = image;
  }

  _getElement() {
    const messageElement = document
      .querySelector(".message-template")
      .content.querySelector(".message")
      .cloneNode(true);

    return messageElement;
  }

  generate() {
    this._element = this._getElement();

    this._element.querySelector(".message__avatar").src = this._image;
    this._element.querySelector(".message__paragraph").textContent = this._text;

    return this._element;
  }
}

const message = new Message(
  "Привет! Как дела?",
  "https://kartinkin.net/pics/uploads/posts/2022-07/thumbs/1658430253_5-kartinkin-net-p-dovolnii-slon-zhivotnie-krasivo-foto-5.jpg"
);
console.log(message.generate());

document.body.append(message.generate());
