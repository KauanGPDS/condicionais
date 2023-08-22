const caractere = "2";

const carac = caractere.toUpperCase()
if(carac == "E" || carac == "A" || carac == "I" || carac == "O" || carac == "U"){
    console.log("Vogal")
}else if(caractere == "1" || caractere == "2" || caractere == "3"|| caractere == "4"|| caractere == "5"|| caractere == "6" || caractere == "7"|| caractere == "8" || caractere == "9"|| caractere == "0"){
    console.log("Numeros")
}else{
    console.log("Consoante")
}



// | Categoria | Caractere                             |
// | --------- | ------------------------------------- |
// | Vogal     | A E I O U a e i o u                   |
// | Consoante | Qualquer letra que não seja uma vogal |
// | Número    | 1 2 3 4 5 6 7 9 0                     |