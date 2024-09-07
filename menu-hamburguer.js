const hamburguer = document.querySelector(".hamburguer")
const containerHeader = document.querySelector(".containerHeader")

hamburguer.addEventListener("click", () =>
    containerHeader.classList.toggle("active"))