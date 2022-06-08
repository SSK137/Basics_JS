console.log("------Unit Conversion------");
const prompts=require("prompt-sync")();
let temprature= parseInt(prompts("Enter Temprature which you want ro convert "))
let ch,convert,choice;
unitConversion(temprature);

//Function for the conversion
function unitConversion(temprature){
ch =parseInt(prompts("Enter your choice 1.C` To F \t2. F` to C \t"))
do{
switch(ch)
{
    case 1:
        console.log("\nC` To F`");
        convert = (temprature * 9 / 5) + 32;
        console.log("\n"+temprature+"C To "+convert +"F");
        break;

    case 2:
        console.log("F` To C`");
        convert = (temprature - 32) * 5 / 9;
        console.log("\n"+temprature+"F To "+convert+"C");
        break;

        }
        choice=parseInt(prompts("\n do you want to perform more Coversion operation  IF yes pree 1 otherwise 0"))
    }while(choice!=0&&choice<30)
}