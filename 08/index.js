const idade = 18;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = false;

if( idade <= 12 || possuiPatologia == true || altura == 150){
    console.log("Pode ir não")
}else if(idade >= 13 && idade <= 17){
    console.log("Paga 10 reais")
}else if(idade >= 18 && idade <= 64){
    console.log("Paga 20 reais")
}else if(idade >= 18 && idade <= 64 && ehEstudante == true ){
    console.log("Paga 10 reais")
}