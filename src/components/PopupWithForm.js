import Popup from "./Popup.js";

class PopupWithForm extends Popup{
    constructor({ popupSelector, handleFormSubmit }) {
        super(popupSelector);
        this._popup = document.querySelector(popupSelector);
        this._form = this._popup.querySelector('.form');
        this._inputList = this._form.querySelectorAll('.form__input');
        this._handleFormSubmit = handleFormSubmit;
        this._formSubmitButton = this._form.querySelector('.form__button');
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
            this.close();
        });
    }

    close() {
        super.close();
        this._form.reset();
    }

    renderLoading(isLoading) {
        if (isLoading) {
            this._formSubmitButton.textContent = 'Сохранение...';
        } else {
            this._formSubmitButton.textContent = 'Сохранить';
        }
    }

}

export default PopupWithForm;