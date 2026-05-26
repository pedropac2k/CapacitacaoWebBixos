# Aula 1: Preparação do Ambiente de Desenvolvimento 🛠️

Bem-vindo(a) à primeira aula da capacitação de Desenvolvimento Web do **Ex Machina**! 

Antes de digitarmos nossa primeira linha de código, precisamos preparar a nossa principal ferramenta de trabalho: o **Editor de Código**. Um bom ambiente configurado poupa tempo, evita erros bobos e torna o aprendizado muito mais fluido.

Nesta aula, vamos instalar o **Visual Studio Code (VS Code)** e as extensões essenciais para trabalhar com HTML, CSS e JavaScript.

---

## 1. Instalação do VS Code

O VS Code é, hoje, o editor de código mais popular do mundo para desenvolvimento web. Ele é leve, gratuito e extremamente personalizável.

### Passo a Passo:
1. Acesse o site oficial: [code.visualstudio.com](https://code.visualstudio.com/).
2. O site irá identificar automaticamente o seu sistema operacional (Windows, Linux ou macOS). Clique no botão de download.
3. Abra o instalador baixado e siga as instruções na tela:
   * **Dica de ouro (Windows):** Na tela de tarefas adicionais, marque as opções **"Adicionar a ação 'Abrir com Code' ao menu de contexto do arquivo"** e **"Adicionar a ação 'Abrir com Code' ao menu de contexto do diretório"**. Isso vai permitir que você clique com o botão direito em qualquer pasta e a abra direto no VS Code.
4. Avance até o final e clique em **Instalar**.

---

## 2. Extensões Essenciais para Web

As extensões adicionam superpoderes ao VS Code. Para instalar qualquer uma delas, abra o VS Code, clique no ícone de **Extensions** na barra lateral esquerda (ou use o atalho `Ctrl + Shift + X` / `Cmd + Shift + X`) e pesquise pelos nomes abaixo:

### 1. Live Server (Criada por Ritwick Dey) - Obrigatória
* **O que faz:** Cria um servidor local temporário na sua máquina. Sempre que você alterar e salvar um arquivo HTML ou CSS, a página no seu navegador atualiza sozinha, sem você precisar ficar apertando F5.
* **Como usar:** Após instalar, quando tiver um arquivo `.html` aberto, basta clicar no botão **"Go Live"** que aparecerá no canto inferior direito do VS Code.

### 2. Prettier - Code Formatter (Criada por Prettier) - Obrigatória
* **O que faz:** Organiza e formata o seu código automaticamente (alinhamento, espaçamento, aspas, etc.) seguindo os padrões do mercado. Chega de código desalinhado e bagunçado!
* **Configuração recomendada:** Para ele funcionar sozinho ao salvar, vá em Configurações (`Ctrl + ,`), pesquise por **"Format On Save"** e marque a caixinha correspondente.

### 3. Auto Close Tag & Auto Rename Tag (Criadas por Jun Han)
* **O que fazem:** No HTML, trabalhamos com tags de abertura e fechamento (ex: `<div> </div>`). 
  * O *Auto Close* fecha a tag automaticamente assim que você digita a primeira.
  * O *Auto Rename* altera a tag de fechamento automaticamente se você decidir mudar a tag de abertura. Evita muitos erros de sintaxe!

### 4. vscode-icons (Criada por VSCode Icons Team)
* **O que faz:** Adiciona ícones personalizados ao lado dos nomes dos seus arquivos na barra lateral (um ícone azul com "5" para HTML, um escudo amarelo para JS, etc.). Ajuda muito na identificação visual do projeto.

### 5. JavaScript (ES6) code snippets (Criada por charalampos pontis)
* **O que faz:** Adiciona uma coleção enorme de atalhos de teclado para JavaScript moderno. Em vez de digitar funções inteiras do zero, você digita poucas letras (como `clg` para `console.log` ou `sto` para `setTimeout`) e ele completa o bloco inteiro para você. Poupa muito tempo de digitação.

---

## 3. Desafio Prático: Testando o Ambiente

Para garantir que tudo deu certo, faça o seguinte teste:

1. Crie uma pasta vazia no seu computador chamada `teste-ex-machina`.
2. Abra o VS Code, vá em **File > Open Folder** (Arquivo > Abrir Pasta) e selecione a pasta que você criou.
3. Na barra lateral esquerda, clique no ícone de "Novo Arquivo" e crie um arquivo chamado `index.html`.
4. Dentro dele, digite apenas `!` (ponto de exclamação) e aperte a tecla `Tab`. O VS Code vai gerar a estrutura básica do HTML sozinho (isso se chama *Emmet*).
5. Dentro da tag `<body>`, digite: `<h1>Olá, Ex Machina!</h1>`.
6. Salve o arquivo (`Ctrl + S`).
7. Clique com o botão direito em cima do código e selecione **"Open with Live Server"**. 

Se uma aba do seu navegador abrir mostrando "Olá, Ex Machina!", seu ambiente está **100% pronto** para as próximas aulas! 🎉