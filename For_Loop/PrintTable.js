//Write a program that takes a command-line argument n and prints a table of the powers of 2 
//that are less than or equal to 2^n.

let power = 5;
let result=1;
console.log("Value of 2 to the power "+power);
for(let i = 1; i <= power;i++){
    result=result*2;    
}
console.log(result);