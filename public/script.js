const catalogo = [

    {
        id: 1,
        titulo: "Dark",
        tipo: "Série",
        ano: 2017,
        generos: ["Ficção", "Drama"],
        nota: 9,
        assistido: true
    },

    {
        id: 2,
        titulo: "Breaking Bad",
        tipo: "Série",
        ano: 2008,
        generos: ["Drama", "Crime"],
        nota: 10,
        assistido: true
    },

    {
        id: 3,
        titulo: "Interestelar",
        tipo: "Filme",
        ano: 2014,
        generos: ["Ficção", "Aventura"],
        nota: 9.5,
        assistido: true
    },

    {
        id: 4,
        titulo: "Avatar",
        tipo: "Filme",
        ano: 2009,
        generos: ["Ação", "Aventura"],
        nota: 8,
        assistido: false
    },

    {
        id: 5,
        titulo: "Round 6",
        tipo: "Série",
        ano: 2021,
        generos: ["Suspense"],
        nota: 8.5,
        assistido: true
    },

    {
        id: 6,
        titulo: "The Batman",
        tipo: "Filme",
        ano: 2022,
        generos: ["Ação", "Mistério"],
        nota: 8.7,
        assistido: false
    }

];

// =======================
// CONSOLE
// =======================

console.log(catalogo);

console.log("Primeiro título:", catalogo[0].titulo);

console.log(
    "Ano do último item:",
    catalogo[catalogo.length - 1].ano
);

if (catalogo[2].generos.length > 1) {

    console.log(
        "Segundo gênero:",
        catalogo[2].generos[1]
    );

} else {

    console.log("Não existe segundo gênero.");
}

// =======================
// FUNÇÃO
// =======================

function carregarCatalogo() {

    let tela = "";

    let divOutput = document.getElementById("output");

    // =======================
    // CONTADORES
    // =======================

    let quantidadeFilmes = 0;
    let quantidadeSeries = 0;
    let naoAssistidos = 0;
    let somaNotas = 0;

    // =======================
    // LISTAGEM DOS ITENS
    // =======================

    for (let i = 0; i < catalogo.length; i++) {

        // contar filmes e séries
        if (catalogo[i].tipo === "Filme") {
            quantidadeFilmes++;
        } else {
            quantidadeSeries++;
        }

        // contar não assistidos
        if (catalogo[i].assistido === false) {
            naoAssistidos++;
        }

        // somar notas
        somaNotas += catalogo[i].nota;

        // mostrar itens
        tela += `
            <div>

                <h2>${catalogo[i].titulo}</h2>

                <p><strong>Tipo:</strong> ${catalogo[i].tipo}</p>

                <p><strong>Ano:</strong> ${catalogo[i].ano}</p>

                <p><strong>Nota:</strong> ${catalogo[i].nota}</p>

                <p><strong>Gêneros:</strong> 
                    ${catalogo[i].generos.join(", ")}
                </p>

                <p><strong>Assistido:</strong> 
                    ${catalogo[i].assistido ? "Sim" : "Não"}
                </p>

                <hr>

            </div>
        `;
    }

    // =======================
    // MÉDIA
    // =======================

    let media = somaNotas / catalogo.length;

    // =======================
    // RANKING
    // =======================

    let ranking = [...catalogo];

    ranking.sort(function(a, b) {
        return b.nota - a.nota;
    });

    // =======================
    // RESUMO
    // =======================

    tela += `
        <h1>Resumo do Catálogo</h1>

        <p>
            <strong>Total de itens:</strong> 
            ${catalogo.length}
        </p>

        <p>
            <strong>Quantidade de filmes:</strong> 
            ${quantidadeFilmes}
        </p>

        <p>
            <strong>Quantidade de séries:</strong> 
            ${quantidadeSeries}
        </p>

        <p>
            <strong>Não assistidos:</strong> 
            ${naoAssistidos}
        </p>

        <p>
            <strong>Média das notas:</strong> 
            ${media.toFixed(1)}
        </p>
    `;

    // =======================
    // TOP 3
    // =======================

    tela += `<h2>Top 3 melhores notas</h2>`;

    for (let i = 0; i < 3; i++) {

        tela += `
            <p>
                ${i + 1}º - 
                ${ranking[i].titulo}
                (${ranking[i].nota})
            </p>
        `;
    }

    // =======================
    // MOSTRAR NA TELA
    // =======================

    divOutput.innerHTML = tela;
}