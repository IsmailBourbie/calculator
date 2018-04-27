/*global console, alert*/
var firstNum = 0,
    lastNum = 0,
    isFirst = true,
    isOperated = false,
    result = 0,
    isDoted = false,
    operation = "+";
function supp() {
    "use strict";
    document.getElementById("output").innerHTML = "";
    document.getElementById("input").innerHTML = "";
    document.getElementById("equale").disabled = false;
    result = 0;
    firstNum = 0;
    lastNum = 0;
    isFirst = true;
}
function dispalyInput(oper) {
    "use strict";
    if (isOperated === true) {
        var output = document.getElementById("output").innerHTML;
        document.getElementById("input").innerHTML += " " + output + " " + oper;
    }
}
function button(numbre) {
    "use strict";
    var output = document.getElementById("output");
    if (output.innerHTML.length <= 9) {
        if (document.getElementById("equale").disabled === true) {
            supp();
        }
        output.innerHTML += numbre;
        document.getElementById("equale").disabled = false;
        isOperated = false;
    }
}
function calculat() {
    "use strict";
    switch (operation) {
    case "+":
        result += parseFloat(firstNum, 10) + parseFloat(lastNum, 10);
        firstNum = 0;
        break;
    case "-":
        result -= parseFloat(firstNum, 10) + parseFloat(lastNum, 10);
        firstNum = 0;
        break;
    case "*":
        result *= parseFloat(firstNum, 10) * parseFloat(lastNum, 10);
        firstNum = 1;
        break;
    case "/":
        result /= parseFloat(firstNum, 10) * parseFloat(lastNum, 10);
        firstNum = 1;
        break;
    }
    isFirst = false;
    isDoted = false;
}
function equale() {
    "use strict";
    var output = document.getElementById("output");
    if (output.innerHTML === "") {
        lastNum = result;
    } else {
        lastNum = output.innerHTML;
    }
    if (operation === "*" || operation === "/") {
        firstNum = 1;
    } else {
        firstNum = 0;
    }
    calculat();
    document.getElementById("equale").disabled = true;
    output.innerHTML = "=" + result;
    isDoted = false;
    document.getElementById("input").innerHTML = "";
    operation = "+";
    firstNum = 0;
    result = 0;
    lastNum = 0;
}
function sum() {
    "use strict";
    var output = document.getElementById("output");
    if (isOperated === false && output.innerHTML !== "") {
        firstNum = parseFloat(output.innerHTML.replace("=", ""), 10);
        calculat();
        lastNum = 0;
        operation = "+";
        isOperated = true;
        dispalyInput("+");
        output.innerHTML = "";
        document.getElementById("equale").disabled = false;
    }
}
function min() {
    "use strict";
    var output = document.getElementById("output");
    if (isOperated === false && output.innerHTML !== "") {
        firstNum = parseFloat(output.innerHTML.replace("=", ""), 10);
        calculat();
        lastNum = 0;
        operation = "-";
        isOperated = true;
        dispalyInput("-");
        output.innerHTML = "";
        document.getElementById("equale").disabled = false;
    }
}
function mul() {
    "use strict";
    var output = document.getElementById("output");
    if (isOperated === false && output.innerHTML !== "") {
        firstNum = parseFloat(output.innerHTML.replace("=", ""), 10);
        calculat();
        lastNum = 1;
        operation = "*";
        isOperated = true;
        dispalyInput("*");
        output.innerHTML = "";
        document.getElementById("equale").disabled = false;
    }
}
function dev() {
    "use strict";
    var output = document.getElementById("output");
    if (isOperated === false && output.innerHTML !== "") {
        firstNum = parseFloat(output.innerHTML.replace("=", ""), 10);
        calculat();
        lastNum = 1;
        operation = "/";
        isOperated = true;
        dispalyInput("/");
        output.innerHTML = "";
        document.getElementById("equale").disabled = false;
    }
}
function delet() {
    "use strict";
    var output = document.getElementById("output");
    if (output.innerHTML !== "") {
        output.innerHTML = output.innerHTML.substring(0, output.innerHTML.length - 1);
        isDoted = false;
    }
}
function dote() {
    "use strict";
    var output = document.getElementById("output");
    if (isDoted === false && (output.innerHTML.indexOf(".") <= -1)) {
        output.innerHTML += ".";
        isDoted = true;
    }
    document.getElementById("equale").disabled = false;
}
function negative() {
    "use strict";
    var output = document.getElementById("output"),
        negativeNum;
    if (output.innerHTML !== "") {
        negativeNum = parseFloat(output.innerHTML.replace("=", ""));
        output.innerHTML = negativeNum * (-1);
    }
    document.getElementById("equale").disabled = false;
    isDoted = false;
}
document.onkeyup = function (event) {
    "use strict";
    var code = event.keyCode;
    switch (code) {
    case 48:// num 0
        button(0);
        break;
    case 49:// num 1
        button(1);
        break;
    case 50:// num 2
        button(2);
        break;
    case 51:// num 3
        button(3);
        break;
    case 52:// num 4
        button(4);
        break;
    case 53:// num 5
        button(5);
        break;
    case 54:// num 6
        button(6);
        break;
    case 55:// num 7
        button(7);
        break;
    case 56:// num 8
        button(8);
        break;
    case 57:// num 9
        button(9);
        break;
    case 13:// equale enter
        equale();
        break;
    case 27:// clear
        supp();
        break;
    case 8:// del
        delet();
        break;
    default:
        //alert("Fuck");
    }
};
document.onkeypress = function (e) {
    "use strict";
    var code = e.keyCode;
    switch (code) {
    case 43:// Add
        sum();
        break;
    case 45:// minus
        min();
        break;
    case 42:// multiple
        mul();
        break;
    case 47:// devision
        dev();
        break;
    case 61:// equale
        equale();
        break;
    case 46:// dote
        dote();
        break;
    default:
            
    }
    
};
