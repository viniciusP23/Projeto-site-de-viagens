// scroll do menu do reader
let navBar = document.getElementById("header")

document.addEventListener("scroll", () => {
    let scrollTop = window.scrollY
    if(scrollTop > 0) {
        navBar.classList.add("rolar")
    }else {
        navBar.classList.remove("rolar")
    }
})


// botão do menu mobile
let btnMenuMob = document.getElementById("btn-menu-mob")
let line1 = document.querySelector(".line-menu-mob-1")
let line2 = document.querySelector(".line-menu-mob-2")
let menuMobile = document.getElementById("menu-mobile")
let body = document.querySelector("body")

btnMenuMob.addEventListener("click", () => {
    line1.classList.toggle("ativo1")
    line2.classList.toggle("ativo2")

    menuMobile.classList.toggle("abrir")
    body.classList.toggle("no-overflow")
})