console.group('Square')

function calcSquare(lado) {
    return {
        perimeter: `${lado ** 2}cm`,
        area: `${lado * lado}cm2`,
    };
}

console.log(calcSquare(5));

console.groupEnd('Square')


console.group('Triangle')

function calcTriangle(side1, side2, base, height) {
    return {
        perimeter: `${side1 + side2 + base}cm`,
        area: `${base * height / 2}cm2`,
    };
}

function calcTriangleHeight(sides, base) {
    if(sides == base){
        console.warn('Este no es un triangulo isósceles');
    } else {
        // traducimos a js la formula: h = raiz cuadrada(a**2 - (b**2)/4)
    return Math.sqrt((sides ** 2) - (base ** 2) / 4);
    }
}

console.log(calcTriangleHeight(4,2));
console.log(calcTriangle(6, 6, 4, 5.5));

console.groupEnd('Triangle')


console.group('Circle')

function calcCircle(radius) {
    const diameter = radius * 2;
    const radiuSquared = Math.pow(radius, 2);

    return {
        circumference: diameter * Math.PI,
        area: radiuSquared * Math.PI
    }
}

console.log(calcCircle(3));

console.groupEnd('Circle')

