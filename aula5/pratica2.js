function Linhatotal() {
    const tabela = document.getElementById('tabelaNotas');
    const numLinhas = tabela.rows.length;
    const numColunas = tabela.rows[0].cells.length;
    const novaLinha = tabela.insertRow(numLinhas);

    const celulaTitulo = novaLinha.insertCell(0);
    celulaTitulo.innerHTML = 'Média por Nota';

    for (let j = 1; j < numColunas; j++) {
        let soma = 0;
        let contador = 0;

        for (let i = 2; i < numLinhas; i++) {
            const valor = parseFloat(tabela.rows[i].cells[j].innerText);
            if (!isNaN(valor)) {
                soma += valor;
                contador++;
            }
        }

        const media = soma / contador;
        const celulaMedia = novaLinha.insertCell(j);
        celulaMedia.innerText = isNaN(media) ? '' : media.toFixed(2);
    }
}

function ColunaTotal() {
    const tabela = document.getElementById('tabelaNotas');
    const numLinhas = tabela.rows.length;

    tabela.rows[0].insertCell(-1).outerHTML = '<th rowspan="2">Média por Aluno</th>';

    for (let i = 2; i < numLinhas; i++) {
        let soma = 0;
        let contador = 0;

        for (let j = 1; j < tabela.rows[i].cells.length; j++) {
            const valor = parseFloat(tabela.rows[i].cells[j].innerText);
            if (!isNaN(valor)) {
                soma += valor;
                contador++;
            }
        }

        const media = soma / contador;
        tabela.rows[i].insertCell(-1).innerText = isNaN(media) ? '' : media.toFixed(2);
    }
}

function gerarNotasAleatorias() {
    const tabela = document.getElementById('tabelaNotas');
    const numLinhas = tabela.rows.length;

    for (let i = 2; i < numLinhas; i++) { // Começa a partir da linha 2 para ignorar cabeçalhos
        for (let j = 1; j < tabela.rows[i].cells.length; j++) {
            const celula = tabela.rows[i].cells[j];
            if (celula.innerText.trim() === '') { // Se a célula estiver vazia
                const notaAleatoria = (Math.random() * 10).toFixed(1);
                celula.innerText = notaAleatoria;
            }
        }
    }
}

function Linhatotal() {
    gerarNotasAleatorias(); // Gera notas aleatórias antes de calcular a média

    const tabela = document.getElementById('tabelaNotas');
    const numLinhas = tabela.rows.length;
    const numColunas = tabela.rows[0].cells.length;
    const novaLinha = tabela.insertRow(numLinhas);

    const celulaTitulo = novaLinha.insertCell(0);
    celulaTitulo.innerHTML = 'Média por Nota';

    for (let j = 1; j < numColunas; j++) {
        let soma = 0;
        let contador = 0;

        for (let i = 2; i < numLinhas; i++) {
            const valor = parseFloat(tabela.rows[i].cells[j].innerText);
            if (!isNaN(valor)) {
                soma += valor;
                contador++;
            }
        }

        const media = soma / contador;
        const celulaMedia = novaLinha.insertCell(j);
        celulaMedia.innerText = isNaN(media) ? '' : media.toFixed(2);
    }
}

function ColunaTotal() {
    gerarNotasAleatorias(); // Gera notas aleatórias antes de calcular a média

    const tabela = document.getElementById('tabelaNotas');
    const numLinhas = tabela.rows.length;

    tabela.rows[0].insertCell(-1).outerHTML = '<th rowspan="2">Média por Aluno</th>';

    for (let i = 2; i < numLinhas; i++) {
        let soma = 0;
        let contador = 0;

        for (let j = 1; j < tabela.rows[i].cells.length; j++) {
            const valor = parseFloat(tabela.rows[i].cells[j].innerText);
            if (!isNaN(valor)) {
                soma += valor;
                contador++;
            }
        }

        const media = soma / contador;
        tabela.rows[i].insertCell(-1).innerText = isNaN(media) ? '' : media.toFixed(2);
    }
}
