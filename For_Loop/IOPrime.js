//Extend the program to take a range of number as input and output the Prime

let number=30;
for(let i = 1; i<= number;i++){
    let count = 0;
    for (let j = 1;j <= i;j++){
        if (i % j == 0){
            count = count + 1;      
        }
    }
    if(count == 2){
        console.log(i," is a Prime Number");
    }
}
