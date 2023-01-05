listaDeNumeros = [1,2,3,4,5,1,3,6,4,3,7,1,3,5,2,3,8,5,3,5,7,8,7,5,5,4,3,54,6,8,5,3,4,6,5,3,2,4];

const FuncionesMatematicas = {};

FuncionesMatematicas.sumarTodosLosNumeros = function sumarTodosLosNumeros (valorAcumulado, nuevoValor) {
    return valorAcumulado + nuevoValor;
};

// const sumaFinal = listaDeNumeros.reduce(sumarTodosLosNumeros);

function calculoPromedio(listaDeNumeros) {
    
    const sumaFinal = listaDeNumeros.reduce((a, b) => a + b );
    
    return sumaFinal / listaDeNumeros.length;
    
}



// Calculate emdiana in function of 

let parOimpar;

let listaOrdenada;

FuncionesMatematicas.calculoMediana = function calculoMediana (listaOrdenada) {

    FuncionesMatematicas.ordenarLista (listaDeNumeros);
    
    let numeroDeElementos = listaOrdenada.length;
    let mediana;

    if (numeroDeElementos % 2 == 0) {

        const posicion1 = (numeroDeElementos / 2) - 1;
        const posicion2 = (numeroDeElementos/2);
        return (listaOrdenada[posicion1] + listaOrdenada[posicion2]) / 2;
        
        
    } else {
        const posicionMediana = Math.floor((numeroDeElementos/2));
        return  listaOrdenada[posicionMediana];
    }

}

// Sort an disordered Array

FuncionesMatematicas.ordenarLista  = function ordenarLista (listaDeNumeros) {

    function ordenarListaSort (valorA, valorB) {
        
        // Ordenar con if else's

        /*if (valorA > valorB) {
            return 1;
        } else if (valorA == valorB){
            return 0;
        } else if (valorA < valorB) {
            return -1;
        } */


        //Ordenar con una resta simple
    
        return valorA - valorB;
    
    }

   listaOrdenada = listaDeNumeros.sort(ordenarListaSort);

    // const listaOrdenada2 = listaDesordenada2.sort((a, b) => b - a);

    // console.log(listaOrdenada2);

    // return ('El primer arreglo es: ' + listaOrdenada + '\n' + 'El segundo arreglo es: ' + listaOrdenada2);

}

FuncionesMatematicas.calculoModa  = function calculoModa (listaDeNumeros) {

    const listaValores_obj = {}; //Creamos un objeto que almacenará todos los datos del contadot

    for (let i=0; i < listaDeNumeros.length; i++){  // Con esta linea recorremos todos y cada uno de los elementos de la lista 'listaDeNumeros'.

        
        let listElement = listaDeNumeros[i]; // Esta lista registra cada elemento que aparece en la lista en la posición i
        

        if (listaValores_obj[listElement]) {

            listaValores_obj[listElement] += 1;
        
        } else {

            listaValores_obj[listElement] = 1; // Con esta sintaxis de corchetes [] crearemos el campo para cada elemento y por defecto le asignaremos 1
        
        }
        
    }

    let frecuencyValores = Object.entries(listaValores_obj);

    
    
    
    
    function ordenarListaFrecuencia () {
        
        function ordenarListaSort (valorA, valorB) {
            
            return valorA[1] - valorB[1];
            
        }
        
        const listaOrdenadaFrecuency = frecuencyValores.sort(ordenarListaSort);
        
        return listaOrdenadaFrecuency;
    }
    
    const frecuenciaValoresordenada = ordenarListaFrecuencia(frecuencyValores);

    const valorModa = frecuenciaValoresordenada[frecuenciaValoresordenada.length -1]


    console.log(listaValores_obj);
    console.log(frecuencyValores);
    console.log(frecuenciaValoresordenada);

    console.log('La moda es: ' + valorModa[0]);
}