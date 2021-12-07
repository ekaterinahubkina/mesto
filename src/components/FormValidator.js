class FormValidator {
    constructor(config, form) {
        this._config = config;
        this._form = form;
        this._inputList = Array.from(this._form.querySelectorAll(this._config.inputSelector));
        this._submitButton = this._form.querySelector(this._config.submitButtonSelector);
    }

    _showError(input) {
        const error  = this._form.querySelector(`.${input.id}-error`);
        input.classList.add(this._config.inputErrorClass);
        error.classList.add(this._config.errorClass);
        error.textContent = input.validationMessage;
    }

    _hideError(input) {
        const error  = this._form.querySelector(`.${input.id}-error`);
        input.classList.remove(this._config.inputErrorClass);
        error.classList.remove(this._config.errorClass);
        error.textContent = '';
    }

    _toggleButtonState() {
        if(!this._form.checkValidity()){
            this._submitButton.classList.add(this._config.inactiveButtonClass);
            this._submitButton.setAttribute('disabled', true);
        } else {
            this._submitButton.classList.remove(this._config.inactiveButtonClass);
            this._submitButton.removeAttribute('disabled');
        }
    }

    _checkInputValidity(input) {
        if(!input.validity.valid){
            this._showError(input);
        } else {
            this._hideError(input);
        }
    }

    _setFormListeners() {
        this._inputList.forEach((input) => {
            input.addEventListener('input', () => {
                this._checkInputValidity(input);
                this._toggleButtonState();
            });
        });
    }

    resetForm() {
        this._inputList.forEach((input) => {
            this._hideError(input);
        });
        this._toggleButtonState();
    }

    enableValidation() {
       this._setFormListeners();
    }


}
 export default FormValidator;
