// CALCULATOR PROGRAM 

const display = document.getElementById("display")

function appendToDisplay(input){
    display.value += input
}

function clearDislpay(){
    display.value = "";
}

function calculate(){
        display.value = eval(display.value);
}