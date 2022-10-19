/*
    COMP 125 - Winter 2022
    Student Name: Huang Sheng Wen
    Student Number: 301215574
*/
// Create the canvas
var HSWcanvas = document.createElement("canvas");
var HSWcanvasLeft = HSWcanvas.offsetLeft;
var HSWcanvasTop = HSWcanvas.offsetTop;

var HSWctx = HSWcanvas.getContext("2d");

HSWcanvas.width = 512; 
HSWcanvas.height = 480;

document.body.appendChild(HSWcanvas);

var HSWresetScore = document.createElement("input");
HSWresetScore.setAttribute("type", "button");
HSWresetScore.setAttribute("value", "RESET SCORE");
HSWresetScore.setAttribute("id", "resetScore");
document.body.appendChild(HSWresetScore);
HSWresetScore.style.marginLeft = "20px";
HSWresetScore.onclick = function resetScore() {
    HSWmonstersCaught = 0;
    reset();
}

var HSWresetSpeed = document.createElement("input");
HSWresetSpeed.setAttribute("type", "submit");
HSWresetSpeed.setAttribute("value", "RESET SPEED");
HSWresetSpeed.setAttribute("id", "resetSpeed");
HSWresetSpeed.style.marginLeft = "20px";
document.body.appendChild(HSWresetSpeed);
HSWresetSpeed.onclick = function resetSpeed() {
    //clearInterval(scheduler);
    //Start();
    reset();
}
/*
var Timer = document.createElement("div");
Timer.setAttribute("id", "timer");
Timer.style.marginLeft = "20px";
document.body.appendChild(Timer);
*/

/*
var img = document.getElementById("myImage");
img.onclick = function moveImg() {
    ++monstersCaught;
    reset();
};
*/

// Background image
var HSWbgReady = false;
var HSWbgImage = new Image();
HSWbgImage.onload = function () {
	HSWbgReady = true;
};
HSWbgImage.src = "images/background.png";

// Hero image
var HSWheroReady = false;
var HSWheroImage = new Image();
HSWheroImage.onload = function () {
	HSWheroReady = true;
};
HSWheroImage.src = "images/hero.png";

// Monster image
var HSWmonsterReady = false;
var HSWmonsterImage = new Image();

HSWmonsterImage.onload = function () {
	HSWmonsterReady = true;
    //Start();
    HSWctx.drawImage(HSWmonsterImage, HSWmonster.x, HSWmonster.y);
}

HSWmonsterImage.src = "images/monster.png";
HSWcanvas.addEventListener("click", function (e) {
    var HSWx = e.pageX - HSWcanvasLeft - 7;
    var HSWy = e.pageY - HSWcanvasTop - 7;
    console.log("X: " + HSWx, "Y: " + HSWy);

        if(   
            HSWx > ( HSWmonster.x - 30 ) || ( HSWx < HSWmonster.x + 30 ) 
           && HSWy > ( HSWmonster.y - 30 ) || ( HSWy < HSWmonster.y + 30 )
           )
        {
            //Start();
            HSWmonstersCaught++;
            //setScheduler();
            reset();
        }
}, false);

// Game object
/*
var hero = {
	speed: 256 // movement in pixels per second
}
*/
var HSWmonster = {};
var HSWmonstersCaught = 0;

// Handle keyboard controls
/*
var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);
*/

// Reset the game when the player catches a monster
var reset = function () {
	//hero.x = canvas.width / 2;
	//hero.y = canvas.height / 2;
	// Throw the monster somewhere on the screen randomly
	HSWmonster.x = 32 + Math.floor(Math.random() * (HSWcanvas.width - 64));
	HSWmonster.y = 32 + Math.floor(Math.random() * (HSWcanvas.height - 64));
    console.log(HSWmonster.x, HSWmonster.y);
};
/*
var t = 0;
var time = 3000;

function StartTime() {
    t += 1;
    time -= 100;
    Timer.textContent = `Time Left: ${ time / 100 }`;
    //console.log("Z: " + t, "time:" + time / 100);
    if (time > 0) {
    setTimeout(StartTime, time);
    
    }
};
*/
//StartTime();

function Start() {
    var HSWz = 0;
    var HSWinterval = 2000; //1000ms interval
    var HSWdecreaseBy = 50;
    var HSWscheduler = null;
    /*
    var t = 0;
    var time = 6000;
    t += 1;
    time -= 100;
    console.log("Z: " + t, "time:" + time / 100);
    if (time > 0) {
    setInterval(Start, time);
    reset();
    }
    */
    function setScheduler(){
      //scheduler = null;
      HSWscheduler = setInterval(function Start(){
        intervalTask();
        reset();
      }, HSWinterval);
    }
    
    function intervalTask() {
      
      // function that you want to execute
      console.log(HSWz += 1);
  
      console.log("current interval: " + HSWinterval);
      
      clearInterval(HSWscheduler);
      
      if(HSWinterval <= 0) {
        return;
      }
      
      HSWinterval = HSWinterval - HSWdecreaseBy;
      
      // define it again to reinitiate the interval
      setScheduler();
    }
    
    // start it when you need it to
    setScheduler();
    
};

Start();

/*
// Update game objects
var update = function (modifier) {

	if (38 in keysDown) { // Player holding up
		hero.y -= hero.speed * modifier;
	}
	if (40 in keysDown) { // Player holding down
		hero.y += hero.speed * modifier;
	}
	if (37 in keysDown) { // Player holding left
		hero.x -= hero.speed * modifier;
	}
	if (39 in keysDown) { // Player holding right
		hero.x += hero.speed * modifier;
	}
    
	// Are they touching?
	if (
		hero.x <= (monster.x + 32)
		&& monster.x <= (hero.x + 32)
		&& hero.y <= (monster.y + 32)
		&& monster.y <= (hero.y + 32)
	) {
		++monstersCaught;
		reset();
	}

};
*/
// Draw everything
var render = function () {
	if (HSWbgReady) {
		HSWctx.drawImage(HSWbgImage, 0, 0);
	}
    /*
	if (heroReady) {
		ctx.drawImage(heroImage, hero.x, hero.y);
	}
    */
	if (HSWmonsterReady) {
		HSWctx.drawImage(HSWmonsterImage, HSWmonster.x, HSWmonster.y);
	}

    	// Score
        HSWctx.fillStyle = "rgb(250, 250, 250)";
        HSWctx.font = "20px Helvetica";
        HSWctx.textAlign = "left";
        HSWctx.textBaseline = "top";
        HSWctx.fillText("Score: " + HSWmonstersCaught, 32, 32);

};

// The main game loop
var main = function () {
	var now = Date.now();
	var delta = now - then;

	//update(delta / 1000);
	render();

	then = now;

	// Request to do this again ASAP
	requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
var then = Date.now();
reset();
main();
