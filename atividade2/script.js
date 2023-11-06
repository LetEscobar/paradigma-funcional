// Função pura para adicionar um aluno à lista de alunos
function adicionarAluno(listaAlunos, nome, nota) {
    return listaAlunos.concat({ nome, nota });
}

// Função pura para validar os dados do aluno
function validarAluno(nome, nota) {
    const mensagens = [];

    if (nome.trim() === '') {
        mensagens.push('O nome não pode ser em branco.');
    }

    if (nota.trim() === '') {
        mensagens.push('A nota não pode ser em branco.');
    } else {
        const notaNumber = parseFloat(nota);
        if (isNaN(notaNumber) || notaNumber < 0 || notaNumber > 10) {
            mensagens.push('A nota deve ser um número entre 0 e 10.');
        }
    }

    return mensagens;
}

document.addEventListener('DOMContentLoaded', function () {
    const nomeInput = document.getElementById('nome');
    const notaInput = document.getElementById('nota');
    const adicionarBtn = document.getElementById('adicionar');
    const tabelaBody = document.getElementById('tbody');
    const mensagensList = document.getElementById('mensagens');
    const buscaInput = document.getElementById('busca');
    let alunos = [];

    buscaInput.addEventListener('input', function () {
        const termoBusca = buscaInput.value.trim().toLowerCase();'()'

        const linhasTabela = Array.from(tabelaBody.getElementsByTagName('tr'));

        linhasTabela.forEach(linha => {
            const nomeAluno = linha.cells[0].textContent.trim().toLowerCase();

            if (nomeAluno.startsWith(termoBusca)) {
                linha.style.display = 'table-row';
            } else {
                linha.style.display = 'none';
            }
        });
    });

    adicionarBtn.addEventListener('click', function () {
        const nome = nomeInput.value;
        const nota = notaInput.value;

        // Utilizando a função pura 'validarAluno' para validar nome e nota
        const mensagens = validarAluno(nome, nota);

        if (mensagens.length > 0) {
            mensagensList.innerHTML = '';
            mensagens.forEach(mensagem => {
                const li = document.createElement('li');
                li.textContent = mensagem;
                mensagensList.appendChild(li);
            });
            return;
        }

        mensagensList.innerHTML = '';

        // Utilizando a função pura 'adicionarAluno' para adicionar um aluno à lista.
        alunos = adicionarAluno(alunos, nome, nota);
        nomeInput.value = '';
        notaInput.value = '';

        // Atualizando a tabela após adicionar um aluno, utilizando 'map'
        tabelaBody.innerHTML = '';
        tabelaBody.appendChild(document.createElement('tbody'));

        const tabelaRows = alunos.map(aluno => {
            const newRow = document.createElement('tr');
            const cell1 = newRow.insertCell(0);
            const cell2 = newRow.insertCell(1);
            cell1.textContent = aluno.nome;
            cell2.textContent = aluno.nota;
            return newRow;
        });

        tabelaRows.forEach(row => tabelaBody.appendChild(row));
    });
});
