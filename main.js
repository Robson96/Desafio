function pergunta1() {
    let INDICE = 13, SOMA = 0, K = 0;
    while(K < INDICE) {
        K += 1;
        SOMA += K;
    }
    console.log(SOMA)
}

function pergunta2() {
    let entrada = 38;
    let a = 0, b = 1;
    let fib = [a, b];
    for (let i = 0; i < 100_000; i++) {
        let prox = a + b;
        fib.push(prox);
        a = b;
        b = prox;
    }

    if (fib.includes(entrada)) console.log("A entrada: " + entrada + "contem na sequencia de fibonacci");
    else console.log("A entrada: " + entrada + " não contem na sequencia de fibonacci");
}

function pergunta3() {
    let vetor = require('./dados.json');
    let menor = Infinity;
    let maior = -Infinity; 
    let mediaMensal = 0;
    let diasComValor = 0;  

    for (let i = 0; i < vetor.length; i++) {
        let valor = vetor[i].valor;
        
        if (valor === 0) continue;

        mediaMensal += valor;
        diasComValor++;

        if (valor < menor) {
            menor = valor;
        }

        if (valor > maior) {
            maior = valor;
        }
    }

    let media = diasComValor > 0 ? mediaMensal / diasComValor : 0;

    console.log('Menor valor:', menor);
    console.log('Maior valor:', maior);
    console.log('Média mensal:', media);
}

function pergunta4() {
    const faturamentoEstados = {
        SP: 67836.43,
        RJ: 36678.66,
        MG: 29229.88,
        ES: 27165.48,
        Outros: 19849.53
    };

    const faturamentoTotal = Object.values(faturamentoEstados).reduce((total, valor) => total + valor, 0);

    for (let estado in faturamentoEstados) {
        let percentual = (faturamentoEstados[estado] / faturamentoTotal) * 100;
        console.log(`${estado}: ${percentual.toFixed(2)}%`);
    }
}

function pergunta5() {
    let palavra = "Desenvolvedor BackEnd"
    let palavraReversa = "";

    let letras = palavra.split('');

    for (let i = letras.length - 1; i >= 0; i--)
        palavraReversa += letras[i];

    console.log(palavraReversa.toString())
}

pergunta1();
pergunta2();
pergunta3();
pergunta4();
pergunta5();