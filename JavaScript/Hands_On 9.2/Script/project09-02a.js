"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-02

      Project to read field values from web storage
      Author: De'Anna Jones
      Date:  10/23/2023

      Filename: project09-02a.js
*/

/* Page Objects */

//This section gets the input form the form 

	//This creates a varible 
		//Equal to the element with the id of  riderName
let riderName = document.getElementById("riderName");

	//This creates a varible 
		//Equal to the element with the id of Age group
let ageGroup = document.getElementById("ageGroup");

	//This creates a varible 
		//Equal to the element with the id of  bike option 
let bikeOption = document.getElementById("bikeOption");

	//This creates a varible 
		//Equal to the element with the id of  route option
let routeOption = document.getElementById("routeOption");

	//This creates a varible 
		//Equal to the element with the id of accOption
let accOption = document.getElementById("accOption");

	//This creates a varible 
		//Equal to the element with the id of  region 
let region = document.getElementById("region");

	//This creates a varible 
		//Equal to the element with the id of miles 
let miles = document.getElementById("miles");

	//This creates a varible 
		//Equal to the element with the id of comments 
let comments = document.getElementById("comments");



//When the element with the id of submitButton 
	//Is clicked then the funtion is ran 
document.getElementById("submitButton").onclick = showData;


//When the function of showdata is called
	//The code below is ran 
function showData() {

	//This section makes the inputs from the form 
		//Equal to items in the sessionStorage object 
		//In the sessionStorage Object
			//an item is set with 
			//The name as riderName
			//And the value from the varible with the same name 
   sessionStorage.setItem("riderName", riderName.value);
   

		//In the sessionStorage Object
			//an item is set with 
			//The name as ageGroup
			//And the value from the varible with the same name
   sessionStorage.setItem("ageGroup", ageGroup.value);
   

		//In the sessionStorage Object
			//an item is set with 
			//The name as bikeOption
			//And the value from the varible with the same name
   sessionStorage.setItem("bikeOption", bikeOption.value);
   

		//In the sessionStorage Object
			//an item is set with 
			//The name as routeOption
			//And the value from the varible with the same name
   sessionStorage.setItem("routeOption", routeOption.value);
   

		//In the sessionStorage Object
			//an item is set with 
			//The name as accOption
			//And the value from the varible with the same name
   sessionStorage.setItem("accOption", accOption.value); 


		//In the sessionStorage Object
			//an item is set with 
			//The name as region
			//And the value from the varible with the same name
   sessionStorage.setItem("region", region.value);
   

		//In the sessionStorage Object
			//an item is set with 
			//The name as miles
			//And the value from the varible with the same name 
   sessionStorage.setItem("miles", miles.value);
   

		//In the sessionStorage Object
			//an item is set with 
			//The name as comments  
			//And the value from the varible with the same name
   sessionStorage.setItem("comments", comments.value);
   
   
   
   
   //This refrence the other page to print out the results
		//Which uses the other java script page to finsh the code 
   location.href = "project09-02b.html"
}
