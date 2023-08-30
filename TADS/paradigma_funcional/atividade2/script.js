document.addEventListener('DOMContentLoaded', function () {
    const nomeInput = document.getElementById('nome')
    const notaInput = document.getElementById('nota')
    const adicionarBtn = document.getElementById('adicionar')
    const tabelaBody = document.getElementById('tbody')
    const mensagensList = document.getElementById('mensagens')

    adicionarBtn.addEventListener('click', function () {
        const nome = nomeInput.value
        const nota = notaInput.value

        const mensagens = []

        if (nome.trim() === '') {
            mensagens.push('O nome não pode ser em branco.')
        }

        if (nota.trim() === '') {
            mensagens.push('A nota não pode ser em branco.')
        } else {
            const notaNumber = parseFloat(nota)
            if (isNaN(notaNumber) || notaNumber < 0 || notaNumber > 10) {
                mensagens.push('A nota deve ser um número entre 0 e 10.')
            }
        }

        if (mensagens.length > 0) {
            mensagensList.innerHTML = ''
            mensagens.forEach(mensagem => {
                const li = document.createElement('li')
                li.textContent = mensagem
                mensagensList.appendChild(li)
            })
            return
        }

        mensagensList.innerHTML = ''

        const newRow = tabelaBody.insertRow()
        const cell1 = newRow.insertCell(0)
        const cell2 = newRow.insertCell(1)
        cell1.textContent = nome
        cell2.textContent = nota

        nomeInput.value = ''
        notaInput.value = ''
    })
})
