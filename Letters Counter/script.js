const input = document.getElementById('add-lenght');

input.addEventListener("keyup", ()=>{
    let inputTxt = document.getElementById('add-lenght').value;

    let lettersLenght = letterCounter(inputTxt);
    
    document.getElementById('display-txt').textContent = `Letter Count: ${lettersLenght}`;
    
});

function letterCounter(txt){

    txt = txt.replace(/\s/g, "");

    return txt.length;
}
