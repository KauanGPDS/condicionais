//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;

if(valorDoProduto - valorPago == 0){
    console.log("Ja Pago Tudo")
}else if(valorDoProduto - valorPago != 0){
    let valor = ((valorDoProduto/100) - valorPago)/10
    console.log(valor  + "R$ de parcelas de  " + quantidadeDoParcelamento )
}