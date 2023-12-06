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
    console.log(promedio);
}

calcularPromedio([556, 400, 350, 900, 1100, 5000000]);
