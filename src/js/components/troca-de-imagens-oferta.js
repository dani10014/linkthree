export function iniciarTrocaImagenOferta(){

        const secaoBackground = document.querySelector(".hero-background");
        const backdropfade = document.querySelector(".backdrop-fade-out");

        if (!secaoBackground) return;

        const imagens = [
            "../../src/imagens/imagen-programacao-1.png",
            "../../src/imagens/imagen-programacao-2.png",
            "../../src/imagens/imagen-programacao-3.png",
        ];
        
        let indiceAtual = 0;

        function mudarSlide() {
            setTimeout(function(){
                backdropfade.style.filter = "opacity(1)";
            },500)
            setTimeout(function(){
                backdropfade.style.filter = "opacity(0)";
                indiceAtual = (indiceAtual + 1) % imagens.length;
                secaoBackground.style.backgroundImage = `url(${imagens[indiceAtual]})`;
            },1000)
        }
        setInterval(mudarSlide, 5000);
    }