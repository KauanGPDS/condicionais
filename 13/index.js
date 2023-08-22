//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;
if(tipoDePagamento == "credito"){
    let desconto = ((valorDoProduto*5) /100)
    console.log(desconto)
}else if(tipoDePagamento == "cheque"){
    let desconto = ((valorDoProduto*3)/100)
    console.log(desconto)
}else{
    let desconto = ((valorDoProduto*10)/100)
    console.log(desconto)
}
// | Forma de Pagamento | Desconto |
// | ------------------ | -------- |
// | credito            | 5%       |
// | cheque             | 3%       |
// | debito ou dinheiro | 10%      |