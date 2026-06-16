# Atividade Prática - Consumindo uma API

## Objetivo

O objetivo desta atividade é praticar os conceitos apresentados na aula sobre consumo de APIs utilizando JavaScript.

Durante o desenvolvimento da atividade vocês irão utilizar:

* APIs;
* Requisições HTTP;
* `fetch()`;
* Funções assíncronas (`async` e `await`);
* JSON;
* Manipulação do DOM;
* Criação dinâmica de elementos HTML.

---

## O que deve ser desenvolvido?

Cada aluno deverá criar uma aplicação web capaz de consumir dados de uma API pública e exibir essas informações na página.

O tema da aplicação é livre.

Vocês podem utilizar APIs relacionadas a:

* Personagens;
* Filmes;
* Jogos;
* Músicas;
* Esportes;
* Animais;
* Livros;
* Ou qualquer outro tema de interesse.

---

## Requisitos

A aplicação deve:

* Realizar pelo menos uma requisição utilizando `fetch()`;
* Consumir uma API pública;
* Exibir informações obtidas através da API;
* Utilizar pelo menos **3 atributos diferentes** do objeto JSON retornado;
* Criar elementos dinamicamente utilizando JavaScript;
* Possuir uma interface organizada utilizando HTML e CSS.

---

## Exemplos de APIs

### Rick and Morty API

Disponibiliza informações sobre personagens do desenho Rick and Morty.

Exemplos de atributos:

* Nome;
* Espécie;
* Status;
* Imagem.

---

### PokéAPI

Disponibiliza informações sobre Pokémon.

Exemplos de atributos:

* Nome;
* Altura;
* Peso;
* Tipos.

---

### Harry Potter API

Disponibiliza informações sobre personagens do universo Harry Potter.

Exemplos de atributos:

* Nome;
* Casa;
* Espécie;
* Imagem.


---

### The Cat API

Disponibiliza informações sobre gatos.

Exemplos de atributos:

* Imagem;
* Raça;
* Temperamento.

---

## Exemplo de Funcionamento

Uma possibilidade é criar uma aplicação semelhante à desenvolvida em aula.

Ao clicar em um botão:

1. Uma requisição é enviada para a API;
2. Os dados são recebidos;
3. Um card é criado dinamicamente;
4. As informações são exibidas na página.

Exemplo:

```text
+----------------------+
|                      |
|       IMAGEM         |
|                      |
+----------------------+

Nome: Rick Sanchez
Espécie: Human
Status: Alive
```

---

## Estrutura Sugerida

Cada card pode conter:

* Uma imagem;
* Um título;
* Informações adicionais obtidas da API;
* Um botão para remoção (opcional).

---

## Dicas

### Realizando uma requisição

```javascript
const resposta =
    await fetch(URL);
```

---

### Convertendo JSON para objeto JavaScript

```javascript
const dados =
    await resposta.json();
```

---

### Acessando atributos

```javascript
console.log(dados.name);
```

---

### Criando elementos dinamicamente

```javascript
const card =
    document.createElement("div");
```

---

### Adicionando elementos na página

```javascript
container.append(card);
```

---

## Entrega

A entrega deve conter:

* `index.html`
* `styles.css`
* `main.js`

Na próxima capacitação vocês vão apresentar esta página para os outros membros

---
