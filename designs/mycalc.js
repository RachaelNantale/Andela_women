//This function takes the two inputs and sums them up
function add(num1, num2) { 
    var sum;

    sum = (Number(num1) + Number(num2)); //The values entered into the text fields have to be converted to a number data type

    document.getElementById("sum").innerText = sum; //The value of the sum is set here
}

//An event listener that executes our addition once the addition button is clicked
document.getElementById("addButton").onclick = function() {
    var x = document.getElementById("addNum1").value; //Extracting the value of the first entered input from the text field
    var y = document.getElementById("addNum2").value; //Extracting the value of the second entered input from the text field.

    add(x, y);
};


//This function takes the two inputs and subtracts the second input from the first input
function subtract(num1, num2) { 
    var subtraction;

    subtraction = (Number(num1) - Number(num2)); //The values entered into the text fields have to be converted to a number data type

    document.getElementById("subtraction").innerText = subtraction; //The value of the subtraction is set here
}

//An event listener that executes our subtraction once the subtraction button is clicked
document.getElementById("subtractButton").onclick = function() {
    var x = document.getElementById("subtractNum1").value; //Extracting the value of the first entered input from the text field
    var y = document.getElementById("subtractNum2").value; //Extracting the value of the second entered input from the text field.

    subtract(x, y);
};


//This function takes the two inputs and multiplies them
function multiply(num1, num2) { 
    var product;

    product = (Number(num1) * Number(num2)); //The values entered into the text fields have to be converted to a number data type

    document.getElementById("product").innerText = product; //The value of the product is set here
}

//An event listener that executes our subtraction once the subtraction button is clicked
document.getElementById("multiplyButton").onclick = function() {
    var x = document.getElementById("multiplyNum1").value; //Extracting the value of the first entered input from the text field
    var y = document.getElementById("multiplyNum2").value; //Extracting the value of the second entered input from the text field.

    multiply(x, y);
};


//This function takes the two inputs and divides the first input by the second input
function divide(num1, num2) { 
    var quotient;

    quotient = (Number(num1) / Number(num2)); //The values entered into the text fields have to be converted to a number data type

    document.getElementById("quotient").innerText = quotient; //The value of the quotient is set here
}

//An event listener that executes our subtraction once the subtraction button is clicked
document.getElementById("divideButton").onclick = function() {
    var x = document.getElementById("divideNum1").value; //Extracting the value of the first entered input from the text field
    var y = document.getElementById("divideNum2").value; //Extracting the value of the second entered input from the text field.

    divide(x, y);
};