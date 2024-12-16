switch (expression) {
    case first_match:
        code
        break;
    case second_match:
        code
        break;
    default:  
        code
}

//It starts with the switch keyword followed by the expression to be evaluated in parentheses. 
//Next is the code block that has one or more case clauses (technically it’s possible to have zero cases, 
//but this wouldn’t be very useful) followed directly by a value corresponding to this case and a colon character. 
//After the colon, there is a block of code that will be executed when the expression is evaluated to this case value.
// The block of code optionally ends with the break keyword. All cases follow the same template.

//Additionally, a special case named default can be present (by convention placed on the end of the switch statement; however, it isn’t required). 
//The default case is executed when none of the cases matches the expression. 
//The evaluation itself is made with a strict comparison operator (===) so not only must the value match, but also the type of case value and the expression.



let gate = prompt("Choose gate: a, b, or c");
let win = false;
 
switch (gate) {
    case "a":
        alert("Gate A: empty");
        break;
    case "b":
        alert("Gate B: main prize");
        win = true;
        break;
    case "c":
        alert("Gate C: empty");
        break;
    default:
        alert("No gate " + String(gate));
}
 
if (win) {
    alert("Winner!");
}
