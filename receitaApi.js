'use strict'

const blocos = [
    {nome: "Escola de Princesas", icon: 'carbonara.png', descricao: 'Blair'},
]

async function pesquisarCategoria(categoria){
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`

    //Faz as requisições
    const response = await fetch(url)
    const data = await response.json()
    
    if (data.meals.length > 0){
        return (data.meals)
    }
}

function criarImg(link) {
    const galeria = document.getElementById('galeria');
    const card = document.createElement('div');
    card.classList.add('card');

    const nome = link['strMeal'];
    const img = link['strMealThumb'];
    const numeroId = link['idMeal'];
    // const preparo = link['strInstructions'];
    // const ingredientes = link['strIngredient1']

    card.innerHTML = `
        <img src=${img}>
        <h1>${nome}</h1>
        <h2>Id: ${numeroId}</h2>
        <button class="receita" data-img="${img}" data-nome="${nome}" data-numeroId="${numeroId}">Receita</button>
    `;

    galeria.appendChild(card);
    card.querySelector('.receita').addEventListener('click', exibirDetalhes);

}

// function exibirDetalhes(novo) {
//     const img = novo.target.dataset.img;
//     const nome = novo.target.dataset.nome;
//     const preparo = novo.target.dataset.preparo;
//     const ingredientes = novo.target.dataset.ingredientes;
   
    
        
//     const detalhesCard = document.createElement('div');
//     detalhesCard.classList.add('detalhes-card');
        
//     detalhesCard.innerHTML = `
//         <img src=${img}>
//         <h1>${nome}</h1>
//         <h3>Ingredientes: ${ingredientes}</h3>
//         <h3>Modo de Preparo: ${preparo}</h3>
//         <button class="voltar">Voltar</button>
//     `;
//     const galeria = document.getElementById('galeria');
//     galeria.replaceChildren(detalhesCard);
        
//     detalhesCard.querySelector('.voltar').addEventListener('click', preencher);

    
// }

async function preencher(){
    const ctg = document.getElementById('barraPesquisa').value
    const imgs = await pesquisarCategoria(ctg)
    const galeria = document.getElementById('galeria')

    //substitui todos os elementos por novos
    galeria.replaceChildren(imgs)

    imgs.forEach(criarImg(link))

    console.log(imgs);
}

document.getElementById('pesquisar')
    .addEventListener('click', preencher);
    

async function deletar(){
    const tela = document.getElementById('imgFundo')
    const conteudo = document.getElementById('conteudo')

    tela.style.display = 'none';
    conteudo.style.display = 'none'
}



document.getElementById('pesquisar').addEventListener('click', deletar, preencher)







