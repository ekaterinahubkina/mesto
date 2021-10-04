const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close-button');
const editButton = document.querySelector('.profile__edit-button');

const form = document.querySelector('.form');

const profileName = document.querySelector('.profile__name');
const inputName = document.querySelector('.form__input_type_name');
const profileOccupation = document.querySelector('.profile__occupation');
const inputOccupation = document.querySelector('.form__input_type_occupation');

function openPopup() {
    popup.classList.add('popup_opened')
};

function closePopup() {
    popup.classList.remove('popup_opened')
};

editButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);

inputName.value = profileName.textContent;
inputOccupation.value = profileOccupation.textContent;

function submitForm(event) {
    event.preventDefault()
    profileName.textContent = inputName.value;
    profileOccupation.textContent = inputOccupation.value;
    closePopup();
}
form.addEventListener('submit', submitForm);