alert('Bem vindos ao jogo do Número Secreto!!!');
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto o chute não for igual ao número secreto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // se chute for igual ao numero secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que o chute: ${chute}`);
        } else {
            alert(`O número secreto é maior que o chute: ${chute}`);
        }
        //tentativas = tentativas + 1
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'Tentativas' : "Tentativa";
alert(`Isso aí! Você descobriu o numero secreto: ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
if (tentativas === 1) {
    alert('Surpresa: Você ganhou um iPhone, parabéns!');
} else if (tentativas > 1 && tentativas < 11) {
    alert('Surpresa: Você ganhou uma AirFryer, parabéns!!!');
} else {
    alert('Continue participando, esperamos você!');
}