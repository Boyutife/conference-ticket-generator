const imageInput = document.querySelector('.image-input');
const uploadIcon = document.querySelector('.icon-upload');
const avatarImgChoiceBtns = document.querySelector('.avatar-img-choice-btns');
const avatarInstruction = document.querySelector('.avatar-instruction');
const userForm = document.querySelector('.form-container');

imageInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  let error = document.querySelector('.upload-avatar-info-text');
  if (file.size > 512000) {
    let error = document.querySelector('.upload-avatar-info-text');
    error.style.color = 'red';
    file.value = '';
    return;
  } else {
    const imgUrl = URL.createObjectURL(file);
    uploadIcon.src = imgUrl;
    avatarInstruction.classList.add('hidden');
    avatarImgChoiceBtns.classList.remove('hidden');
    error.style.color = 'hsl(0, 0%, 100%)';
  }
});

const removeInputImage = document.querySelector('.remove-avatar-img-btn');
const changeInputImage = document.querySelector('.change-avatar-img-btn');

function removeImage() {
  uploadIcon.src = './assets/images/icon-upload.svg';
  avatarImgChoiceBtns.classList.add('hidden');
  avatarInstruction.classList.remove('hidden');
  imageInput.value = '';
}

function changeImage() {
  imageInput.click();
}

// Input values for avatar
let userFullname = '';
let userEmail = '';
let userGithubUsername = '';
let avatar = null;

function date() {
  const ticketDate = document.querySelector('.ticket-date');
  const currentDate = new Date();
  const options = { month: 'short', day: 'numeric', year: 'numeric' };
  let formattedDate = currentDate.toLocaleDateString('en-US', options);
  let eventDay = ticketDate.querySelector('.event-day');
  eventDay.innerText = formattedDate.split(' ')[1];
  let eventMonth = ticketDate.querySelector('.event-month');
  eventMonth.innerText = formattedDate.split(' ')[0];
  let eventYear = ticketDate.querySelector('.event-year');
  eventYear.innerText = formattedDate.split(' ')[2];
}

// Form Validation
function validateForm() {
  // Clear previous errors
  document.querySelectorAll('.input-error').forEach((el) => el.remove());

  let isValid = true;

  // Avatar Image
  const imageInput = document.getElementById('avatar');
  if (!imageInput || imageInput.value.trim() === '') {
    const wrapper = document.querySelector('.upload-avatar');
    const error = document.createElement('p');
    error.className = 'input-error';
    error.textContent = 'Please upload a valid image.';
    error.style.color = 'red';
    wrapper.appendChild(error);
    isValid = false;
  }

  // Fullname
  const userFullnameInput = document.getElementById('full-name');
  if (!userFullnameInput || userFullnameInput.value.trim().length < 6) {
    const wrapper = document.querySelector('.fullname-wrapper');
    const error = document.createElement('p');
    error.className = 'input-error';
    error.style.color = 'red';
    error.innerText = 'Name must be at least 6 characters.';
    wrapper.appendChild(error);
    isValid = false;
  }

  // Email
  const userEmailInput = document.getElementById('email');
  if (
    !userEmailInput ||
    userEmailInput.value.trim() === '' ||
    !userEmailInput.value.includes('@')
  ) {
    const wrapper = document.querySelector('.email-wrapper');
    const error = document.createElement('p');
    error.className = 'input-error';
    error.style.color = 'red';
    error.innerText = 'Enter a valid email including "@"';
    wrapper.appendChild(error);
    isValid = false;
  }

  // GitHub Username
  const userGithubInput = document.getElementById('github-username');
  if (
    !userGithubInput ||
    userGithubInput.value.trim() === '' ||
    !userGithubInput.value.trim().startsWith('@')
  ) {
    const wrapper = document.querySelector('.github-username-wrapper');
    const error = document.createElement('p');
    error.className = 'input-error';
    error.style.color = 'red';
    error.innerText = 'GitHub username must start with "@"';
    wrapper.appendChild(error);
    isValid = false;
  }

  userFullname = userFullnameInput.value.trim();
  userEmail = userEmailInput.value.trim();
  userGithubUsername = userGithubInput.value.trim();
  avatar = imageInput.value;

  return isValid;
}

const generateTicket = document.querySelector('.generate-ticket-btn');

generateTicket.addEventListener('click', (e) => {
  e.preventDefault();
  let isValid = validateForm();
  if (isValid) {
    let ticketSection = document.querySelector('.ticket-section');
    ticketSection.classList.remove('hidden');
    userForm.classList.add('hidden');
    const headerText = document.querySelector('.header-text');
    headerText.innerHTML = `<h1>Congrats, <span class="header-username">${userFullname}!</span> Your ticket is ready!</h1>`;
    const subHeaderText = document.querySelector('.sub-header-text');
    subHeaderText.innerHTML = `<p>We've emailed your ticket to <span class="ticket-page-email">${userEmail}</span> and will send updates in the run up to the event.</p>`;
    date();
    const ticketAvatar = document.querySelector('.avatar-img');
    ticketAvatar.src = URL.createObjectURL(imageInput.files[0]);
    const ticketFullname = document.querySelector('.avatar-fullname');
    ticketFullname.innerText = userFullname;
    const ticketGithub = document.querySelector('.github-username');
    ticketGithub.innerText = userGithubUsername;
  }
});
