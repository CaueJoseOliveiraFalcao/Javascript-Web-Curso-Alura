let form = document.querySelector(".adicionar")
const itens = JSON.parse(localStorage.getItem('itens')) || []
const lista = document.querySelector(".lista")




itens.forEach(element => {
    CriarElemento(element)
});


form.addEventListener('submit' , (e) => {
    e.preventDefault(e)

    let nome = e.target.elements['nome'].value.trim()
    let quantidade = e.target.elements['quantidade'].value

    if (nome.length > 0 && quantidade.length > 0 && quantidade > 0 ){
        const existe = itens.find(elemento => elemento.nome === nome)
        if (existe != ''){
            existe.quantidade +=quantidade
        }
        const itemAtual = {
            'nome':nome,
            'quantidade':quantidade
        }

        CriarElemento(itemAtual)
        itens.push(itemAtual)
        localStorage.setItem('itens',JSON.stringify(itens))

        e.target.elements['nome'].value = ''
        e.target.elements['quantidade'].value = ''
        
    }
    else{
        alert("Preencha os campos corretamente")
    }
})

function CriarElemento(item){
   let novoItem = document.createElement('li')
   novoItem.classList.add('item')

   let novoNum = document.createElement("strong")
   novoNum.innerHTML += item.quantidade
   novoItem.appendChild(novoNum)
   novoItem.innerHTML += item.nome

   lista.appendChild(novoItem)

}