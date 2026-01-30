/*// Operation functions
function add(a, b) {
return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
return a * b;
}

function divide(a, b) {
    if (b === 0){
    return "Error: Division by zero is not allowed";
    }
return a/b;
 }


//Main calculator function using switch
function calculator(a,b,operator){
    //Write your logic here
    
switch (operator) {
 case "+":
     return add (a, b);
 case "_":
     return subtract(a, b);
 case"*":
     return multiply(a, b);
 case "/":
     return divide(a, b);
 default:
     return "Error: Invalid operator. Use +, -, *, or /";
  }
}

console.log("10 + 5 = ", calculator(5,10,'+'))
*/
//Main calculator function
/*function calculator(a,b,operator){
    switch(operator){
        case "+":
            return a+b;
            break;
        case "-":
            return a-b;
            break;
        case "*":
            return a*b;
        case "/":
            a/b;
            break;
        default:
            return "Error: inavalid operator.use +, -, *, or/";
    }
}
console.log("10 + 5 = ",calculator(10,5,"+"));*/

//operation functions
function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    if(b===0){
        return "Error: Division by zero is not allowed";
    }
    return a/b;
}




//  Main calculator functions
function calculator(a,b,operator){
    switch(operator){
        case "+":
            return add(a,b);
        
        case "-":
            return subtract(a,b);

        case "*":
            return multiply(a,b);

        case "/":
            return divide(a,b);

        default:
            return "Error: Invalid operator. Use +, -, *, or /";
    }
}
 console.log("10 + 5 = ",calculator(10,5,"+"));