listaDeNumeros = [1,1,1,9,4,4,5];

function sumarTodosLosNumeros (valorAcumulado, nuevoValor) {
    return valorAcumulado + nuevoValor;
};

// const sumaFinal = listaDeNumeros.reduce(sumarTodosLosNumeros);

const sumaFinal = listaDeNumeros.reduce((a, b) => a + b );

const promedio = sumaFinal / listaDeNumeros.length;

console.log('El promedio del arreglo predeterminado es: ' + promedio);


// Ver si la longitud del arreglo es par o impar

let parOimpar;

function isNumberListPair (listaDeNumeros) {
    
    let numeroDeElementos = listaDeNumeros.length;
    let media;

    if (numeroDeElementos % 2 == 0) {

        const posicion1 = (numeroDeElementos / 2) - 1;
        const posicion2 = (numeroDeElementos/2);
        media = (listaDeNumeros[posicion1] + listaDeNumeros[posicion2]) / 2;
        
        console.log(media);
        
    } else {
        const posicion = (numeroDeElementos/2) - 0.5;
        media = listaDeNumeros[posicion];

        console.log(media);
    }

}
