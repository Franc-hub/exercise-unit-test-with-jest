// importar la función sum del archivo app.js
const { sum, fromDollarToYen, fromYenToPound } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});


test("One euro should be 1.206 dollars", function () {
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const dollars = fromEuroToDollar(3.5)

    // is 1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
    const expected = 3.5 * 1.2;

    // hago mi comparacion (la prueba)
    expect(expected).toBe(dollars);
})

test("one dollar should be 109,57 yens ", () => {
    const yens = fromDollarToYen(1);
    const expected = 1 * 109.57;
    expect(expected).toBe(yens);
})

test("1000 yens should be 6,6 pounds", () => {
    const pounds = fromYenToPound(1000);
    const expected = 1000 * 0.0066;
    expect(expected).toBe(pounds);
}) 