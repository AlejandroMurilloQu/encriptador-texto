import {encriptar, desencriptar, validarTexto} from './services.js'

const encriptarBtn = document.getElementById('encriptarBtn')
const desencriptarBtn = document.getElementById('desencriptarBtn')
const input = document.getElementById('texto-encriptar')
const resultado = document.getElementById('texto-resultado')
const resultadoContainer = document.getElementById('resultado-container')
const emptyResult = document.getElementById('empty-result')
const copiarBtn = document.getElementById('copiarBtn')


encriptarBtn.addEventListener('click', ()=>{
    if(!validarTexto(input.value)) {
        alert("Texto invalido")
        return
    }

    const textoEncriptado = encriptar(input.value)
    resultado.innerText = textoEncriptado
    resultadoContainer.classList.remove('hidden')
    emptyResult.classList.add('hidden')
})

desencriptarBtn.addEventListener('click', ()=>{
    if(!validarTexto(input.value)) {
        alert("Texto invalido")
        return
    }
    const textoDesencriptado = desencriptar(input.value)
    resultado.innerText = textoDesencriptado
    resultadoContainer.classList.remove('hidden')
    emptyResult.classList.add('hidden')
})

copiarBtn.addEventListener('click',async()=>{
    await navigator.clipboard.writeText(resultado.innerText)
    copiarBtn.querySelector('span').innerText = "Copiado!"
    copiarBtn.querySelector('img').classList.remove('hidden')
    copiarBtn.ariaBusy = "true"
    setTimeout(()=>{
        copiarBtn.querySelector('span').innerText = "Copiar"
        copiarBtn.querySelector('img').classList.add('hidden')
        copiarBtn.ariaBusy = "false"
    },1000)
})


