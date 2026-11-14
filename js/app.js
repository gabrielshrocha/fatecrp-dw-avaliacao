// [R1] Cadastro dos jogos e objeto catalogo

const jogos = [
    {
        id: 1,
        nome: "Monopoly",
        categoria: "Negociação",
        descricao: "Um jogo de compra e venda de propriedades, onde o objetivo é construir impérios e levar os rivais à falência.",
        nota: 7.7,
        favorito: true
    },
    {
        id: 2,
        nome: "War",
        categoria: "Estratégia",
        descricao: "War (baseado no jogo americano Risk) é um jogo de guerra e estratégia disputado com um mapa do mundo dividido em 6 regiões. Cada jogador recebe uma carta com um determinado objetivo e quem completar primeiro o seu é o vencedor.",
        nota: 8.3,
        favorito: true
    },
    {
        id: 3,
        nome: "Catan",
        categoria: "Estratégia",
        descricao: "Catan é um jogo de estratégia e negociação, no qual os jogadores colonizam uma ilha fictícia e cumprem objetivos para adquirir pontos. O primeiro que chegar a 10 pontos vence.",
        nota: 9.2,
        favorito: true
    },
    {
        id: 4,
        nome: "Detetive",
        categoria: "Investigação",
        descricao: "Os jogadores tem como objetivo descobrir quem assassinou a vítima, em qual local e qual a arma do crime. Usando dados para mover seus peões, os jogadores entram em cômodos para falarem seus palpites e desvendarem o mistério.",
        nota: 7.0,
        favorito: false
    },
    {
        id: 5,
        nome: "Pandemic",
        categoria: "Cooperativo",
        descricao: "Os jogadores formam uma equipe de especialistas (médico, cientista, pesquisador) que precisa viajar pelo mundo contendo surtos de doenças e descobrindo as curas antes que a humanidade seja extinta.",
        nota: 8.5,
        favorito: false
    },
    {
        id: 6,
        nome: "Zombicide",
        categoria: "Cooperativo",
        descricao: "Um jogo cooperativo cheio de miniaturas onde o grupo controla sobreviventes em um apocalipse zumbi, precisando cumprir missões e encontrar armas sem serem encurralados pelas hordas de monstros.",
        nota: 9.0,
        favorito: false
    },
    {
        id: 7,
        nome: "Terraforming Mars",
        categoria: "Estratégia",
        descricao: "Os jogadores controlam corporações competindo e cooperando para tornar Marte habitável, gerenciando oxigênio, temperatura, oceanos e recursos.",
        nota: 6.8,
        favorito: false
    },
    {
        id: 8,
        nome: "Mysterium",
        categoria: "Cooperativo",
        descricao: "Um jogo cooperativo assimétrico onde um jogador faz o papel de um fantasma amnésico que tenta guiar um grupo de médiuns até o assassino, usando apenas cartas com ilustrações abstratas e enigmáticas.",
        nota: 7.2,
        favorito: false
    }
];

const catalogo = {
    nome: "Central Jogos de Tabuleiro",
    itens: jogos,

    adicionar: function(jogo) {
        this.itens.push(jogo);
    },

    filtroCategoria: function(categoria) {
        const lista = [];

        for (let i = 0; i < this.itens.length; i++) {
            if (this.itens[i].categoria === categoria) {
                lista.push(this.itens[i]);
            }
        }

        return lista;
    },

    filtroNome: function(texto) {
        const lista = [];

        for (let i = 0; i < this.itens.length; i++) {
            const nome = this.itens[i].nome.toLowerCase();

            if (nome.includes(texto.toLowerCase())) {
                lista.push(this.itens[i]);
            }
        }

        return lista;
    },

    filtroFavoritos: function() {
        const favoritos = [];

        for (let i = 0; i < this.itens.length; i++) {
            if (this.itens[i].favorito) {
                favoritos.push(this.itens[i]);
            }
        }

        return favoritos;
    },

    favoritar: function(id) {
        for (let i = 0; i < this.itens.length; i++) {
            if (this.itens[i].id === id) {
                this.itens[i].favorito = !this.itens[i].favorito;
                break;
            }
        }
    },

    filtroNota: function() {
        const lista = [];

        for (let i = 0; i < this.itens.length; i++) {
            lista.push(this.itens[i]);
        }

        for (let i = 0; i < lista.length - 1; i++) {
            for (let j = 0; j < lista.length - 1 - i; j++) {
                if (lista[j].nota < lista[j + 1].nota) {
                    const aux = lista[j];
                    lista[j] = lista[j + 1];
                    lista[j + 1] = aux;
                }
            }
        }

        return lista;
    }
};

// [R2] Renderização dinâmica dos jogos
const LIMITE_DESCRICAO = 60;

function truncarTexto(texto, limite) {
    if (texto.length > limite) {
        return texto.slice(0, limite) + "…";
    }
    return texto;
}

function textoBotao(favorito) { // [R5]
    return favorito ? "Remover dos favoritos" : "Adicionar aos favoritos";
}

function renderizar(lista) {

    const container = document.getElementById("lista-jogos");

    container.innerHTML = "";
    if (lista.length === 0) {
        const mensagem = document.createElement("p");

        mensagem.textContent = "Nenhum item encontrado";

        container.appendChild(mensagem);

        return;
    }

    for (let i = 0; i < lista.length; i++) {

        const jogo = lista[i];

        const card = document.createElement("article");
        const titulo = document.createElement("h3");
        const categoria = document.createElement("p");
        const nota = document.createElement("p");
        const descricao = document.createElement("p");
        const botaoFavorito = document.createElement("button"); // [R5]

        card.classList.add("card-jogo");

        titulo.textContent = jogo.nome;
        categoria.textContent = "Categoria: " + jogo.categoria;
        nota.textContent = "Nota: " + jogo.nota.toFixed(1);
        descricao.textContent = truncarTexto(jogo.descricao, LIMITE_DESCRICAO);

        switch (jogo.categoria) {
            case "Estratégia":
                categoria.classList.add("estrategia");
                break;

            case "Cooperativo":
                categoria.classList.add("cooperativo");
                break;

            case "Negociação":
                categoria.classList.add("negociacao");
                break;

            case "Investigação":
                categoria.classList.add("investigacao");
                break;

            default:
                categoria.classList.add("outras-categorias");
                break;
        }

        // [R5] Configuração do botão de favoritos
        botaoFavorito.type = "button";
        botaoFavorito.textContent = textoBotao(jogo.favorito);

        card.classList.toggle("favorito", jogo.favorito);

        botaoFavorito.addEventListener("click", function() {

            jogo.favorito = !jogo.favorito;

            card.classList.toggle("favorito", jogo.favorito);

            botaoFavorito.textContent = textoBotao(jogo.favorito);

            atualizarPainel(lista);

        });

        card.appendChild(titulo);
        card.appendChild(categoria);
        card.appendChild(nota);
        card.appendChild(descricao);

        // [R5] Adicionando o botão ao card
        card.appendChild(botaoFavorito);

        container.appendChild(card);
    }
}

// [R3] Busca e filtro dos jogos

const campoBusca = document.getElementById("busca-jogo");
const seletorCategoria = document.getElementById("filtro-categoria");

function filtrarJogos(texto, categoria) {
    const busca = texto.toLowerCase();
    const jogosFiltrados = [];

    for (let i = 0; i < catalogo.itens.length; i++) {
        const jogo = catalogo.itens[i];

        const combinaNome = jogo.nome.toLowerCase().indexOf(busca) !== -1;
        const combinaCategoria = categoria === "Todas" || jogo.categoria === categoria;

        if (combinaNome && combinaCategoria) {
            jogosFiltrados.push(jogo);
        }
    }

    return jogosFiltrados;
}

function atualizarTela() {
    const jogosExibidos = filtrarJogos(campoBusca.value, seletorCategoria.value);

    renderizar(jogosExibidos);
}

campoBusca.addEventListener("input", atualizarTela);

seletorCategoria.addEventListener("change", atualizarTela);

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        campoBusca.value = "";
        seletorCategoria.value = "Todas";
        atualizarTela();
    }
});

// [R4] Cadastro de novos jogos com validação

const formCadastro = document.getElementById("form-cadastro");

const campoNome = document.getElementById("campo-nome");
const campoCategoria = document.getElementById("campo-categoria");
const campoNota = document.getElementById("campo-nota");
const campoDescricao = document.getElementById("campo-descricao");

const mensagemForm = document.getElementById("mensagem-form");

function validar(dados) {

    if (dados.nome.trim().length < 3) {
        campoNome.classList.add("campo-erro");
        throw new Error("O nome deve ter no mínimo 3 caracteres.");
    }

    if (dados.categoria === "") {
        campoCategoria.classList.add("campo-erro");
        throw new Error("Selecione uma categoria.");
    }

    if (isNaN(dados.nota) || dados.nota <= 0 || dados.nota > 10) {
        campoNota.classList.add("campo-erro");
        throw new Error("A nota deve ser um número maior que 0 e até 10.");
    }
}

formCadastro.addEventListener("submit", function(event) {

    event.preventDefault();

    campoNome.classList.remove("campo-erro");
    campoCategoria.classList.remove("campo-erro");
    campoNota.classList.remove("campo-erro");

    mensagemForm.textContent = "";

    const dados = {
        nome: campoNome.value.trim(),
        categoria: campoCategoria.value,
        nota: Number(campoNota.value.replace(",", ".")),
        descricao: campoDescricao.value.trim()
    };

    try {

        validar(dados);

        catalogo.adicionar({
            id: catalogo.itens.length + 1,
            nome: dados.nome,
            categoria: dados.categoria,
            descricao: dados.descricao || "Sem descrição informada.",
            nota: dados.nota,
            favorito: false
        });

        formCadastro.reset();

        mensagemForm.className = "mensagem-sucesso";
        mensagemForm.textContent = "Jogo cadastrado com sucesso!";

        atualizarTela();

    } catch (erro) {

        mensagemForm.className = "mensagem-erro";
        mensagemForm.textContent = erro.message;

    }

});

campoNome.addEventListener("input", function() {

    if (campoNome.value.trim().length >= 3) {
        campoNome.classList.remove("campo-erro");
    }

});

campoCategoria.addEventListener("change", function() {

    if (campoCategoria.value !== "") {
        campoCategoria.classList.remove("campo-erro");
    }

});

campoNota.addEventListener("input", function() {

    const nota = Number(campoNota.value.replace(",", "."));

    if (!isNaN(nota) && nota > 0 && nota <= 10) {
        campoNota.classList.remove("campo-erro");
    }

});

renderizar(catalogo.itens);
