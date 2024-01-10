// 1 accionista compro acciones de oracle
// Junio: 300 acciones * 20 usd c/u
// Agostto: 400 acciones * 25 usd c/u
// Noviembre: 400 acciones * 23 usd c/u
let amazonStock = [{
    quantity: 300,
    price: 20
},
{
    quantity: 400,
    price: 25
},
{
    quantity: 400,
    price: 23
}];

function calcWeightedAverage(arr) {
    let numerator = arr.map((element) => {return element.quantity * element.price});
    let sumNumerator = numerator.reduce((a, b) => {return a + b});

    let weights = arr.map((element) => {return element.quantity});
    let sumWeights = weights.reduce((a, b) => {return a + b});

    let weightedAverage = sumNumerator / sumWeights;

    return weightedAverage.toFixed(2);
}

console.log(calcWeightedAverage(amazonStock));