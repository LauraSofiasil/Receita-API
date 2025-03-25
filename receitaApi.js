'use strict'


async function pesquisarCategoria(categoria){
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`

    //Faz as requisições
    const response = await fetch(url)
    const data = await response.json()
    
    return (data.meals)

}

async function criarCard(meals){
    const card = document.createElement('div')
    const novoTitulo = document.createElement('h1')
    const novoTexto = document.createElement('p')
    const novoBotao = document.createElement('button')
    const img = document.createElement('img')
    const galeria = document.getElementById('galeria')

    img.src = meals.strMealThumb


    card.classList.add('card')

    novoTitulo.textContent = meals.strMeal

    novoTexto.textContent = meals.idMeal

    novoBotao.textContent = 'Receita'

    card.appendChild(img)
    card.appendChild(novoTitulo)
    card.appendChild(novoTexto)
    card.appendChild(novoBotao)

    galeria.appendChild(card)
}


async function preencher(){
    const ctg = document.getElementById('barraPesquisa').value
    const imgs = await pesquisarCategoria(ctg)

    imgs.forEach(criarCard)

    // console.log(imgs)
}

document.getElementById('pesquisar').addEventListener('click', preencher);
    
//Deletar o fundo ao clicar o botão e cria uma página nova
async function deletar(){
    const conteudo = document.getElementById('conteudo')

    conteudo.style.display = 'none'
}



document.getElementById('pesquisar').addEventListener('click', deletar, preencher)







