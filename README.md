# Central Jogos de Tabuleiro

Catálogo interativo de jogos de tabuleiro, feito para a avaliação prática de JavaScript da disciplina de Desenvolvimento Web — Fatec Ribeirão Preto.

**Repositório:** https://github.com/gabrielshrocha/fatecrp-dw-avaliacao

Para usar, basta abrir o `index.html` no navegador. Não precisa instalar nada.

```
index.html
css/style.css
js/app.js
imagens/          logotipo, imagens dos jogos e imagem padrão
README.md
```

## 1. Dupla e tema

| Nome | RA |
|---|---|
| Gabriel Stopa Honorato Rocha | 2840482613012 |
| João Victor Tavares | 2840482613034 |

**Tema:** catálogo de jogos de tabuleiro.

## 2. Onde cada questão foi atendida

Cada trecho está marcado no `app.js` com o comentário da questão (`// [R1]` a `// [R7]`).

### Questão 01 — Dados `[R1]`

O array `jogos` (declarado com `const`) tem 8 jogos em 4 categorias: Estratégia, Cooperativo, Negociação e Investigação. Cada jogo tem `id`, `nome`, `categoria`, `descricao`, `nota` (o valor numérico), `favorito` (o booleano) e `imagem`.

O objeto `catalogo` guarda o nome do catálogo, o array de jogos e três métodos que usam `this`:

- `adicionar(jogo)` — usado no cadastro (Questão 04);
- `favoritar(id)` — inverte o `favorito` do jogo com `!`; usado no botão do card (Questão 05);
- `remover(id)` — usado no desafio extra de remover.

### Questão 02 — Renderização dinâmica `[R2]`

A função `renderizar(lista)` limpa o `#lista-jogos` com `innerHTML = ""` e monta cada card dentro de um `for`, usando `createElement`, `textContent` e `appendChild`. O HTML só tem o contêiner vazio.

- A nota é exibida com `toFixed(1)` e vírgula.
- A descrição passa pela função `truncarTexto`, que corta em `LIMITE_DESCRICAO` (60 caracteres) com `slice` e coloca "…" no final.
- Um `switch` com 4 casos e `default` define a classe CSS da categoria; cada categoria tem uma cor.
- Cada card mostra a imagem do jogo; jogos cadastrados pelo formulário usam a `IMAGEM_PADRAO`.
- Se a lista estiver vazia, aparece "Nenhum item encontrado".

### Questão 03 — Busca e filtro `[R3]`

A função `filtrarJogos(texto, categoria)` percorre `catalogo.itens` com `for`. Para cada jogo, compara o nome com `toLowerCase` + `indexOf`, verifica a categoria e só faz `push` no novo array quando as duas condições são verdadeiras (`&&`). Com "Todas" selecionado, qualquer categoria passa.

A função `atualizarTela()` filtra, ordena, renderiza e atualiza o painel. Ela é chamada no evento `input` do campo de busca e no `change` dos selects. A tecla Esc (`keydown` com `event.key === "Escape"`) limpa a busca, volta o filtro para "Todas" e mostra todos os jogos.

### Questão 04 — Cadastro com validação `[R4]`

O formulário tem `novalidate`, e o `submit` usa `event.preventDefault()`. A função `validar(dados)` lança `throw new Error(...)` quando:

- o nome tem menos de 3 caracteres (`trim` + `length`);
- nenhuma categoria foi selecionada;
- a nota não é um número (`Number` + `isNaN`) ou está fora do intervalo maior que 0 e até 10.

O submit chama a validação dentro de um `try...catch` e mostra a mensagem do erro no `#mensagem-form`, sem `alert`. O campo inválido recebe a classe `campo-erro` com `classList.add` e perde com `classList.remove` assim que o valor fica válido.

Se tudo estiver certo, o jogo entra pelo `catalogo.adicionar`, o formulário é limpo com `reset()`, aparece a mensagem de sucesso e `atualizarTela()` atualiza a lista e o painel. A nota aceita vírgula ("8,5"), convertida com `replace` antes do `Number`.

### Questão 05 — Interação nos cards `[R5]`

Cada card ganha um botão de favorito criado no `renderizar`, e o `addEventListener` é registrado na hora da criação. No clique:

1. `catalogo.favoritar(jogo.id)` inverte o booleano com `!`;
2. `classList.toggle("favorito", jogo.favorito)` liga ou desliga o destaque do card;
3. `textoBotao` troca o texto entre "Adicionar aos favoritos" e "Remover dos favoritos";
4. `atualizarPainel(lista)` atualiza as estatísticas.

O `jogo` do card e o item dentro de `catalogo.itens` são o mesmo objeto, por isso a mudança feita pelo método já aparece no card.

### Questão 06 — Painel de estatísticas `[R6]`

A função `atualizarPainel(lista)` percorre a lista exibida uma única vez e, no mesmo laço, conta os favoritos, soma as notas e guarda o jogo de maior nota comparando um por um (sem `sort` nem `Math.max`). A média é exibida com `toFixed(2)` e `replace(".", ",")`. Com a lista vazia, média e maior nota mostram "—", então nunca aparece `NaN`.

O painel é atualizado pela `atualizarTela()` (busca, filtro, ordenação, cadastro e remoção) e pelo clique no favorito.

### Questão 07 — Qualidade e organização `[R7]`

- JavaScript em `js/app.js`, carregado com `defer`; CSS em `css/style.css`.
- Nenhum evento inline no HTML: tudo com `addEventListener`.
- Só `let` e `const`.
- Funções com uma tarefa cada e nome que diz o que fazem (`truncarTexto`, `textoBotao`, `validar`, `atualizarPainel`…).
- Sem `map`, `filter`, `reduce`, `sort`, `document.write` ou bibliotecas.
- Console do navegador sem erros.

**Pré-requisitos:** HTML semântico (`header`, `main`, `section`, `footer`, `label for`) e CSS externo com Grid (`grid-template-areas` no layout principal e nos cards) e Flexbox (formulário, cards e cabeçalho), feito no estilo mobile-first com `@media (min-width: 768px)`.

**Visual:** os títulos usam a fonte Poppins, carregada pelo Google Fonts (só a fonte, sem bibliotecas de código). As cores, espaçamentos e fontes ficam em variáveis no `:root`.

### Desafios extras

| Desafio | Onde |
|---|---|
| Remover | Botão em cada card; pede `confirm` e chama `catalogo.remover(id)`, que usa `splice` |
| Ordenação sem `sort` | `ordenarLista` e `deveTrocar`: bubble sort com dois `for`, por maior nota ou por nome (`localeCompare`) |
| Modo escuro | Botão no cabeçalho com `classList.toggle("modo-escuro")` no `body`; o CSS só troca os valores das variáveis |
| Contador de caracteres | `atualizarContador`, no evento `input` da descrição, usando `length` |

## 3. Divisão de tarefas

Fomos revezando as questões: cada um implementava uma parte (HTML + JavaScript) e documentava no README, e as correções foram feitas por quem encontrava o problema. O histórico de commits mostra quem fez cada etapa: https://github.com/gabrielshrocha/fatecrp-dw-avaliacao/commits/main

| Parte | João | Gabriel |
|---|---|---|
| Estrutura | Estrutura inicial do projeto | `header`, `main` e `footer` no HTML |
| Q01 — Dados | Array `jogos` e objeto `catalogo` | — |
| Q02 — Renderização | — | `renderizar` e truncamento das descrições |
| Q03 — Busca e filtro | Campos no HTML e `filtrarJogos` | Ajuste da tecla Esc |
| Q04 — Cadastro | Indicação visual dos campos inválidos (CSS) | Formulário no HTML e validação |
| Q05 — Favoritos | Botão de favorito e destaque visual (CSS) | — |
| Q06 — Painel | — | Seção no HTML, `atualizarPainel` e chamada dentro do `atualizarTela` |
| Q07 e revisão | Remoção dos métodos sem uso, campo de nota, id sequencial e formato com vírgula | — |
| CSS | Variáveis do modo escuro e estilo do botão de tema | Variáveis, layout em grid e responsividade; painel, cards, categorias e estados |
| Visual | Logotipo, fonte dos títulos e imagens dos jogos | — |
| Extras | Remover, ordenação e CSS do modo escuro | Modo escuro (HTML e JS) e contador de caracteres |
| README | Questões 1, 3, 4, 5 e 6; versão final | Questão 2 |

## 4. Dificuldades e como resolvemos

**1. Métodos do catálogo que ficaram sem uso.** Na Questão 01 criamos vários métodos (`filtroCategoria`, `filtroNome`, `filtroFavoritos`, `filtroNota`) sem saber o que as próximas questões iam pedir. Depois vimos que a Questão 03 exigia busca e categoria funcionando juntas, o que os filtros separados não faziam, e o painel só precisava contar os favoritos, não listá-los. Os métodos acabaram sem nenhuma chamada no código. Removemos os que não eram usados e passamos a usar o `favoritar` no botão da Questão 05. O laço de ordenação do antigo `filtroNota` foi reaproveitado no desafio de ordenação.

**2. A nota que virava zero.** O campo de nota era `type="number"`. Quando o conteúdo é inválido (letras, ou "8,5" dependendo do navegador), esse tipo de campo entrega um texto vazio, e `Number("")` vira `0`. Por isso o `isNaN` nunca disparava, e quem digitava letras via a mensagem "maior que 0", que não fazia sentido. Trocamos para `type="text"` com `inputmode="decimal"` (que mantém o teclado numérico no celular). Agora quem valida é o JavaScript, como a Questão 04 pede.

**3. Id repetido depois de remover um jogo.** O id do cadastro era `catalogo.itens.length + 1`. Com o botão de remover, isso quebrou: removendo um dos 8 jogos, o próximo cadastro recebia o id 8, que já existia. E aí o favoritar ou o remover podiam atingir o jogo errado. Trocamos por um contador (`proximoId`) que só aumenta.

Outros detalhes que apareceram nos testes: o `form.reset()` não dispara o evento `input`, então o contador de caracteres ficava com o número antigo e precisou ser atualizado na mão depois do reset. E, ao adicionar a propriedade `imagem` nos jogos, faltou uma vírgula depois de `favorito`, e o erro de sintaxe fez o navegador não executar nada do `app.js`; foi aí que aprendemos a olhar o console (F12) primeiro.

## 5. Uso de IA

Usamos o ChatGPT e o Claude como apoio durante o projeto. Tivemos pouca aula prática de JavaScript antes da avaliação, então tentamos montar as questões com base nos slides do professor, e a IA entrou quando travávamos: para explicar o que cada recurso faz, encontrar erros e mostrar como implementar o que o enunciado pedia.

Na prática, usamos para:

- explicar os recursos do material (`this`, `try...catch`, `classList`, eventos) e como aplicá-los no projeto;
- encontrar e corrigir erros, e sugerir código quando não sabíamos como implementar uma parte — esse código foi adaptado ao projeto e revisado até conseguirmos explicar cada trecho;
- revisar o projeto comparando com o enunciado — as dificuldades acima vieram dessa revisão;
- sugerir a base do CSS, que adaptamos ao mesmo padrão (variáveis, seções numeradas, `transition` na regra base) que o João já usava no portfólio pessoal.

O método foi o mesmo que o João usou para aprender HTML e CSS com os slides da disciplina: a IA como tutor para praticar do zero, montando um projeto próprio e testes separados para cada assunto. Aqui, por causa do prazo de uma semana, fizemos isso em escala menor, questão por questão e com os slides de JavaScript do lado. O repositório no GitHub registra esse processo: cada commit mostra o que mudou e quem fez.
