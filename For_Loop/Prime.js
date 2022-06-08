//Write a program that takes a input and determines if the number is a prime.

let number=3;
let count=0;
for (var i = 1;i <= number;i++){
    if (number % i == 0){
        count = count + 1;      
    }
}
if(count == 2){
    console.log(number," is a Prime Number");
}
else{
    console.log(number," is not a prime number");
}