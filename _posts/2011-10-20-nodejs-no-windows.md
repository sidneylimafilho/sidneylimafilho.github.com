---
layout: post

author: Sidney Lima Filho
title: 'Node.js no Windows'
image: '/files/2011-10-20-WindowsLovesNode.jpg'
excerpt: 'VocÍ n„o sabe o que È o Node.js? Este artigo alÈm de explicar como usar, tambÈm explica o que È e sua histÛria.'

published: true
categories: 'post'
tags: [Javascript, Node.js]
---

##  O que o Javascript È?

Antes de comeÁar a contar uma breve histÛria do Javascript, um ponto a observar È que o Javascript n„o È uma linguagem puramente da web como muitos imaginam, ela roda localmente como qualquer linguagem script, se vocÍ usa Windows no dia-a-dia, assim como eu, noter· que ele esteve sempre ao seu lado e vocÍ nem sabia.

Exemplo. VocÍ pode criar um arquivo .js, clicar duas vezes nele que ele executar·. Claro, quando se escreve um javascript dessa forma o paradigma de programaÁ„o È outro. VocÍ n„o tem window, document, DOM, alert, o JQuery n„o funciona, nem as coisas de HTML em geral, vocÍ passa a ter acesso a funÁıes que normalmente vocÍ n„o usaria como CreateObject, MsgBox, WScript, que por sua vez n„o funciona nos browsers, mas a linguagem È a mesma, o mesmo FOR, IF, WHILE, EVAL, FUNCTION, etc. Se quiser mais informaÁıes de quais opÁıes est„o disponÌveis para desenvolver em javascript no Windows vocÍ pode acessar o site do MSDN

![][1]

Guia Referencia <http://msdn.microsoft.com/en-us/library/9bbdkx3k(v=VS.85).aspx>

JScript on Windows <http://msdn.microsoft.com/en-us/library/xazzc41b(v=VS.85).aspx> 

Manipulando Arquivos e Diretorios <http://msdn.microsoft.com/en-us/library/ch28h2s7(v=VS.85).aspx>

## Um Breve HistÛrico

Agora que vocÍ j· sabe que Javascript n„o È uma linguagem sÛ de navegador, j· sabe que ela serve para mais coisas inclusive para realizar tarefas no Windows, ent„o vamos a outra aplicabilidade dela, que È o lado server-side, isso mesmo, usar o javascript para processar nossas p·ginas HTML do lado do servidor.

O javascript no lado servidor n„o È algo novo, muito menos uma faÁanha e nem revolucion·rio como muitos imaginam. A Netscape, empresa que contratou [Brendan Eich][2], para desenvolver uma linguagem para tudo relacionado a Web (note que Web È tanto o lado cliente, com os browsers, como tambÈm È o lado servidor) sabia que a Web necessitava de:

*   **Linguagem din‚mica**, pois cada pagina poderia ter estruturas diferentes;
*   **Fracamente tipada**, pois os dados principais na Web s„o texto e haveria convers„o o tempo todo;
*   **Convers„o implÌcita**, pois alÈm do motivo acima, o desenvolvimento deveria ser focado na utilizaÁ„o dos recursos ao invÈs do conte˙do deles;
*   **Derivar de uma linguagem conhecida**, com o objetivo de facilitar a migraÁ„o dos desenvolvedores nativos para a programaÁ„o Web;
*   **Script**, pois cada p·gina tem lÛgica prÛpria, portanto n„o faria sentido ter um execut·vel por p·gina do lado servidor e do lado cliente fosse facilmente acoplado as estruturas HTML existentes;

Nesta Època, [em torno de 1995][3], a Netscape junto com [Brendan Eich][2], criaram o Livescript que no ano seguinte, com a junÁ„o e aprovaÁ„o da SUN incluindo-a no processo, pois a Netscape queria dar suporte a Java Applets no seu revolucion·rio [Netscape Navigator][4], passou a se chamar de JavaScript, numa referencia explicita a linguagem que derivou seu estilo de codificaÁ„o. (Esta referencia nota-se atÈ hoje, na equipe da Mozila, desenvolvendo a nova [especificaÁ„o da evoluÁ„o][5] da linguagem, [v·rias palavras reservadas do Java v„o aparecer no Javascript][6])

Neste momento a prÛpria Netscape viu que a linguagem era muito interessante e j· comeÁava a criar seu prÛprio servidor web, para rodar seu "LiveScript"ù que se chamava [Netscape Enterprise Server][7], atravÈs do Netscape LiveWire, que rodava [SSJS (Server Side Javascript)][8], olha um [exemplo de cÛdigo][9] da Època.

A Microsoft em 1997 (ou em 1998, n„o lembro bem agora) tambÈm se interessou pela tecnologia e adotou-a em seus ambientes, porÈm apÛs uma briga com a SUN, pois usava a marca Java, ela foi judicialmente obrigada a mudar o nome da linguagem Javascript que ela usava, ent„o ou ela continuava a usar uma linguagem chamada Javascript e pagava os royalties ou usava outra linguagem, nesse Ìnterim ela tentou emplacar um VBScript, sem sucesso e acabou "inventando" uma nova linguagem o JScript, que È praticamente igual ao Javascript, sÛ diferenciou naquilo que um juiz federal entende, ou seja, quase nada.

N„o se importando se era Javascript ou JScript, a Microsoft tambÈm ofereceu suporte tanto do lado cliente com seu maravilhoso Internet Explorer (sic) e do lado servidor com as poderosas Active Server Pages (essas sim eram realmente eram poderosas).

## Se tudo isso j· existia, qual a vantagem do Node.JS?

Como vocÍ j· sabe o principal objetivo do Node.JS È permitir criar aplicaÁıes de rede [altamente escal·veis][10], isso signfica que h· alguns [desafios][11] [fÌsicos][12] a serem vencidos, como por exemplo o problema das [10000 conexıes][13] simult‚neas. AlÈm disso, outra grande vantagem È usar o motor V8, que o pessoal do Google criou para o Javascript (os compiladores e VM's da Època eram lentas e buguentas), para dar uma turbinada na linguagem tornando-a muito mais eficiente e equivalente em performance a linguagens de peso como C#, PHP, Python, Ruby e Java.

## T· mas e o titulo do post?

OK, eu precisava contar um pouco de histÛria para que as coisas, que vir„o pela frente, faÁam sentido. Agora vamos ao que interessa. O Node.js foi um projeto que comeÁou no Linux com a galera do mundo open source (novidade?), porem mais uma vez a Microsoft viu e se interessou pelo projeto, assim destacou 2 profissionais para colaborar ativamente a tornar o Node.js rodando no Windows (afinal ela vende Windows e j· estava de olho na sua plataform-as-a-service Azure, certo?), ajudou com conhecimento, recursos, acesso a informaÁıes privilegiadas e assim removeu-se os acoplamentos ao kernel do Linux, [sem perder sua performance][14] que È muito importante, promovendo uma maior adaptabilidade aos usu·rios Windows.

Com isso existe duas formas de se instalar o Node.js no Windows:

1.  Baixa o cÛdigo fonte, descobre que precisa de um emulador POSIX (msys ou cygwin), tenta compilar, descobre que precisa baixar uma parafern·lia que vocÍ n„o faz idÈia para que serve, tenta de novo, a compilaÁ„o falha pela falta de alguma vari·vel de ambiente, tenta de novo, assim sucessivamente.
2.  Estilo WIN: Baixa o arquivo execut·vel, clica duas vezes e funciona.

Na primeira opÁ„o, uma vez conseguindo, ela te abre mais opÁıes de plugins / ferramentas / frameworks desenvolvidos pela comunidade, [mas isso j· est· mudando][15], como o NPM que sÛ funciona no estilo UNIX.

Como a maioria das coisas que realmente importam, est„o funcionando para os dois modos, ent„o vou comeÁar pela segunda opÁ„o e que mais se aproxima da nossa realidade.

## Passo-a-Passo

1.  Acesse o seguinte endereÁo <http://nodejs.org/#download>
2.  Baixe o execut·vel para Windows
3.  Clique 2x no arquivo node.exe

![][16]

## N„o acredito que vocÍ me fez ler isso tudo para apenas trÍs passos

N„o, esses 3 passos foram apenas para mostrar funcionando, porÈm para executar arquivos com cÛdigo javascript e integrar ao ambiente s„o necess·rios mais passos, que explicarei mais adiante.

Quando vocÍ clica 2x no arquivo node.exe, ele abre um console e coloca um cursor piscando, este console È o REPL (Read-Eval-Print-Loop), ou seja, ele lÍ o que vocÍ escreve, avalia se È um javascript v·lido, imprime o resultado caso haja e comeÁa tudo de novo, esperando vocÍ escrever a prÛxima instruÁ„o. Isso nos permite programar e ver o resultado na tela, semelhante ao que algumas IDE's fazem, por exemplo, o Visual Studio.

![][17]

![][18]

Mas e se quisermos executar um arquivo? N„o tem problema entra no console e digita "node exemplo.js"

![][19]

Tem como eu n„o depender do console?

Claro, essa È a finalidade do artigo, mas primeiro vamos voltar ao conceito. Se lembra que no comeÁo desse artigo eu falei sobre o paradigma de desenvolvimento local È diferente de desenvolver para web? Ent„o com o Node.js È a mesma coisa, existem keywords que tem no Node.js que n„o ter„o no browser, o cÛdigo È javascript mas os ambientes n„o s„o os mesmos. Veja na imagem do REPL que eu escrevi propositalmente um "alert" e ele retornou que era "undefined", porem escrevi "process.versions.node" e retornou "0.5.8", j· que a palavra "process" È uma vari·vel reservada no Node.js, que declara informaÁıes do processo que est· em execuÁ„o.

Ent„o para facilitar o reconhecimento desses arquivos Node.js, eu passo a nome·-los com a extens„o "njs", isso n„o È obrigatÛrio, porÈm mais na frente quando vocÍ tiver in˙meros arquivos "js", n„o saber· reconhecer facilmente no seu projeto se aquele "common.js" È um arquivo com funÁıes para o browser, ou para suas p·ginas no servidor, ou s„o funÁıes matem·ticas e de manipulaÁ„o de string, genÈricas que servem para os dois ambientes.

Os arquivos javascript que s„o usados nos projetos web, usados no HTML e browser eu continuo usando a extens„o "js", atÈ mesmo por causa dos arquivos j· existentes, porÈm a partir deste momento os arquivos que uso atravÈs do Node.js eu uso a extens„o "njs".

Com essa convenÁ„o criada, fica mais f·cil integrar ao ambiente, pois bastar· associar esta extens„o ao Node.js, que o Windows reconhecer· quando eu clicar 2x no arquivo NJS, ele executar· usando o Node.js. Para associar a extens„o basta executar no console do windows (CMD), as duas linhas abaixo, prestando a atenÁ„o para mudar o caminho do execut·vel para onde vocÍ colocou o arquivo original.

REG ADD "HKEY\_CURRENT\_USER\Software\Classes\joyent.node.js\shell\open\command" /ve /d "c:\node\node.exe %1" /f

REG ADD "HKEY\_CURRENT\_USER\Software\Classes\.njs" /ve /d "joyent.node.js"ù

Prontinho agora seus scripts executam no Windows perfeitamente.

Em breve, publicarei a segunda parte deste post explicando como usar o Node.js como um servidor web.

 [1]: /files/2011-10-20-wscript.png
 [2]: http://brendaneich.com/
 [3]: http://en.wikipedia.org/wiki/Timeline_of_programming_languages#1990s
 [4]: http://en.wikipedia.org/wiki/Netscape_Navigator
 [5]: http://wiki.ecmascript.org/doku.php?id=harmony:proposals
 [6]: https://developer.mozilla.org/en/JavaScript/Reference/Reserved_Words
 [7]: http://pt.wikipedia.org/wiki/Netscape_Enterprise_Server
 [8]: http://en.wikipedia.org/wiki/Server-side_JavaScript
 [9]: http://www.datacraft.com/livewire.html
 [10]: http://en.wikipedia.org/wiki/Scalability#Scale_horizontally_.28scale_out.29
 [11]: http://bulk.fefe.de/scalable-networking.pdf
 [12]: http://en.wikipedia.org/wiki/CAP_theorem
 [13]: http://www.kegel.com/c10k.html
 [14]: http://twitter.com/#!/ryah/status/106123259908599808
 [15]: https://groups.google.com/d/topic/nodejs-dev/1z4PTv7fHro/discussion
 [16]: /files/2011-10-20-download_node.js.png
 [17]: /files/2011-10-20-repl.png
 [18]: /files/2011-10-20-repl_vs2008.png
 [19]: /files/2011-10-20-node-no-console.png