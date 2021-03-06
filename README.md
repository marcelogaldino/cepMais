<h2 align="center">
CEP MAIS
</h2>

<h4 align="center"> 
	CEP MAIS - O seu buscador de CEP favorito π π
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

 O CEP MAIS Γ© um buscador de CEP fΓ‘cil e simples de usar, obtenha seus dados e consulte seu hitΓ³rico | Let's spread love ππ.

## :rocket: Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

[NodeJS][nodejs] π» </br>
[Typescript][typescript] π </br>
[Postgres][postgres] π² </br>
[Redis][redis] π» </br>
[Docker][docker] π³ </br>
[ReactJS][react] π </br>
[Styled Components][styled-components] π </br>


## Como usar ? π€

Γ necessΓ‘rio que vocΓͺ tenha algumas ferramentas instaladas antes de clonar este projeto. 

 - [Git](https://git-scm.com) 
 - [VSCode](https://code.visualstudio.com/) ou algum outro editor de sua prferΓͺncia
 - [Node.js](https://nodejs.org/) (recomendado a versΓ£o LTS do site oficial) 
 - [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/) como gerenciador de pacotes. *Ao instalar o **NodeJS** o **NPM** Γ© instalado automaticamente*.
 - [Docker](https://www.docker.com/) **Recomendado**, mas nΓ£o necessΓ‘rio. Este projeto possui suporte ao **Docker** o que facilita a configuraΓ§Γ£o do nosso backend, por isso recomendamos π³


 ### Vamos comeΓ§ar!! β

Abra o terminal como administrador e clone o repositΓ³rio:

```bash
# Clone o repositΓ³rio
$ git clone https://github.com/marcelogaldino/cepMais
```

## Rodando o frontend da aplicaΓ§Γ£o

```bash
# VΓ‘ para o diretΓ³rio cepMais/
$ cd cepMais
# VΓ‘ para o diretΓ³rio frontend/
$ cd frontend
# Instale as dependΓͺncias
$ yarn
# Inicie a aplicaΓ§Γ£o
$ yarn start
```
Neste momento vocΓͺ deverΓ‘ ter o seu browser aberto automaticamente rodando a aplicaΓ§Γ£o na porta 3000 *http://localhost:3000*

## Rodando o backend da aplicaΓ§Γ£o
Γ necessΓ‘rio abrir uma nova aba ou um novo terminal para este procedimento
```bash
# Volte um diretΓ³rio, caso vc esteja em /cepMais/frontend
$ cd ..
# VΓ‘ para o diretΓ³rio backend/
$ cd backend
# Instale as dependΓͺncias
$ yarn
# Subindo os containers docker da nossa aplicaΓ§Γ£o
$ docker-compose up -d
# Verificando os nossos containers que estΓ£o rodando
$ docker ps #deve listar 3 containers, o cepMais, redis e postgres
# Rodando as migrations
$ yarn typeorm migration:run
# Checando se nossa aplicaΓ§Γ£o esta rodando corretamente 
$ docker logs cepMais -f

# Caso tenha algum erro ao subir os containers docker use o comando abaixo para recria-los
$ docker-compose up --build --force-recreate
```
Neste momento temos a nossa aplicaΓ§Γ£o com o backend e seus serviΓ§os em execuΓ§Γ£o, com o backend rodando na porta 3333. *http://localhost:3333*

## Como contribuir

- FaΓ§a um fork;
- Crie uma nova branch com a sua feature: `git checkout -b my-feature`;
- Commit as suas alteraΓ§Γ΅es: `git commit -m 'feat: My new feature'`;
- Empurre para o repositΓ³rio remoto a sua nova branch: `git push origin my-feature`.

Abra um pull request para analisarmos as mudanΓ§as.

VocΓͺ tambΓ©m pode nos ajudar abrindo issues.

## :memo: License

This project is under the MIT license. See the [LICENSE](https://github.com/marcelogaldino/cepMais/blob/main/LICENSE) for details.


Made with β₯ by Marcelo Galdino :wave: [Get in touch!](https://www.linkedin.com/in/marcelogaldino/)

[typescript]: https://www.typescriptlang.org/
[react]: https://reactjs.org/
[postgres]: https://www.postgresql.org/
[redis]: https://redis.io/
[docker]: https://www.docker.com/
[nodejs]: https://nodejs.org/en/
[styled-components]: https://styled-components.com/

