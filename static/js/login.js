// Function to show or hide password
const showHiddenPass = (inputId, iconId) => {
    const input = document.getElementById(inputId);
    const iconEye = document.getElementById(iconId);

    iconEye.addEventListener('click', () => {
        // Toggle between password and text
        if (input.type === 'password') {
            input.type = 'text';
            iconEye.classList.remove('ri-eye-off-line');
            iconEye.classList.add('ri-eye-line');
        } else {
            input.type = 'password';
            iconEye.classList.remove('ri-eye-line');
            iconEye.classList.add('ri-eye-off-line');
        }
    });
};

showHiddenPass('login-pass', 'login-eye');
showHiddenPass('confirm-pass', 'confirm-eye');
