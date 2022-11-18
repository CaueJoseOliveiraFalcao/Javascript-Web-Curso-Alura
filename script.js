let form = document.querySelector(".adicionar")
let itens = []
form.addEventListener('submit' , (e) => {
    e.preventDefault(e)

    let nome = e.target.elements['nome'].value.trim()
    let quantidade = e.target.elements['quantidade'].value

    if (nome.length > 0 && quantidade.length > 0 && quantidade > 0 ){
        CriarElemento(nome,quantidade)
        e.target.elements['nome'].value = ''
        e.target.elements['quantidade'].value = ''
    }
    else{
        alert("Preencha os campos corretamente")
    }
})

function CriarElemento(nome,quantidade){
    const novoItem = document.createElement('li')
    novoItem.classList.add('item')

    const  numeroItem = document.createElement('strong')
    numeroItem.innerHTML = quantidade

    novoItem.appendChild(numeroItem)
    novoItem.innerHTML += nome

    let itemAtual = {
        'nome':nome,
        'quantidade':quantidade
    }
    itens.push(itemAtual)

    localStorage.setItem('item',JSON.stringify(itens))
    document.querySelector('#lista').appendChild(novoItem)
}