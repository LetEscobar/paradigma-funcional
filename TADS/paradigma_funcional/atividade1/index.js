function mostrarSoma() {
    var valor1 = parseInt(document.getElementById('valor1').value)
    var valor2 = parseInt(document.getElementById('valor2').value)

    var resultado = valor1 + valor2

    document.getElementById('resultado').value = resultado
}

function limpar() {
    document.getElementById('valor1').value = ''
    document.getElementById('valor2').value = ''
    document.getElementById('resultado').value = ''
}

function verificaCampos() {
    var valor1 = document.getElementById('valor1').value
    var valor2 = document.getElementById('valor2').value

    if (valor1 == '') {
        alert('Preencha o valor 1!')
        input1 = document.getElementById('valor1').style.background = 'red'
    } else if (valor2 == '') {
        alert('Preencha o valor 2!')
        input2 = document.getElementById('valor2').style.background = 'red'
    } else {
        mostrarSoma()
        input1 = document.getElementById('valor1').style.background = 'white'
        input2 = document.getElementById('valor2').style.background = 'white'
        titulo = document.getElementById('titulo').innerHTML = 'Novo Título'
    }
}
