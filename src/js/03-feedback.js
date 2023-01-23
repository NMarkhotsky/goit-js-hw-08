import throttle from 'lodash.throttle';

const formRef = document.querySelector('form');

const STORAGE_KEY = 'feedback-form-state';

const formData = {};

formRef.addEventListener('submit', onFormSubmit);
formRef.addEventListener('input', throttle(onFormInput, 500));

populateInputForm();

function onFormSubmit(e) {
  e.preventDefault();

  formData.email = formRef.email.value;
  formData.message = formRef.message.value;

  if (formData.email === '' || formData.message === '') {
    return;
  }

  localStorage.removeItem(STORAGE_KEY);
  e.currentTarget.reset();

  console.log(formData);
}

function onFormInput() {
  formData.email = formRef.email.value;
  formData.message = formRef.message.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateInputForm() {
  const saveTextInput = localStorage.getItem(STORAGE_KEY);

  if (saveTextInput) {
    const storageKey = JSON.parse(saveTextInput);

    formRef.email.value = storageKey.email;
    formRef.message.value = storageKey.message;
  }
}
