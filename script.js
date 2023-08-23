let password = document.getElementById("password");
let confirmation = document.getElementById("confirmation");
let matchingResult = document.getElementById("matchresult");

function checkPasswords() {
    if (password.value != confirmation.value) {
        matchingResult.textContent ="Passwords DO NOT match!";
    }else{
        matchingResult.textContent ="";
    }
}

