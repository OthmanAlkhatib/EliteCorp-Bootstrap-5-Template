$(function() {
    var windowH = $(window).height(),
        firstNavH = $(".first-nav").innerHeight(),
        mainNavH = $(".navbar").innerHeight();
    
        $(".main-slider, .carousel-item").height(windowH - (firstNavH + mainNavH));
});


sliders = document.getElementsByClassName("carousel-item");
buttons = document.querySelectorAll("button[data-bs-target='#slide']");
function autoSlider() {
    choose++;
    for (let i = 0; i<3; i++) {
        if (sliders[i].classList.contains("active")) choose = i + 1
        sliders[i].classList.remove("active");
        buttons[i].classList.remove("active");
        buttons[i].removeAttribute("aria-current");
    }
    sliders[choose%3].classList.add("active");
    buttons[choose%3].classList.add("active");
    buttons[choose%3].setAttribute("aria-current", "true");
}
choose = 0;
setInterval(autoSlider, 5000)