const popup = document.querySelector('.pop-up');
const popupCloseButton = document.querySelector('.pop-up__close-button');
const editButton = document.querySelector('.profile__edit-button');
const formButton = document.querySelector('.form__button');

const form = document.querySelector('.form');

const profileName = document.querySelector('.profile__name');
const inputName = document.querySelector('.form__input_name');
const profileOccupation = document.querySelector('.profile__occupation');
const inputOccupation = document.querySelector('.form__input_occupation');

function openPopup() {
    popup.classList.add('pop-up_opened')
};

function closePopup() {
    popup.classList.remove('pop-up_opened')
};

editButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);

function submitForm(event) {
    event.preventDefault()
    profileName.textContent = inputName.value;
    profileOccupation.textContent = inputOccupation.value;
    console.log(profileOccupation, profileName);
    closePopup();
}
form.addEventListener('submit', submitForm);
