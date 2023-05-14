const altura = document.querySelector('.altura')
const alturavalue = document.querySelector('.alturavalue')

const peso = document.querySelector('.peso')
const pesovalue = document.querySelector('.pesovalue')

const edad = document.querySelector('.edad')
const edadvalue = document.querySelector('.edadvalue')

const button = document.querySelector('.button')
const resultado = document.querySelector('#resultado')

alturavalue.textContent = altura.value
altura.oninput = function() {
    alturavalue.textContent = this.value
}

pesovalue.textContent = peso.value
peso.oninput = function() {
    pesovalue.textContent = this.value
}

edadvalue.textContent = edad.value
edad.oninput = function() {
    edadvalue.textContent = this.value
}


button.addEventListener('click', () => {
    let alturaaaa = Number( alturavalue.textContent )
    let pesoo = Number( pesovalue.textContent )
    let age = Number( edadvalue.textContent )
    
    metros = alturaaaa / 100
    metros2 = (metros * metros).toFixed(2)
    let imc = (pesoo / metros2).toFixed(2)
    
    
    resultado.textContent = imc

    // console.log(alturavalue.textContent);
})

