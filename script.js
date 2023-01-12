// https://akabab.github.io/starwars-api/api/all.json

let div = document.querySelector('#container');
const box = document.querySelectorAll('.box');

function fetchApiData() {
    fetch('https://akabab.github.io/starwars-api/api/all.json')
        .then((response) => response.json())
        .then((data) => {
            data.map((item) => {
                let card = `
                <button class="box">
                    <img src="${item.image}" alt="" class="img-box">
                    <p id="person">${item.name}</p>
                </button>
                `;
                div.innerHTML += card
            })
            
        })
}
fetchApiData()

box.forEach(person => {
    person.addEventListener('click', (button) => {
        console.log("oie")
    })
});

