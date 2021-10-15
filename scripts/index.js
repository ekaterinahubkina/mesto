const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add'); // добавили новый попап новое место
const popupCloseButtonEdit = document.querySelector('.popup__close-button_type_edit');
const popupCloseButtonAdd = document.querySelector('.popup__close-button_type_add');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button'); //добавили кнопку добавить

const form = document.querySelector('.form');

const profileName = document.querySelector('.profile__name');
const inputName = document.querySelector('.form__input_type_name');
const profileOccupation = document.querySelector('.profile__occupation');
const inputOccupation = document.querySelector('.form__input_type_occupation');

function openPopup(popup) {
    popup.classList.add('popup_opened')
};

function closePopup(popup) {
    popup.classList.remove('popup_opened')
};

editButton.addEventListener('click', (event) => {
    openPopup(popupEdit);
});
popupCloseButtonEdit.addEventListener('click', (event) => {
    closePopup(popupEdit);
});

addButton.addEventListener('click', (event) => {
    openPopup(popupAdd);
}); //открытие поп-апа по нажатию на кнопку добавить

popupCloseButtonAdd.addEventListener('click', (event) => {
    closePopup(popupAdd);
});

inputName.value = profileName.textContent;
inputOccupation.value = profileOccupation.textContent;

function submitForm(event) {
    event.preventDefault()
    profileName.textContent = inputName.value;
    profileOccupation.textContent = inputOccupation.value;
    closePopup(popupEdit);
}
form.addEventListener('submit', submitForm);