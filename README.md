
<h3 align="center">Desafio Técnico da XP</h3>

  <p align="center">
    Repositório com a resolução de Matheus Teles Ferreira do desafio de back-end do processo seletivo da XP.
    
  
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

![image](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![image](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![image](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)

<p align="right">(<a href="#top">back to top</a>)</p>


## Tomadas de decisão

Optei por utilizar Typescript, ao invés do JavaScript puro, por oferecer maior confiabilidade em relação a tipagem das variávieis. O JS é dinamicamente tipado, e assim problemas por tipagem apenas são detectados no runtime, o que pode atrasar a produção de uma aplicação. Manipulação de dados fortemente tipados, que é o caso de uma aplicação financeira, necessitam de uma linguagem fortemente tipada.

Utilizei Sequelize como uma ORM para facilitar as requisições ao banco de dados. O uso de uma ORM diminui a chance de erros em queries e no fluxo de dados para a aplicação.

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


<!-- ROADMAP -->
## Roadmap

- [ ] Requisições para investimentos
    - [ ] endpoint POST /investimentos/comprar
    - [ ] endpoint POST /investimentos/vender
    
- [ ] Requisições para ativos
    - [ ] endpoint GET /allassets - retorna todos os ativos disponíveis para compra, seu preço e quantidade disponível
    - [ ] endpoint GET BY CLIENT /ativos/:codCliente
    - [ ] endpoint GET BY ASSETS /ativos/assetinfo/:codAtivo
    
- [ ] Requisições para depósitos e saques
    - [ ] endpoint POST /conta/deposito
    - [ ] endpoint POST /conta/saque
    - [ ] endpoint GET /conta/:codCliente
    
- [ ] Requisições extras
    - [ ] endpoint POST /login - realiza login e retorna um token de autorização
    
 - Extras:
 Para operações de compra ou venda, o saldo na conta do cliente é atualizado automaticamente.
 Autenticação JWT funcionando através do enpoint POST /login, outros endpoints pedem o token de requisição para autorizar o acesso.


<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTACT -->
## Contato

Matheus Teles - https://www.linkedin.com/in/matheus-teles-/ 
<br/>
Project Link: [https://github.com/matheus-teles-git/matheus-teles-xp-challenge](https://github.com/matheus-teles-git/matheus-teles-xp-challenge)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge



