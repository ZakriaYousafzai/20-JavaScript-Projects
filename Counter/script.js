const increase = document.querySelector(".increase");
const decrease = document.querySelector(".decrease");
let count = document.querySelector(".count");
let counter = 0;

increase.addEventListener("click", () => {
    counter++;
    count.textContent = counter;
});

decrease.addEventListener("click", () => {

    if (counter != 0) {
        counter--;
    }

    count.textContent = counter;
});