// Johan Steven Ospina Arroyave

let size = 50;
let x = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(120);

x = x+1
if (x > width+size/2){
  x=-size/2;
}


fill(255);
ellipse(x, height/2, size, size)




}
