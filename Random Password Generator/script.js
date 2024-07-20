
const generateButton = document.getElementById('generate');
const showPassword = document.getElementById('pass-show');
let passwordLength;

generateButton.addEventListener("click", () => {

    passwordLength = document.getElementById('add-lenght').value;

    document.getElementById('add-lenght').value = "";

    const password = generatePassword(passwordLength);
    showPassword.value = password;
    
})


function generatePassword(length) {

    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = lowercase.toUpperCase();
    const numbers = "0123456789";
    const specialChars = ",!@#$%^&*()_+-=[]{};':|.<>/?~";

    let password = "";

    const allChars = lowercase + uppercase + numbers + specialChars;
    password = getRandomCharacters(allChars, length);

    // Shuffle the characters for better randomness
    password = password.split("").sort(() => Math.random() - 0.5).join("");

    return password;
}

function getRandomCharacters(charSet, count) {

    let characters = "";

    for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * charSet.length);
        characters += charSet.charAt(randomIndex);
    }

    return characters;
}