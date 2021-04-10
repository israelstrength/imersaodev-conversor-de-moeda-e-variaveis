var valorEmDolar = prompt('Qual o valor em dolar que você quer converter?');
var valorEmDolarNumero = parseFloat(valorEmDolar);

var conversaoEmReal = valorEmDolar * 5.50;

var valorEmRealFixado = conversaoEmReal.toFixed(2);
alert(valorEmRealFixado);
// ou
//alert(conversaoEmReal.toFixed(2) + ' R$');
