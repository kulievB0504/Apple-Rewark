const buttons = document.querySelectorAll(".colors-iphone-buttons-click button");
const tabContents = document.querySelectorAll(".tabcontainer .tabcontent");

buttons.forEach((btn, idx) => {
    btn.addEventListener("click", () => {
        tabContents.forEach((tabContent) => {
            tabContent.style.display = "none";
        });
        tabContents[idx + 1].style.display = "block";
    });
});