'use strict';

const inicio = document.getElementById('inicio').value

function gerarContador() {
    const inicio = document.getElementById('inicio')
    const fim = document.getElementById('fim')
    const salto = document.getElementById('salto')
    const lista = document.getElementById('lista')

    lista.replaceChildren('')
    for (let i = Number(inicio.value); i <= Number(fim.value); i += Number(salto.value)) {

        const itemLista = document.createElement('li')

        itemLista.textContent = i
        lista.appendChild(itemLista)
    }
console.log(inicio)
}