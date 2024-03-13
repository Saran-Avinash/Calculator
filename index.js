let display = document.getElementById("display");


function appendToDisplay(element){
    display.value += element;
 }

 function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch{
        display.value = "Error";
    }
 }

function c(){
    display.value = "";
}