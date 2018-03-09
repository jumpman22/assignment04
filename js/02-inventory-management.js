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
    var skuInput, skuProduct, quantity;
    skuInput = parseInt(window.prompt("Enter sku number for product"), 10);
    for (var i = 0; i < productList.length; i += 1) {
        if (skuInput === productList[i][0]) {
            skuProduct = productList[i][0];
        }
    }
    if (skuInput !== skuProduct || isNaN(skuInput)) {
        window.alert("You entered an incorrect sku number.");
    } else {
        quantity = parseInt(window.prompt("Enter new product stock quantity."), 10);
        if (quantity < 0 || isNaN(quantity)) {
            window.alert("Enter a valid quantity");
        } else {
            productList.forEach(function(item) {
                if (skuInput === item[0]) {
                    item.splice(2, 1, quantity);
                }
            });
        }
    }
    if (productList) {
        localStorage.productList = JSON.stringify(productList);
    } else {
        productList = JSON.parse(localStorage.productList);
    }
    localStorage.productList = JSON.parse(localStorage.productList);
}


function view(productList) {
    "use strict";
    //SORTS PRODUCTLIST BY SKU
    productList.sort();
    //DISPLAY PRODCUTS TO CONSOLE
    productList.forEach(function(item) {
        window.console.log(item[0] + " " + item[1] + " " + "(" + item[2] + ")" + " " + item[3]);
    });
    if(productList) {
        localStorage.productList = JSON.stringify(productList);
    } else {
        productList = JSON.parse(localStorage.inventory);
    }
    window.console.log("");
}

function main() {
    var productList;

    display_menu();

    productList = [
        [3214, 'muffler', 15, '$69.99'],
        [4712, 'shifter', 8, '$169.99'],
        [1369, 'wheel', 10, '$54.99'],
        [6371, 'tire', 22, '$119.98'],
        [5934, 'axel', 18, '$79.98']
    ];

    while(true) {
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