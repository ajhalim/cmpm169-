  function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
     normalMaterial();
    describe(
      'Camera orbits around a box when mouse is hold-clicked & then moved.'
    );
  }
  
  let thing = 0
  
  function draw() {
    background(200);
    orbitControl();
    rotateX(mouseX * 0.01);
    rotateY(mouseY * 0.01);
    thing = (mouseX + mouseY) * 0.25
    if(thing > 200){
      box(thing);
    }else{
      sphere(thing);
    }
    color(thing);
  }