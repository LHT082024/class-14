console.log ('hello');


//hent
const burgerIcon = document.querySelector("#burgerIcon");
console.log (burgerIcon);


//modifiser
function burgerMenu() {
    
    //hent
    const nav = document.querySelector("#nav");
    console.log(nav);

    //modifiser
    nav.classList.toggle("HeaderNav");
}

//send
burgerIcon.addEventListener ("click", burgerMenu);