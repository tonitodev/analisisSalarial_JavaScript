// Square formula

console.group('operacionesCuadrado')

const lado = 5;

console.log('hola');
function calcularCuadrado(lado) {
    return{
        perimetro: lado * 4,
        area: lado * lado
    };
}
console.groupEnd('operacionesCuadrado')

// Calculos triangulo

console.group('operacionesTriangulo')
console.log('hola');

const lado1 = 3;
const lado2 = 4;
const ladoBase = 5;
const altura = 4;

function calcularTriangulo(lado1, lado2, ladoBase, altura) {
    return{
        perimetro: lado1 + lado2 + ladoBase + altura,
        area: (ladoBase * altura) / 2
    };
}

const resultados = calcularTriangulo();
console.log(resultados);

console.groupEnd('operacionesTriangulo')

// calculos en el circulo

console.group('circle');

const radioCirculo = 3;
const diametroCirculo = 7;
const pi = 3.1416;

const circunferencia = diametroCirculo * pi;
const areaCirculo = pi * (radioCirculo ** 2);
const areaCirculo2 = pi * (radioCirculo * radioCirculo);
const areaCirculo3 = pi * (Math.pow(radioCirculo, 2));
const areaCirculo4 = Math.PI * (Math.pow(radioCirculo, 2));

console.log({
    circunferencia,
    areaCirculo,
    areaCirculo2,
    areaCirculo3,
    areaCirculo4
})

console.groupEnd('circle');