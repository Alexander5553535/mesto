const popup = document.querySelector('.popup');
const openPopupButton = document.querySelector('.profile__pen');
const closePopupButton = document.querySelector('.popup__close-button');
const form = document.querySelector('.popup__form');
const inputName = document.querySelector('.popup__input_type_name');
const inputJob = document.querySelector('.popup__input_type_job');
let newName = document.querySelector('.profile__title');
let newJob = document.querySelector('.profile__subtitle');
const savePopupButton = document.querySelector('.popup__button');

function togglePopup () {
    popup.classList.toggle('popup_opened');
    if (popup.classList.contains('popup_opened')) {
        inputName.value = newName.textContent;
        inputJob.value = newJob.textContent;
    }
}

function saveInf () {
    newName.textContent = inputName.value;
    newJob.textContent = inputJob.value;
    togglePopup();
};


form.addEventListener('submit', (event) => {
    event.preventDefault();
   
    saveInf();
});

openPopupButton.addEventListener ('click',  (togglePopup));
closePopupButton.addEventListener ('click',  (togglePopup));
