const jogada1 = "pedra"
const jogada2 = "tesoura"

//seu código aqui

if(jogada1 == "pedra" && jogada2 == "tesoura"){
    console.log("Jogador 1 Ganhou "+ `ganhou ${jogada1} perdeu ${jogada2}`)
}else if(jogada1 == "tesoura" && jogada2 == "papel"){
    console.log("Jogador 1 Ganhou "+ `ganhou ${jogada1} perdeu ${jogada2}`)
}else if(jogada1 == "papel" && jogada2 == "pedra"){
    console.log("Jogador 1 Ganhou "+ `ganhou ${jogada1} perdeu ${jogada2}`)
}else if(jogada1 == "tesoura" && jogada2 == "pedra"){
    console.log("Jogador 2 Ganhou "+ `perdeu ${jogada1} ganhou ${jogada2}`)
}else if(jogada1 == "papel" && jogada2 == "tesoura"){
    console.log("Jogador 2 Ganhou "+ `perdeu ${jogada1} ganhou ${jogada2}`)
}else if(jogada1 == "pedra" && jogada2 == "papel"){
    console.log("Jogador 2 Ganhou "+ + `perdeu ${jogada1} ganhou ${jogada2}`)
}else{
    console.log("Empate")
}