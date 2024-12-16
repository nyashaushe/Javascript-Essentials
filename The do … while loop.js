//The syntax of the do ... while loop looks as follows:

do {
    code block
} while(condition);

//

let isOver;
let counter = 1;
 
do {
    isOver = !confirm(`[${counter++}] Continue the loop?`);
} while (!isOver);


//
let condition = false;
 
while (condition) {
    console.log("A while loop iteration."); // never executed
}
 
do {
    console.log("A do ... while loop iteration."); // executed once
} while (condition);
