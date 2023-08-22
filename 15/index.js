const primeiroNome = "Mario";
const sobrenome = "";
const apelido = "";

const resultado = primeiroNome || (sobrenome && (primeiroNome + " " + sobrenome)) || apelido;
console.log(resultado);