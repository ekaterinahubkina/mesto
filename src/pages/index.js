import "./index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import initialCards from "../utils/initialCards.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import { editButton, addButton, formEdit, formAdd, inputName, inputOccupation } from "../utils/constants.js";

function createCard(item) {
    const card = new Card(item, '.template', handleCardClick);
    const cardElement = card.generateCard();
    return cardElement;
}
const initialCardsList = new Section({
    items: initialCards,
    renderer: (item) => {
        // const card = new Card(item, '.template', handleCardClick);
        // const cardElement = card.generateCard();
        initialCardsList.addItem(createCard(item));
    }},
    '.cards');

initialCardsList.renderItems();

const popupAdd = new PopupWithForm({
    popupSelector: '.popup_type_add',
    handleFormSubmit: (formData) => {
        initialCardsList.addItem(createCard(formData));
    }
});
popupAdd.setEventListeners();

addButton.addEventListener('click', () => {
    popupAdd.open();
    formAddValidator.resetForm();
});

const userInfo = new UserInfo({
    nameSelector: '.profile__name',
    occupationSelector: '.profile__occupation'
});

const popupEdit = new PopupWithForm({
    popupSelector: '.popup_type_edit',
    handleFormSubmit: (formData) => {
        userInfo.setUserInfo(formData);
    }
});
popupEdit.setEventListeners();

editButton.addEventListener('click', (event) => {
    inputName.value = userInfo.getUserInfo().name;
    inputOccupation.value = userInfo.getUserInfo().occupation;
    formEditValidator.resetForm();
    popupEdit.open();
});

const popupWithImage = new PopupWithImage('.popup_type_picture');
popupWithImage.setEventListeners();

function handleCardClick(cardData) {
    popupWithImage.open(cardData);
}

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