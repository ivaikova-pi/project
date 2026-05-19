const welcomeButtonModal = document.querySelector(".header-button");
const modalApplication = document.querySelector(".registration-forms");
if (welcomeButtonModal && modalApplication) {
    if (welcomeButtonModal && modalApplication) {
        welcomeButtonModal.addEventListener("click", function (event) {
            modalApplication.removeAttribute("hidden");
        });
    }
}

window.addEventListener("click", function(event) {
    if (event.target === modalApplication) {
        modalApplication.setAttribute("hidden", true);
    }
});