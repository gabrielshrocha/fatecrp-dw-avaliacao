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

### Questão 04 — Cadastro de novos jogos com validação

Implementamos um formulário para permitir que o usuário cadastre novos jogos diretamente na página. Para isso, criamos a função `validar(dados)`, responsável por verificar se as informações preenchidas atendem aos critérios estabelecidos.

Os seguintes recursos foram utilizados:

- `formCadastro`: constante responsável por acessar o formulário de cadastro no HTML.
- `campoNome`, `campoCategoria`, `campoNota` e `campoDescricao`: constantes utilizadas para acessar os campos do formulário.
- `validar()`: função responsável por verificar se o nome possui pelo menos três caracteres, se uma categoria foi selecionada e se a nota está dentro do intervalo permitido.
- `trim()`: remove os espaços em branco do início e do final do texto, evitando que espaços sejam considerados como parte válida do nome.
- `Number()`: converte o valor informado no campo de nota para o tipo numérico.
- `isNaN()`: verifica se o valor convertido é um número válido.
- `throw new Error()`: interrompe a validação quando alguma informação não atende aos critérios e gera uma mensagem de erro.
- `try/catch`: estrutura utilizada para executar a validação e o cadastro, tratando possíveis erros sem interromper o funcionamento da aplicação.
- `classList.add()` e `classList.remove()`: adicionam ou removem a classe CSS responsável por destacar visualmente os campos inválidos.

Também utilizamos o evento `submit` para identificar o envio do formulário e `preventDefault()` para impedir o comportamento padrão de recarregar a página.

Quando os dados são válidos, utilizamos o método `adicionar()` do objeto `catalogo` para inserir um novo jogo no array. Caso a descrição não seja informada, o sistema utiliza o texto "Sem descrição informada.".

Após o cadastro, o formulário é limpo, uma mensagem de sucesso é exibida e a função `atualizarTela()` é chamada para atualizar os jogos exibidos e as estatísticas.

Além disso, utilizamos os eventos `input` e `change` para remover a indicação visual de erro dos campos conforme o usuário corrige as informações.

### Questão 05 — Interação de favoritos nos cards

Implementamos uma funcionalidade que permite ao usuário marcar e desmarcar jogos como favoritos diretamente nos cards. Para isso, aproveitamos a função `renderizar()`, desenvolvida na Questão 02, adicionando um botão de favoritos durante a criação de cada card.

Os seguintes recursos foram utilizados:

- `textoBotao()`: função auxiliar que retorna o texto adequado para o botão, de acordo com o estado atual do favorito.
- `createElement()`: utilizado para criar dinamicamente o botão de favoritos.
- `addEventListener()`: utilizado com o evento `click` para identificar quando o usuário interage com o botão.
- `!`: operador lógico utilizado para inverter o valor booleano da propriedade `favorito`, alternando entre `true` e `false`.
- `classList.toggle()`: adiciona ou remove a classe CSS `favorito` no card, de acordo com o estado atual do jogo.
- `textContent`: atualiza o texto do botão para indicar se o jogo pode ser adicionado ou removido dos favoritos.

Quando o usuário clica no botão, o sistema altera a propriedade `favorito` do jogo, atualiza o destaque visual do card e modifica o texto do botão.

Por fim, chamamos `atualizarPainel(lista)` para atualizar as estatísticas dos jogos exibidos, refletindo imediatamente a alteração na quantidade de favoritos.

Dessa maneira, conseguimos implementar a interação diretamente nos cards, aproveitando a estrutura de renderização da Questão 02 e mantendo as informações dos jogos atualizadas sem precisar recarregar a página.

### Questão 06 — Painel de estatísticas

Criamos um painel de estatísticas para apresentar informações sobre os jogos atualmente exibidos no catálogo. Para isso, desenvolvemos a função `atualizarPainel(lista)`, que recebe a lista de jogos como parâmetro e calcula os resultados percorrendo seus elementos.

Os seguintes recursos foram utilizados:

- `totalJogos`, `totalFavoritos`, `mediaNotas` e `maiorNota`: constantes responsáveis por acessar os elementos HTML onde as estatísticas são apresentadas.
- `atualizarPainel()`: função responsável por calcular e atualizar as estatísticas com base na lista recebida.
- `quantidadeFavoritos`: variável utilizada para contar quantos jogos estão marcados como favoritos.
- `somaNotas`: variável utilizada para acumular as notas dos jogos e calcular a média.
- `maiorJogo`: variável utilizada para armazenar o jogo com a maior nota encontrada durante a verificação.
- `for`: laço de repetição utilizado para percorrer os jogos e realizar os cálculos.
- `if`: estrutura condicional utilizada para verificar se um jogo é favorito e identificar aquele que possui a maior nota.
- `toFixed(2)`: utilizado para apresentar a média com duas casas decimais.
- `replace()`: utilizado para substituir o ponto pela vírgula na apresentação da média.
- `textContent`: utilizado para atualizar os valores apresentados no painel.

Durante a execução, percorremos a lista uma única vez, contando os favoritos, somando as notas e identificando o jogo com a maior avaliação.

Também implementamos uma condição para tratar listas vazias. Nesse caso, as quantidades são exibidas como zero, enquanto a média e o jogo com maior nota recebem um traço.

A função `atualizarPainel()` é chamada pela função `atualizarTela()`, mantendo as estatísticas sincronizadas com os resultados da busca e dos filtros. Também é chamada após o cadastro de um novo jogo e quando o usuário altera o estado de favorito de algum card.

Assim, o painel apresenta informações atualizadas de acordo com os jogos que estão sendo exibidos, sem necessidade de recarregar a página.
