// formas de tipar
//primeira forma de tipar
let idade: number ;
//forma 2
const nome: string = "Seu Zezo";
//forma 3
const sobreNome = "da Silva"; //inferencia de tipo
type usuario = {'nick': string, 'age':number};
//chamando type novo
let jogador: usuario = {'nick': 'Dona Redonda', 'age': 18};
let jogadorVelho: usuario = {'nick': 'Toin', 'age': 76};
function verificarIdade(usuarioAtual: usuario) {
    if (usuarioAtual.age >= 18) {
        console.log(`O usuário ${usuarioAtual.nick} é maior de idade.`);
    } else {
        console.log(`O usuário ${usuarioAtual.nick} é menor de idade.`);
};