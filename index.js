let lengthConstant = 3.28;
let volumeConstant = 3.7854;
let massConstant = 2.20462;
document.querySelector("#figure-el").addEventListener("click", function(){
    length(this.textContent);
    volume(this.textContent);
    mass(this.textContent);
})


function length(x){
    let feet = parseFloat(x * lengthConstant).toFixed(3);
    let meters = parseFloat(x * lengthConstant).toFixed(3);
    let figure = document.querySelector("#length");
    figure.innerHTML = x + " meters = " + feet + 
    " feet | " + x + "feets = " + meters + " meters"
}

function volume(x){
    let liter = parseFloat(x * volumeConstant).toFixed(3);
    let gallon =  parseFloat(x / volumeConstant).toFixed(3);
    let figure = document.querySelector("#volume");
    figure.innerHTML = x + " liters = " + gallon + 
    " gallons | " + x + "gallons = " + liter + " liters"
}

function mass(x){
    let kilo = parseFloat(x * massConstant).toFixed(3);
    let pound =  parseFloat(x * massConstant).toFixed(3);
    let figure = document.querySelector("#mass");
    figure.innerHTML = x + " kilos = " + pound + 
    " pounds | " + x + "pounds = " + kilo + " kilos"
}