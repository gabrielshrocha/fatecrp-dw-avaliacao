# Central Jogos de Tabuleiro

**Disciplina:** Desenvolvimento Web — Fatec Ribeirão Preto

**Integrantes:**
- Nome: Gabriel Stopa Honorato Rocha | RA: 2840482613012
- Nome: João Victor Tavares | RA: 2840482613034

**Tema:** Catálogo de Jogos de Tabuleiro

---

### Questão 01 — Cadastro dos jogos e objeto catálogo

Criamos um array chamado `jogos`, contendo oito jogos de tabuleiro. Cada jogo foi cadastrado como um objeto, com informações como id, nome, categoria, descrição, nota e se é ou não favorito.

Depois, criamos o objeto `catalogo`, que recebe o nome do nosso sistema e o array de jogos. Dentro dele, desenvolvemos métodos para realizar diferentes operações:

- `adicionar()`: criamos esse método para adicionar novos jogos ao catálogo.
- `filtroCategoria()`: utilizamos esse método para buscar jogos de acordo com a categoria escolhida.
- `filtroNome()`: criamos uma busca pelo nome dos jogos, que também funciona com letras maiúsculas e minúsculas.
- `filtroFavoritos()`: utilizamos esse método para mostrar somente os jogos marcados como favoritos.
- `favoritar()`: criamos esse método para marcar ou desmarcar um jogo como favorito, utilizando seu ID.
- `filtroNota()`: implementamos uma ordenação dos jogos da maior nota para a menor, utilizando o algoritmo Bubble Sort.

### Questão 02 — Renderização dinâmica dos jogos

Criamos a função `renderizar(lista)`, responsável por exibir os jogos do catálogo diretamente na página HTML. Ela recebe uma lista como parâmetro e percorre seus elementos para construir os cards de cada jogo.

Para isso, utilizamos os seguintes recursos:

- `LIMITE_DESCRICAO`: constante que define o limite de 60 caracteres das descrições. Caso seja necessário aumentar ou diminuir esse limite futuramente, basta alterar seu valor, sem modificar a função responsável pelo corte do texto.
- `truncarTexto()`: função auxiliar que verifica o tamanho da descrição e corta o texto quando ultrapassa o limite, adicionando reticências ao final.
- `renderizar()`: função responsável por criar os elementos HTML de cada card e preencher suas informações.
- `switch`: estrutura que identifica a categoria de cada jogo e atribui uma classe CSS correspondente.
- `createElement()`: método responsável por criar os elementos HTML dinamicamente.
- `textContent`: propriedade utilizada para inserir os textos dos jogos nos elementos criados.
- `appendChild()`: método que organiza os elementos dentro dos cards e adiciona os cards ao container principal.

Também implementamos uma verificação para identificar quando a lista recebida está vazia. Nesse caso, a página exibe a mensagem "Nenhum item encontrado".

Para percorrer os jogos, utilizamos um laço `for`, acessando cada elemento pelo seu índice, e organizamos a construção dos cards em etapas para facilitar a compreensão e manutenção do código.

Dessa forma, conseguimos gerar o catálogo dinamicamente, sem precisar cadastrar manualmente cada card no HTML.

Para desenvolver essas funcionalidades, utilizamos arrays, objetos, funções, estruturas condicionais e laços de repetição. Nas buscas, percorremos os jogos com `for`, verificamos as condições com `if` e adicionamos os resultados em novas listas utilizando `push()`.

Também utilizamos `const` e `let` para declarar as variáveis e `this` para acessar as propriedades do próprio objeto `catalogo`.

Todas as operações de filtragem e ordenação foram desenvolvidas manualmente, respeitando as restrições de métodos estabelecidas pelo professor.
