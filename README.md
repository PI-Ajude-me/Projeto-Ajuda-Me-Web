# Projeto Ajude.Me (Plataforma solidária)

<div align="center" style="background-color: #e6eaf4;">
    <img src="https://raw.githubusercontent.com/daniel-fatesg/dev-SGAmbientes/main/imagens/logo-faculdade-300.png" 
         alt="Texto alternativo" 
         title=""/>
</div>
<br>
<br>
<br>
<div align="center">
    <img src="https://user-images.githubusercontent.com/64324001/203644051-3300d2f9-b89f-4b3e-a3c8-57bdd4d8fbfb.png" alt="Texto alternativo" />
</div>
<br>
<h2> Plataforma solidária - pedir ajuda e doações! </h2>
<h3> 1 - Visão Geral do Software </h3>

<p>
Esse projeto destina-se a ongs ou pessoas que carecem de
ajuda, que através de uma interface web e mobile, possam se
conectar com outras pessoas que estão dispostas a ajudar no
que eles necessitam. 
</p>

<h4> 1.1 - Objetivo do Software </h4>

<p>
  A equipe planeja um sistema que realiza a comunicação de
pessoas ou ongs que necessitam de ajuda, com outras pessoas
que querem ajudar, através de páginas Web ou no mobile.
Para controle de acesso ao sistema contará com login e senha dos
respectivos usuários, evitando que pessoas não autorizadas
possam capturar informações sigilosas.
O objetivo do sistema é fornecer as informações para as pessoas
de maneira detalhada e rápida, facilitando a usabilidade, leitura
de informações e precisão de todos os dados inseridos.
</p>
<div align="center">
    <img src="https://user-images.githubusercontent.com/64324001/199096335-1ffcde07-467f-48bb-bf98-2a6605f9cfc7.png" alt="Texto alternativo" />
    <img src="https://user-images.githubusercontent.com/64324001/239971880-bedc7f2f-3fc2-4d77-994c-521103b98048.png" alt="Texto alternativo" />
</div>

<h4> 1.2 - Escopo do Projeto e Requisitos de Software </h4>
<p>Os requisitos funcionais descrevem as funções, que o sistema deve executar e as tarefas que ele deve realizar. Neste documento, apresentaremos os requisitos funcionais do Projeto Ajude-me (Plataforma solidária), definidos a partir das necessidades do cliente vinculado a este projeto. Além das principais necessidades e requisitos funcionais,  apresentaremos uma descrição detalhada de como o modelo Entidade-Relacionamento (ER) foi desenvolvido para atender a esses requisitos, incluindo as entidades, relacionamentos e atributos necessários para armazenar e gerenciar as informações do sistema.</p>
<br>
<p>
Necessidades detalhadas abaixo:
</p>
<br>
<ul>
<li> Cadastro dos usuários que vão pedir doação ou mandar uma doação para uma ong ou pessoa física;
</li>
<li>
Login e senha para os usuários cadastrados;
</li>
<li>
Cadastro do contato e ajuda dos usuários;
</li>

</ul>
<br>
<br>
<p> Fundamentado nas necessidades levantadas, foram identificados os seguintes requisitos funcionais :
<br>
<br>
<div align="center">
<table>
    <thead>
    <tr>
        <th>ID</>
        <th> Nome </th>
        <th>DESCRIÇÃO</>
    </tr>
    </thead>
    <tbody>
        <tr>
            <td><b>RF01</b></td>
            <td><b>Cadastrar nova pessoa</b></td>
            <td>As operações permitidas são:
Cadastrar – Uma pessoa poderá adicionar um novo usuário no sistema/Deve selecionar se precisa de ajuda ou quer ajudar no momento do cadastro. Não poderá incluir um CPF/CNPJ ou email já existente.
Deletar – Não pode ser excluído ou deletado um usuário cadastrado no sistema.
Alterar – poderão ser alterados todos os campos de um cliente, exceto o campo CPF/CNPJ.</td>
        </tr>
        <tr>
            <td><b>RF02</b></td>
            <td><b>Login da pessoa</b></td>
            <td>As operações permitidas são:
Login – A pessoa pode realizar o login no sistema com o email e senha já cadastrado.
Cadastrar – A pessoa poderá adicionar um novo usuário. Não poderá incluir um CPF ou email já existente.</td>
        </tr>
        <tr>
            <td><b>RF03</b></td>
            <td><b>Pedido de Ajuda ou Doação</b></td>
            <td>As operações permitidas são:
Cadastrar ajuda – A pessoa pode cadastrar uma ajuda na em sua conta, preenchendo os campos descrição, categoria e contato no momento do cadastro da ajuda. Não pode ser cadastrado mais de uma ajuda por conta.
Alterar ajuda – A pessoa pode alterar os campos da descrição, contato e categoria de uma ajuda já existente.
Deletar ajuda – A pessoa pode remover uma ajuda já cadastrada em sua conta. O pedido de ajuda deve ser deletado automaticamente quando exceder o tempo de 30 dias na lista.
Ajudar – A pessoa pode escolher um pedido de outra pessoa, que gostaria de ajudar, presente na lista da categoria selecionada</td>
        </tr>
    </tbody>
</table>
</div>
<br>
<h4> 1.4 - Modelo de Domínio </h2>
<p>A documentação do modelo Entidade-Relacionamento (ER) é uma etapa crucial no processo de desenvolvimento de um sistema. O modelo ER é usado para representar a estrutura do banco de dados, incluindo as entidades, relacionamentos e atributos. A partir desse modelo, é possível criar um esquema de banco de dados que possa ser implementado em um sistema de gerenciamento de banco de dados (SGBD). Neste documento, apresentaremos o modelo ER para Projeto Ajude-me (Plataforma Solidária) que contém a descrição detalhada dessa estrutura, incluindo as entidades, relacionamentos, chaves primárias e estrangeiras.</p>
<div align="center">
    <img src="https://user-images.githubusercontent.com/64324001/239971879-134f6f74-dec9-41d3-8dd2-7718bd73de8a.png" alt="Texto alternativo" />
</div>
<br>
<h3> 2 - Arquitetura do Software </h2>
<p> A arquitetura de software de uma aplicação é o conjunto de decisões de design que definem como os diferentes componentes do sistema se relacionam e interagem entre si. Ela é responsável por garantir que a aplicação seja escalável, segura e capaz de lidar com as demandas dos usuários de forma eficiente. A documentação técnica da arquitetura de software é uma parte fundamental do processo de desenvolvimento, pois ajuda a equipe a entender como o sistema funciona e como cada componente se relaciona com os demais. Neste documento, serão descritos os principais componentes da arquitetura da aplicação, como eles se comunicam e quais são as suas responsabilidades. Além disso, serão apresentadas as principais tecnologias utilizadas na implementação da arquitetura, assim como as decisões de design que levaram à escolha dessas tecnologias.</p>

<div align="center">
    <img src="https://user-images.githubusercontent.com/64324001/239971878-2eda9eaa-0997-4d0f-9649-7e175d50c87d.jpg" alt="Texto alternativo" />
</div>
<h4> 1.2 - Tecnologias da implementação </h2>
<br>
<p>A definição das tecnologias ao implementar um aplicativo web é crucial para garantir eficiência, escalabilidade, segurança e uma boa experiência do usuário. A escolha adequada das tecnologias alinhadas aos requisitos do projeto, integração com outros sistemas, segurança avançada e interfaces responsivas é fundamental para o sucesso do desenvolvimento. Além disso, a seleção de tecnologias populares e bem suportadas agiliza o processo, permite maior interoperabilidade e facilita a resolução de problemas. Dentro deste contexto, definiu-se o uso das tecnologias abaxio para que se alcance com êxito a escalabilidade, eficiência, segurança e usabilidade do aplicativo web em desenvolvimento.</p>
<br>
<ul>
<li><b>Docker: </b>Docker é uma plataforma de virtualização de contêineres que permite empacotar e distribuir aplicativos em ambientes isolados. Ele fornece uma maneira fácil e eficiente de criar, implantar e executar aplicativos em diferentes sistemas operacionais, garantindo consistência e portabilidade.</li>
<li><b>Angular:</b> Angular é um framework de desenvolvimento web front-end mantido pelo Google. Ele permite a criação de aplicações web dinâmicas e responsivas por meio do uso de componentes reutilizáveis. Com recursos como data binding, injeção de dependência e roteamento, o Angular simplifica o desenvolvimento de interfaces de usuário complexas.
</li>
<li><b>Spring Boot:</b> Spring Boot é um framework de desenvolvimento de aplicativos Java que simplifica a criação de aplicativos autônomos e prontos para produção. Ele fornece uma configuração rápida e automática de componentes comuns do ecossistema Spring, permitindo que os desenvolvedores se concentrem na lógica de negócios em vez de configurar e integrar diferentes camadas do aplicativo.</li>
<li><b>PostgreSQL:</b> PostgreSQL é um sistema de gerenciamento de banco de dados relacional de código aberto e altamente escalável. Ele oferece suporte a recursos avançados, como consultas complexas, transações ACID, replicação e extensibilidade. O PostgreSQL é amplamente utilizado em aplicações que exigem um banco de dados confiável e poderoso, fornecendo uma sólida base para armazenamento e manipulação de dados.</li>
</ul>
<br>
<h3> Referências </h3>
<br>
<ol>
<li>Docker. Disponível em: https://www.docker.com/. Acesso em: 22 maio 2023.</li>
<li>Angular. Disponível em: https://angular.io/. Acesso em: 22 maio 2023.</li>
<li>Spring Boot. Disponível em: https://spring.io/projects/spring-boot. Acesso em: 22 maio </li>
<li>PostgreSQL. Disponível em: https://www.postgresql.org/. Acesso em: 22 maio 2023.</li>
<li>TypeScript. Disponível em: https://www.typescriptlang.org/. Acesso em: 22 maio 2023.</li>
<li>Java. Disponível em: https://www.java.com/. Acesso em: 22 maio 2023.</li>
</ol>
<br>
<h3> Contatos </h3>
<br>
<p><b>Ana Priscilla</b></p>
<ul>
<li>https://github.com/AnaPriscilla</li>
</ul>

<p><b>Wemerson</b></p>
<ul>
<li>https://github.com/WemersonSm</li>
</ul>

<p><b>Carlos Henrique/b></p>
<ul>
<li>https://github.com/CarlosH0</li>
</ul>

