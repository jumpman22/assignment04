/*eslint-env browser*/

function display_menu() {
    "use strict";
    window.console.log("Welcome to the Inventory Management System");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.console.log("view - View all products");
    window.console.log("update - Update product stock quantity");
    window.console.log("exit - Exit the program");
    window.console.log("");
}

function update(productList) {
	"use strict";
	var skuInput;
	skuInput = window.prompt('Enter a sku number');
	for(var i = 0; i < productList.length; i++) {
		if(skuInput === productList[i].sku) {
				console.log("That is correct!");
			} else {
				console.log("You entered the wrong sku number.");
				update();
			}
	}

}

function view(productList) {
    "use strict";
		//SORTS PRODUCTLIST BY SKU
		productList.sort(function (a, b) {
			return a.sku - b.sku;
		});
		//DISPLAY PRODCUTS TO CONSOLE	
		for(var i = 0; i < productList.length; i++) {
					console.log(productList[i].sku + " " + productList[i].product + " " + '(' + productList[i].quantity + ')' + " " + '$' + productList[i].price);
					}
		window.console.log("");
}

function main() {
		var productList;

		display_menu();

		productList = [
									{sku: 3214, product: 'muffler', quantity: 15, price: 69.99},
									{sku: 4712, product: 'wheel', quantity: 8, price: 179.99},
									{sku: 1369, product: 'shifter', quantity: 10, price: 54.49},
									{sku: 6371, product: 'tire', quantity: 22, price: 119.48},
									{sku: 5934, product: 'axel', quantity: 18, price: 79.98},
									];
		while (true) {
				var command = window.prompt("Enter command");
				if (command !== null) {
						if (command === "view") {
								view(productList);
						} else if (command === "update") {
								update(productList);
						} else if (command === "exit") {
								break;
						} else {
								window.alert("That is not a valid command.");
						}
				} else {
						break;
				}
		}
		window.console.log("Program terminated.");
}	

main();