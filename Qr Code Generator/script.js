const btn = document.querySelector(".btn");
const image = document.querySelector(".img");
const input = document.querySelector(".input");

btn.addEventListener("click", ()=>{
    image.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;
});