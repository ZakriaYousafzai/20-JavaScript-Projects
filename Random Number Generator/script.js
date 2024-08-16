const min = document.getElementById("min");
const max = document.getElementById("max");
const generate = document.getElementById("generate");
let result = document.getElementById("result");

// Add an event listener to the generate button
generate.addEventListener("click", () => {
    const minValue = Number(min.value);
    const maxValue = Number(max.value);

    // Generate a random number between the minimum and maximum values
    let random = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;

    // Display the random number in the result element
    result.textContent = random;    
});
