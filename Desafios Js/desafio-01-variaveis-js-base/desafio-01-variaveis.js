// Declarar uma variável chamada `myvar`, sem valor.
var myvar;

// Após declarada, atribua o valor 10 à variável `myvar`.
myvar = 10;

// Declare uma nova variável chamada `soma`, e adicione uma instrução somando os valores 
var soma =+ myvar;

// Atribua à variável `soma` todo o valor dela, somando 1, usando o operador de soma abreviado.
soma + 1;
console.log(soma)

// Atribua à variável `soma` todo o valor dela, multiplicando por 3, usando o operador de multiplicação abreviado.
soma = soma * 3
console.log(soma)

// Qual é o valor da variável `soma` até aqui?
myvar += 20
console.log(soma)
console.log(myvar)

// Declare uma variável chamada `souninja`, atribuindo à ela o valor booleano que representa `verdadeiro`.
var souninja = true
console.log(souninja)

// Declare uma variável chamada `comida` que recebe um array com os valores 'arroz', 'feijão' e 'ovo'.
var comida = ['Arroz', 'Feijão', 'Ovo']
console.log(comida)

// Digite a instrução que imprime o valor de 'feijao', que está na variável `comida`.
console.log(comida[1])

// Digite o código que verifica se a variável `soma' é igual a variável `myvar` (testando também o tipo).
if (soma === myvar) {
    console.log('As variáveis são iguais')
} else {
    console.log('As variáveis são diferentes')    
}

// Digite o código que verifica se a variável `myvar` é menor ou igual à variável `soma`

if (myvar <= soma) {
    console.log('A variável myvar é menor ou igual a váriavel soma')
} else {
    console.log('A variável myvar é maior que a váriavel soma')
}



// Crie uma função chamada `divisao` que receba como parâmetro dois números, e retorne o resultado da divisão entre eles.
function divisao(){
    var number1 = 2
    var number2 = 10
    var divisao = (number1 + number2)/2
    return divisao;
};

console.log(divisao())

// Invoque a função criada acima, passando os parâmetros 10 e 2.
