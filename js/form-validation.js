const form = document.getElementsByTagName('form')[0];
const email = document.getElementsByName('email')[0];
const errorMsg = document.getElementsByClassName('error-msg')[0];
const errorIcon = document.getElementsByClassName('error-icon')[0];

function makeMsg(message) {
    errorMsg.innerHTML = message;
}

function showMsg() {
    email.className = 'invalid email';
    errorMsg.style.visibility = 'visible';
    errorIcon.style.visibility = 'visible';
}

function clearError() {
    email.className = 'email';
    errorMsg.innerHTML = '';
    errorMsg.style.visibility = 'hidden';
    errorIcon.style.visibility = 'hidden';   
}

form.setAttribute('novalidate', true)

form.addEventListener('submit', function (event) {
    
    clearError();

    var emailRegEx = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if (email.value.trim() === '' || !emailRegEx.test(email.value.trim())) {
        // Insert error msg
        makeMsg('Please enter a valid Email');

        // Show Msg
        showMsg();
    }
    if (email.className === 'invalid email') {
        event.preventDefault();
    }

});
