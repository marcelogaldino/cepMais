<h2 align="center">
CEP MAIS
</h2>

<h4 align="center"> 
	CEP MAIS - O seu buscador de CEP favorito 🔍 💜
</h4>

<br/>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/marcelogaldino/cepMais?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/marcelogaldino/cepMais">
	
  <a href="https://www.linkedin.com/in/marcelogaldino/">
    <img alt="Made by marcelogaldino" src="https://img.shields.io/badge/made%20by-marcelogaldino-%2304D361">
  </a>

  <a href="https://github.com/marcelogaldino/cepMais/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/marcelogaldino/cepMais">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
   <a href="https://github.com/marcelogaldino/cepMais/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/marcelogaldino/cepMais?style=social">
  </a>
</p>

<p align="center">
  <a href="#sobre-o-CEP-MAIS">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-Tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <!-- <a href="#try-it-now">How to use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; -->
  <a href="#como-usar">Como usar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#como-contribuir">Como contribuir</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <!-- <a href="#-backstage">Backstage</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; -->
  <a href="#memo-license">License</a>
</p>


## Sobre o CEP MAIS

 O CEP MAIS é um buscador de CEP fácil e simples de usar, obtenha seus dados e consulte seu hitórico | Let's spread love 🔍💜.

## :rocket: Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

[NodeJS][nodejs] 💻 </br>
[Typescript][typescript] 📘 </br>
[Postgres][postgres] 🎲 </br>
[Redis][redis] 🔻 </br>
[Docker][docker] 🐳 </br>
[ReactJS][react] 💙 </br>
[Styled Components][styled-components] 💅 </br>


## Como usar ? 🤔

É necessário que você tenha algumas ferramentas instaladas antes de clonar este projeto. 

 - [Git](https://git-scm.com) 
 - [VSCode](https://code.visualstudio.com/) ou algum outro editor de sua prferência
 - [Node.js](https://nodejs.org/) (recomendado a versão LTS do site oficial) 
 - [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/) como gerenciador de pacotes. *Ao instalar o **NodeJS** o **NPM** é instalado automaticamente*.
 - [Docker](https://www.docker.com/) **Recomendado**, mas não necessário. Este projeto possui suporte ao **Docker** o que facilita a configuração do nosso backend, por isso recomendamos 🐳


 ### Vamos começar!! ✍

Abra o terminal como administrador e clone o repositório:

```bash
# Clone o repositório
$ git clone https://github.com/marcelogaldino/cepMais
```

## Rodando o frontend da aplicação

```bash
# Vá para o diretório cepMais/
$ cd cepMais
# Vá para o diretório frontend/
$ cd frontend
# Instale as dependências
$ yarn
# Inicie a aplicação
$ yarn start
```
Neste momento você deverá ter o seu browser aberto automaticamente rodando a aplicação na porta 3000 *http://localhost:3000*

## Rodando o backend da aplicação
É necessário abrir uma nova aba ou um novo terminal para este procedimento
```bash
# Volte um diretório, caso vc esteja em /cepMais/frontend
$ cd ..
# Vá para o diretório backend/
$ cd backend
# Instale as dependências
$ yarn
# Subindo os containers docker da nossa aplicação
$ docker-compose up -d
# Verificando os nossos containers que estão rodando
$ docker ps #deve listar 3 containers, o cepMais, redis e postgres
# Checando se nossa aplicação esta rodando corretamente
$ docker logs cepMais -f
```
Neste momento temos a nossa aplicação com o backend e seus serviços em execução, com o backend rodando na porta 3333. *http://localhost:3333*

## Como contribuir :

- Faça um fork;
- Crie uma nova branch com a sua feature: `git checkout -b my-feature`;
- Commit as suas alterações: `git commit -m 'feat: My new feature'`;
- Empurre para o repositório remoto a sua nova branch: `git push origin my-feature`.

Abra um pull request para analisarmos as mudanças.

Você também pode nos ajudar abrindo issues.

## :memo: License

This project is under the MIT license. See the [LICENSE](https://github.com/marcelogaldino/cepMais/blob/main/LICENSE) for details.


Made with ♥ by Marcelo Galdino :wave: [Get in touch!](https://www.linkedin.com/in/marcelogaldino/)

[typescript]: https://www.typescriptlang.org/
[react]: https://reactjs.org/
[postgres]: https://www.postgresql.org/
[redis]: https://redis.io/
[docker]: https://www.docker.com/
[nodejs]: https://nodejs.org/en/
[styled-components]: https://styled-components.com/

