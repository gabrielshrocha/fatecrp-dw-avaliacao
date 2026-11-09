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

Para desenvolver essas funcionalidades, utilizamos arrays, objetos, funções, estruturas condicionais e laços de repetição. Nas buscas, percorremos os jogos com `for`, verificamos as condições com `if` e adicionamos os resultados em novas listas utilizando `push()`.

Também utilizamos `const` e `let` para declarar as variáveis e `this` para acessar as propriedades do próprio objeto `catalogo`.

Todas as operações de filtragem e ordenação foram desenvolvidas manualmente, respeitando as restrições de métodos estabelecidas pelo professor.