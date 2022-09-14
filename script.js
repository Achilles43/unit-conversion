// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound
const paragraph1El = document.querySelector(".paragraph1");
const paragraph2El = document.querySelector(".paragraph2");
const paragraph3El = document.querySelector(".paragraph3");
const mainInput = document.getElementById("main-input");
const mainBtn = document.getElementById("main-btn");

mainInput.onkeydown = function(event){
    const code = event.which || event.keyCode;
    if (code === 189 || code === 69) {
        event.preventDefault();
    }
}

function myFunction() {
    let mainInputText = mainInput.value;
    let multiply1 = mainInputText * 3.281;
    let divide1 = mainInputText / 3.281;
    paragraph1El.textContent = `${mainInputText} meters = ${multiply1.toFixed(3)} feet | ${mainInputText} feet = ${divide1.toFixed(3)} meters`;
    if (mainInput.value === "" || mainInput.value < 0.0001) {
        paragraph1El.textContent = "";
    }
}
    
    mainInput.addEventListener("change", function(){
            mainInput.addEventListener("keyup", myFunction);
            mainBtn.addEventListener("click", myFunction)
    })
 
function myFunction2() {
    let mainInputText = mainInput.value;
    let multiply2 = mainInputText * 0.264;
    let divide2 = mainInputText / 0.264;
    paragraph2El.textContent = `${mainInputText} liters = ${multiply2.toFixed(3)} gallons | ${mainInputText} gallons = ${divide2.toFixed(3)} liters`;
    if (mainInput.value === "" || mainInput.value < 0.0001) {
        paragraph2El.textContent = "";
    }
}
mainInput.addEventListener("change", function(){
    mainInput.addEventListener("keyup", myFunction2);
    mainBtn.addEventListener("click", myFunction2)
})

function myFunction3() {
    let mainInputText = mainInput.value;
    let multiply3 = mainInputText * 2.204;
    let divide3 = mainInputText / 2.204;
    paragraph3El.textContent = `${mainInputText} kilos = ${multiply3.toFixed(3)} pounds | ${mainInputText} pounds = ${divide3.toFixed(3)} kilos`;
    if (mainInput.value === "" || mainInput.value < 0.0001) {
        paragraph3El.textContent = "";
    }
}
mainInput.addEventListener("change", function() {
    mainInput.addEventListener("keyup", myFunction3);
    mainBtn.addEventListener("click", myFunction3);
})

