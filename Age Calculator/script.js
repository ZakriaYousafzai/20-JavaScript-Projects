const input = document.querySelector(".input");
const calButton = document.querySelector(".calculate");
let years = document.querySelector(".years").firstElementChild;
let months = document.querySelector(".months").firstElementChild;
let days = document.querySelector(".days").firstElementChild;
let test

calButton.addEventListener("click", ()=>{

    const birthDate = new Date(input.value);
    const today = new Date();

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if( ageDays < 0 ) {
        ageMonths--;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if( ageMonths < 0 ) {
        ageYears--;
        ageMonths += 12;
    }

    years.textContent = ageYears;
    months.textContent = ageMonths;
    days.textContent = ageDays;
    
});