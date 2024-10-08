  
let size = prompt("Hoe groot wil je");
 
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
const canvass = 50;
 
canvas.width = size * canvass;
canvas.height = size * canvass;
 
for (let row = 0; row < size; row++) {  
  for (let col = 0; col < size; col++) {  
    if ((row + col) % 2 === 0) {
      ctx.fillStyle = "blue"; 
    } else {
      ctx.fillStyle = "white"; 
    }
    ctx.fillRect(col * canvass, row * canvass, canvass, canvass);
  }
}
