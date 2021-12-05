import Card from "./components/Card.js";
import FormValidator from "./components/FormValidator.js";
import initialCards from "./utils/initialCards.js";
import Section from "./components/Section.js";
import PopupWithForm from "./components/PopupWithForm.js";
import UserInfo from "./components/UserInfo.js";
import PopupWithImage from "./components/PopupWithImage.js";
import { editButton, addButton, formEdit, formAdd, inputName, inputOccupation } from "./utils/constants.js";

const initialCardsList = new Section({
    items: initialCards,
    renderer: (item) => {
        const card = new Card(item, '.template', handleCardClick);
        const cardElement = card.generateCard();
        initialCardsList.addItem(cardElement);
    }},
    '.cards');

initialCardsList.renderItems();

const popupAdd = new PopupWithForm({
    popupSelector: '.popup_type_add',
    handleFormSubmit: (formData) => {
        const card = new Card(formData, '.template', handleCardClick);
        const cardElement = card.generateCard();
        initialCardsList.addItem(cardElement);
    }
});
popupAdd.setEventListeners();

addButton.addEventListener('click', (event) => {
    popupAdd.open();
    formAddValidator.resetForm();
});

const popupEdit = new PopupWithForm({
    popupSelector: '.popup_type_edit',
    handleFormSubmit: (formData) => {
        const userInfo = new UserInfo({
            nameSelector: '.profile__name',
            occupationSelector: '.profile__occupation'
        });
        userInfo.setUserInfo(formData);
    }
});
popupEdit.setEventListeners();

editButton.addEventListener('click', (event) => {
    popupEdit.open();
    const initialUserInfo = new UserInfo({
        nameSelector: '.profile__name',
        occupationSelector: '.profile__occupation'
    });
    inputName.value = initialUserInfo.getUserInfo().name;
    inputOccupation.value = initialUserInfo.getUserInfo().occupation;
    formEditValidator.resetForm();
});

const popupWithImage = new PopupWithImage('.popup_type_picture');
popupWithImage.setEventListeners();

function handleCardClick(cardData) {
    popupWithImage.open(cardData);
}

//анимация попапов
window.addEventListener('load', ()=>{
  document.querySelectorAll('.popup').forEach((popup) => popup.classList.add('popup_transition'))
});

//валидация
const validationConfig = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__button',
    inactiveButtonClass: 'form__button_disabled',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__error_visible'
}

const formEditValidator = new FormValidator(validationConfig, formEdit);
formEditValidator.enableValidation();

const formAddValidator = new FormValidator(validationConfig, formAdd);
formAddValidator.enableValidation();