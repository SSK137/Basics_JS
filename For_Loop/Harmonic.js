//Write a program that takes a command-line argument n and prints the nth harmonic number.

console.log("Printing the Nth Harmonic Number");
let number = 8;
let harmonicNumbe = 1;
for(i = 1;i<=number;i++){
    harmonicNumbe = (harmonicNumbe + 1 / (i + 1));
}
console.log(harmonicNumbe);