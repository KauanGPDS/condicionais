const diaDaSemana = 3;


if(diaDaSemana >= 1 && diaDaSemana <= 7){
    switch (diaDaSemana) {
        case 1:
        console.log("Segunda")
        break;
        case 2:
        console.log("terca")
        break;
        case 3:
        console.log("quarta")
        break;
        case 4:
        console.log("quinta")
        break;
        case 5:
        console.log("Sexta")
        break;
        case 6:
        console.log("sabado")
        break;
    
        default:
            console.log("domingo")
            break;
    }
}else{
    console.log("Dia incorreto")
}