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

let lado1;
let lado2;
let ladoBase;
let altura;

function calcularTriangulo(lado1, lado2, ladoBase, altura) {
    return{
        perimetro: lado1 + lado2 + ladoBase + altura ,
        area: (ladoBase * altura) / 2
    };
}


const resultados = calcularTriangulo();
console.log(resultados);

console.groupEnd('operacionesTriangulo')

// Triangulo escaleno

console.group('Triangulo Escaleno')

console.log('Hola de nuevo')

let lado3;


function solution(lado1, lado2, lado3) {
    if (lado1 != lado2 && lado2 != lado3 && lado3 != lado1) {
        
        console.log('Este es un triangulo escaleno');

        let semiperimetro = (lado1 + lado2 + lado3) / 2;
        let areaTEscaleno = Math.sqrt( semiperimetro * (semiperimetro - lado1) * (semiperimetro - lado2) * (semiperimetro - lado3) )
        let altura = Math.round( ( 2 * areaTEscaleno ) / lado1 );

        console.log(altura);
        
    }

    // a = (b * h) / 2 -> h = (2a) / b  
    
    else {        
        console.warn('This is no a fucking escaleno');
    }
}

console.groupEnd('Triangulo Escaleno')

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