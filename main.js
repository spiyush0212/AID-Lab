// // Carosuel Buttons
var slider = tns({
    "container": '.my-slider',
    "items": 2,
    "responsive": {
        750: {
            items: 3
        }
    },
    "slideBy": "page",
    "mouseDrag": true,
    "swipeAngle": false,
    "speed": 400,
    "autoplay": true,
    "autoplayHoverPause": true,
    "autoplayButtonOutput": false,
    "navPosition": "bottom"
});

// // Scrolling Navbar
const navbarScroll = document.getElementById('navbar-scroll');

window.addEventListener("scroll", function (e) {
    var y = window.scrollY;
    navbarScroll.style.display = (this.oldScroll > this.scrollY && y >= 700) ? "initial" : "none";
    this.oldScroll = this.scrollY;
});