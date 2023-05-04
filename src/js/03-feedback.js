import trottle from 'lodash.throttle';


const FEEDBACK_MESSAGE = 'feedback-form-state';
const feedbackForm = document.querySelector('.feedback-form');
const formData = JSON.parse(localStorage.getItem(FEEDBACK_MESSAGE)) || {};
let fromLocalstorage = "";
populateOutput();

feedbackForm.addEventListener('submit', onFormSubmit);
feedbackForm.addEventListener('input', trottle(onInputFieldCreate, 500));


function onFormSubmit(e) {
  e.preventDefault();
  const email = document.querySelector('[name="email"]');
  const message = document.querySelector('[name="message"]');
  if (email.value === '' || message.value === '') {
    return alert('Please fill in all the fields!');
  }
  console.log(formData);
  e.currentTarget.reset();
  localStorage.removeItem(FEEDBACK_MESSAGE);
    
  };


function onInputFieldCreate(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(FEEDBACK_MESSAGE, JSON.stringify(formData));
};

function populateOutput() {
const savedMessage = JSON.parse(localStorage.getItem(FEEDBACK_MESSAGE));

if (savedMessage) {
    const keys = Object.keys(savedMessage);
    const values = Object.values(savedMessage);

    for (let i = 0; i < values.length; i++) {
      for (let i = 0; i < keys.length; i++) {
        fromLocalstorage = document.querySelector(`[name=${keys[i]}]`);
        fromLocalstorage.value = values[i];
      }
    }
}
};