const addToCartButtons = document.getElementsByClassName("games__button");
let cartMessage = 0;
const cartMessageValue = document.getElementsByClassName("shoppingCart__message")[0];
const shoppingModal = document.getElementById("js--shoppingModal");
let modalIsOpen = false;
let buzz = 0;
let sully = 0;
let edna = 0;

const checkoutbuzz = document.getElementById("checkout__buzz");
const checkoutsully = document.getElementById("checkout__sully");
const checkoutedna = document.getElementById("checkout__edna");

let  buzzprijs = 0;
let sullyprijs = 0;
let ednaprijs = 0;


for(let i = 0; i < addToCartButtons.length; i++){
    addToCartButtons[i].onclick = function(){
        cartMessage += 1;
        cartMessageValue.innerHTML = cartMessage;
        switch(addToCartButtons[i].dataset.product){
            case "buzz":
                buzz += 1;
                buzzprijs += 49;
                break;
            case "sully":
                sully += 1;
                sullyprijs += 39;
                break;
            case "edna":
                edna += 1;
                ednaprijs += 59;
                break;
        }
        if(modalIsOpen === false){
            shoppingModal.style.display = "flex";
            modalIsOpen = true;
            setTimeout(function(){
                shoppingModal.style.display = "none";
            },2000);
        }
     }
}

const checkoutButton = document.getElementById("js--checkoutButton");
const checkoutWindow = document.getElementById("js--checkoutWindow");
let checkoutIsOpen = false;

checkoutButton.onclick = function(){
    if(checkoutIsOpen === false){
        document.querySelector("main").style.display = "none";
        checkoutWindow.style.display = "block";
        checkoutIsOpen = true;
        document.getElementById("js--amount-buzz").innerHTML = buzz + "x";
        document.getElementById("js--amount-sully").innerHTML = sully + "x";
        document.getElementById("js--amount-edna").innerHTML = edna + "x";
        checkoutbuzz.innerHTML = "€" + buzzprijs;
        checkoutsully.innerHTML = "€" + sullyprijs;
        checkoutedna.innerHTML = "€" + ednaprijs;
        return;
    }
    document.querySelector("main").style.display = "block";
    checkoutWindow.style.display = "none";
    checkoutIsOpen = false;
}