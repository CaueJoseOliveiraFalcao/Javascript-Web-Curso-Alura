const form = document.getElementById("novoItem") 
const lista = document.getElementById("lista")
const itens = JSON.parse(localStorage.getItem("itens")) || []  

itens.forEach(element => {
    criaElemento(element)
});
form.addEventListener("submit", (evento) => {  
    evento.preventDefault()

    const nome = evento.target.elements['nome'].value
    const quantidade = evento.target.elements['quantidade'].value

    const itemAtual = {
        'nome':nome,
        'quantidade':quantidade
    }
    
    const existe = itens.find(element => element.nome === nome)
    if (existe){
        itemAtual.id = existe.id
        AtualizaItem(itemAtual)
        itens[existe.id] =  itemAtual
    }
    else {
        itemAtual.id = itens.length
        criaElemento(itemAtual)

        itens.push(itemAtual)
    }
    localStorage.setItem('itens',JSON.stringify(itens))

    nome.value = ""
    quantidade.value = ""
})

function criaElemento(item) {  
    const NovoItem = document.createElement('li')
    NovoItem.classList.add('item')
    NovoItem.innerHTML += item.nome
    
    const NovoNum = document.createElement("strong")
    NovoNum.innerHTML += item.quantidade
    NovoNum.dataset.id = item.id

    NovoItem.appendChild(NovoNum)
    NovoItem.appendChild(botaodeleta())
    lista.appendChild(NovoItem)
}
function AtualizaItem(item){
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade
}

function botaodeleta(e){
    const butao = document.createElement('button')
    butao.innerText = 'X'
    butao.addEventListener('click' , function(){
        console.log(this.parentNode)
        DeletaItem(this.parentNode)
    })
     return butao
}
function DeletaItem(tag){
    tag.remove()
}