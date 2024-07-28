let generate = document.getElementById("generate");
generate.addEventListener("click", getJoke);

async function getJoke() {
    const jokePara = document.getElementById("joke");
    jokePara.textContent = "Loading...";

    try {
        const response = await fetch(' https://v2.jokeapi.dev/joke/Dark?type=single');
        const jokeData = await response.json();
        jokePara.textContent = jokeData.joke;

    } catch (error) {
        jokePara.textContent = "Error fetching joke.";
        console.log(error);
    }
}