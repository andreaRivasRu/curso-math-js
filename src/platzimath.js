const PlatziMath = {};

PlatziMath.esPar = function esPar(list) {
    return !(list.length % 2);
}

PlatziMath.calcModa = function calcModa(list) {
    const listCount = {};

    for (let i = 0; i < list.length; i++) {
        const element = list[i];
        
        if (listCount[element]) {
            listCount[element] += 1;
        } else {
            listCount[element] = 1;
        }
    }
    const listArray = Object.entries(listCount);

    const listBiOrdenada = PlatziMath.ordenarListaBidimensional(listArray, 1);
    const maxCount = listBiOrdenada[listBiOrdenada.length - 1][1];

    const modas = listBiOrdenada.filter(item => item[1] === maxCount).map(item => item[0]);

    return modas;
}

PlatziMath.ordenarListaBidimensional = function ordenarListaBidimensional(unsortedList, i) {
    const listBi = unsortedList.sort((a, b) => a[i] - b[i]);
    return listBi;
}

console.log(PlatziMath.calcModa([1,1,5,7,9,1,3,4,9]));

PlatziMath.ordenarLista = function ordenarLista(unsortedList) {
    const list = unsortedList.sort((a, b) => a - b);
    return list;
}

// Calculando la mediana en una lista impar
PlatziMath.calcMediana = function calcMediana(unsortedList) {
    const list = PlatziMath.ordenarLista(unsortedList);
    const listaEsPar = PlatziMath.esPar(list);

    if (listaEsPar) {
        const indexPrimeraMitadListaPar = (list.length / 2) - 1;
        const indexSegundaMitadListaPar = list.length / 2;
        const listaMitades = [];
        listaMitades.push(list[indexPrimeraMitadListaPar]);
        listaMitades.push(list[indexSegundaMitadListaPar]);
        const medianaListaPar = PlatziMath.calcPromedio(listaMitades);
        return medianaListaPar;
    } else {
        const indexMitadListaImpar = Math.floor(list.length / 2);
        const medianaListaImpar = list[indexMitadListaImpar];
        return medianaListaImpar;
    }
}

// Calcular promedio con metodo reduce con arrow function
PlatziMath.calcPromedio = function calcPromedio(list) {
    const sumaLista = list.reduce((total, numero) => total + numero);
    const promedio = sumaLista / list.length;
    return Math.floor(promedio);
}

// calcPromedio([556, 400, 350, 900, 1100, 5000000]);

console.log(PlatziMath.calcMediana([80, 10, 30, 20, 50, 70]));
console.log(PlatziMath.calcMediana([80, 10, 20, 50, 70]));
