const formulario = document.querySelector("#formularioAcademico");
const textoResultado = document.querySelector("#resultado");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();    
    
    const nome = document.querySelector("#nome").value;
    const nota1 = Number(document.querySelector("#nota1").value);
    const nota2 = Number(document.querySelector("#nota2").value);   
    const media = (nota1 + nota2) / 2;
    let mensagem = "";     
    if (media < 3) {
        mensagem = `sua média é ${media.toFixed(1)}, Horrível!`;
    } else if (media < 7) {
        mensagem = `sua média é ${media.toFixed(1)}, Melhora!`;
    } else {
        mensagem = `sua média é ${media.toFixed(1)}, Gênio!`;
    }    
    
    textoResultado.textContent = `${nome}, ${mensagem}`;
});