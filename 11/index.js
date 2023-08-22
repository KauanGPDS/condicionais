//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 300000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1000000;

if(rendaMensalEmCentavos >= 200000 ){
    console.log("Pague o que deve")
}else if(mesesDecorridos >= 60){
    console.log("Deve mais nada não")
}else if(totalJaPagoPeloAluno <= 180000){
    console.log(`ainda falta paga ${totalJaPagoPeloAluno - 180000}`)
}