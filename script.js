let form = document.querySelector(".adicionar")
let item = []
const itens = localStorage.getItem('itens') || []
let itensSeparados = JSON.parse(itens)

const lista = document.querySelector(".lista")
document.querySelector('.body').addEventListener('onload',CarregarItens(itensSeparados))

function CarregarItens(itensSeparados){
    for (let index = 0; index < itensSeparados.length; index++) {
        console.log(itensSeparados[index])
        
    }
}



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
   const novoItem = document.createElement('li');
   novoItem.classList.add('item');

   const novoNum = document.createElement('strong');
   novoNum.innerHTML = quantidade;
   novoItem.appendChild(novoNum);

   novoItem.innerHTML += nome;
   lista.appendChild(novoItem)
   let ItemAtual = {
    'nome':nome,
    'quantidade':quantidade
   };

   item.push(ItemAtual);
   localStorage.setItem('itens',JSON.stringify(item))



}