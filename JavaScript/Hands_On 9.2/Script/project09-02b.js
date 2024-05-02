"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-01

      Project to read field values from session storage
      Author: De'Anna Jones
      Date:   10/23/2023

      Filename: project09-02b.js
*/

/* Page Objects */

//This section gets the places 
	//on the page to put the results form the other page
	
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





//This section prints out the values form the other page

//The contents of rider name
	//Equal to the item in sessionStorage
	//With the name of riderName 
riderName.textContent = sessionStorage.getItem("riderName");

//The contents of ageGroup
	//Equal to the item in sessionStorage
	//With the name of ageGroup 
ageGroup.textContent = sessionStorage.getItem("ageGroup");

//The contents of bike option 
	//Equal to the item in sessionStorage
	//With the name of bike Option
bikeOption.textContent = sessionStorage.getItem("bikeOption");

//The contents of route options 
	//Equal to the item in sessionStorage
	//With the name of route option 
routeOption.textContent = sessionStorage.getItem("routeOption");

//The contents of accOption
	//Equal to the item in sessionStorage
	//With the name of accOption
accOption.textContent = sessionStorage.getItem("accOption");

//The contents of region 
	//Equal to the item in sessionStorage
	//With the name of region 
region.textContent = sessionStorage.getItem("region");

//The contents of miles 
	//Equal to the item in sessionStorage
	//With the name of miles
miles.textContent = sessionStorage.getItem("miles");

//The contents of comments 
	//Equal to the item in sessionStorage
	//With the name of comments 
comments.textContent = sessionStorage.getItem("comments");
