/* Questão 15: Implemente um loop do while que percorra um array e exiba seus 
elementos, mas deve parar se encontrar o valor "parar" */

const str=['L','I','Z','A','N','D','R','A','parar','teste']
var i=0;

do {
     console.log(str[i])
     i++;
} while (str[i]!=='parar')
