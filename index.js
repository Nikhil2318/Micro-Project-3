const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function reset(){
    display.value = "0";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}

function del(){
    display.value = display.value.slice(0,-1);
    
}