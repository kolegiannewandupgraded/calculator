let displayValue=document.querySelector(".resultScreen");
let prevValue=document.querySelector(".resultScreen1");
let operand;
let firstNum=[];
let result;
let operator;
let numArr="";
let prevOperator;

let nums=document.querySelectorAll(".key");
nums=Array.from(nums);
nums.forEach(item => {
        item.addEventListener("click", () => {
            firstNum.push(item.value);
            displayValue.value=firstNum.join("");
        });
    });

operand=document.querySelectorAll(".operand");
operand=Array.from(operand);
operand.forEach(item=>{
    item.addEventListener("click", ()=>{
        if (numArr.length==0){
            prevOperator=item.id;
            numArr+=firstNum.join("") +" "+ item.value;
            prevValue.value=numArr;
            firstNum=[];
            displayValue.value="0";
        }else{
            
            numArr=numArr.split(" ");
            console.log(numArr);
            console.log(prevOperator);
            result= eval(prevOperator + "(+numArr[0], +displayValue.value)");
            prevValue.value=result;
            firstNum=[];
            displayValue.value="0";
            numArr=result.toString() +" "+ item.value;
            prevOperator=item.id;
            prevValue.value=numArr;
        }
        
        });
    });
let clear=document.querySelector("#clear");
clear.addEventListener("click", ()=>{
    prevValue.value=0;
    displayValue.value=0;
    firstNum=[];
    numArr="";
});
let equal=document.querySelector("#equal");
equal.addEventListener("click", ()=>{
    numArr=numArr.split(" ");
    result= eval(prevOperator + "(+numArr[0], +displayValue.value)");
    prevValue.value="0";
    firstNum=[];
    displayValue.value=result;
    numArr="";
    firstNum=(displayValue.value).toString().split("");
    
})

function add(a,b){
    return a+b;
}
function multiply(a,b){
    return a*b.toFixed(2);
}
function divide(a,b){
    return (a/b).toFixed(2);
}
function subtract(a,b){
    return a-b;
}