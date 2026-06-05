# Capacitação em Desenvolvimento Web - Ex Machina

## Introdução

O desenvolvimento web moderno é baseado em três tecnologias principais:

* **HTML**: responsável pela estrutura e conteúdo da página.
* **CSS**: responsável pela aparência e estilização.
* **JavaScript (JS)**: responsável pela interatividade e comportamento da página.



---

# HTML

## O que é HTML?

HTML (*HyperText Markup Language*) é a linguagem utilizada para estruturar o conteúdo de uma página web.

O HTML não é uma linguagem de programação. Ele utiliza **tags** para indicar ao navegador qual é a função de cada elemento.

Exemplo:

```html
<h1>Meu Primeiro Site</h1>

<p>Olá mundo!</p>
```

---

## Estrutura básica de uma página HTML

```html
<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <title>Minha Página</title>
</head>

<body>

    <h1>Título Principal</h1>

</body>

</html>
```

### Principais partes

| Tag               | Função                                |
| ----------------- | ------------------------------------- |
| `<!DOCTYPE html>` | Informa que o documento utiliza HTML5 |
| `<html>`          | Elemento raiz da página               |
| `<head>`          | Configurações e metadados             |
| `<body>`          | Conteúdo visível ao usuário           |

---

## Organização das tags

Um dos princípios mais importantes do HTML é a **hierarquia**.

As tags devem ser organizadas de forma lógica:

```html
<body>

    <main>

        <section>
            <h2>Sobre nós</h2>

            <p>Texto da seção.</p>
        </section>

    </main>

</body>
```

A indentação não altera o funcionamento da página, mas melhora significativamente a leitura do código.

---

## Tag `<div>`

A tag `<div>` é um contêiner genérico utilizado para agrupar elementos.

Exemplo:

```html
<div>
    <h2>Produto</h2>
    <p>Descrição do produto</p>
</div>
```

Ela não possui significado semântico próprio, servindo apenas para organização e estilização.

É muito comum utilizar `<div>` junto com CSS e JavaScript.

---

## Boas práticas de estruturação

### Utilizar `<main>`

O conteúdo principal da página deve ficar dentro da tag:

```html
<main>
    <!-- Conteúdo principal -->
</main>
```

Isso melhora:

* Semântica do documento;
* Acessibilidade;
* SEO (otimização para mecanismos de busca).

---

### Utilizar apenas um `<h1>` por página

O `<h1>` representa o título principal da página.

Exemplo correto:

```html
<h1>Capacitação Ex Machina</h1>

<h2>HTML</h2>

<h2>CSS</h2>

<h2>JavaScript</h2>
```

A hierarquia dos títulos deve seguir:

```text
h1
 ├─ h2
 │   ├─ h3
 │   └─ h3
 └─ h2
```

---

## Listas

### Lista não ordenada (`<ul>`)

Utilizada quando a ordem dos itens não importa.

```html
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>
```

Resultado:

* HTML
* CSS
* JavaScript

---

### Lista ordenada (`<ol>`)

Utilizada quando a ordem dos itens importa.

```html
<ol>
    <li>Instalar VS Code</li>
    <li>Criar projeto</li>
    <li>Executar navegador</li>
</ol>
```

Resultado:

1. Instalar VS Code
2. Criar projeto
3. Executar navegador

---

## Identificadores: `id` e `class`

Eles servem para identificar elementos HTML.

### id

Deve ser único na página.

```html
<h1 id="titulo">Olá Mundo</h1>
```

Exemplo de uso:

* CSS
* JavaScript
* Navegação interna

---

### class

Pode ser reutilizada em vários elementos.

```html
<p class="texto">Primeiro parágrafo</p>

<p class="texto">Segundo parágrafo</p>
```

É muito utilizada para aplicar o mesmo estilo em diversos elementos.

---

## Conectando CSS ao HTML

Para utilizar um arquivo CSS externo:

```html
<head>

    <link rel="stylesheet" href="style.css">

</head>
```

* `rel="stylesheet"` indica que é uma folha de estilos.
* `href` informa onde o arquivo está localizado.

---

## Conectando JavaScript ao HTML

```html
<script src="script.js"></script>
```

Geralmente colocado antes do fechamento do `body`:

```html
<body>

    <!-- Conteúdo -->

    <script src="script.js"></script>

</body>
```

Isso garante que o HTML seja carregado antes do JavaScript.

---

# CSS

## O que é CSS?

CSS (*Cascading Style Sheets*) é a linguagem utilizada para estilizar páginas web.

Com CSS podemos alterar:

* Cores;
* Tamanhos;
* Espaçamentos;
* Bordas;
* Posicionamento;
* Animações.

---

## Selecionando elementos

### Pela própria tag

```css
h1 {
    color: blue;
}
```

Todos os `h1` da página ficarão azuis.

---

### Por id

HTML:

```html
<h1 id="titulo">
    Ex Machina
</h1>
```

CSS:

```css
#titulo {
    color: red;
}
```

O símbolo `#` representa um id.

---

### Por class

HTML:

```html
<p class="texto">
    Exemplo
</p>
```

CSS:

```css
.texto {
    color: green;
}
```

O símbolo `.` representa uma classe.

---

## Cores

### Cor do texto

```css
p {
    color: blue;
}
```

---

### Cor de fundo

```css
div {
    background-color: lightgray;
}
```

---

## Borda

```css
div {
    border: 2px solid black;
}
```

Estrutura:

```text
espessura estilo cor
```

Exemplo:

```css
border: 3px dashed red;
```

---

## Margem e preenchimento

Esses conceitos são fundamentais no CSS.

### Margin

Espaço externo ao elemento.

```css
margin: 20px;
```

---

### Padding

Espaço interno ao elemento.

```css
padding: 20px;
```

---

## Modelo de Caixa (Box Model)

```text
+---------------------+
|       Margin        |
|  +---------------+  |
|  |    Border     |  |
|  | +-----------+ |  |
|  | | Padding   | |  |
|  | | Conteúdo  | |  |
|  | +-----------+ |  |
|  +---------------+  |
+---------------------+
```

Todo elemento HTML é tratado como uma caixa.

---

# JavaScript

## O que é JavaScript?

JavaScript é a linguagem responsável pela interatividade das páginas web.

Com JavaScript podemos:

* Alterar conteúdo da página;
* Responder a eventos do usuário;
* Fazer requisições para servidores;
* Criar aplicações completas.

---

## Particularidades da linguagem

JavaScript é uma linguagem:

* Interpretada;
* Multiparadigma;
* Dinamicamente tipada.

---

### Não é necessário declarar tipos

```javascript
let nome = "Pedro";

let idade = 21;

let aprovado = true;
```

O tipo é determinado automaticamente.

---

### Strings podem usar aspas simples ou duplas

```javascript
let nome = "Pedro";

let curso = 'Sistemas de Informação';
```

Ambas são válidas.

---

### Variáveis

#### let

Pode ter seu valor alterado.

```javascript
let contador = 0;
```

---

#### const

Não pode ser reatribuída.

```javascript
const PI = 3.14;
```

---

## Funções

```javascript
function saudacao() {
    console.log("Olá!");
}
```

Chamando a função:

```javascript
saudacao();
```

---

## Alterando elementos HTML com JavaScript

Uma das tarefas mais comuns do JavaScript é manipular elementos da página.

---

### Selecionando por id

HTML:

```html
<h1 id="titulo">
    Ex Machina
</h1>
```

JavaScript:

```javascript
const titulo =
    document.getElementById("titulo");
```

---

### Selecionando por classe

```javascript
const elementos =
    document.getElementsByClassName("texto");
```

---

### Utilizando querySelector

Seleciona o primeiro elemento encontrado.

```javascript
const titulo =
    document.querySelector("#titulo");
```

Por classe:

```javascript
const texto =
    document.querySelector(".texto");
```

Por tag:

```javascript
const paragrafo =
    document.querySelector("p");
```

---

## Alterando conteúdo

HTML:

```html
<h1 id="titulo">
    Olá
</h1>
```

JavaScript:

```javascript
const titulo =
    document.getElementById("titulo");

titulo.textContent =
    "Bem-vindos ao Ex Machina!";
```

Resultado:

```html
<h1>Bem-vindos ao Ex Machina!</h1>
```

---

## Alterando estilos via JavaScript

```javascript
const titulo =
    document.getElementById("titulo");

titulo.style.color = "blue";
```

---

## Resumo

### HTML

Responsável pela estrutura da página.

Principais conceitos:

* Tags;
* Hierarquia;
* `<main>`;
* `<div>`;
* `<ol>`;
* `<ul>`;
* `id`;
* `class`;
* Conexão com CSS e JS.

---

### CSS

Responsável pela aparência.

Principais conceitos:

* Seletores;
* Cores;
* Background;
* Bordas;
* Margin;
* Padding;
* Box Model.

---

### JavaScript

Responsável pela interatividade.

Principais conceitos:

* Variáveis;
* Funções;
* Tipagem dinâmica;
* Manipulação do DOM;
* Alteração de conteúdo e estilos.

---
