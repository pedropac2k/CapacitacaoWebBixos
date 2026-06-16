# Capacitação em Desenvolvimento Web - Aula 3

## Introdução

Nesta aula iremos conectar nossa aplicação web a uma API externa.

Até agora, todos os dados utilizados em nossas páginas estavam armazenados diretamente no código.

A partir desta aula, aprenderemos como obter informações de serviços disponíveis na internet.

Os principais tópicos abordados serão:

* APIs;
* Requisições HTTP;
* Função `fetch()`;
* Funções assíncronas;
* JSON;
* Criação dinâmica de elementos utilizando dados recebidos de uma API.

---

# O que é uma API?

API (*Application Programming Interface*) é uma forma de comunicação entre sistemas.

Uma API permite que uma aplicação solicite informações para outra aplicação.

Exemplos de APIs:

* Previsão do tempo;
* Cotação de moedas;
* Informações de filmes;
* Informações de jogos;
* Informações de personagens.

Na aula utilizaremos a API de Rick and Morty.

---

## Como funciona uma API?



```text
Página Web
    ↓
   API
    ↓
Servidor
```

Nossa aplicação faz uma requisição.

O servidor processa essa requisição.

O servidor devolve uma resposta.

---

# Requisições

## O que é uma requisição?

Uma requisição é uma solicitação feita para um servidor.

Exemplo:

```text
https://rickandmortyapi.com/api/character/1
```

Ao acessar esse endereço, estamos solicitando os dados do personagem de ID 1.

---

# A função fetch()

## O que é fetch?

A função `fetch()` é utilizada para realizar requisições HTTP.

Exemplo:

```javascript
const resposta =
    await fetch(url);
```

Nesse momento o navegador envia uma solicitação para o endereço informado.

---

## Exemplo

```javascript
const URL =
    "https://rickandmortyapi.com/api/character/1";

const resposta =
    await fetch(URL);
```

Após a requisição, a variável `resposta` armazenará os dados retornados pelo servidor.

---

# Funções Assíncronas

## O que é uma função assíncrona?

Algumas operações podem levar um certo tempo para serem concluídas.

Por exemplo:

* Baixar dados da internet;
* Carregar arquivos;
* Consultar bancos de dados.

Enquanto essa operação acontece, não queremos travar toda a aplicação.

Para isso utilizamos funções assíncronas.

---

## async

A palavra-chave `async` transforma uma função em assíncrona.

Exemplo:

```javascript
async function requisicao(){
    
}
```

---

## await

A palavra-chave `await` faz o JavaScript aguardar o resultado de uma operação assíncrona.

Exemplo:

```javascript
const resposta =
    await fetch(url);
```

Nesse caso o código aguardará a resposta da API antes de continuar sua execução.

---

# JSON

## O que é JSON?

JSON (*JavaScript Object Notation*) é um formato utilizado para troca de dados.

Grande parte das APIs modernas retorna informações em JSON.

Exemplo:

```json
{
    "id": 1,
    "name": "Rick Sanchez",
    "status": "Alive"
}
```

---

## Convertendo JSON para Objeto JavaScript

Após receber uma resposta da API, podemos converter o JSON para um objeto JavaScript.

Exemplo:

```javascript
const obj =
    await resposta.json();
```

Agora podemos acessar os dados normalmente.

Exemplo:

```javascript
console.log(obj.name);
```

Resultado:

```text
Rick Sanchez
```

---

# Utilizando os dados recebidos

Após recebermos os dados da API, podemos utilizá-los para criar elementos dinamicamente.

Exemplo:

```javascript
const alienDesc =
    document.createElement("p");

alienDesc.innerText =
    obj.name;
```

Neste exemplo estamos exibindo o nome do personagem recebido pela API.

---

## Exibindo imagens

Também podemos utilizar informações da API para exibir imagens.

Exemplo:

```javascript
const imagem =
    document.createElement("img");

imagem.src =
    obj.image;
```

Neste caso a imagem exibida será a imagem retornada pela API.

---

# Fluxo da Aplicação

O funcionamento da aplicação desenvolvida em aula pode ser representado da seguinte forma:

```text
Clique no botão
        ↓
Gerar número aleatório
        ↓
Montar URL da API
        ↓
Realizar requisição
        ↓
Receber resposta
        ↓
Converter JSON para objeto
        ↓
Criar card
        ↓
Exibir personagem na página
```
---

# Resumo

## APIs

Principais conceitos:

* Comunicação entre sistemas;
* Solicitação de dados;
* Resposta do servidor.

---

## Fetch

Principais conceitos:

* Realização de requisições;
* Comunicação com APIs.

---

## Funções Assíncronas

Principais conceitos:

* `async`;
* `await`;
* Operações que levam tempo para serem concluídas.

---

## JSON

Principais conceitos:

* Formato de troca de dados;
* Conversão para objetos JavaScript;
* Acesso às informações recebidas.

---


Esses conceitos são amplamente utilizados no desenvolvimento web moderno e permitem criar aplicações capazes de consumir dados de serviços externos em tempo real.
