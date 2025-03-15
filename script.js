window.addEventListener("scroll", function() {
    let buttonContainer = document.querySelector('.button-container');
    let scrollPosition = window.scrollY;

    // Show button when user scrolls down
    if (scrollPosition > 300) { // You can adjust the scroll threshold here
        buttonContainer.style.opacity = 1;
    } else {
        buttonContainer.style.opacity = 0;
    }
});
