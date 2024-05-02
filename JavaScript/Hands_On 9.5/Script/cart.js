"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-05

      Project to add orders to shopping cart web storage
      Author: De'Anna Jones
      Date:   10/23/2023

      Filename: cart.js
*/

// Page Objects
let cartContainer = document.getElementById("cartContainer");

//When the window is loaded 
	//The function of displayCart 
window.addEventListener("load", displayCart);

// Function to construct the table containing items placed in the shopping cart
function displayCart() {
   
   // Check that there are items in the shopping cart
		//If there is an item gotten form the sesstionStorage 
			//Has the name of ItemsInCart 
   if (sessionStorage.getItem("itemsInCart")) {
			//Creates a varible equal to 
				//The item from the sessionStorage 
				//With the name of items in cart 
      let itemTotal = sessionStorage.getItem("itemsInCart");
      
      // Create the code for the table and the table header
			//This makes a varible		
				//Eqaul to the element of table 
      let cartTable = document.createElement("table");
	  
	  //This makes the table id equal to the cartTable 
      cartTable.id = "cartTable";
	  
	  //Makes a varible 
			//Equal to the following string 
      let tableHeader = `<tr><th>Product</th><th>Description</th><th>Qty</th><th>Price</th>`;
      
	  //Makes the innerHTML eqaul to the header 
	  cartTable.innerHTML = tableHeader;
      
      // For each item in the shopping cart, write a table row
      for (let i = 1; i <= itemTotal; i++) {
         
         // Retrieve information about a product added to the cart
			//Makes a varible equal to 
				//The sessionStorage item of the index split by the & symbol 
         let productArr = sessionStorage.getItem("cartItem" + i).split(" & ");
		 
			//Makes a varible eqaul to 
				//The element of table row 
         let newRow = document.createElement("tr");
         
         // Display the name of the product
			//This makes a varible eqaul to 
				//The element of table data 
         let productCell = document.createElement("td");
		 
			//This makes the first part of the table 
				//Eqaul to the 1st part of the product Array
         productCell.textContent = productArr[0];
			//This adds the cell to the row 
         newRow.appendChild(productCell);
         
         // Display a description of the product (size and color)
			//This makes a varible eqaul to 
				//The element of table data 
         let descriptionCell = document.createElement("td");
			//This makes the table data content 
				//Equal to the 4th and 5th part of the array with formatting 
         descriptionCell.textContent = productArr[3] + ", " + productArr[4];
			//This append the table data to the cell 
         newRow.appendChild(descriptionCell);
         
         // Display the quantity ordered
			//This makes a varible eqaul to 
				//The element of table data 
         let qtyCell = document.createElement("td");
			//This makes the table data content 
				//Eqaul to the 3rd part of the product array 
         qtyCell.textContent = productArr[2];
			//This append the cell the the row 
         newRow.appendChild(qtyCell); 
         
         // Display the price of the item
			//This makes a varible eqaul to 
				//The element of table data 
         let priceCell = document.createElement("td");
			//This makes the table data content 
				//Equal to the 2nd part of the product array 
         priceCell.textContent = productArr[1];
			//This appends cell to the row 
         newRow.appendChild(priceCell); 
         
		 //This appends the whole row to the table 
         cartTable.appendChild(newRow);
      }
      
	  //This adds the whole table to the page 
      cartContainer.appendChild(cartTable);
   }
}