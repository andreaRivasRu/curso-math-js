// con ciclos for
function calcAverage(arr) {
    let sumElements = 0;

    for (let i = 0; i < arr.length; i++) {
        sumElements = sumElements + arr[i]; 
    }

    const average = sumElements / arr.length;
    console.log(average);
}

calcAverage([556, 400, 350, 900, 1100, 5000000]);

// con metodo reduce con arrow function
function calcularPromedio(lista) {
    const sumaLista = lista.reduce((total, numero) => total + numero);
    const promedio = sumaLista / lista.length;
    console.log(Math.floor(promedio));
}

calcularPromedio([556, 400, 350, 900, 1100, 5000000]);

// determinar si una lista es par o impar
function esPar(list) {
    return !(list.length % 2);
}

// Calculando la mediana en una lista impar
function calcMediana(list) {
    const listaOrdenada = list.sort((a, b) => a - b);
    const listaEsPar = esPar(listaOrdenada);

    if (listaEsPar) {
        return;
    } else {
        const indexMitadListaImpar = Math.floor(listaOrdenada.length / 2);
        const medianaListaImpar = list[indexMitadListaImpar];
        return medianaListaImpar;
    }
}

console.log(calcMediana([50, 20, 30, 50, 10]));