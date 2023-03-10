// funcao para enviar os valores para o "display"
// funcao para apagar os valores digitados
// funcao para apagar o ultimo caractere digitado
// funcoes de calculo

let numero;
let sum;
let display = document.getElementById('apagar');

// funcao de inserir os valores no display
function insert(num) {
    numero = document.getElementById('resultado').innerHTML;
    sum = document.getElementById('resultado').innerHTML = numero + num;
}

function clean() {
    document.getElementById('resultado').innerHTML = '';
}

function apagar() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(
        0,
        resultado.length - 1
    );
}

function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);
    } else {
        document.getElementById('resultado').innerHTML = 'Nada para calcular!';
    }
}
