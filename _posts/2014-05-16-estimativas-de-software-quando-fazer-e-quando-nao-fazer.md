---
layout:     post

title:      'Estimativas de software: Quando fazer? e quando não fazer?'
author:     Sidney Lima Filho
image:      /post/estimativas-de-software-quando-fazer-e-quando-nao-fazer/capa.jpg

excerpt:    > 
            Estimativas quase sempre falha ponto, mas mesmo assim (e sabendo disso) os usuários/clientes precisam para planejamento de outras atividades e agora? Como faz?

published:  true
categories: post
tags:       [Estimativas, Prazo, Teoria Geral dos Sistemas, Sistemas de Informação, Entropia da informação, Teoria do Sistemas Complexos, Cynefin, Carreira, Cliente, Processos, Produtividade, Psicologia, Comando e Controle, NoEstimates, Peopleware]
---

## Uma breve história sobre estimativas

Eu recentemente tive um compromisso onde era importante usar uma roupa mais formal, então resolvi tirar meu terno empoeirado do armário e descubro para minha infelicidade que engordei tanto que o dito cujo não cabe mais em mim, então com raiva e desesperado vou ao shopping comprar um terno novo.

Após escolher um lindo terno, que gostei muito, eu precisava fazer bainha da calça então como eu tinha um compromisso essa data era um fator determinante, então veio à pergunta fatídica: Vocês me entregam quando? Vocês podem fazer a bainha para amanhã? O vendedor faz aquela cara de desenvolvedor júnior motivado e fala sem titubear, claro fazemos sim, nos esforçaremos para entregar amanhã, 3a feira, ou no máximo até 4a, então percebi que só pelo fato de imediatamente negociar data (coisa que eu também faço todos os dias) sabia que vai cair na fila de algum costureiro (ou seja, vai virar post-it no quadro branco de algum costureiro), mas com esta informação percebi que preciso de atendimento just-in-time, então agradeci ao vendedor e levei a uma loja de serviços de costura.

A minha escolha foi acertada e como podemos ver estimativas é uma ferramenta de tomada de decisão, nem de longe quero comparar a complexidade de fazer software com a simples costura da bainha (que ainda sim pode ser comparada, pois estamos falando de pessoas e sistemas de produção, logo nada mais é simples :P), semelhante a este caso posso enumerar vários outros onde a estimativa será determinante para uma tomada de decisão e isso também vai acontecer com software. 

**Estimativas não são um problema de desenvolvimento de software, mas uma ferramenta que a sociedade usa para tomada de decisão, o erro está em acreditar que estimativa é preciso, se fosse preciso não era estimativa, era certeza.**

A frase acima nos mostra que a pergunta deixa de ser "se devemos fazer estimativa ou não" (como vimos **ÀS VEZES** é necessária), mas qual nível de confiança e transparência passamos ao realizar estimativas. 

## Qual a base do meu raciocínio?

O [Manifesto Ágil][MA]{:target=_blank}, [MA]{:target=_blank} para os íntimos, claro. Raciocine comigo:

**[Colaboração com o Cliente:][MA]{:target=_blank}** A estimativa é um protocolo de comunicação que pode determinar a próxima etapa no sistema humano de atividades, logo devemos colaborar constantemente com o cliente para garantir que qualquer variação da estimativa inicial ele esteja ciente e sejamos transparentes.

O erro fatal aqui é a mania de alguns desenvolvedores com largo histórico de criticas, cansado de tomar porrada do chefe de atrasos errados, ou que gosta de sempre entregar antes, querem mostrar que são responsáveis, com discurso de não iludir o cliente, então dão uma estimativa irreal, dizendo que algo trivial de fazer, demora 2 anos e meio. O efeito pernicioso é que o cliente aos poucos para de acreditar na sua estimativa e passa a usar o chicote, a porrada, ameaça, ação judicial, coerção, tudo para que fique pronto logo. Bye Bye Agilidade.

O lado oposto é também alguns desenvolvedores com ego muito algo, ou se acharem fod@, querem mostrar como são rápidos, como são diferenciados e dão uma estimativa ridiculamente baixa para algo complexo, dizendo que para desenvolver um projeto inteiro de construção de viadutos só leva 4 horas.

## A natureza do software

Vamos pegar um objeto simples como um copo de água. O copo de água é composto de átomos de silício que são derretidos e modelados formando o copo e átomos de água despejados no seu interior. Os átomos do copo de água formam um sistema.

O copo é uma coisa estática, não muda, mas a água muda, sua natureza em estado líquido faz com que as moléculas se movimentem e criam fluidez, ou seja um comportamento dinâmico e complexo, se adaptando ao ambiente externo (copo). As moléculas de água formam um sistema complexo adaptável.

O desenvolvimento de software consiste em construir uma rotina que será executada e manipulará dados de entrada para extrair os dados de saída desejados, logo a cada troca de informações realizada por seres humanos na definição dessa rotina é como a água dentro do copo, cada informação é como uma molécula de água que precisa se ajustar com as outras moléculas para se moldar no formato do copo.

Caso troquemos a água para um copo de outro formato, as moléculas de água interagem e se moldam ao novo copo. Igualmente é o desenvolvimento de software, humanos trocam as informações entre si para desenhar o novo software.

O software tem uma característica inerente, talvez até um efeito colateral, que ao resolver um problema do usuário, automaticamente expõe novos cenários de uso, novos problemas, novos desafios a serem superados, geralmente faz o ambiente do usuário precisar de novas informações, que se reflete em melhorias do software atual, solicitações de alteração, evolução e etc, por isso as pessoas acham que o software é [perecivel][sw-estragado]{:target=_blank}.

**Tanto o processo de fazer o software, quando o software em si possuem a mesma natureza complexa e de adaptabilidade.**

## Estimativa e Software

Complexo é tudo aquilo que (depende do/usa o) estado anterior para determinar o próximo estado, com isso toda tentativa de determinar prazos está sujeita a falhar, pois a entrada de novas informações é constante, com isso o "estado anterior" nunca é fixo, logo fica muito difícil determinar o próximo estado.

O que toda essa história tem haver com estimativas? Vamos seguindo.

Imagina que você tem em suas mãos o escopo de uma pequena funcionalidade de software, portanto você como desenvolvedor experiente pode facilmente estimar um tempo médio para seu desenvolvimento, mas o que você não sabe (e o usuário também não) é que há informações faltando e que você só descobrirá assim que o usuário começar a usar o que você fez, neste momento o usuário irá demandar mais alterações, considerará que não foi terminado e dirá que a estimativa estava furada.

### Vamos fechar o escopo

O famoso escopo fechado é uma tentativa de impedir a entrada de novas informações num processo de desenvolvimento de software que aumenta a [entropia][entropia]{:target=_blank}, a contra partida de fechar o escopo é que impede aperfeiçoar, melhorar, aumentar o valor agregado do resultado final.

### E se estimar a menor parte do software e depois somar tudo?

Em muitos casos (e isso é MUITO COMUM) não é possível estimar precisamente, mesmo a menor parte de um software, pois se houver algum desafio técnico em que o desenvolvedor enfrente dificuldades então sua estimativa falhará, vivemos cercados de novas tecnologias e a todo o momento não possuímos domínio completo de algum artefato de software, e para piorar outra característica do software é que no momento da sua construção aprendemos mais sobre as tecnologias e o negócio envolvido, portanto mais informações aparecem que pode influenciar no resultado final.

Uma das disciplinas de análise de sistemas é sobre acoplamento e coesão, quando você começa a juntar as partes prontas você aumenta o nível de acoplamento do sistema, com isso é necessário validar se as partes ao serem juntadas não afeta o todo, pois geralmente 2 + 2 pode ser igual a 10, apenas pelo fato da sinergia entre as partes potencializar o todo. Quando isso acontece estamos retirando [entropia da informação][entropia]{:target=_blank} no software, agora há conhecimento sobre o primeiro 2, o segundo 2 e qual é o fator potencializador.

**[Responder as mudanças:][MA]{:target=_blank}** A estimativa não impede responder as mudanças, inclusive ajuda, pois ao se deparar com este cenário, quebramos o escopo em Casos de Uso, Requisitos, Especificação Funcional, etc, e estimamos as partes assim caso alguma nova informação apareça, o cliente pode decidir melhor. (Olha a tomada de decisão aí novamente)

### Quando estimar?

Você deve estimar sempre quando for crucial para tomar decisões importantes para o projeto, se for possivel tomar a decisão sem a estimativa então faça, mas se não for possivel então estime.

Abaixo está algus guidelines que uso quando preciso estimar algo, por exemplo:

+   Quase sempre estimativas são desperdicio, busque eliminá-las o tempo todo.
+   Na menor unidade possivel: 
    -   Nunca uso Mes e Semana, 
    -   Se algo demora poucos Dias ou Horas então imediatamente questiono a utilidade do usuário saber já que é pouco tempo;
    -   A percepção emocional é que 30 dias eleva mais tempo que 1 mês;
+   Se algo passa de 20 dias de estimativa, a chance de falhar é muito grande, então busque quebrar a funcionalidade e partes funcionais testáveis e entregáveis, para obter feedback do usuário o mais rápido possivel;
+   Tenha sempre em mente: "Eu sou o profissional experiente e você precisa confiar em mim", tudo é uma relação de confiança e sua meta para eliminar as estimativas do processo é aumentar drasticamente a confiança do usuário na qualidade da sua entrega;
+   Quando se trabalha com Projetos, estimativas são inevitáveis, portanto seja responsável, estime com competência e nos minimos detalhes, calcule sua margem de folga para que nem seja grande demais, significando equipe defasada, obsoleta e/ou incompetência; e nem pequena demais, que significa amadorismo e/ou inexperiência com projetos do mesmo porte;

### Quando não estimar?

<img src="estimativa-chute.jpg"  style="float:right; margin: 0px 0px 20px 20px;" />

Você não deve estimar quando não tiver seguro que o usuário sabe exatamente o que receberá, por mais que você possa saber o que vai fazer, enquanto o usuário não demonstrar ciencia no que vai receber, estimar é como um surdo jogar dardos no escuro.

+   Quando a definição de pronto não estiver clara para ambas partes;
+   O usuário está ciente da definição de pronto mas não concorda com ela;
+   Quando você não sabe exatamente quais impactos de negócio e/ou tecnológicos estão envolvidos;
+   Quando os membros do time não concordam com a definição de pronto;
+   Quando os membros do time não concordam com a previsão de esforço necessário;
+   Quando se trabalha com Produtos, estimativas geralmente são desperdicio, evite ao máximo, quem determina o que fica pronto e quando é você, então não é necessário fazer decisões ruins devido ao fator tempo, faça o que precisa ser feito e faça bem feito.

Lembre-se, sua meta é fazer o cliente enxergar que estimar é um procedimento de alto risco para você, portanto será necessário toda essa analise prévia, então ele precisa realmente ter certeza se ainda vale a pena. A sua parte é dar feedback constante de que se o cliente aumentar a relação de confiança o time vai entregar mais valor e com maior liberdade dele decidir o rumo do desenvolvimento a qualquer momento, afinal existem outras formas mais eficientes (e baratas) de fazer software;

Alguns materiais para estudar sobre quando ou como estimar projetos de software:

+   Livro em PDF da Thoughtworks: [How do you estimate on an Agile project][TWPDF]{:target=_blank}
+   Livro do Steve McConnell: [Software Estimation: Demystifying the Black Art (Developer Best Practices)][SteveMcConnell]{:target=_blank}
    - Explica os problemas de feedback e objetivo principal das estimativas
+   Livro do Tom Demarco: [Peopleware][Peopleware]{:target=_blank}
    - Explica os ganhos de não estimar e o porque buscar não fazer


## Estimar não é o problema


Os Gerentes de Projetos <strike>Ágeis</strike> sensatos dizem que não tem problema o escopo mudar e que basta se comunicar que tudo dá certo, então o PMP atualiza seu Gráfico de Gantt e apresenta ao cliente o novo prazo final.

Não é bem assim. Não basta apenas mudar a estimativa, precisamos eliminar a carga de stress que sempre é vinculada numa estimativa, pois quanto menor o stress mais produtivo é a equipe.

<img src="pressao.jpg"  style="float:right; margin: 0px 0px 20px 20px;" />

O maior inimigo da estimativa é a produtividade, pois sempre quanto uma estimativa é necessária, a reação imediata do envolvido direto na produção é buscar mais prazo possível, pois ninguém quer trabalhar sob pressão, principalmente os trabalhadores do conhecimento que usam o cérebro como ferramenta, logo adicionar um fator de stress é como pedir para um pedreiro trabalhar com um peso de 20 kg em cada braço. 

Se um amigo perguntasse quanto tempo você leva para organizar uns poucos papeis, você pode estimar um trabalho de aproximadamente 1 hora. Agora se um cliente te perguntar quanto tempo você leva para organizar uns poucos papéis e caso você não termine a tempo há uma multa de 10 mil reais, quanto tempo você diria? 4 horas? 1 semana?

**Risco:** Quanto maior o prejuízo no caso de falha na estimativa, mais prazo será pedido.

Isso é um círculo vicioso, pois quanto mais rígida forem as retaliações por atraso, mais cheia de gordura estará a estimativa e mais ineficiência estará no processo.

 
## Estimativa como ferramenta de comando e controle

<img src="estimativa2.jpg"  style="float:right; margin: 0px 0px 20px 20px;" />

A estimativa numa via contrária, pode ser usada como ferramenta de controle, onde o cliente mesmo não precisando da estimativa, ainda sim pede apenas pela sensação de controle. Isso é muito comum no ambiente corporativo, onde os clientes são os chefes, usam e abusam das estimativas, para tentar obter uma melhor performance dos colaboradores, sendo que na verdade ocorre o contrário.

O desenvolvimento de software é um processo criativo e todo processo criativo não é linear.

Toda atividade onde o valor está na velocidade então não exige criatividade. Toda relação onde o valor está no cumprimento de metas então a criatividade pode ser o fator potencializador.

O valor do software não está em ser entregue antes, mas fazer aquilo que o usuário final espera que ele faça.

As consultorias, fábricas de software, empresas que vendem desenvolvimento de software geralmente enxergam a velocidade como valor para o negócio (para o cliente o que importa é o resultado final, num prazo justo), pois tem a premissa que se aumentar a velocidade da equipe, então a mesma equipe pode fazer mais software e no fim do mês pagar o mesmo salário. Basta repararmos que empresas que vendem profissional alocado (body shop), nem se importam com estimativas, prazo, pois o cliente vai pagar pelo tempo e não pelo resultado, já vi empresas de consultoria até retardando a entrega do trabalho, só para receber mais.

**[Software funcionando:][MA]{:target=_blank}** O ideal é entregar para o cliente, pequenas partes do software funcionando, o tempo todo, assim ele mesmo pode priorizar o que quer receber antes ou depois, dessa forma maximiza o valor para o cliente, maximiza o tempo da equipe fazendo apenas o que importa e todos ganham.

## O que é o Movimento #NoEstimates?

O movimento #NoEstimates é uma idéia que vem ganhando grande apelo, liderado por profissionais reconhecidamente competentes como Joshua Kerievsky, [Woody Zuill][WoodyZuill]{:target=_blank} e [Neil Killick][NeilKillick]{:target=_blank}

### Argumentos contra
<img src="noestimates-money.jpg"  style="float:right; margin: 0px 0px 20px 20px;" />


## Base científica

Para ter certeza que não estava tirando conclusões baseado em achismos, estudei também o lado acadêmico para chegar à conclusão que escrevi aqui, mas também não queria ficar explicando cada teoria senão esse post viraria um TCC, artigo científico, sei lá. :-)

Para quem se interessar em entender em como cheguei a conclusão acima, vale a pena muito estudar os seguintes temas: [Teoria Geral dos Sistemas][TGS]{:target=_blank}, [Sistemas de Informação][SI]{:target=_blank}, [Entropia da informação][entropia]{:target=_blank}, [Teoria do Sistemas Complexos][complexsystem]{:target=_blank}, [Cynefin][cynefin]{:target=_blank}

Existe também um material muito rico na internet com várias pessoas experientes expressando sua opinião que vale a pena 


[MA]:               http://agilemanifesto.org/
[entropia]:         http://pt.wikipedia.org/wiki/Entropia_da_informa%C3%A7%C3%A3o
[TGS]:              http://pt.wikipedia.org/wiki/Teoria_geral_de_sistemas
[cynefin]:          http://en.wikipedia.org/wiki/Cynefin
[complexsystem]:    http://en.wikipedia.org/wiki/Complex_system
[Complexity]:       http://en.wikipedia.org/wiki/Complexity
[SI]:               http://pt.wikipedia.org/wiki/Sistema_de_informa%C3%A7%C3%A3o
[sw-estragado]:     http://www.reclameaqui.com.br/4372136/dentalis-software/software-com-prazo-de-validade/
[PurposeEstimation]:http://martinfowler.com/bliki/PurposeOfEstimation.html
[TWPDF]:            http://info.thoughtworks.com/how-do-you-estimate-on-an-Agile-project.html
[SteveMcConnell]:   http://www.amazon.com/gp/product/0735605351?ie=UTF8&tag=gigamonkeys-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=0735605351
[Peopleware]:       http://sidneylimafilho.com.br/post/resenha-peopleware/
[Klaus]:            https://twitter.com/klauswuestefeld
[KlausVideo]:       http//www.youtube.com/embed/eCXqCHBirng?rel=0
[WoodyZuill]:       http://zuill.us/WoodyZuill/
[NeilKillick]:      http://neilkillick.com/