var listaDePecas = ["Amortecedor","Motor","Filtro do Ar","Direção","Tranca","xxx","yyy",]

if(listaDePecas.length <6){
    // É possível cadastrar
    console.log("É possível cadastrar mais peças")
}else {
    console.log("Não tem mais espaço na lista")
}

let peso = 50;
if(peso<100){
    console.log("A peça deve pesar no mínimo 100g")
}else{
    console.log("A peça possui peso adequado")
}


let nomePeca = "Disco de Freio"
// let nomePeca = "Di"
if (nomePeca.length>3){
    console.log("Nome de peça está adequado para o cadastro!")
}else if(nomePeca.length == 0){
    console.log("O nome da peça não pode ser vazio,digite algo")
}else{
    console.log("O nome deve ter mais de 3 caracteres, digite um nome adequado")
}

// = -> atribuição de valor -> recebe
// == -> verificação se os valores são iguais -> é igual?
// === -> verificação se o valor e o tipo de valor são iguais

// let idade = "23"
// if (idade === "23")

switch(nomePeca.length){
    case 0:
        console.log("O nome da peça não pode ser vazio")
        break;
    case 14:
        console.log("O nome da peça completa#")
        break;
    case 3:
        console.log("o nome deve ter mais de 3 caracteres, digite um nome adequado")
   //  nao foi selecionado nenhuma opção
    default:
        console.log("Nome da peça está fora do esperado")
        break;
}