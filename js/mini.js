const header = document.getElementById("siteHeader");
const headerHeight = header.offsetHeight;
const firstFoldHeight = window.innerHeight;

let lastScroll = 0;
const triggerPoint = 100;
window.addEventListener("scroll", function () {
    // debugger;
    const currentScroll = window.scrollY;

    if (currentScroll > triggerPoint) {
        if (currentScroll > lastScroll) {
            // scrolling up → show header
            header.classList.add("active");
        } else {
            // scrolling down → hide header
            header.classList.remove("active");
        }
    } else {
        header.classList.remove("active");
    }

    // lastScroll = currentScroll;
});