# Capacitação em Desenvolvimento Web - Aula 2

## Introdução

Nesta aula continuamos o desenvolvimento de páginas web utilizando HTML, CSS e JavaScript.

Além de reforçar conceitos vistos anteriormente, aprendemos novas formas de estilizar páginas e manipular elementos utilizando JavaScript.

Os principais tópicos abordados foram:

* Adicionando fontes personalizadas;
* Inserindo imagens em páginas HTML;
* Flexbox;
* Removendo elementos dinamicamente com JavaScript.

---

# Fontes Personalizadas

## O que são fontes personalizadas?

Por padrão, cada navegador possui um conjunto de fontes disponíveis.

Entretanto, muitas vezes desejamos utilizar fontes diferentes para melhorar a aparência da página.

Uma forma muito comum de fazer isso é utilizando o Google Fonts.

---

## Adicionando uma fonte ao projeto

Primeiro devemos importar a fonte dentro da tag `<head>`.

Exemplo:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">

<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<link href="https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap" rel="stylesheet">
```

Essas tags informam ao navegador qual fonte deverá ser carregada.

---

## Utilizando a fonte no CSS

Após importar a fonte, podemos utilizá-la normalmente no CSS.

Exemplo:

```css
* {
    font-family: "Black Ops One", system-ui;
}
```

Neste exemplo, todos os elementos da página utilizarão a fonte importada.

---

# Imagens

## A tag `<img>`

A tag `<img>` é utilizada para exibir imagens em uma página HTML.

Exemplo:

```html
<img src="imagens/logo.png" alt="Logo do Projeto">
```

---

## Principais atributos

### src

Indica o caminho da imagem.

```html
<img src="imagens/foto.png">
```

---

### alt

Texto alternativo exibido caso a imagem não possa ser carregada,e usado na acessibilidade das páginas web.

```html
<img src="imagens/foto.png" alt="Foto de exemplo">
```

---

## Alterando o tamanho da imagem

Podemos controlar o tamanho da imagem utilizando CSS.

Exemplo:

```css
img {
    max-width: 20%;
}
```

A propriedade `max-width` define a largura máxima que a imagem poderá ocupar.

---

# Flexbox

## O que é Flexbox?

Flexbox (*Flexible Box Layout*) é um recurso do CSS criado para facilitar o posicionamento e alinhamento de elementos em uma página.

Antes do Flexbox, tarefas simples como centralizar componentes ou organizar elementos em linhas e colunas exigiam diversas técnicas diferentes.

Com Flexbox, essas tarefas podem ser realizadas de forma muito mais simples.

---

## Quando utilizar Flexbox?

Flexbox é muito utilizado para:

* Centralizar elementos;
* Organizar componentes em linhas;
* Organizar componentes em colunas;
* Criar menus de navegação;
* Construir formulários;
* Distribuir elementos de maneira uniforme.

Exemplo:

```text
+--------------------------------+
| Logo           Menu            |
+--------------------------------+
```

ou

```text
+-------------+
| Produto 1   |
+-------------+
| Produto 2   |
+-------------+
| Produto 3   |
+-------------+
```

---

## Transformando um elemento em Flexbox

Para utilizar Flexbox devemos aplicar:

```css
display: flex;
```

Exemplo:

```css
#container {
    display: flex;
}
```

Quando fazemos isso, os elementos filhos passam a ser controlados pelo Flexbox.

Exemplo:

```html
<div id="container">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
```

Resultado padrão:

```text
Item 1  Item 2  Item 3
```

Observe que os elementos passam a ser exibidos lado a lado.

---

## Eixo Principal e Eixo Secundário

O Flexbox trabalha com dois eixos.

### Eixo Principal (Main Axis)

É a direção em que os elementos serão organizados.

### Eixo Secundário (Cross Axis)

É o eixo perpendicular ao principal.

Exemplo com:

```css
flex-direction: row;
```

```text
Main Axis →
+--------------------------+
| Item1 Item2 Item3        |
+--------------------------+
        ↑
   Cross Axis
```

Esses dois eixos são importantes porque várias propriedades do Flexbox utilizam essa referência para alinhar os elementos.

---

## flex-direction

A propriedade `flex-direction` define a direção dos elementos.

---

### row

Organiza os elementos em linha.

```css
flex-direction: row;
```

Resultado:

```text
Item 1 Item 2 Item 3
```

Esta é a direção padrão do Flexbox.

---

### column

Organiza os elementos em coluna.

```css
flex-direction: column;
```

Resultado:

```text
Item 1
Item 2
Item 3
```

Foi a direção utilizada no formulário desenvolvido em aula.

---

## align-items

Controla o alinhamento dos elementos no eixo secundário.

Exemplo:

```css
align-items: center;
```

Resultado:

```text
+----------------------+
|      Item 1          |
|      Item 2          |
|      Item 3          |
+----------------------+
```

Muito utilizado para centralizar componentes.

---

## justify-content

Controla o posicionamento dos elementos no eixo principal.

Exemplo:

```css
justify-content: center;
```

Resultado:

```text
      Item 1 Item 2 Item 3
```

Também existem outras opções:

```css
justify-content: flex-start;
justify-content: flex-end;
justify-content: center;
justify-content: space-between;
justify-content: space-around;
```

---

### space-between

Distribui os elementos utilizando todo o espaço disponível.

```text
Item 1          Item 2          Item 3
```

---

## Exemplo utilizado em aula

```css
#carrinho {
    display: flex;

    flex-direction: column;

    align-items: center;
}
```

Neste exemplo:

* O elemento utiliza Flexbox;
* Os componentes são organizados em coluna;
* Todos os elementos ficam centralizados horizontalmente.

Resultado visual:

```text
Nome do Produto

[___________]

Quantidade

[___________]

[ Adicionar ]
```

---

## Resumo do Flexbox

Principais propriedades:

| Propriedade       | Função                              |
| ----------------- | ----------------------------------- |
| `display: flex`   | Ativa o Flexbox                     |
| `flex-direction`  | Define a direção dos elementos      |
| `align-items`     | Alinha elementos no eixo secundário |
| `justify-content` | Alinha elementos no eixo principal  |

Flexbox é uma das ferramentas mais utilizadas no desenvolvimento web moderno e será utilizada frequentemente nos próximos projetos da capacitação.


# Removendo Elementos com JavaScript

## Criando um botão de remoção

Uma técnica bastante comum é criar elementos dinamicamente utilizando JavaScript.

Exemplo:

```javascript
const btnDlt =
    document.createElement("button");
```

---

## Adicionando o botão ao elemento

```javascript
itemLista.append(btnDlt);
```

---

## Detectando cliques

Podemos adicionar um evento ao botão:

```javascript
btnDlt.addEventListener(
    "click",
    excluirProduto
);
```

Quando o botão for clicado, a função `excluirProduto` será executada.

---

## Removendo um elemento

Exemplo:

```javascript
function excluirProduto(e){
    e.target.parentNode.remove();
}
```

---

### Entendendo o código

#### e.target

Representa o elemento que recebeu o clique.

Neste caso:

```text
Botão X
```

---

#### parentNode

Obtém o elemento pai.

Exemplo:

```text
li
 └── botão
```

O botão está dentro do elemento `li`.

---

#### remove()

Remove o elemento da página.

Exemplo:

```javascript
elemento.remove();
```

---

## Resultado

Ao clicar no botão:

```text
[X]
```

O item correspondente é removido da lista.

---

# Resumo

## Fontes Personalizadas

Principais conceitos:

* Google Fonts;
* Importação de fontes;
* Propriedade `font-family`.

---

## Imagens

Principais conceitos:

* Tag `<img>`;
* Atributo `src`;
* Atributo `alt`;
* Controle de tamanho com CSS.

---

## Flexbox

Principais conceitos:

* `display: flex`;
* `flex-direction`;
* `align-items`.

---

## JavaScript

Principais conceitos:

* Criação dinâmica de elementos;
* Eventos de clique;
* `parentNode`;
* `remove()`.
