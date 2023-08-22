const alturaEmCm = 185;

//seu código aqui

if(alturaEmCm >= 180){
    console.log("Aprovado")
    if(alturaEmCm >= 185 && alturaEmCm < 186){
        console.log("Libero")
    }else if(alturaEmCm >= 186 && alturaEmCm < 196 ){
        console.log("Ponteiro")
    }else if(alturaEmCm >= 196 && alturaEmCm < 206 ){
        console.log("Oposto")
    }else if(alturaEmCm >= 206 ){
        console.log("Central")
    }
}else{
    console.log("Reprovado")
}





// - Caso o jogador tenha menos de 180cm, o programa deve imprimir **REPROVADO**
// - Caso tenha entre 180cm e 185cm, o programa deve imprimir **LÍBERO**
// - Caso tenha entre 186cm e 195cm, o programa deve imprimir **PONTEIRO**
// - Caso tenha entre 196cm e 205cm, o programa deve imprimir **OPOSTO**
// - Caso tenha mais de 205cm, o programa deve imprimir **CENTRAL**





