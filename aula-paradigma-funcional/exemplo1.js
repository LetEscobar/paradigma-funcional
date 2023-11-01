function bomDia() {
    console.log('Bom dia!')
}
bomDia()

const boaNoite = function () {
    // const boaNoite = function ola(){}
    console.log('Boa noite!')
}
// poderia chamar o ola()
boaNoite()

function somar(a, b) {
    // function somar (a, b = 0){}
    return a + b
}
const resul = somar(2, 3)
console.log(resul)

// Passar função como parâmetro para outra função
function minhaFuncao(funcao) {
    if (typeof funcao === 'function') {
        funcao()
    }
}
minhaFuncao(2)
minhaFuncao(boaNoite)

function potencia(base, expoente) {
    return Math.pow(base, expoente)
}
const r = potencia(2, 8)
console.log(r)

function potencia(base) {
    return function (expoente) {
        return Math.pow(base, expoente)
    }
}
const r1 = potencia(2)
console.log(r1(8))
// Caso queira chamar direto, tem que ser sem a vírgula
const r2 = potencia(2)(8)
console.log(r2)

function calcular(x) {
    return function (y) {
        return function (z) {
            return z(x, y)
        }
    }
}

function subtrair(a, b) {
    return a - b
}

function multiplicar(a, b) {
    return a * b
}

const rCalcular = calcular(10)(5)(subtrair)
console.log(rCalcular)

const rCalcular2 = calcular(10)(5)(multiplicar)
console.log(rCalcular2)

// arrow function - sem nome
const ola = () => console.log('olá')
ola()

