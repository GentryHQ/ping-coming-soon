
//Ref of all elements to be called
let form = document.getElementById('sub');
let email = document.getElementById('mail');
let btn = document.getElementById('submit-btn');
let error = document.getElementById('error');

//this function checks the email input against the below regex then return it
function validateEmail(email) {
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    return regex.test(email);
}

//On click of the submit button, an event listener is added that checks if the email format is valid and makes sure the form is not empty.
btn.addEventListener('click', (e) => { 

    if (email.value === "") {
        e.preventDefault();
        error.innerText = 'Whoops! It looks like you forgot to add your email';
        email.classList.add('errorForm')
    } else if (validateEmail(email.value) === false) {
        e.preventDefault();
        error.innerText = 'Please provide a valid email address';
        email.classList.add('errorForm')
    }

});
