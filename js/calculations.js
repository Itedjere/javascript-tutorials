import Mathematical from "./mathematicalFunctions.js";

// Instantiate the class for addition
const calculate = new Mathematical(5, 8);

// Let's do addition
document.getElementById("calculationType").innerHTML = "Addition";
document.getElementById("result").innerHTML = calculate.addition();

// Let's do subtraction
document.getElementById("calculationType").innerHTML = "Subtraction";
document.getElementById("result").innerHTML = calculate.subtraction();

// Let's do division
document.getElementById("calculationType").innerHTML = "Division";
document.getElementById("result").innerHTML = calculate.division();

// Let's do Raise To Power
document.getElementById("calculationType").innerHTML = "Raise To Power";
document.getElementById("result").innerHTML = calculate.raiseToPower();
