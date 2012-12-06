---
author: Sidney Lima Filho
title: Node.js no Windows
excerpt:
layout: post
published: false
tags:
  - Javascript
  - Node.js
  - Windows
post_format: [ ]
---
### � O que o Javascript é?

Antes de começar a contar uma breve história do javascript, um ponto a observar é que o Javascript não é uma linguagem puramente da web como muitos imaginam, ela roda localmente como qualquer linguagem script, se você usa Windows no dia-a-dia, assim como eu, ele esteve sempre ao seu lado e você nem sabia.

Exemplo. Você pode criar um arquivo .js, clicar duas vezes nele que ele executará. Claro, quando se escreve um javascript dessa forma o paradigma de programa é outro. Você não tem window, document, DOM, alert, seu JQuery não funciona, as coisas de HTML em geral, você passa a ter acesso a funções que normalmente você não usaria como CreateObject, MsgBox, WScript, que por sua vez não funciona nos browsers, mas a linguagem é a mesma, o mesmo FOR, IF, WHILE, EVAL, FUNCTION, etc. Se quiser mais informações de quais opções estão disponíveis para desenvolver em javascript no Windows você pode acessar o site do MSDN

![][1]

Guia Referencia <http://msdn.microsoft.com/en-us/library/9bbdkx3k(v=VS.85).aspx>

JScript on� Windows <http://msdn.microsoft.com/en-us/library/xazzc41b(v=VS.85).aspx>� 

Manipulando Arquivos e Diretorios <http://msdn.microsoft.com/en-us/library/ch28h2s7(v=VS.85).aspx>

### Um Breve Histórico

Agora que já desmistifiquei um pouco que Javascript não é� uma linguagem só de navegador e você já sabe que ela serve para mais coisas� inclusive para realizar tarefas no Windows, vamos a outra aplicabilidade dela,� que é o lado Server-side, isso mesmo, usar o javascript para processar nossas� páginas HTML do lado do servidor.

O javascript no lado servidor não é algo novo, muito menos� uma façanha e nem revolucionário como muitos imaginam.� A Netscape, empresa que contratou [Brendan Eich][2], para desenvolver uma linguagem para tudo relacionado a Web (note que Web é tanto o lado cliente, com os� browsers, como também é o lado servidor) sabia que a web necessitava de:

*   **Linguagem� dinâmica**, pois cada pagina poderia ter estruturas diferentes;
*   **Fracamente� tipada**, pois os dados principais na Web são texto e haveria conversão o� tempo todo;
*   **Conversão� implícita**, pois além do motivo acima, o desenvolvimento deveria ser focado� na utilização dos recursos ao invés do conteúdo deles.
*   **Derivar� de uma linguagem conhecida**, para facilitar a migração dos desenvolvedores� para a programação para Web
*   **Script**,� para que o desenvolvimento seja relativo a cada página e que não necessite compilação� a cada modificação

Nesta época, [em� torno de 1995][3], a Netscape junto com Brendan Eich, criaram o Livescript que� no ano seguinte, com a junção e aprovação da SUN incluindo-a no processo, pois� a Netscape queria dar suporte a Java Applets no seu revolucionário [Netscape Navigator][4], passou� a se chamar de JavaScript, numa referencia explicita a linguagem que derivou  
seu estilo de codificação. (Esta referencia nota-se até hoje, na equipe da� Mozila, desenvolvendo a nova [especificação� da evolução][5] da linguagem, [várias� palavras reservadas do Java vão aparecer no Javascript][6])

Neste momento a própria Netscape viu que a linguagem era� muito interesante e já começava a criar seu próprio lado servidor (Server-Side), para rodar seu “LiveScript” que se chamava [Netscape][7]� [Enterprise Server][7], através do Netscape LiveWire, que rodava [SSJS (Server Side][8]� [Javascript),][8] olha [exemplo][9]� [de código][9] da época.

A Microsoft em 1997 (ou em 1998, não sei agora) também se� interessou pela tecnologia e adotou-a em seus ambientes, porém após uma briga� com a SUN, pois usava a marca Java, ela foi judicialmente obrigada a mudar o� nome da linguagem Javascript que ela usava, então ou ela continuava a usar uma� linguagem chamada Javascript ou usava outra linguagem, nesse ínterim ela tentou� emplacar um VBScript, sem sucesso e acabou “inventando” uma nova linguagem� JScript, que é praticamente igual ao Javascript, só diferenciou naquilo que um� juiz federal entende, ou seja, quase nada.

Não se importando se era Javascript ou JScript a Microsoft� também ofereceu suporte tanto do lado cliente com seu maravilhoso Internet� Explorer (sic) e do lado servidor com as poderosas Active Server Pages (realmente� eram poderosas).

### Se tudo isso já� existia, qual a vantagem do Node.JS?

Como você já sabe o principal objetivo do Node.JS é permitir� criar aplicações de rede [altamente� escaláveis][10], isso signfica que há alguns [desafios][11] [físicos][12] a serem vencidos,  
como por exemplo o problema das [10000� conexões][13] simultâneas. Além disso, outra grande vantagem é usar o motor V8,� que o pessoal no Google criou para o Javascript , pois antes a engine era lenta� e buguenta, então veio o Google e deu a turbinada na linguagem tornando-a muito� mais eficiente e equivalente a linguagens de peso como C#, PHP, Python, Ruby e� Java.

### Tá mas e o titulo do� post?

OK era necessário contar um pouco do casal para as coisas� que virão pela frente façam sentido. Agora vamos ao que interessa.� O Node.js foi um projeto que começou no Linux, com a galera� do mundo open source (novidade?), porem mais uma vez a Microsoft viu� e se interessou pelo projeto, assim destacou� 2 profissionais para colaborar ativamente a tornar o Node.js fluente no Windows (afinal� ela vende Windows certo?), ajudou com conhecimento, recursos, acesso a� informações privilegiadas, assim removeu-se os acoplamentos ao kernel do Linux,� [sem perder sua][14]� [performance][14] que é muito importante, promovendo uma maior adaptabilidade � aos usuários Windows.

Com isso existe duas formas de se instalar o Node.js no� Windows:

1.  Baixa o código fonte, descobre que� precisa de um emulador POSIX (msys ou cygwin), tenta compilar, descobre que� precisa baixar uma parafernália que você não faz idéia para que serve, tenta de� novo, a compilação falha pela falta de alguma variável de ambiente, tenta de� novo, assim sucessivamente.
2.  Estilo WIN: Baixa o arquivo executável, clica� duas vezes e funciona.

Na primeira opção, uma vez conseguindo, ela te abre mais� opções de plugins / ferramentas / frameworks desenvolvidos pela comunidade, [mas� isso já está mudando][15], como o NPM que só funciona no estilo UNIX.

Como a maioria das coisas que realmente importam, estão� funcionando para os dois modos, então vou começar pela segunda opção e que mais� se aproxima da nossa realidade.

### Passo-a-Passo

1.  Acesse o seguinte endereço <http://nodejs.org/#download>
2.  Baixe o executável para Windows
3.  Clique 2x no arquivo node.exe

 

### ![][16]

### Não acredito que você� me fez ler isso tudo para apenas três passos

Não, esses 3 passos foram apenas para mostrar funcionando� porém para executar arquivos com código javascript e integrar ao ambiente são� necessários mais passos, que explicarei mais adiante.

Quando você clica 2x no arquivo node.exe, ele abre um console� e coloca um cursor piscando, este console é o REPL (Read-Eval-Print-Loop), ou� seja, ele lê o que você escreve, avalia se é um javascript válido, imprime o� resultado caso haja e começa tudo de novo, esperando você escrever a próxima� instrução. Isso nos permite programar e ver o resultado na tela, semelhante ao� que algumas IDE’s fazem, por exemplo, o Visual Studio.

![][17]

![][18]

Mas e se quisermos executar um arquivo? Não tem problema� entra no console e digita “node exemplo.js”

![][19]

Tem como eu não� depender do console?

Claro, essa é a finalidade do artigo. Primeiro vamos voltar� ao conceito. Se lembra que no começo desse artigo eu falei sobre o paradigma de� desenvolvimento local é diferente de desenvolver para web? Então com o Node.js é� a mesma coisa, haverão keywords que tem no Node.js que não terá no browser, o código é javascript mas os ambientes não são os mesmos. Veja na imagem do REPL� que eu escrevi propositalmente um “alert” e ele retornou que era “undefined”,� porem escrevi “process.versions.node” e retornou “0.5.8”, já que a palavra “process” é� reservada no Node.js, que declara informações do processo que está em� execução.

Então para facilitar o reconhecimento desses arquivos Node.js,� eu passo a nomeá-los com a extensão “njs”, isso não é obrigatório, porém mais� na frente quando você tiver inúmeros arquivos “js”, não saberá reconhecer� facilmente no seu projeto se aquele “common.js” é um arquivo com funções para o� browser, ou para suas páginas no servidor, ou são funções matemáticas e de� manipulação de string, genéricas que servem para os dois ambientes.

Os arquivos javascript que são usados nos projetos web,� usados no HTML e browser eu continuo usando a extensão “js”, até mesmo por� causa dos arquivos já existentes, porém a partir deste momento os arquivos que� uso através do Node.js eu uso a extensão “njs”.

Com essa convenção criada, fica mais fácil integrar ao� ambiente, pois bastará associar esta extensão ao Node.js, que o Windows� reconhecerá quando eu clicar 2x no arquivo NJS, ele executará usando o Node.js.� Para associar a extensão basta executar no console do windows (CMD), as duas linhas abaixo, prestando a� atenção para mudar o caminho do executável para onde você colocou o arquivo� original.

REG ADD “HKEY\_CURRENT\_USER\Software\Classes\joyent.node.js\shell\open\command” /ve /d “c:\node\node.exe %1″ /f

REG ADD “HKEY\_CURRENT\_USER\Software\Classes\.njs” /ve /d “joyent.node.js”

 

Uma vez feito isso, prontinho seus scripts estarão� executando no Windows perfeitamente.

Em breve, publicarei a segunda parte deste post� explicando como usar o Node.js como um servidor web.

 [1]: /wp-content/uploads/wscript.png
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
 [16]: /wp-content/uploads/download_node.js.png
 [17]: /wp-content/uploads/repl.png
 [18]: /wp-content/uploads/repl_vs2008.png
 [19]: /wp-content/uploads/node%20no%20console.png