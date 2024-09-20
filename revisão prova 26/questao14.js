/* Questão 14: Utilize um loop do while que continue pedindo ao usuário para 
digitar "sim" até que ele digite algo diferente. */

var str;
let sim = "sim"; 
do {
    str = prompt("Digite 'sim' para continuar");
} while (str.toLowerCase() == sim);