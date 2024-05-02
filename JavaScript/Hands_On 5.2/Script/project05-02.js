"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-02

      Project to move images between a photo bucket and photo list.
      Author: De'Anna Jones
      Date:   9/18/23

      Filename: project05-02.js
	  
	 
*/


//Declares all the nodes
let images = document.getElementsByTagName("img");
let photoBucket = document.getElementById("photo_bucket");
let photoList = document.getElementById("photo_list");

//Loops through the pictures
for (let i=0; i < images.length; i++){
	//The image is clicked
		images[i].onclick = function() {
			//Checks if it in the photo bucket
			if(this.parentElement.id === "photo_bucket"){
				let newItem = document.createElement("li");
				photoList.appendChild(newItem);
				newItem.appendChild(this);
			}//End of If
			//If it where the numbers are
			else{
				let oldItem = this.parentElement;
				photoBucket.appendChild(this);
				oldItem.parentElement.removeChild(oldItem);
			}//End of Else
			
		}//End of Function
	
}//for statement



