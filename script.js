//EX - 1
const dobro = x => x * 2;
console.log(dobro(3)); // 6

//EX - 2
const dividir = (a, b) => a / b;
console.log(dividir(9, 3)); // 3

//EX - 3
const mensagemBoasVindas = (nome) => {
    return `Seja bem-vindo, ${nome}!`;
};
console.log(mensagemBoasVindas("João")); // "Seja bem-vindo, João!"

//EX - 4
const executarOperacao = (a, b, operacao) => operacao(a, b);
console.log(executarOperacao(5, 3, (a, b) => a * b)); // 15

//EX - 5
const precos = [100, 200, 300, 400];
const precosComDesconto = precos.map(x => x - (x * 0.1));
console.log(precosComDesconto); // [90, 180, 270, 360]

//EX - 6
const idades = [20, 12, 21, 18, 17, 14];
const menoresDeIdade = idades.filter(idade => idade < 18);
console.log(menoresDeIdade); // [12, 17, 14]

//EX - 7
const valores = [2, 3, 4, 5];
const produto = valores.reduce((total, num) => total * num);
console.log(produto); // 120 (pois 2 * 3 * 4 * 5 = 120)
