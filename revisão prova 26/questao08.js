/*8: Implemente um loop while que continue pedindo para o usuário 
inserir um número até que ele digite um número maior que 100.*/

let numero = 0;
while (numero <= 100) 
    numero = parseInt(prompt("Insira um número maior que 100:"));
console.log("Você digitou o número " + numero + ", que é maior que 100!");