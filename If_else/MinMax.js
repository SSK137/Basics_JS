//Write a program that reads 5 Random 3 Digit values 
//and then outputs the minimum and the maximum value.
let Arr=[];
let temp=0;

while(Arr.length<5){
    let number = Math.floor(Math.random() * 1000);
    if(number>99&&number<1000){
        Arr.push(number);
    }
}
console.log(Arr)
for(i=0;i<Arr.length;i++){
    for(j=i+1;j<Arr.length;j++){
        if(Arr[i]>Arr[j]){
            temp=Arr[j];
            Arr[j]=Arr[i];
            Arr[i]=temp;
        }
    }
}
console.log("\n");
console.log(Arr);
console.log("Minimum Number :"+Arr[0]);
console.log("Maximum Number :"+Arr[4]);