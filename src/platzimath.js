// // con ciclos for
// function calcAverage(arr) {
//     let sumElements = 0;

//     for (let i = 0; i < arr.length; i++) {
//         sumElements = sumElements + arr[i]; 
//     }

//     const average = sumElements / arr.length;
//     console.log(average);
// }

// calcAverage([556, 400, 350, 900, 1100, 5000000]);



// determinar si una lista es par o impar
function esPar(list) {
    return !(list.length % 2);
}

function ordenarLista(unsortedList) {
    const list = unsortedList.sort((a, b) => a - b);
    return list;
}

// Calculando la mediana en una lista impar
function calcMediana(unsortedList) {
    const list = ordenarLista(unsortedList);
    const listaEsPar = esPar(list);

    if (listaEsPar) {
        const indexPrimeraMitadListaPar = (list.length / 2) - 1;
        const indexSegundaMitadListaPar = list.length / 2;
        const listaMitades = [];
        listaMitades.push(list[indexPrimeraMitadListaPar]);
        listaMitades.push(list[indexSegundaMitadListaPar]);
        const medianaListaPar = calcPromedio(listaMitades);
        return medianaListaPar;
    } else {
        const indexMitadListaImpar = Math.floor(list.length / 2);
        const medianaListaImpar = list[indexMitadListaImpar];
        return medianaListaImpar;
    }
}

// Calcular promedio con metodo reduce con arrow function
function calcPromedio(list) {
    const sumaLista = list.reduce((total, numero) => total + numero);
    const promedio = sumaLista / list.length;
    return Math.floor(promedio);
}

// calcPromedio([556, 400, 350, 900, 1100, 5000000]);

console.log(calcMediana([80, 10, 30, 20, 50, 70]));
console.log(calcMediana([80, 10, 20, 50, 70]));

// 10, 20, 30, 50, 70, 80 = 40
// 80, 10, 30, 20, 50, 70 = 25

// 10, 20, 50, 70, 80 = 50
// 80, 10, 20, 50, 70 = 20