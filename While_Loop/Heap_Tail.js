let Head_count=0;
let Tail_count=0;

do{
    var toss = Math.random() * 2;
    var coinflip = Math.floor(toss)
    console.log(coinflip);
    if(coinflip==0){
        Tail_count++;
    }
    else{
        Head_count++;
    }
}while(Tail_count!=11&&Head_count!=11);
console.log(Tail_count);
console.log(Head_count)
if(Head_count==11){
    console.log("Head");
}
else{
    console.log("Tail");
}