let navbar = document.querySelector('.navbar')
let toTop = document.querySelector('.toTop')
navbar.style.transition = "all 0.5s linear"
window.onscroll = function () {
    if (window.scrollY > 150) {
        navbar.style.position = "fixed"
        navbar.style.top = "0"
        navbar.style.right = "0"
        navbar.style.left = "0"
        navbar.style.zIndex = "99"
        navbar.style.backgroundColor = "#c08852"
        toTop.style.display = "block"
    } else {
        navbar.style.position = "static"
        navbar.style.top = "0"
        navbar.style.right = "0"
        navbar.style.left = "0"
        navbar.style.zIndex = "99"
        navbar.style.backgroundColor = "#F8F9FA"
        toTop.style.display = "none"

    }
}

toTop.onclick = function (){
    window.scrollTo(0,0)
}