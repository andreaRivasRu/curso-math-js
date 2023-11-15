function calcSquare(lado) {
    return {
        perimeter: `${lado ** 2}cm`,
        area: `${lado * lado}cm2`,
    };
}

console.log(calcSquare(5));

function calcTriangle(lado1, lado2, base, altura) {
    return {
        perimeter: `${lado1 + lado2 + base}cm`,
        area: `${base * altura / 2}cm2`,
    };
}

console.log(calcTriangle(6, 6, 4, 5.5));