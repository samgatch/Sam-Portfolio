//Script to add the functionality to the carousel
const buttons = document.querySelectorAll("[data-buttons-slides]")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.slidesButton === "next" ? 1 : -1
    const slides = button.closest("[data-slidesContainer]").querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) {
        newIndex = slides.children.length -1;
    };
    if (newIndex >= slides.children.length) {
        newIndex = 0;
    };

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
    });
});
//End of the carousel Script

//Start of Dark Mode script
let darkMode = document.getElementById("dark");
darkMode.onclick = function() {
    document.body.classList.toggle("darkMode");
}
