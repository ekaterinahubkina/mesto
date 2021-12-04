import Popup from "./Popup.js";

class PopupWithForm extends Popup{
    constructor({ popupSelector, handleFormSubmit }) {
        super(popupSelector);
        this._popup = document.querySelector(popupSelector);
        this._form = this._popup.querySelector('.form');
        this._inputList = this._form.querySelectorAll('.form__input');
        this._handleFormSubmit = handleFormSubmit;
    }

    _getInputValues() {
        this._formValues = {};
        this._inputList.forEach((input) => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (event) => {
            event.preventDefault();
            this._handleFormSubmit(this._getInputValues());
            this._form.reset();
            this.close();
        });
    }

    close() {
        super.close();
        this._form.reset();
    }

}

export default PopupWithForm;