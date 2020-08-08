const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const button = document.querySelector(".button");
const color = document.querySelector(".color");

const getRandomInt = () => { 
    return Math.floor(Math.random() * hex.length); 
} 
const getColor = () => {
    let colorHex = '#';
    for(let i=0; i < 6; i++){
        colorHex += hex[getRandomInt()];
    }
    return colorHex;
}
const cambiarColor = () => {
    let colorHex = getColor();
    const body = document.querySelector("body");
    body.style.background = colorHex;
    color.textContent = colorHex;
}
button.addEventListener('click', cambiarColor );