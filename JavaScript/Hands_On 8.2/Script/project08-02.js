"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-02

      Project to add balls bouncing within a container
      Author: De'Anna Jones
      Date:  10/16/2023

      Filename: project08-02.js
*/

/*---------------- CONSTANTS ---------------------*/

//This makes the constant radius of 60
const BALL_RADIUS = 60;

//This makes a cosntant height of 400
const BOX_HEIGHT = 400;

//This makes a constant width of 800
const BOX_WIDTH = 800;

/*--------------- Object Code --------------------*/
//This creates a varible named box
	//With the following attruibes
	//Of width, heigh,x position, and y posistion
let box = {
   width: BOX_WIDTH,
   height: BOX_HEIGHT,
   xPos: 0,
   yPos: 0
}

/* Constructor function for the ball object class */
//This function makes the ball object
	//And passes the size through
function ball(size) {
   this.radius = size;
   this.xPos = null;
   this.yPos = null;
   this.xVelocity = null;
   this.yVelocity = null;
}

/* Move the ball, reversing direction when it hits a ball */
//This makes ball have the prototype attirbute using the within 
	//To call the function by passing the containter object throught
ball.prototype.moveWithin = function(container) {
	//This creates a varible
		//That makes the ball's top equal to its y poition
      let ballTop = this.yPos;
	  
	  //This creates a vairble
		//That makes the ball's left eqault to its x postion
      let ballLeft = this.xPos;   
	  
	  //This creates a varible 
		//That make sthe ball's bottom  equal to 
		//The y positon and the rabius 
      let ballBottom = this.yPos + this.radius;
	  
	  //This creates a varible 
		//That makes the ball's right equal to 
		//The x postion and the radius 
      let ballRight = this.xPos + this.radius;


		//If the ball's top greater than 0 
			//And the ball's bottom is less than container's height 
			//Then the code is ran 
      if (ballTop < 0 || ballBottom > container.height) {
		  //The container y postion is increased 
			//By the its y velocity
         container.yPos += this.yVelocity; 
		 //The y velocity is then made equal to 
			//The negitive to the velocity
         this.yVelocity = -this.yVelocity;
      }
	  
	  //If the ball's rigth is less than 0
		//And the ball's right is less than the constainer's width 
		//Then the code is ran 
      if (ballLeft < 0 || ballRight > container.width) {
		  //The container  x postion is increased
			//By its x velocity 
         container.xPos += this.xVelocity; 
		 //The x Velocity is then made eqautl to 
			//The oppostie to it self 
         this.xVelocity = -this.xVelocity;
      } 

		//The y velocity is 
			//Then is added to the y postion 
      this.yPos += this.yVelocity;   
	  
	  //The x velocity is	
		//Then added to the x postion 
      this.xPos += this.xVelocity

};





/*---------------Interface Code -----------------*/

// Reference to the container box
	//This creates a varible 
		//That gets the value of the element 
		//With the id of box 
let boxImage = document.getElementById("box");

	//This makes the box's width
		//Eqaul to the cosntant box width 
boxImage.style.width = BOX_WIDTH + "px";

	//This makes the box's heigth 
		//Equal to the cosntant box height 
boxImage.style.height = BOX_HEIGHT + "px";

	//This makes the box's top 
		//Equal to 0px
boxImage.style.top = "0px";
	//This makes the box's left size	
		//Equal to 0px 
boxImage.style.left = "0px"

// Reference to the Add Ball button
	//This makes a varible
		//Equal to the element with the id of addBall
let addBall = document.getElementById("addBall");


//When the addBalls  is clicked
	//The function is called 
	//This makes a div in the shape of a ball 
		//That will move around in the box screen 
addBall.onclick = function() {
      
	  //This creates a varible	
		//That gets the value of the element with the id of div 
   let ballImage = document.createElement("div");
   
	//This makes the class name equal to ball 
   ballImage.className = "ball";
   
   //This makes the ball's width 
		//Equal to the constant ball width 
   ballImage.style.width = BALL_RADIUS + "px";
   
   //This makes the size of the left of the ball	
		//Eqaul to the box's width minus the ball radius divided by 2 
		//Makes the the amount of pixels 
   ballImage.style.left = (BOX_WIDTH - BALL_RADIUS)/2 + "px";
   
   //This makes the size of the top of the ball	
		//Equal to the box's height subtracted the ball's radius divided by 2
		//Makes the amount of pixels 
   ballImage.style.top = (BOX_HEIGHT - BALL_RADIUS)/2 + "px";
   
   // Append the ball image to the box
   boxImage.appendChild(ballImage);     
   
   // Create a new ball
		//This makes a varible from a new Ball object 
			//Passing the ball radius constant through 
   let newBall = new ball(BALL_RADIUS);
   
   //The new ball's y postion is
		//The box's height subtracted the ball radius
		//Divided by 2 
   newBall.yPos = (BOX_HEIGHT - BALL_RADIUS)/2;  

	//The new ball's x postion is 
		//The box's width subtracted the ball's radius
		//Divided by 2
   newBall.xPos = (BOX_WIDTH - BALL_RADIUS)/2;
   
   //The new ball's y velocity is randomly pick 
		//between the -10 and 10 
   newBall.yVelocity = rand(-10, 10);
   
   //The new ball's x velocity is randomly pick 
		//Between the -10 and 10 
   newBall.xVelocity = rand(-10, 10);

   
  //When the window set in intervals 
		//The function is ran 
   window.setInterval(function() {
	   //This makes the new ball move 
			//In the box object
      newBall.moveWithin(box);
	  
		//This makes the style of the top of the ball
			//Eqaul to the new ball object y postion 
      ballImage.style.top = newBall.yPos + "px";     
		
		//This makes the style of the left of the ball 
			//Eqaul to the new ball object  x postion 
      ballImage.style.left = newBall.xPos + "px";

      //This makes the style of the top of the box
		//Eqaul to to the box's y postion 
      boxImage.style.top = box.yPos + "px";
	  
	  //This makes the style of the left of the box
		//Equal to the x postion 
      boxImage.style.left = box.xPos + "px";
   }, 25);
  //The 25 is the the amount of time the intervals are checked 
   
};


/* Function to return a random value between minVal and maxValue */
//When the rand funtion is called 
	//With two vaues passed through 
	//The code is ran 
function rand(minVal, maxVal) {
	//This creates a varible 
		//Eqaul to maxValue subtracting the minumal value adding one 
   let size = maxVal - minVal + 1;
   
   //The return value
		//Of the minVal adding the size mulitplied 
		//by the random value 
   return minVal + size*Math.random();
}