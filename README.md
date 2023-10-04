# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Passos Realizados na criação de Rotas com Router-DOM

- Instalação do Router-Dom
- Criação da pasta routes com rotas[Home,produtos,EditarProduto e Erro404]
- Alterar o arquivo main.jsx, adicionando os imports para os objetos de rotas e o 
createBrowserRouter e RouterProvider
- Criando o objeto de rotas e adicionando apenas a rota App e exibindo com o RouterProvider.
- Adicionando o atributo children no objeto de rotas e adicionar as rotas Home,
Produtos,  EditarProdutps e Erro404
- Criando rotas com o componente Link.
- Criar modulo de representacoa de um objeto de produto com o nome de ListaProduto,
este objeto vai ter os seguintes atributos: id, nome, preco e descricao.
- Recuperando a lista de produtos do arquivo ListaProdutos.jsx e adicionando no 
estado do componente Produtos.
- Em Produtos vamos criar um tabela pra exibir os produtos e adicionar link para editar produto.
- Adicionando CSS inline nos elementos da tabela com style obje