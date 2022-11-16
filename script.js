var form = document.getElementById('novoItem')

form.addEventListener('submit' , (e) => {
    e.preventDefault(e)
    let nome = e.target[0].value
    let quant = e.target[1].value
})
