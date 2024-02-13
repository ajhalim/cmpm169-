let video;
var btnPlay;
var btnPause;
let muteStatus = 0;


function setup(){
	//createCanvas(600, 400);
	
	canvasContainer = $("#canvas-container");
	let canvas = createCanvas(canvasContainer.width(), canvasContainer.height());
	canvas.parent("canvas-container");

	$(window).resize(function(){
		console.log("working");
		resizeCanvas(canvasContainer.width(), canvasContainer.height());
	})
	let width = canvasContainer.width();
	let height = canvasContainer.height();
	video = createVideo('./js/cat.mp4');
	video.loop();
	video.hide();
	video.volume(0.5);
	
	btnPlay = createButton('play');
	btnPlay.position(width*.1, height*2);
	btnPlay.mouseClicked(playVid);
	btnPause = createButton('pause');
	btnPause.position(width*.2, height*2);
	btnPause.mouseClicked(pauseVid);
	btnMute = createButton('mute');
	btnMute.position(width*.3, height*2);
	btnMute.mouseClicked(muteVideo);


	video.showControls();

}

function draw(){
	background('black');
	image(video, 0, 0, width, height);
}

function playVid(){
	video.play();
}

function pauseVid(){
	video.pause();
}

function muteVideo() {
	if(muteStatus == 0){
		video.volume(0);
		muteStatus = 1;
	}
	else{
		video.volume(100);
		muteStatus = 1;
	}

  }
  