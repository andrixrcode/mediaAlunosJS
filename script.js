//declaracao de elementos do html
const pNotas = document.querySelector("#pNotas");
const inputNotas = document.querySelector("#inputNotas");
const pResultado = document.querySelector("#pResultado");
const pMensagem = document.querySelector("#pMensagem");

//array responsavel por armazenar as notas
let notas = [];

//funcoes para o funcionamento
function inserirNota() {
    if (inputNotas.value != "" && inputNotas.value >= 0 && inputNotas.value <= 10) {
        notas.push(inputNotas.value);
        pNotas.textContent = "NOTAS: " + notas;
        inputNotas.value = "";

        calcularMedia();
    } else {
        alert("Digite Um Valor Válido! ( 0 - 10 )");
    }
}

function removerNota() {
    //pop() remove ultimo elemento do array
    notas.pop();

    if (notas.length == 0) {
        pNotas.textContent = "NOTAS: ";
        pResultado.textContent = "MÉDIA: ";
        pMensagem.textContent = " ";
    } else {
        pNotas.textContent = "NOTAS: " + notas;
        calcularMedia()
    }
}

function calcularMedia() {
    let mensagem = "";
    let soma = 0;
    let media = 0;
    let resultado = 0

    if (notas) {
        for (i = 0; i < notas.length; i++) {
            //Number() para que os valores inseridos sejam tratados corretamente como numero
            soma += Number(notas[i]);
        }

        media = soma / notas.length;

        //funcao toFixed limita o numero de casas decimais
        resultado = media.toFixed(1);

        //floor() arredonda o valor para baixo  ex: 5.9 = 5
        if (Math.floor(media) < 5) {
            mensagem = " Estude Mais!";
        } else if (Math.floor(media) <= 7) {
            mensagem = " Passa de Ano, Mas Pode Melhorar!";
        } else {
            mensagem = " Estudioso! :)";
        }

        pResultado.textContent = "MÉDIA: " + resultado;
        pMensagem.textContent = mensagem
    }
}