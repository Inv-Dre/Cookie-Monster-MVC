// LogeIN Modal
const signUpButton = document.querySelector("#signup");
const modalBg = document.querySelector(".modal-background");
const modal = document.querySelector(".modal");

signUpButton.addEventListener("click", () => {
    modal.classList.add("is-active");
});
modalBg.addEventListener("click", () => {
    modal.classList.remove("is-active");
});