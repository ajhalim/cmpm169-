function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
       normalMaterial();
  
  }
  
  let angle = 0
  let size = 0;
  function draw() {
    background(200);
    orbitControl();
    rotateX(mouseX * 0.01);
    rotateY(mouseY * 0.01);
      //angle += 0.01
    size = (mouseX + mouseY) * 0.2;
    cone(size);
  }