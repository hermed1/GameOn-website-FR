function editNav() {
  var x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}

// DOM Elements
const modalbg = document.querySelector('.bground');
const modalBtn = document.querySelectorAll('.modal-btn');
const formData = document.querySelectorAll('.formData');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = 'block';
}

//close modal

function closeModal() {
  modalbg.style.display = 'none';
}

//Confirmation message

function validate(event) {
  event.preventDefault(); // Empêche le rechargement de la page
  const confirmationMessage = document.querySelector('.confirmation-message');
  confirmationMessage.classList.toggle('confirmation-message-displayed');
  closeModal();

  // Fait disparaître le message de confirmation après 1 seconde
  setTimeout(() => {
    confirmationMessage.classList.toggle('confirmation-message-displayed');
  }, 1500);
}

//validation longueur champ nom
function nameValidation() {
  const name = document.querySelector('#last');
  const displayNameErrorMessage = document.querySelector('.nameErrorMessage');
  if (name.value.length < 2) {
    displayNameErrorMessage.classList.add('errorMessageDisplayed');
    name.style.border = 'red solid 2px';
    console.log(name.value.length);
  } else {
    displayNameErrorMessage.classList.remove('errorMessageDisplayed');
    name.style.border = 'none';
  }
}
//validation longueur champ prénom

function firstNameValidation() {
  const firstName = document.querySelector('#first');
  const displayFirstNameErrorMessage = document.querySelector(
    '.firstNameErrorMessage'
  );
  if (firstName.value.length < 2) {
    displayFirstNameErrorMessage.classList.add('errorMessageDisplayed');
    firstName.style.border = '2px solid red';
  } else {
    displayFirstNameErrorMessage.classList.remove('errorMessageDisplayed');
    firstName.style.border = 'none';
  }
}

// vérification date de naissance
// function birthdateValidation() {
//   const birthdate = document.querySelector('#birthdate');
//   console.log(birthdate.value);
// }
