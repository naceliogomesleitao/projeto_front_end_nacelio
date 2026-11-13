# Drip Store

![Status do Projeto](https://shields.io)
![React](https://shields.io)
![Vite](https://shields.io)
![Styled Components](https://shields.io)
![React Router](https://shields.io)
![License](https://shields.io)

## Sobre o Projeto

A **Drip Store** é uma aplicação front-end de um e-commerce completo voltado para moda urbana e artigos esportivos (tênis, camisetas, calças, bonés e acessórios). 

Este projeto foi desenvolvido com base no protótipo oficial disponibilizado pela **Digital College**, colocando em prática a criação de componentes reutilizáveis com **React 19**, estilização isolada com **Styled Components** e gerenciamento de rotas dinâmicas com **React Router**.

**Protótipo no Figma:** [Acesse o layout aqui](https://figma.com)

---

##  Funcionalidades

- **Página Inicial (Home):** Carrossel de ofertas, coleções em destaque, categorias e produtos em alta.
- **Listagem de Produtos:** Catálogo completo com sistema de filtros por marca, categoria, gênero e estado.
-  **Detalhes do Produto:** Visualização individual com galeria de imagens, seleção de tamanhos/cores e produtos relacionados.
- **Carrinho de Compras:** Adição, remoção e cálculo de subtotal dos itens selecionados.
- **Design Responsivo:** Adaptação da interface para dispositivos móveis, tablets e desktops.

---

##  Tecnologias Utilizadas

As seguintes ferramentas e bibliotecas foram utilizadas na construção do projeto:

* **[React 19](https://react.dev)** (`^19.2.8`) — Biblioteca principal para construção da interface
* **[Vite 8](https://vitejs.dev)** (`^8.3.0`) — Bundler e servidor de desenvolvimento rápido
* **[Styled Components](https://styled-components.com)** (`^6.6.0`) — Estilização CSS-in-JS componentizada
* **[React Router](https://reactrouter.com)** (`^8.5.0`) — Gerenciamento de rotas e navegação entre páginas
* **[Oxlint](https://oxc.rs)** (`^1.81.0`) — Linter de alta performance para padronização do código

---

## Estrutura de Pastas

```text
projeto_front_end_nacelio/
├── public/              # Arquivos estáticos, fontes e imagens
├── src/                 # Código-fonte da aplicação (componentes, páginas e estilos)
├── .gitignore           # Arquivos e pastas ignorados pelo Git
├── .oxlintrc.json       # Regras e configurações do Oxlint
├── index.html           # Arquivo HTML base da aplicação
├── package.json         # Dependências e scripts do projeto
├── vite.config.js       # Configurações do Vite
└── README.md            # Documentação do projeto
```

---

## Como Executar o Projeto

### Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:
* [Git](https://git-scm.com)
* [Node.js](https://nodejs.org)

### Passo a passo

1. **Clone este repositório:**
   ```bash
   git clone https://github.com
   ```

2. **Acesse a pasta do projeto:**
   ```bash
   cd projeto_front_end_nacelio
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Execute a aplicação em modo de desenvolvimento:**
   ```bash
   npm run dev
   ```

5. **Acesse no navegador:**
   Abra `http://localhost:5173` *(ou a porta exibida no seu terminal)*.

### Outros scripts disponíveis

* `npm run build` — Gera a versão otimizada para produção na pasta `dist/`
* `npm run preview` — Visualiza localmente a build de produção
* `npm run lint` — Executa a verificação de código com o Oxlint

---

## Autor

Desenvolvido por **Nacélio Gomes Leitão**.

[![GitHub](https://shields.io)](https://github.com)
[![LinkedIn](https://shields.io)](https://linkedin.com)
