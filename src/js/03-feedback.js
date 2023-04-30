const form = document.querySelector('.feedback-form');
const takeFormData = localStorage.getItem('feedback-form-state');

const handleSubmit = e => {
    e.preventDefault();
    console.log(e);
  const {
    elements: { email, message },
  } = e.currentTarget;

  if (email.value === '' || message.value === '') {
    return alert('Please fill in all the fields!');
  }
  const formData = new FormData(e.currentTarget);
    formData.forEach((value, name) => {
    console.log(`${name}, ${value}`);
    
    takeFormData.setItem('feedback-form-state', `${name}, ${value}`);
    e.currentTarget.reset();
  });
};

console.log(takeFormData);

form.addEventListener('submit', handleSubmit);