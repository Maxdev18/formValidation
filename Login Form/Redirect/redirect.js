//Get DOM Elements
let button = document.querySelector('.backto-main');

//Declare Event Listeners
button.addEventListener('click', backToMain);

//Functions
function backToMain() {
    window.location.href='../index.html'
}