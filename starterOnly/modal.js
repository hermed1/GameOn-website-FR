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
