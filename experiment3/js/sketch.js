
//'use strict';

var sketch = function(p) {
    var agents = [];
    var agentCount = 400;
    var noiseScale = 600;
    var noiseStrength = 20;
    var overlayAlpha = 5;
    var agentAlpha = 180;
    var strokeWidth = 0.6;
    var drawMode = 1;
    
    var actRandomSeed = 0;
    var fillNum =0;
    var R = 0;
    var G = 0;
    var B = 0;
  
    p.setup = function() {
      p.createCanvas(p.windowWidth, p.windowHeight);
  
      for (var i = 0; i < agentCount; i++) {
        agents[i] = new Agent();
      }
    };
  
    p.draw = function() {
      
      p.background(R,G,B);
      
      p.fill(fillNum, overlayAlpha);
      //p.fill(100,255,255);
      p.noStroke();
      p.rect(0, 0, p.width, p.height);
  
      // Draw agents
      p.stroke(100, 100, 100);
      for (var i = 0; i < agentCount; i++) {
        if (drawMode == 1) agents[i].update1(noiseScale, noiseStrength, strokeWidth);
        else agents[i].update2(noiseScale, noiseStrength, strokeWidth);
      }
      
      fillNum = p.random(0,255);
      
      R = p.random(-0,20);
      G = p.random(-0,20);
      B = p.random(-0,20);
      
      
    };
    
  
    p.keyReleased = function() {
      if (p.key == 's' || p.key == 'S') p.saveCanvas(gd.timestamp(), 'png');
      if (p.key == '1') drawMode = 1;
      if (p.key == '2') drawMode = 2;
      if (p.key == ' ') {
        var newNoiseSeed = p.floor(p.random(10000));
        p.noiseSeed(newNoiseSeed);
      }
      if (p.keyCode == p.DELETE || p.keyCode == p.BACKSPACE) p.background(255);
    };
  };
  
  var myp5 = new p5(sketch);

  