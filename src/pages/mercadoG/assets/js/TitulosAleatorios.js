document.addEventListener("DOMContentLoaded", function() {
    // Array de frases para el título h1
    var frasesH1 = [
        "¿Listo para desentrañar los misterios del universo?",
        "Explora el mundo de los NFTs: donde la creatividad cobra vida.",
        "NFTs: Donde cada obra de arte cuenta su propia historia.",
        "Descubre la magia digital de los NFTs y crea tu propio universo.",
        "En el reino de los NFTs, la imaginación no tiene límites.",
        "Los NFTs: Donde la tecnología encuentra su expresión artística.",
        "¡Colecciona momentos, no cosas! Explora los NFTs.",
        "NFTs: Redefiniendo el arte, un token a la vez.",
        "Explora NFTs: Donde la autenticidad se encuentra con la innovación.",
        "Descubre NFTs: La próxima revolución digital está aquí.",
        "Cada NFT tiene una historia que contar. ¿Cuál será la tuya?",
        "NFTs: Más que un token, es una experiencia.",
        "NFTs: Creando puentes entre el arte y la tecnología.",
        "Explora NFTs: Tu pasaporte a un mundo digital sin fronteras.",
        "Sumérgete en el universo de los NFTs y deja volar tu creatividad.",
        "NFTs: Conectando artistas y coleccionistas en un espacio digital.",
        "Explora NFTs: Donde cada creación es única y valiosa.",
        "Los NFTs son como los sueños: infinitos y llenos de posibilidades.",
        "NFTs: Donde el arte se encuentra con la innovación tecnológica.",
        "Descubre el mundo de los NFTs: Tu entrada al futuro del arte.",
        "NFTs: Donde la creatividad se convierte en patrimonio digital."
        // ... (se pueden agregar mas titulos aqui
    ];

    // Seleccionar una frase aleatoria para el título h1
    var fraseH1Aleatoria = frasesH1[Math.floor(Math.random() * frasesH1.length)];

    // Mostrar la frase en el título h1
    document.querySelector("h1").textContent = fraseH1Aleatoria;
});