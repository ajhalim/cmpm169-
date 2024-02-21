
var font = 'sans-serif';
var letter = ':3 :3 :3 :3 :3 :3';
var letter2 = ':3 :3 :3 :3 :3 :3';
var angle = 0;
var size = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
    fill(0);
  
    textFont(font);
    textAlign(CENTER, CENTER);
  }

function draw() {
    clear();
    textSize((mouseX - width / 2) * 5 + 1);
    text(letter, width / 2, mouseY);
    rotate(angle);
    angle++;
    fill(mouseX/2, mouseY/2, angle/2);
}

