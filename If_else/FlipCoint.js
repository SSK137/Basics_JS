//Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly.
// Assumed=> head=0 ,tail=1;

// randomly generating no 
let coin=Math.floor(Math.random()*2)
console.log(coin);

// cheking coin get head or tail
if(coin==0)
{
    console.log("Heads");
}
else
{
    console.log("Tail");
}