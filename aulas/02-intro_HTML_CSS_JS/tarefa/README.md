# Atividade Prática - Cores Aleatórias com JavaScript

## Objetivo

O objetivo desta atividade é praticar conceitos fundamentais de JavaScript vistos durante a capacitação, especialmente:

* Manipulação de elementos HTML;
* Utilização de vetores (arrays);
* Criação de eventos de clique;
* Geração de números aleatórios;
* Alteração dinâmica de estilos via JavaScript.

---

## Resultado Esperado

### Página Inicial



![Pagina Inicial](./imagens/pagina-inicial.png)


---

### Página Após Interação



![Pagina Alterada](./imagens/pagina-alterada.png)


---

## O que o programa deve fazer

A página deverá possuir:

* Um botão para alterar a cor do título;
* Um botão para alterar a cor de fundo da lista.

As cores não devem ser definidas diretamente no código dos botões. Em vez disso, elas devem estar armazenadas em um vetor.

Exemplo:

```javascript
const cores = [
    "red",
    "green",
    "blue",
    "yellow",
    "purple"
];
```

---

## Funcionamento

### Botão "Cor do Título"

Ao clicar neste botão:

1. Um número aleatório deve ser gerado;
2. Esse número será utilizado como índice do vetor de cores;
3. A cor correspondente deverá ser aplicada ao título da página.

---

### Botão "Cor da Lista"

Ao clicar neste botão:

1. Um número aleatório deve ser gerado;
2. Esse número será utilizado como índice do vetor de cores;
3. A cor correspondente deverá ser aplicada ao fundo da lista.

---

## Dicas

### Função `Math.random()`

A função `Math.random()` gera um número decimal aleatório entre **0** e **1**.

Exemplos de possíveis retornos:

```javascript
0.1534
0.7821
0.4918
```

Observe que o valor retornado é sempre decimal.

Exemplo de uso:

```javascript
let numero = Math.random();
```

---

### Função `Math.round()`

A função `Math.round()` arredonda um número para o inteiro mais próximo.

Exemplos:

```javascript
Math.round(2.3); // 2

Math.round(2.8); // 3

Math.round(4.5); // 5
```

Exemplo de uso:

```javascript
let numeroInteiro = Math.round(4.7);
```

## Considerações Finais

É importante que todos os membros estejam com este programa pronto até a próxima capacitação, em caso de dúvidas fale com o membro responsável. 
