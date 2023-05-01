const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('textarea'),
  email: document.querySelector('input'),
};

const FEEDBACK_MESSAGE = 'feedback-form-state';;

populateOutput();

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', onTextareaInput);
refs.email.addEventListener('input', onEmailInput);


function onFormSubmit(e) { 
  e.preventDefault();
  e.currentTarget.reset();
};

function onTextareaInput(e) {

  const messege = e.target.value;
  localStorage.setItem(FEEDBACK_MESSAGE, messege);
};

function onEmailInput(e) {

};

function populateOutput() {
  const savedMessage = localStorage.getItem(FEEDBACK_MESSAGE);
  console.log(savedMessage);
  if (localStorage.getItem) {
    console.log("+");
  }
};