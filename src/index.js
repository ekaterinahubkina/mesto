import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import initialCards from "./initialCards.js";
import Section from "./Section.js";
import Popup from "./Popup.js";

const popupEdit = document.querySelector('.popup_type_edit');
//const popupAdd = document.querySelector('.popup_type_add');
const popupCloseButtonEdit = document.querySelector('.popup__close-button_type_edit');
const popupCloseButtonAdd = document.querySelector('.popup__close-button_type_add');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button'); 


const formAdd = document.querySelector('.form_type_add');
const inputTitle = document.querySelector('.form__input_type_title');
const inputLink = document.querySelector('.form__input_type_link');

const formEdit = document.querySelector('.form_type_edit');
const profileName = document.querySelector('.profile__name');
const inputName = document.querySelector('.form__input_type_name');
const profileOccupation = document.querySelector('.profile__occupation');
const inputOccupation = document.querySelector('.form__input_type_occupation');

const popupPic = document.querySelector('.popup_type_picture');

const cardsSection = document.querySelector('.cards');

// function openPopup(popup) {
//     popup.classList.add('popup_opened');
//     document.addEventListener('keydown', keyEscHandler);
// }
//
// function closePopup(popup) {
//     popup.classList.remove('popup_opened');
//     document.removeEventListener('keydown', keyEscHandler);
//    }

const popupAdd = new Popup('.popup_type_add');
popupAdd.setEventListeners();

editButton.addEventListener('click', (event) => {
    openPopup(popupEdit);
    inputName.value = profileName.textContent;
    inputOccupation.value = profileOccupation.textContent;
    formEditValidator.resetForm();
    });

popupCloseButtonEdit.addEventListener('click', (event) => {
    closePopup(popupEdit);
    inputName.value = profileName.textContent;
    inputOccupation.value = profileOccupation.textContent;
});

addButton.addEventListener('click', (event) => {
    popupAdd.open();
    // openPopup(popupAdd);
    formAdd.reset();
    formAddValidator.resetForm();
}); 

popupCloseButtonAdd.addEventListener('click', (event) => {
    closePopup(popupAdd);
});

// функция закрытия попапа по нажатиюна esc
// export function keyEscHandler (event){
//     if(event.key === 'Escape'){
//         const popupOpened = document.querySelector('.popup_opened');
//         closePopup(popupOpened);
//     }
// }

// функция закрытия попапа нажатием на оверлей
function overlayClickHandler (event){
    if (event.target.classList.contains('popup_opened')){
        closePopup(event.target);
        }
    }

function submitEditProfileForm(event) {
    event.preventDefault()
    profileName.textContent = inputName.value;
    profileOccupation.textContent = inputOccupation.value;
    closePopup(popupEdit);
}
formEdit.addEventListener('submit', submitEditProfileForm);


// добавление карточек
// initialCards.forEach(addCard);
//
function addCard(item) {
    const card = new Card(item, '.template', openPopup, closePopup);
    const cardElement = card.generateCard();

    cardsSection.prepend(cardElement);
}

const initialCardsList = new Section({
    items: initialCards,
    renderer: (item) => {
        const card = new Card(item, '.template', openPopup, closePopup);
        const cardElement = card.generateCard();
        initialCardsList.addItem(cardElement);
    }},
    '.cards');

initialCardsList.renderItems();


function addCardSubmit(event) {
  event.preventDefault();
  const name = inputTitle.value;
  const link = inputLink.value;
  const item = {
    name: name,
    link: link
  };
  addCard(item);
  event.target.reset();
  closePopup(popupAdd);
}
formAdd.addEventListener('submit', addCardSubmit);

popupEdit.addEventListener('click', overlayClickHandler);
popupAdd.addEventListener('click', overlayClickHandler);
popupPic.addEventListener('click', overlayClickHandler);

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