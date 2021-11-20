class FormValidator {
    constructor(config, form) {
        this._config = config;
        this._form = form;
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
        const button = this._form.querySelector(this._config.submitButtonSelector);
        if(!this._form.checkValidity()){
            button.classList.add(this._config.inactiveButtonClass);
            button.setAttribute('disabled', true);
        } else {
            button.classList.remove(this._config.inactiveButtonClass);
            button.removeAttribute('disabled');
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
        this._toggleButtonState();
        this._form.addEventListener('input', () => {
            this._toggleButtonState();
        });
        const inputs = Array.from(this._form.querySelectorAll(this._config.inputSelector));
        inputs.forEach((input) => {
            input.addEventListener('input', () => {
                this._checkInputValidity(input);
            });
        });
        this._toggleButtonState();
    }

    enableValidation() {
       this._setFormListeners();
    }


}
 export default FormValidator;
