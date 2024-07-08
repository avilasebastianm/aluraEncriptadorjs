function validarTexto(texto) {
    const caracteresInvalidos = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
    const mayusculas = /[A-Z]/g;

    if (texto.match(mayusculas) || texto.match(caracteresInvalidos)) {
        alert("No se permiten caracteres especiales ni mayúsculas");
        return true;
    } else if (texto === "") {
        alert("Ingrese un mensaje");
        return true;
    } else {
        return false;
    }
}

const botonEncriptar = document.querySelector(".but button:nth-child(1)");
const botonDesencriptar = document.querySelector(".but button:nth-child(2)");
const areaTexto = document.querySelector("textarea[name='textarea']");
const resultado = document.querySelector("#textoEnc");
const botonCopiar = document.querySelector(".copy button");

botonEncriptar.addEventListener("click", function() {
    const textoIngresado = areaTexto.value;

    if (!validarTexto(textoIngresado)) {
        const textoEncriptado = encriptar(textoIngresado);
        resultado.textContent = textoEncriptado;
    } else {
        areaTexto.value = "";
    }
});

const reglasGeringoso = { "e": "epepenteper", "i": "ipimepes", "a": "apai", "o": "opebeper", "u": "upufapat" };

function encriptar(texto) {
    let textoEncriptado = "";
    for (const vocal in reglasGeringoso) {
        textoEncriptado = texto.replaceAll(vocal, reglasGeringoso[vocal]);
        texto = textoEncriptado;
    }
    return textoEncriptado;
}

botonCopiar.addEventListener("click", function() {
    const textoCopiado = resultado.textContent;
    navigator.clipboard.writeText(textoCopiado);
    areaTexto.value = "";
});

botonDesencriptar.addEventListener("click", function() {
    const textoIngresado = areaTexto.value;
    const textoDesencriptado = desencriptar(textoIngresado);

    resultado.textContent = textoDesencriptado;
});

function desencriptar(texto) {
    let textoDesencriptado = "";
    for (const vocal in reglasGeringoso) {
        textoDesencriptado = texto.replaceAll(reglasGeringoso[vocal], vocal);
        texto = textoDesencriptado;
    }
    return textoDesencriptado;
}
