const validationConfig = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__button',
    inactiveButtonClass: 'form__button_disabled',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__error_visible'
}

function enableValidation(config) {
    const forms = Array.from(document.querySelectorAll(config.formSelector));
    forms.forEach(function (form){
        setFormListeners(form, config)
    });
}

function setFormListeners(form, config){
    toggleButtonState(form, config);
    form.addEventListener('input', function (){
        toggleButtonState(form, config);
    });
    const inputs = Array.from(form.querySelectorAll(config.inputSelector));
    inputs.forEach(function (input){
        input.addEventListener('input', function (){
            checkInputValidity(input, form, config);
        });
    });
    toggleButtonState(form, config);
}

function checkInputValidity(input, form, config){
    if(!input.validity.valid){
        showError(input, form, config);
    } else {
        hideError(input, form, config);
    }
}

function showError(input, form, config){
    const error  = form.querySelector(`.${input.id}-error`);
    input.classList.add(config.inputErrorClass);
    error.classList.add(config.errorClass);
    error.textContent = input.validationMessage;
}

function hideError(input, form, config){
    const error  = form.querySelector(`.${input.id}-error`);
    input.classList.remove(config.inputErrorClass);
    error.classList.remove(config.errorClass);
    error.textContent = '';
}

function toggleButtonState(form, config){
    const button = form.querySelector(config.submitButtonSelector);
    if(!form.checkValidity()){
        button.classList.add(config.inactiveButtonClass);
        button.setAttribute('disabled', true);
    } else {
        button.classList.remove(config.inactiveButtonClass);
        button.removeAttribute('disabled');
    }
}
enableValidation(validationConfig);

