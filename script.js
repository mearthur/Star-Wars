// https://akabab.github.io/starwars-api/api/all.json

let conteiner = document.querySelector("#container");

//  FAZ SOMENTE A CONSTULTA NA API
async function fetchApiData() {
  const starWars = await fetch(
    "https://akabab.github.io/starwars-api/api/all.json"
  );
  const APIrespnse = await starWars.json();
  return APIrespnse;
}

//  RENDERIZA OS ELEMENTOS NA TELA
const starRender = async () => {
  const consultApi = await fetchApiData();

  consultApi.map((item) => {
    // MONTAGEM DO HTML NO  DOM
    let divIn = document.createElement("div");
    let imagem = document.createElement("img");
    let paragrafo = document.createElement("p");

    divIn.className = "box";
    imagem.className = "img-box";
    paragrafo.className = "person";

    // @ EVENTO NA DIV
    divIn.addEventListener("click", async (event) => {
      // @ PEGA O ID DA FOTO PARA FAZER NOVA BUSCA
      selectId = event.target.getAttribute("id");
      if (selectId == null) {
        return;
      }

      const personCharacters = await fetchApiData();

      personCharacters.forEach((characters) => {
        if (characters.id == selectId) {
          let name = document.querySelector("#name");
          let altura = document.querySelector("#height");
          let massa = document.querySelector("#mass");
          let espace = document.querySelector("#species");
          let genero = document.querySelector("#gender");

          name.innerText = characters.name;
          altura.innerHTML = characters.height;
          massa.innerHTML = characters.mass;
          espace.innerHTML = characters.species;
          genero.innerHTML = characters.gender;
        }
      });
    });

    let modal = document.querySelector("dialog");
    let section = document.querySelector("section .popup-close");

    divIn.onclick = function () {
      modal.show();
    };
    section.onclick = function () {
      modal.close();
    };

    // @ ADICIONA O ID DO PERSONAGEM NA DIV
    divIn.setAttribute("id", item["id"]);
    imagem.src = item["image"];
    paragrafo.innerHTML = item["name"];

    divIn.appendChild(imagem);
    divIn.appendChild(paragrafo);
    conteiner.appendChild(divIn);

    const filterElement = document.querySelector("form input");

    const cards = document.querySelectorAll(".box");

    filterElement.addEventListener("input", filterCards);

    function filterCards() {
      if (filterElement.value != "") {
        for (let card of cards) {
          let title = card.querySelector(".person");
          title = title.textContent.toLowerCase();

          let filterText = filterElement.value.toLowerCase();

          if (!title.includes(filterText)) {
            card.style.display = "none";
          } else {
            card.style.display = "flex";
          }
        }
      } else {
        for (let card of cards) {
          card.style.display = "flex";
        }
      }
    }
  });
};
starRender();
