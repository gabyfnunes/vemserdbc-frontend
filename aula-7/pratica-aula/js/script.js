//Spread

const numeros1 = [1, 2, 3];
const numeros2 = [4, 5, 6];
const numerosCombinados = [...numeros1, ...numeros2];
console.log(numerosCombinados)

//exemplo de spread

const meusBichos = {
    especie: 'Felino',
    raca: 'Siamês',
    idade: 8,
    chip: 025,
    vacinas: 'sim'
}

const caracteristicas = {
    castrado: 'sim',
    revisao: 'sim',
    cheiroso: 'sim'
}

const avaliacao = {...meusBichos, ...caracteristicas};

console.log(avaliacao);

////////////////////////////////////////
const dados1 =['a', 'b', 'c', 'd','e','f','g','h'];
const dados2 = [20, 22, 24, 26, 28, 30];
const dadosCombinados = [...dados1, ...dados2];
console.log(dadosCombinados);
// document.write(dadosCombinados);

////////////////////////////////////////
function somar(...valores){
    var total = 0;

    for (const item of valores){
        total += parseInt(item, 10);
    }
    
    return total;
}

console.log(somar(1, 2, 3, 4, 50, 10, 23, 56, 46))

////////////////////////////////////////
function getAtgumentos(valorPrincipal, ...outrosValores){
        return{
            valorPrincipal,
            outrosValores
        }
}
console.log(getAtgumentos('JavaScript', 'Java', 'React'));

////////////////////////////////////////
const produtos = [
    {descricao: 'canetas', quantidade: 20 , valor: 10.99},
    {descricao: 'caderno', quantidade: 10 , valor: 32.99}
]

function total(...produtos){
    return produtos
    .map(produto => produto.quantidade*produto.valor)
    .reduce((a,b) => a+b, 0);
}
console.log(total(...produtos));