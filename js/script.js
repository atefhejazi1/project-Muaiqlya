let navbar = document.querySelector('.navbar')
let toTop = document.querySelector('.toTop')
navbar.style.transition = "all 0.5s linear"
window.onscroll = function () {
    if (window.scrollY > 100) {
        navbar.style.position = "fixed"
        navbar.style.top = "0"
        navbar.style.right = "0"
        navbar.style.left = "0"
        navbar.style.zIndex = "99"
        navbar.style.boxShadow = "10px 5px 10px #ccc"
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

toTop.onclick = function () {
    window.scrollTo(0, 0)
}




$(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider-nav",
    autoplay: true,
});
$(".slider-nav").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    centerPadding: "0px",
});


