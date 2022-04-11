
let quantidade = prompt("Com quantas cartas queres jogar?");
let nomes = ["bobrossparrot.gif", "explodyparrot.gif", "fiestaparrot.gif", "metalparrot.gif","revertitparrot.gif", "tripletsparrot.gif", "unicornparrot.gif"]  
let cartasnamesa = [];
let cartasviradas = [];
while (quantidade < 4 || quantidade % 2 != 0 || quantidade > 14) {
    quantidade = prompt("Escolha um número par entre 4 e 14")
} 
alert("Vamos começar!")
iniciarjogo()

function iniciarjogo() {
    let elemento = document.querySelector(".caixa-cartas");
    let nomesaleatorios = nomes.sort(comparador) 

    for (let index = 0; index < quantidade/2; index++) {
        for (let indexdois = 0; indexdois < 2; indexdois++) {
            console.log(nomesaleatorios[index])
            cartasnamesa.push(
                 `<div class="cartas" onclick="vire(this)">
                    <img src="front.png" class="frente">
                    <img src=${nomesaleatorios[index]} class="tras esconde">
                </div>`);         
        }
    }
    let cartassorteadas = cartasnamesa.sort(comparador);
    for (let index = 0; index < cartassorteadas.length; index++) {
        elemento.innerHTML += cartassorteadas[index];
        
    }
}





function vire (carta) {
    let frente = carta.querySelector(".frente");
    let tras = carta.querySelector(".tras");

    frente.classList.toggle("esconde");
    tras.classList.toggle("esconde");
    
    cartasviradas.push(carta);
    if (cartasviradas.length === 2) {
        compararcartas ()

    }
}
function compararcartas() {
    let cartaumfrente = cartasviradas[0].querySelector(".frente");
    let cartadoisfrente = cartasviradas[1].querySelector(".frente");
    let cartaumtras = cartasviradas[0].querySelector(".tras");
    let cartadoistras = cartasviradas[1].querySelector(".tras");

    if (cartaumtras.getAttribute("src") === cartadoistras.getAttribute("src")) {

        cartasviradas = []
    } else {
        cartaumfrente.classList.toggle("esconde");
        cartadoisfrente.classList.toggle("esconde");
        cartaumtras.classList.toggle("esconde");
        cartadoistras.classList.toggle("esconde");
    }
} 
function comparador() { 
	return Math.random() - 0.5; 
}





    

