function encriptar() {
    // Para facilitar el encriptado se cambian en orden las vocales 

    var texto = document.getElementById("txtInput").value.toLowerCase()
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
    document.getElementById("txtMensajeCel").style.display ="none";
    document.getElementById("txtcelVista").style.display ="none";

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
    document.getElementById("txtMensajeCel").style.display ="show";
    document.getElementById("txtMensajeCel").style.display ="inherit";
    document.getElementById("txtcelVista").style.display ="show";
    document.getElementById("txtcelVista").style.display ="inherit";
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
    document.getElementById("btn_copiar").style.display = "none";

}