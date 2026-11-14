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

- `adicionar()`: método responsável por adicionar novos jogos ao catálogo.
- `filtroCategoria()`: realiza a busca de jogos de acordo com a categoria escolhida.
- `filtroNome()`: realiza a busca pelo nome dos jogos, sem distinção entre letras maiúsculas e minúsculas.
- `filtroFavoritos()`: retorna somente os jogos marcados como favoritos.
- `favoritar()`: marca ou desmarca um jogo como favorito, utilizando seu ID.
- `filtroNota()`: ordena os jogos da maior nota para a menor, utilizando o algoritmo Bubble Sort.

Para desenvolver essas funcionalidades, utilizamos arrays, objetos, funções, estruturas condicionais e laços de repetição. Nas buscas, percorremos os jogos com `for`, verificamos as condições com `if` e adicionamos os resultados em novas listas utilizando `push()`.

Também utilizamos `const` e `let` para declarar as variáveis e `this` para acessar as propriedades do próprio objeto `catalogo`.

Todas as operações de filtragem e ordenação foram desenvolvidas manualmente, respeitando as restrições de métodos estabelecidas pelo professor.

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

### Questão 03 — Busca e filtro por categoria

Criamos a função `filtrarJogos(texto, categoria)`, responsável por realizar a busca pelo nome dos jogos e o filtro por categoria. Ela recebe dois parâmetros: o texto digitado no campo de busca e a categoria selecionada pelo usuário. Os seguintes recursos foram utilizados:

- `campoBusca` e `seletorCategoria`: constantes responsáveis por acessar os elementos HTML da busca e da seleção de categorias.
- `filtrarJogos()`: função responsável por percorrer os jogos do catálogo e verificar quais atendem aos critérios de busca e categoria.
- `toLowerCase()`: converte os nomes dos jogos e o texto digitado para letras minúsculas, permitindo buscas sem distinção entre maiúsculas e minúsculas.
- `indexOf()`: verifica se o texto digitado está presente no nome do jogo. Quando o resultado é diferente de `-1`, significa que existe uma correspondência.
- `push()`: adiciona os jogos que atendem aos critérios em uma nova lista, posteriormente retornada pela função.
- `&&` e `||`: operadores utilizados para combinar as condições. O jogo precisa corresponder ao nome pesquisado e à categoria selecionada. Quando a opção "Todas" está selecionada, o filtro por categoria não restringe os resultados.

Também criamos a função `atualizarTela()`, responsável por obter os valores atuais dos campos de busca e categoria, chamar a função `filtrarJogos()` e enviar a lista resultante para a função `renderizar()`.

Para identificar as interações do usuário, utilizamos `addEventListener()` com os eventos `input` e `change`. Assim, os resultados são atualizados automaticamente enquanto o usuário digita ou altera a categoria selecionada.

Por fim, implementamos um evento `keydown` para identificar quando a tecla `Escape` é pressionada. Nesse caso, o campo de busca é limpo, a categoria é restaurada para "Todas" e a tela é atualizada, exibindo novamente todos os jogos.

Desse jeito, conseguimos combinar a busca por nome e o filtro por categoria, atualizando os resultados dinamicamente sem precisar recarregar a página.
