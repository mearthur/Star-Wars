const button = document.querySelector("button")
const modal = document.querySelector("dialog")
const div = document.querySelector("div .popup-close")

button.onclick = function () {
    modal.show()
}

div.onclick = function () {
    modal.close()
}