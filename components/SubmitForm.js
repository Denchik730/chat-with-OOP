export default class SubmitForm {
  constructor({ templateSelector, handleSubmitForm }) {
    this._templateSelector = templateSelector;
    this._handleSubmitForm = handleSubmitForm;
  }

  _getElement() {
    const formElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".form")
      .cloneNode(true);

    return formElement;
  }

  _getInputValues() {
    this._inputList = this._element.querySelectorAll(".form__input");

    this._formValues = {};

    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }

  _setEventListeners() {
    this._element.addEventListener("submit", (evt) => {
      evt.preventDefault();

      this._handleSubmitForm(this._getInputValues());

      this._element.reset();
    });
  }

  generate() {
    this._element = this._getElement();

    this._setEventListeners();

    return this._element;
  }
}
