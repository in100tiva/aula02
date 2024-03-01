// var name

// // // console.log(name)

// let age, isHuman

// age = 26
// isHuman = true
// name = `luan`

// // console.log(name, age, isHuman)

// // console.log('o ' + name + ' tem ' + age + ' anos')

// console.log(`o ${name} tem ${age} anos`)


// const person = {
//     name: `luan`,
//     age: 30,
//     weight: 127.3,
//     isAdmin: true
// }

// console.log(`${person.name} tem ${person.weight}kg`)


// const animals = [
//     'lion',
//     'monkey',
//     {
//         name: "cat",
//         age: 3
//     }
// ]

// console.log(animals[2].name)

// function createPhrases() {
//     console.log(`Estudar é muito bom`)
//     console.log(`Paciência e persistencia`)
//     console.log(`Revisão é mãe do aprendizado`)
// }

// createPhrases()

// Solicita ao usuário para digitar o nome usando o prompt
// var nome = prompt("Digite seu nome:");

// Exibe o nome na tela usando o console
// console.log(`O nome digitado é: ${nome}`);

// Solicita ao usuário para inserir a idade usando o prompt
// var idade = prompt("Digite sua idade:");

// Obtém o ano atual
// var anoAtual = 2024;

// Calcula o ano de nascimento subtraindo a idade do ano atual
// var anoNascimento = anoAtual - idade;

// Exibe o ano de nascimento usando o console
// console.log("Seu ano de nascimento é: " + anoNascimento);

// Solicita ao usuário para inserir o raio do círculo
// var raio = prompt("Digite o raio do círculo:");

// Calcula a área do círculo usando a fórmula: área = π * raio^2
// var area = Math.PI * raio * raio;

// Exibe a área do círculo usando o console
// console.log("A área do círculo com raio " + raio + " é: " + area.toFixed(2));
// console.log(`A área do círculo com raio ${raio} é: ${area.toFixed(2)}`);

// Solicita ao usuário que insira o valor ganho por hora e o número de horas trabalhadas no mês
var valorHora = prompt("Quanto você ganha por hora?");
var horasTrabalhadas = prompt("Quantas horas você trabalhou no mês?");

// Calcula o salário bruto
var salarioBruto = valorHora * horasTrabalhadas;

// Calcula o desconto para o INSS (8%)
var descontoINSS = salarioBruto * 0.08;

// Calcula o salário menos o inss
var salarioINSS = salarioBruto - descontoINSS;

// Calcula o desconto para o Imposto de Renda (11%)
var descontoIR = salarioINSS * 0.11;

// Calcula o desconto para o sindicato (5%)
var descontoSindicato = salarioINSS * 0.05;

// Calcula o salário líquido subtraindo os descontos
var salarioLiquido = salarioINSS - descontoIR - descontoSindicato;

// Exibe os resultados
console.log("1. Salário bruto: " + salarioBruto.toFixed(2));
console.log("2. Valor descontado para o INSS: " + descontoINSS.toFixed(2));
console.log("3. Valor descontado para o sindicato: " + descontoSindicato.toFixed(2));
console.log("4. Salário líquido: " + salarioLiquido.toFixed(2));
console.log("5. Total de descontos: " + (descontoIR + descontoINSS + descontoSindicato).toFixed(2));