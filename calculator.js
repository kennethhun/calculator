const buttons = document.querySelectorAll(".num"); 
const opButtons = document.querySelectorAll(".op");
for (let button of buttons) {
    button.addEventListener('click', display);
}  

for (let button of opButtons) {
    button.addEventListener('click', operationDisplay);
}

//use operation to recognize +,-,*,/
var operation = "";

//kinda obvious really
function clearScreen() {
    document.getElementById("output").value = "";
}

//displays inputted number on screen
function display(event) {
    var number = event.currentTarget.innerText;
    document.getElementById("output").value += number;
}

//sets operation and then prints to screen
function operationDisplay(event) {
    var oper = event.currentTarget.innerText;
    if (oper == "=") {
        calculate();
    }
    else {
        operation = oper;
        document.getElementById("output").value += (" " + oper + " ");
    }
}

/*
main calculation function, divided by main operations, currently only works with simple operations like a+b
takes the display text and turns it into an array, extracting numbers into individual array elements by using
operations as seperators

potential way of incorporating larger equations is to turn the operations variable into a 2d array that can 
store both the operation and priority as well as it's order
*may have issues with dividing the numbers in an equation into separate array elements
*/
function calculate() {
    const displayWhole = document.getElementById("output").value;

    switch(operation) {
        case "+":
            var numArray = displayWhole.split('+');
            var answer = Number(numArray[0]) + Number(numArray[1]);

            document.getElementById("output").value = answer;
            break;
        case "-":
            var numArray = displayWhole.split('-');
            var answer = Number(numArray[0]) - Number(numArray[1]);

            document.getElementById("output").value = answer;
            break;
        case "*":
            var numArray = displayWhole.split('*');
            var answer = Number(numArray[0]) * Number(numArray[1]);

            document.getElementById("output").value = answer;
            break;
        case "/":
            var numArray = displayWhole.split('/');
            var answer = Number(numArray[0]) / Number(numArray[1]);

            document.getElementById("output").value = answer;
            break;
    }
}
