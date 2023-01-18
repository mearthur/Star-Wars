// const button = document.querySelector("button")
// const modal = document.querySelector("dialog")
// const section = document.querySelector("section .popup-close")

// button.onclick = function () {
//     modal.show()
// }

// section.onclick = function () {
//     modal.close()
// }





let produtos = [
    {
        nomeProduto: 'Celular',
        valorProduto: 1200.00,
        porcentagemDesconto: 0.20
    },
    {
        nomeProduto: 'Notebook',
        valorProduto: 2500.00,
        porcentagemDesconto: 0.30
    },
    {
        nomeProduto: 'Televisão',
        valorProduto: 3500.00,
        porcentagemDesconto: 0.35
    },
    {
        nomeProduto: 'Moto',
        valorProduto: 8000.00,
        porcentagemDesconto: 0.40
    }
];

produtos.forEach((produtoAtual) => {   
    let valorDesconto = produtoAtual.valorProduto * produtoAtual.porcentagemDesconto;
    console.log(produtoAtual)
    console.log(valorDesconto)
}); 