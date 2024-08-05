const generate = document.getElementById("generate");
const qoutePara = document.getElementById("qoute");
generate.addEventListener("click", getQuote);


async function getQuote() {

    qoutePara.textContent = "Loading...";

    try {
        const response = await fetch('https://type.fit/api/quotes');
        const quoteData = await response.json();

        const sizeOfArray = quoteData.length;

        const randomNumber = getRandomNumber(0, sizeOfArray);
        // the json contain an array, for randomness we have to pass random number

        const quoteText = quoteData[randomNumber].text;
        qoutePara.textContent = quoteText;

    } catch (error) {
        qoutePara.textContent = "Error fetching quote.";
        console.error("Error:", error);
    }
}

function getRandomNumber(min, max) {
    return Math.floor(min + Math.random() * max);
}
