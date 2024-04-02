console.log ('hello');

const burgerIcon = document.querySelector("#burgerIcon");
console.log (burgerIcon);

function burgerMenu() {
    console.log("clicked");
}



burgerIcon.addEventListener ("click", burgerMenu);