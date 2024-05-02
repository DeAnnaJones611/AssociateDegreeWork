"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-05

      Project to add orders to shopping cart web storage
      Author: De'Anna Jones
      Date:   10/23/2023

      Filename: orders.js
*/

// Page Objects
	//This makes a varible equal to 
		//The element with the id of submit button 
let submitButton = document.getElementById("submitButton");

	//This makes a varible equal to 
		//The element with the id of product 
let product = document.getElementById("product");

	//This makes a varible equal to 
		//The element with the id of price 
let price = document.getElementById("price");

	//This makes a varible equal to 
		//The element with the id of quantity 
let quantity = document.getElementById("quantity");

	//This makes a varible equal to 
		//The element with the id of size 
let size = document.getElementById("size");

	//This makes a varible equal to 
		//The element with the id of color 
let color = document.getElementById("color");


// When the submit button is clicked 
	//The function is ran 
submitButton.onclick = function() {
	//This makes a varible 
   let itemTotal;
   // Increase the total items in the shopping cart by 1
		//If the sessionStorage can get an item 
			//With the name of items in Cart 
   if (sessionStorage.getItem("itemsInCart")) {
		//Makes the item total eqaul to 
			//Paseing as an interger
			//Form the value of the sessionStorage with the name of Items in cart
			//and then adding one 
      itemTotal = parseInt(sessionStorage.getItem("itemsInCart")) + 1;
	  
		//Else nothing is there fir sessionStorage get item 
   } else {
	   //adds one to the item total 
      itemTotal = 1;
   }

   
   // Store the number of items in the shopping cart
		//This sets sessionStorage items 
			//With the name of Items in cart 
			//And the item total 
   sessionStorage.setItem("itemsInCart", itemTotal);
   
   // Create a text string describing the product added to the cart
		//This makes a varible equal to 
				//The product value with an &
   let itemText = product.value + " & ";
		
		//The varible is equal to the price value and the & sign 
   itemText += price.value + " & ";
   
		//The varible is eqaul to the quanity value and the & sign 
   itemText += quantity.value + " & ";
		
		//The varible is eqaul to the size value  and the & sign 
   itemText += size.value + " & ";
   
		//The vairblr is eqaul to the color value and the & sign 
   itemText += color.value;

   // Create a new shopping cart storage item with the key name "cartItem" plus the item number
		//This sets an item in the sessionStorage 
			//With the name of cart item and the item total
			//And the value of the of the item text 
   sessionStorage.setItem("cartItem" + itemTotal, itemText);
   
}