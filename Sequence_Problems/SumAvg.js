let sum=0;
console.log("Random numbers are : ")
for(i=0;i<5;i++)
{
        digit=Math.floor(Math.random()*100);
        console.log(digit);
        sum=sum+digit

}
let avg=sum/5;
console.log("SUM of 2 Digit 5 values : "+sum)
console.log("Average of sum is : "+avg);
