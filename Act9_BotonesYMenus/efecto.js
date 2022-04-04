window.onload = function carga(){
    document.getElementById('boton1').onclick = inicio;
    document.getElementById('boton2').onclick = mostrar;
    var img  = document.getElementById("img")
}

function inicio() {
    location.reload();
}

function mostrar() {
    document.getElementById('segundoNav').innerHTML = '<nav><button id="boton3">Gira</button><button id="boton4">Ocultar</button></nav>';
    document.getElementById('texto').innerHTML = '<img src = "Kyra.jpeg" id = "img" >';
    img.style.visibility = "visible"
    document.getElementById('boton4').onclick = ocultar;
    document.getElementById('boton3').onclick = girar;
}

function girar() {

    const textoElem = document.querySelector('p');
    let rotate360 = [
      { transform: 'rotate(360deg)' }
    ];

    let slowInfinite = {
      duration: 4500,
      iterations: Infinity
    }
    textoElem.animate( rotate360, slowInfinite );

  
}

function ocultar() {
    document.getElementById('texto').innerHTML = "Ya volvine lol";
    var img  = document.getElementById("img")
    img.style.visibility = "visible"
    
}