function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("Muñeco");

    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (texto.length !=0) {
        document.getElementById("texto").value =textoCifrado;
        tituloMensaje.textoContent = "Texto encriptado con exito";
        parrafo.textoContent ="";
        muñeco.src ="./img/encriptado.jpg";
    } else{
        muñeco.src = ".img/Muñeco.png";
        tituloMensaje.textContent="Nungun mensaje fue encontrado"
        parrafo.textContent="Ingresa el texto que deseas encriptar o desencriptar";
        alert("Debes ingresar algun texto");        
    }
    
}