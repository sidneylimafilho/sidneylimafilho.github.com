---
author: Sidney Lima Filho
title: Node.js no Windows (Parte 2)
excerpt:
layout: post
published: false
tags:
  - IIS
  - Javascript
  - Node.js
  - Windows
post_format: [ ]
---
[Para entender esse post recomendo a leitura da Parte I][1]

Neste post continuo na saga de explicar o Node.js pelo o que ele �, mostrar suas virtudes num ambiente Windows, partindo da premissa que h� muita informa��o sobre o Node.js na web, mas pouca explicando para n�s meros mortais usu�rios de windows como tirar proveito de seu assincronismo.

No fim do post eu coloco alguns links com mais informa��es para aprofundar o estudo, enquanto isso vamos botar o Node.js na web?

## Relembrando: O que � Node.js?

Node.js � um ambiente que permite executar arquivos JavaScript, usando a engine V8 do Google Chrome que � Open Source, acessando recursos externos de forma assincrona, baseado num modelo orientado a eventos, com a finalidade de criar aplica��es de rede altamente escal�veis.

## Um servidor web de 1 linha de c�digo

No arquivo anterior ou mostrei que � poss�vel executar arquivos javascript na sua maquina local, como se fossem execut�veis. Com o acervo de recursos que o Node.js disponibiliza para acessar recursos externos como rede, filesystem, etc.

Crie um arquivo server.njs na sua maquina local e coloque a seguinte linha nele.

    require("http").createServer(function(rq,rs){rs.end("Hello World!");}).listen(3000); 

Salve e se voc� instalou como no post [Node.js no Windows: Parte 1][1] clique duas vezes no arquivo, sen�o basta executar na linha de comando a instru��o abaixo:

    node server.njs 

Ao executar abrir� um terminal console sem cursor, pois � o Node.js executando a linha de c�digo esperando uma requisi��o para executar.

![Console NodeJS executando um servidor de 1 linha de c�digo][2]

O receber uma requisi��o o servidor dispara a function que � passada como argumento da fun��o createServer. Vamos testar isso? Abra o navegador e digite a url http://localhost:3000 e voc� ver� a imagem abaixo.

![Browser mostrando o resultado][3]

## Integrando com o legado

O c�digo legado � geralmente uma das principais causas de dor de cabe�a por desenvolvedores de software, pois sempre quando um desenvolvedor pensa nisso, lembra de acoplamento, c�digo macarr�o, falta de arquitetura, arvore de natal, imposi��o de limites a serem respeitados, al�m da integra��o que existe j� com outras tecnologias internas e externas ao projeto.

No ambiente Windows o desenvolvimento web � cercado de tecnologias que concorrem entre si, criando um acoplamento grande, tornando invi�vel descartar ou mudar alguma delas, por exemplo, temos o IIS ocupando a porta 80, hospedando aplica��es feitas em ASP, PHP, ColdFusion (?), .NET vers�es 1.0, 1.1, 2.0, 3.5, 4.0 e 5.0, al�m do acesso aos mais diversos banco de dados, MySql, MS SqlServer, Oracle, Access (?), etc.

O Node.js quando executa um codigo que disponibiliza um servidor ele precisa ocupar alguma porta para estar disponivel tornando a integra��o com algum recurso mais dolorosa, ou apenas menos elegante, pois seu servidor web utilizar� a porta 80 e sua aplica��o ter� que usar uma outra porta qualquer, configurar firewall para liberar essa porta, esta porta estar� visivel aos usu�rios que, dependendo da aplica��o, pode gerar problemas inconvenientes, entre outros problemas.

Usar o Node.js como um servidor web � possivel, por�m atualmente n�o � recomendado pelo criador dele, pois por mais que essa seja uma das finalidades pelo qual ele foi construido, hoje ele ainda � muito imaturo como uma solu��o completa, pois h� muitas tarefas al�m de processar dados que um servidor web executa, como servir recursos est�ticos como imagens, documentos, videos, ele tamb�m precisa reconhecer todos os verbos do protocolo HTTP, cookies, criptografia, HTTPS, tratar multiplos protocolos, etc.

A [recomenda��o][4] pelo pr�prio criador � ao disponibilizar o Node.js em ambiente de produ��o, colocar um servidor web na frente do Node.js, enquanto amadurece e surgem mais bibliotecas para suportar tudo que um Web Server precisa, assim o WebServer fica respons�vel por todo o trabalho pesado e o Node.js fica respons�vel apenas pelo processamento dos dados e da aplica��o.

![Infra-estrutura sugerida pelo Ryan][5]

No Windows a infra � parecida por�m mudamos o NGINX pelo IIS.

![Infra-estrutura no Windows][6]

Por�m ainda falta resolver um problema do Node.js no Windows, que �: Como o Node.js ir� se comunicar com o IIS?

Para realizar essa comunica��o entre os processos foi criado um projeto chamado [IISNode][7] criado por [Tomasz Janczuk][8]

## Instalando o iisnode

Para instalar o iisnode � muito f�cil, h� os arquivos instaladores que facilitam todos os passos, al�m de serem �teis, adicionam alguns recursos no IIS.

**Node.js **[(x86)][9]  
*Instala a ultima vers�o do Node.js numa pasta ProgramFiles(x86|x64), servindo de base para qualquer applica��o, caso voc� queira usar uma aplica��o com outra vers�o do Node.js h� uma op��o de configura��o que apresentarei mais a frente*

**Microsoft Visual C++ 2010 Redistributable Package**  [(x86)][10] | [(x64)  
][11]*O instalador do IIS Node n�o prosseguir� com a instala��o caso sua maquina n�o posua a biblioteca de componentes do C++, se isso ocorrer aqui est�o os links*

**iisnode for iis7** [(x86)][12] | [(x64)][13]  
*Aqui est� o respons�vel que permitir� o IIS se comunicar com o Node.js. Voc� n�o precisa realmente instalar pois na arquitetura do IIS bastaria adicionar uma referencia no Web.config da aplica��o, por�m com este instalador ele adiciona esta referencia no Web.config global do .NET, facilitando assim o processo em futuras apps, como tamb�m ele checa os requisitos necess�rios para a DLL funcionar.*

**iisnode for iis7 express** [(x86)][14]  
*Caso use o IIS Express, n�o testei. Por�m as referencias que tenho indicam que a instala��o � normal e sem maiores percal�os*

Ap�s instalar os 3 itens acima n�s j� poderemos come�ar a brincar com o Node.js no IIS, agora fica muito emocionante, pois foi o que eu sempre busquei nos meus ultimos 10 anos de carreira. Rodar Javascript eficientemente no servidor.

J� instalado o iisnode s� precisamos agora de 2 coisas: uma arquivo web.config para guardar a configura��es, o arquivo javascript que o iisnode ir� chamar com o Node.js.

![Unicos arquivos necess�rios para o iisnode][15]

O conte�do do arquivo web.config

    <?xml version="1.0" encoding="UTF-8"?>
    <configuration>
      <system.webServer>
        <handlers>
          <add name="iisnode" path="server.njs" verb="*" modules="iisnode" />
        </handlers>
      </system.webServer>
    </configuration>

O conte�do do arquivo server.njs

    require("http")
    .createServer(function (req, res) {
    	res.end("Hello, world! Estou na porta: " + process.env.PORT);
    })
    .listen(process.env.PORT||3000);

Repare que a unica diferen�a desse servidor de 1 linha de c�digo para a vers�o que mostramos antes � a vari�vel ��process.env.PORT��, pois ela � setada pelo iisnode indicando em qual Named Pipes ele usar� para realizar a comunica��o com o Node.js.

Outro ponto interessante � que com os passos do [post anterior][1] feitos ent�o se n�o quisermos depender do IIS, basta clicar 2x no arquivo server.njs, afinal todo arquivo .njs est� mapeado para executar com o Node.js, que seu servidor estar� rodando na porta 3000, pois como ��process.env.PORT�� ser� undefined, ent�o o operador ��||�� indica que se a primeira vari�vel for undefined ent�o usa a pr�xima que no caso � 3000.

![Resultado do iisnode][16]

Se ap�s executar esses passos voc� for no navegador e ao digitar http://localhost/server.njs, aparecer um erro 500.19 como na imagem abaixo, isso indica que falta o componente URL Rewrite 2.0

![Erro 500.19][17]

Para instalar o URL Rewrite 2.0 � simples usar os instaladores a seguir: [X86][18] | [x64][19]

## Acaba por aqui?

N�o. Na pr�xima parte mostrarei como montar uma aplica��o web inteira no Windows usando Node.js atrav�s do IIS, interagindo com o ASP.NET MVC, al�m de se aprofundar no IISNode e apresentar um toolkit que o permitir� criar em quest�o de minutos uma aplica��o do zero.

## Mais Referencias

[Porque aprender Javascript no ano que vem?][20]

[Porque Node.js faz tanto sucesso?][21]

[Node.js no Windows: Parte I][1]

 [1]: /nodejs-no-windows/
 [2]: /files/node_server_1_line.png
 [3]: /files/node_server_1_line_result.png
 [4]: http://nodejs.org/cinco_de_node.pdf
 [5]: /files/node_sugest_infra.png
 [6]: /files/node_sugest_infra_windows.png
 [7]: https://github.com/tjanczuk/iisnode
 [8]: http://tomasz.janczuk.org
 [9]: http://go.microsoft.com/?linkid=9784334
 [10]: http://www.microsoft.com/download/en/details.aspx?displaylang=en&id=5555
 [11]: http://www.microsoft.com/download/en/details.aspx?id=14632
 [12]: http://go.microsoft.com/?linkid=9784330
 [13]: http://go.microsoft.com/?linkid=9784331
 [14]: http://go.microsoft.com/?linkid=9784329
 [15]: /files/iisnode_sample_files.png
 [16]: /files/iisnode_server_1_line_result.jpg
 [17]: /files/erro500.19.png
 [18]: http://go.microsoft.com/?linkid=9722533
 [19]: http://go.microsoft.com/?linkid=9722532
 [20]: http://radar.oreilly.com/2011/06/time-to-learn-javascript.html
 [21]: http://radar.oreilly.com/2011/06/node-javascript-success.html