const display = document.getElementById("display");

function updateDisplay(value) {
    display.value += value;
}

function clr() {
    display.value = "";
}

function solve() {
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}