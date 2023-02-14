

const password = document.getElementById('password');
const passwordConfirm = document.getElementById('confirm-password');
const form = document.getElementById('form');
const errorElement = document.getElementById('#error');

form.addEventListener('submit', (e) => {
    if (password.value !== passwordConfirm.value) {
       e.preventDefault();
       errorElement.innerHTML = 'passwords do not match'; 
    }
})