//DOM Elements
let button = document.querySelector('.submit');
let emailInput = document.querySelector('.email');
let passwordInput = document.querySelector('.password');

//Declare Event Listeners
button.addEventListener('click', checkForm);

//Functions
function checkForm() {
    let emailVal = emailInput.value;
    let passwordVal = passwordInput.value;
    let emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/g;
    let passwordRegex = /^[A-z0-9_.+-]+/g;

    if(emailVal == emailVal.match(emailRegex) && passwordVal == passwordVal.match(passwordRegex)) {
        // emailInput.classList.add('wrong-email');
        // passwordInput.classList.add('wrong-password');
        emailInput.style.borderColor = "green";
        passwordInput.style.borderColor = 'green';
        window.location.href='Redirect/redirect.html';
        console.log('It works')
    } else if(emailVal != emailVal.match(emailRegex) && passwordVal == passwordVal.match(passwordRegex)){
        emailInput.style.borderColor = 'red';
        passwordInput.style.borderColor = 'green';
        console.log("No email valid")
    } else if(emailVal == emailVal.match(emailRegex) && passwordVal != passwordVal.match(passwordRegex)) {
        passwordInput.style.borderColor = 'red';
        emailInput.style.borderColor = "green";
        console.log("No Password valid")
    } else {
        emailInput.style.borderColor = 'red';
        passwordInput.style.borderColor = 'red';
    }
}