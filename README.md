# 🎮 Visualizador de Jogadas de CS2

Este é um projeto que mostra jogadas em destaque do jogo Counter-Strike 2 (CS2). Ele foi construído com Next.js, uma ferramenta moderna para criar sites e aplicações web.

## 🚀 Ver o Projeto Funcionando

Você pode acessar o projeto já funcionando na internet, sem precisar instalar nada no seu computador:

**[https://sample-python-app-paq-frontend.vercel.app/](https://sample-python-app-paq-frontend.vercel.app/)**

---

## 🤔 O que é Next.js?

**Next.js** é uma ferramenta que ajuda a criar sites e aplicações web usando a linguagem **JavaScript** e a biblioteca **React**.

Pense no Next.js como um "kit de construção" que:
- Te dá uma estrutura organizada para criar seu projeto
- Torna seu site mais rápido para os usuários
- Facilita colocar seu site na internet (fazer o "deploy")
- Já vem com várias funcionalidades prontas, economizando seu tempo

### Por que Next.js é legal?

- ✅ **Fácil de começar**: Você não precisa configurar um monte de coisas complicadas
- ✅ **Organizado**: Os arquivos ficam em pastas que fazem sentido
- ✅ **Rápido**: O site carrega rapidinho para quem está acessando
- ✅ **Moderno**: Usa as tecnologias mais recentes do mercado

---

## 📋 O que você precisa ter instalado

Antes de começar, você precisa ter instalado no seu computador:

1. **Node.js** (versão 18 ou mais recente)
   - O Node.js é como um "motor" que faz o JavaScript funcionar no seu computador
   - Baixe em: [https://nodejs.org/](https://nodejs.org/)
   - Escolha a versão **LTS** (Long Term Support - a mais estável)

2. **npm** (geralmente vem junto com o Node.js)
   - O npm é um "gerenciador de pacotes" - ele ajuda a instalar bibliotecas e ferramentas
   - Para verificar se está instalado, abra o terminal e digite: `npm --version`

---

## 🚀 Como rodar o projeto no seu computador

Siga estes passos com calma:

### Passo 1: Baixar o projeto

Primeiro, você precisa ter o código do projeto no seu computador. Se você ainda não tem, clone o repositório:

```bash
git clone https://github.com/thcerutti/sample-python-app-paq-frontend.git
cd sample-python-app-paq-frontend
```

### Passo 2: Instalar as dependências

"Dependências" são as bibliotecas e ferramentas que o projeto precisa para funcionar. Para instalá-las, execute:

```bash
npm install
```

Esse comando vai:
- Ler o arquivo `package.json` (que lista tudo que é necessário)
- Baixar e instalar tudo automaticamente na pasta `node_modules`
- Pode demorar alguns minutos na primeira vez

### Passo 3: Rodar o servidor de desenvolvimento

Agora vamos "ligar" o projeto! Execute:

```bash
npm run dev
```

Você vai ver uma mensagem parecida com esta:

```
▲ Next.js 15.5.5
- Local:   http://localhost:3000
```

### Passo 4: Abrir no navegador

Abra seu navegador (Chrome, Firefox, Edge, etc.) e acesse:

**[http://localhost:3000](http://localhost:3000)**

Pronto! 🎉 O projeto está rodando no seu computador!

### 🔄 Desenvolvimento ao vivo

Quando o projeto está rodando com `npm run dev`, você pode:
- Editar os arquivos do código
- **Salvar** as mudanças
- Ver as mudanças **automaticamente** no navegador, sem precisar reiniciar nada!

Isso é chamado de "hot reload" e torna o desenvolvimento muito mais rápido.

---

## 📁 Estrutura do Projeto

Aqui está como o projeto está organizado:

```
sample-python-app-paq-frontend/
├── src/
│   ├── app/              # Páginas do site
│   │   ├── page.tsx      # Página principal (lista de jogadas)
│   │   ├── layout.tsx    # Layout que envolve todas as páginas
│   │   └── globals.css   # Estilos globais (CSS)
│   ├── components/       # Componentes reutilizáveis
│   │   └── highlight/    # Componentes das jogadas
│   ├── data/            # Dados de exemplo
│   └── types/           # Tipos TypeScript
├── public/              # Arquivos públicos (imagens, etc.)
├── package.json         # Lista de dependências e scripts
└── README.md           # Este arquivo!
```

### Arquivos importantes:

- **`src/app/page.tsx`**: A página principal onde as jogadas são exibidas
- **`src/components/highlight/`**: Componentes que mostram cada jogada
- **`src/app/globals.css`**: Estilos visuais do site (cores, tamanhos, etc.)
- **`package.json`**: Lista tudo que o projeto precisa para funcionar

---

## 🎨 Sobre o Código

Este projeto mostra jogadas de CS2 que vêm de uma API (um servidor que fornece dados). Cada jogada tem:

- 📹 **Vídeo** da jogada
- 🖼️ **Miniatura** (thumbnail)
- 👤 **Jogador** que fez a jogada
- 🏆 **Torneio** onde aconteceu
- 👥 **Times** que estavam jogando
- 🗺️ **Mapa** onde foi a jogada

### Tecnologias usadas:

- **Next.js 15** - Framework principal
- **React 19** - Biblioteca para criar interfaces
- **TypeScript** - JavaScript com tipos (ajuda a evitar erros)
- **CSS puro** - Para estilização (sem Tailwind)
- **Space Grotesk** - Fonte (tipografia) usada no site

---

## 📚 Quer Aprender Mais?

### Sobre Next.js:

- [Documentação Oficial do Next.js](https://nextjs.org/docs) - em inglês, mas muito completa
- [Tutorial Interativo do Next.js](https://nextjs.org/learn) - aprenda fazendo!
- [Repositório do Next.js no GitHub](https://github.com/vercel/next.js)

### Sobre React:

- [Documentação do React em Português](https://pt-br.react.dev/)
- [Tutorial Oficial do React](https://pt-br.react.dev/learn)

### Sobre JavaScript/TypeScript:

- [MDN Web Docs - JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [TypeScript para Iniciantes](https://www.typescriptlang.org/pt/docs/handbook/typescript-from-scratch.html)

---

## 🆘 Problemas Comuns

### "npm: command not found"
- **Solução**: Você precisa instalar o Node.js primeiro. Baixe em [nodejs.org](https://nodejs.org/)

### "Port 3000 is already in use"
- **Solução**: Outra coisa já está usando a porta 3000. Feche outros projetos ou use outra porta:
  ```bash
  npm run dev -- -p 3001
  ```

### O site não atualiza quando eu mudo o código
- **Solução**:
  1. Pare o servidor (Ctrl + C no terminal)
  2. Rode `npm run dev` novamente

### Erros ao instalar dependências
- **Solução**:
  1. Apague a pasta `node_modules`
  2. Apague o arquivo `package-lock.json`
  3. Rode `npm install` novamente

---

## 🤝 Contribuindo

Se você encontrar algum problema ou tiver sugestões, sinta-se à vontade para:
- Abrir uma "Issue" no GitHub
- Fazer um "Pull Request" com melhorias
- Compartilhar suas ideias!

---

## 📝 Licença

Este projeto é open source e está disponível sob a licença MIT.

---

**Feito com ❤️ para ajudar iniciantes a aprenderem desenvolvimento web!**
