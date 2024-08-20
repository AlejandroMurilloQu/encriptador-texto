const keys = {e: "enter", i: "imes", a: "ai", o: "ober", u: "ufat"}

export function encriptar(texto){
    Object.entries(keys).forEach(([key, value]) => texto = texto.replaceAll(key, value))
    return texto
}

export function desencriptar(texto){
    Object.entries(keys).forEach(([key, value]) => texto = texto.replaceAll(value, key))
    return texto
}

export function validarTexto(texto){
    const regex = /^[a-z0-9]+$/;
    return regex.test(texto)
}