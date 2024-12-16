// Code syntax

for (initialization; condition; increment) {
    block of code
}

/*
1 The for loop initialization statement

The initialization statement is executed only once, before the first loop iteration. 
Usually, it’s used to initialize (or declare and initialize) a variable that will be used as a loop counter. 
We can use any existing variable as a counter, but in general it’s good practice to declare a new one,
as this makes the code cleaner and easier to read and understand. The initialization statement is optional and can be left empty, except for ending with a semicolon.

2 The for loop condition statement

A condition statement is an expression that is evaluated to a Boolean before each loop iteration. 
If this expression is evaluated to true, the loop will execute its code. 
In the case of the condition being evaluated to false, the loop is terminated, and no more iterations will be executed, and the code execution jumps to the first statement after this for loop. The condition statement is also optional, but if left empty, it will be assumed as always true, leading to an infinite loop if no other means of exiting the loop is used.

3 The for loop increment statement

The increment statement is always executed at the end of the current loop iteration, and most of the time it’s used to increment (or decrement, depending on the need) a loop counter that is used in a condition statement. 
It can be any expression, not only incrementation/decrementation. This can also be left empty.
*/

for (let i = 0; i < 10; i++) {
    console.log(i);
}

// let i = 0; intiatialisation
//  i < 10; condition
//  i++ increment