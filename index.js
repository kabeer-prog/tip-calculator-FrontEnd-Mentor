let bill = document.getElementById("bill")
let people = document.getElementById("people")
let tipRadio = document.getElementsByClassName("tip")
let tipCustom = document.getElementById("custom")
let reset = document.getElementById("reset")
let tipNotCustom = 0

bill.addEventListener('keyup', evaluate)
people.addEventListener('keyup',evaluate)
tipCustom.addEventListener('keyup',evaluate)
reset.addEventListener('click',resetForm, true)
for (let i = 0; i < 5; i++){
    tipRadio[i].addEventListener('click',evaluate)
}

function evaluate(){

}
function activeBtnReset(){
    if (bill.value !== "" || bill.value > 0 || people.value !== "" || poeple.value > 0  ){
        reset.style.cursor = "pointer"
        reset.classList.add("btn-active")
        reset.addEventListener("click",resetForm, true)
    }else {
        reset.style.cursor = "not-allowed"
        reset.classList.remove("btn-active")
        reset.removeEventListener("click",resetForm, true)
    }

}
function resetForm(){

}
function getTipRadio(){

}
function clearRadio(){

}