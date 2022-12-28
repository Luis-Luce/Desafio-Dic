function validarMensaje () {
    //manejo de texto erroneo
    const inputMensaje = document.querySelector("#txtInput");
    var valida = document.querySelector(".txt1");
    let erroresViejos = valida.querySelectorAll(".error");
    for (let err of erroresViejos) {
        valida.removeChild(err);
    }
    var mensaje = inputMensaje.value;
    let letrasValidas = "abcdefghijklmnñopqrstuvwxyz ";
    let mensajeError = document.createDocumentFragment();
    for (let letra of mensaje) {
        if (!letrasValidas.includes(letra)) {
            alert("Te recuerdo que solo minusculas y sin acentos");
            break;
        }
    }
    valida.appendChild(mensajeError);
    if (mensajeError.children.length === 0 ) {
        return true;
    }
    return false;
}
function encriptar() {
    //aqui valido el texto
    if (!validarMensaje()) return false;
        // Para facilitar el encriptado se cambian en orden las vocales 

            texto = document.getElementById("txtInput").value;
            var txtCifrado = texto.replace(/e/img, "enter");
            var txtCifrado = txtCifrado.replace(/o/img, "ober");
            var txtCifrado = txtCifrado.replace(/i/img, "imes");
            var txtCifrado = txtCifrado.replace(/a/img, "ai");
            var txtCifrado = txtCifrado.replace(/u/img, "ufag");

            document.getElementById("muneco").style.display = "none";
            document.getElementById("texto").style.display = "none";  
            document.getElementById("texto2").style.display ="revert"; 
            document.getElementById("texto2").innerHTML = txtCifrado;
            document.getElementById("btn_copiar").style.display = "show";
            document.getElementById("btn_copiar").style.display = "inherit";
            //Empieza la adaptacion para cel
            document.getElementById("textoCel").style.display = "none";
            document.getElementById("texto2Bis").innerHTML = txtCifrado; 
            document.getElementById("derechoCel").style.display ="show";
            document.getElementById("derechoCel").style.display ="inherit";
}

function desencriptar() {
    //mismo trabajo que el encriptado pero a la inversa
    var texto = document.getElementById("txtInput").value.toLowerCase()
    var txtCifrado = texto.replace(/enter/img, "e");
    var txtCifrado = txtCifrado.replace(/ober/img, "o");
    var txtCifrado = txtCifrado.replace(/imes/img, "i");
    var txtCifrado = txtCifrado.replace(/ai/img, "a");
    var txtCifrado = txtCifrado.replace(/ufag/img, "u");
    //declaro el comportamiento dinamico de las celdas
    document.getElementById("muneco").style.display = "none";
    document.getElementById("texto").style.display = "none"; 
    document.getElementById("texto2").style.display ="revert"; 
    document.getElementById("texto2").innerHTML = txtCifrado;  
    document.getElementById("btn_copiar").style.display = "show";
    document.getElementById("btn_copiar").style.display = "inherit";
    //Empieza la adaptacion para cel
    document.getElementById("textoCel").style.display = "none";
    document.getElementById("texto2Bis").innerHTML = txtCifrado; 
    document.getElementById("derechoCel").style.display ="show";
    document.getElementById("derechoCel").style.display ="inherit";
}

function copiar() {
    //como se comporta el boton de copiar
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand("copy");
    document.getElementById("muneco").style.display = "revert";
    document.getElementById("texto").style.display = "revert";
    document.getElementById("texto2").style.display ="none";  
    document.getElementById("btn_copiar").style.display = "none";
}
    //Funcion solo para Celuluar y tablet
function copiarCel() {
    var contenidoCel = document.querySelector("#texto2Bis");
    contenidoCel.select();
    document.execCommand("copy");
    
}