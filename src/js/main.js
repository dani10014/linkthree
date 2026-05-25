import { iniciarTrocaImagenOferta } from "./components/troca-de-imagens-oferta.js";

iniciarTrocaImagenOferta();
const botoesLink = document.querySelectorAll(".botoes-links button");

botoesLink.forEach(botao =>{
    botao.addEventListener("click", ()=>{
        if(botao.dataset.caminho === "linkedin"){
            window.open("https://www.linkedin.com/in/dijalma-duarte-fleitas-471b66353/" ,"_blank");
        }
        if(botao.dataset.caminho === "WhatsApp"){
            window.open("https://wa.me/55679910702222","_blank")
        }
        if(botao.dataset.caminho === "github"){
            window.open("https://github.com/dani10014","_blank")
            
        }
    })
})