var lado = 5;


function areaQuadrado(){
    let areaQuadrado =  lado*lado;
    return areaQuadrado;
}

document.getElementById("Area-quadrado").innerHTML = `A área do quadrado é: ${areaQuadrado()}`;
