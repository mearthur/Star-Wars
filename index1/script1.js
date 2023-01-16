const button = document.querySelector("button")
const modal = document.querySelector("dialog")
const section = document.querySelector("section .popup-close")

button.onclick = function () {
    modal.show()
}

section.onclick = function () {
    modal.close()
}