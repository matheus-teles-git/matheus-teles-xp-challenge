
<h3 align="center">Desafio Técnico da XP</h3>

  <p align="center">
    Repositório com a resolução de Matheus Teles Ferreira do desafio de back-end do processo seletivo da XP.
    <br />
    <a href="https://github.com/matheus-teles-git/matheus-teles-xp-challenge"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/matheus-teles-git/matheus-teles-xp-challenge">View Demo</a>
    ·
    <a href="https://github.com/matheus-teles-git/matheus-teles-xp-challenge">Report Bug</a>
    ·
    <a href="https://github.com/matheus-teles-git/matheus-teles-xp-challenge">Request Feature</a>
  </p>
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Conteúdo</summary>
  <ol>
    <li>
      <a href="#about-the-project">Sobre o projeto</a>
      <ul>
        <li><a href="#built-with">Desenvolvido com:</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Iniciando</a>
      <ul>
        <li><a href="#installation">Instalação</a></li>
      </ul>
    </li>
    <li><a href="#usage">Uso</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contato</a></li>
  </ol><div id="top"></div>
</details>  



### Desenvolvido Usando

* Node.js
* Typescript
* Sequelize
<p align="right">(<a href="#top">back to top</a>)</p>



<!-- Iniciand -->
## Iniciando o projeto


### Instalação


1. Clone o repositório
   ```sh
   git clone https://github.com/matheus-teles-git/matheus-teles-xp-challenge.git
   ```
2. Instale as dependências
   ```sh
   npm install
   ```
3. crie um arquivo .env e configure as variáveis de ambiente
   ```js
   DB_USER='seu usuário'
   DB_PASS='sua senha'
   DB_NAME=homebroker_api
   DB_HOST=localhost
   DB_PORT=3306
   JWT_SECRET='sua senha secreta'
   ```
4. Suba seu banco de dados
   ```sh
   npm run db:reset
   ```
5. Inicie o projeto
   ```sh
   npm start
   ```      
   

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] Requisições para investimentos
    - [ ] endpoint POST /investimentos/comprar
    - [ ] endpoint POST /investimentos/vender
    
- [ ] Requisições para ativos
    - [ ] endpoint GET BY CLIENT /ativos/:codCliente
    - [ ] endpoint GET BY ASSETS /ativos/assetinfo/:codAtivo
    
- [ ] Requisições para depósitos e saques
    - [ ] endpoint POST /conta/deposito
    - [ ] endpoint POST /conta/saque
    - [ ] endpoint GET /conta/:codCliente
    
- [ ] Requisições extras
    - [ ] endpoint POST /login realiza login e retorna um token de autorização
    - [ ] endpoint GET /allassets retorna todos os ativos disponíveis para compra, seu preço e quantidade disponível


<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTACT -->
## Contato

Matheus Teles - https://www.linkedin.com/in/matheus-teles-/
Project Link: [https://github.com/matheus-teles-git/matheus-teles-xp-challenge](https://github.com/matheus-teles-git/matheus-teles-xp-challenge)

<p align="right">(<a href="#top">back to top</a>)</p>



