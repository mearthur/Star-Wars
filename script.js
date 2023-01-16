// https://akabab.github.io/starwars-api/api/all.json

let conteiner = document.querySelector('#container');
//  FAZ SOMENTE A CONSTULTA NA API
async function fetchApiData() {
    const starWars = await fetch('https://akabab.github.io/starwars-api/api/all.json')
    const APIrespnse = await starWars.json(); 
    return APIrespnse
}

//  RENDERIZA OS ELEMENTOS NA TELA
const starRender = async ()=>{
    const consultApi = await fetchApiData()

    consultApi.map((item) => {
        // MONTAGEM DO HTML NO  DOM
        let divIn = document.createElement('div')
        let imagem = document.createElement('img')
        let paragrafo= document.createElement('p')

        divIn.className='box'
        imagem.className='img-box'

        
        // @ EVENTO NA DIV
        divIn.addEventListener('click',(event) => {
            // @ PEGA O ID DA FOTO PARA FAZER NOVA BUSCA
            selectId = event.target.getAttribute('id')
            // console.log(selectId)
        })

        // @ ADICIONA O ID DO PERSONAGEM NA DIV
        divIn.setAttribute('id',item['id'] )
        imagem.src = item['image']
        paragrafo.innerHTML = item['name']

        divIn.appendChild(imagem)
        divIn.appendChild(paragrafo)
        conteiner.appendChild(divIn)

    })
} 

starRender()

const button = document.querySelector("button");
const modal = document.querySelector("dialog");
const div = document.querySelector("div .popup-close");


button.onclick = function () {
    modal.show()
}

div.onclick = function () {
    modal.close()
}
