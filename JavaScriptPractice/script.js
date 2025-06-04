console.log("Hello, World!");

let boxes = document.querySelectorAll(".box")
let colors = ["red", "green", "blue", "yellow", "purple"];
let backgroundColors = ["#FF5733", "#33FF57", "#3357FF", "#F0F0F0", "#FF33A1"];

function changeColors() {
    for (let i = 0; i < 100; i++) {
        let color = Math.floor(Math.random() * 5);
        let backgroundColor = Math.floor(Math.random() * 5);

        boxes[i].style.backgroundColor = backgroundColors[backgroundColor];
        boxes[i].style.color = colors[color];
    }
}