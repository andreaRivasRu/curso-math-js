function calcScaleneTriangleHeight(sideA, sideB, base) {
    const semiperimeter = (sideA + sideB + base) / 2;
    const area = Math.sqrt(semiperimeter*(semiperimeter-sideA) * (semiperimeter-sideB) * (semiperimeter-base));
    if (sideA == sideB || sideA == base || sideB == base) {
        console.warn('Este no es un triangulo escaleno!!');
    } else {
        const height = (area * 2) / base;
        return result = `La altura del triangulo escaleno es: ${height}`;
    }
}

console.log(calcScaleneTriangleHeight(3, 4, 5));