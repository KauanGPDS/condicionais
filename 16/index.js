//Só é considerado de maior se a idade for maior ou igual a 18.
const idadeDoAluno = 16;

//valor verdadeiro ou falso que informa se possui responsável
const possuiResponsavel = false;


if(idadeDoAluno >= 18){
    console.log("Pode fazer a rematricula")
}else if(idadeDoAluno < 18 && possuiResponsavel){
    console.log("Pode acompanha com responsavel")
}else{
    console.log("Pode ver não")
}