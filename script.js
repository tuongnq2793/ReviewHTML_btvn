const emailInput = document.getElementById("emailRegister");
const passwordInput = document.getElementById("passwordRegister");
const btnSubmit = document.querySelector("button");


function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


function validatePassword(pass) {
    const passRegex = /^(?=.*[A-Z]).{6,12}$/;
    return passRegex.test(pass);
}

function checkForm() {
    const isEmailValid = validateEmail(emailInput.value);
    const isPassValid = validatePassword(passwordInput.value);

    btnSubmit.disabled = !(isEmailValid && isPassValid);
}


emailInput.addEventListener("input", checkForm);
passwordInput.addEventListener("input", checkForm);


btnSubmit.disabled = true;

document.getElementById("formRegister").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Đăng ký thành công!");
});