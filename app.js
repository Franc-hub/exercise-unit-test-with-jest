// esta es mi función que suma dos números
const sum = (a, b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7, 3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = (euro) => {
    return euro * oneEuroIs.USD
}
console.log(fromEuroToDollar(3.5))

const fromDollarToYen = (dollar) => {
    const dollarToYen = 109.57;
    return dollar * dollarToYen;
}

const fromYenToPound = (pound) => {
const yenToPound = 0.0066;
return pound * yenToPound
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };