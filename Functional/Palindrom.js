//Write a function to check if the two numbers are Palindromes

console.log(" Cheking Two numbers are Palindrome number");
const prompts=require("prompt-sync")();
let number1 = prompts("Enter First Number ");
let number2 = prompts("Enter Second Number ");

palindrome(number1,number2);

function palindrome(){
    let R1,R2;
    let Sum1 = 0,Sum2=0;
    let temp1 = number1;
    let temp2=number2
    while(number1 > 0 && number2>0){
        R1 = number1 % 10; 
        R2=number2%10; 
        Sum1 = (Sum1* 10) + R1;        
        Sum2 = (Sum2* 10) + R2;
        number1 = parseInt(number1 / 10); 
        number2 = parseInt(number2 / 10);        

    }
    if(Sum1 == temp1 && Sum2==temp2){
        console.log("The given numbers are palindrome")
    }
    else{
        console.log("The given number are not a Palindrome")
    }
}