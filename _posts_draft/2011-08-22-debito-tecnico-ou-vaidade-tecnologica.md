---
author: Sidney Lima Filho
title: >
  D�bito T�cnico ou Vaidade
  Tecnol�gica?
excerpt:
layout: post
published: false
tags:
  - Agile
  - D�bito T�cnico
post_format: [ ]
---
O assunto d�bito t�cnico � muito extenso, h� in�meras refer�ncias na internet e n�o pretendo, neste post, me alongar no assunto, explicando  detalhadamente o que ele �, vou apenas fazer uma introdu��o e em seguida entro no assunto do  
post.

D�bito t�cnico � uma met�fora criada por Ward Cunningham para nos ajudar a entender o problema que � criado quando adicionamos c�digo a um sistema para resolver um problema pontual e com o efeito colateral de denegrir o design. Mas o que � interessante no assunto � a inflexibilidade que muitas pessoas tem com o termo e sua aplica��o, pois acreditam que o d�bito �  
uma forma elegante de chamar a gambiarra que � feita no c�digo. Para entender melhor o assunto olhem no blog do [Mestre dos Magos][1]

O c�digo assim como qualquer idioma � um texto que usamos para comunica��o, para transmitir conhecimento e delegar tarefas (no caso de software, delegar para o computador executar), ent�o quando falamos em d�bito t�cnico estamos dizendo que existem textos mal escritos, n�o em quest�o de sintaxe, pois assim como o Word checa a ortografia e semntica dos nossos textos, o compilador checa qualquer erro de digita��o e sintaxe, al�m de aperfei�oar sua sa�da em c�digo de maquina.

![][2]

*Figura 1: Exemplo de d�bito no Word*

Por�m todo texto, e este post n�o se exclui disso, pode estar perfeitamente escrito, com uma p�ssima reda��o e comunica��o, assim qualquer um que ler este post, pode ter in�meras interpreta��es. A dubiedade de significados, quebra de padr�es, desenquadramento do projeto inicial, s�o formas de d�bito t�cnico.

Importante neste momento n�o confundir com c�digo legado, pois c�digo legado pode ser tanto um c�digo que � obsoleto, mas totalmente coerente, como pode ser um c�digo atual sem testes como Michael Feathers indica no [seu livro][3].

**Como identificar um d�bito t�cnico?**

Neste ponto j� entendemos o que � deve ser um d�bito t�cnico, por�m como identificamos um? Ser� um IF mal colocado? Ser� o uso de acesso a banco de dados numa rotina? O d�bito pode ser qualquer coisa que VIOLE o principio do projeto. Se uma rotina foi projetada para realizar sua tarefa sem acesso a base de dados e voc� coloca, ent�o voc� adicionou um d�bito, � s vezes o d�bito at� se mascara como um design pattern, quando voc� adiciona uma estrutura de invers�o de controle apenas para acessar um recurso inacess�vel ou que possui uma referencia circular no projeto.

O d�bito como diria o ��Uncle Bob�� (e concordo com ele) [nem todo c�digo feito por desenvolvedores iniciantes � necessariamente um c�digo ruim][4], o termo d�bito deve ser reservado somente para casos onde premeditadamente � empregada uma estrat�gia de design que n�o � sustent�vel, mas que tenha benef�cios de Curto prazo, como realizar uma publica��o, remover o impeditivo para o desenvolvimento de um Case Story, etc.

Outro ponto a ser levado em considera��o � que o trabalhador do conhecimento aprende TODOS OS DIAS com sua atividade e este aprendizado o leva a compreender melhor o dom�nio, a entender melhor o projeto inicial, alem de permitir tomar melhores decis�es com rela��o ao design futuro. Assim sendo, com o aprendizado cont�nuo, aquilo que foi um bom design no come�o do projeto se mostra totalmente limitador para a sua evolu��o, pode se tornar um d�bito tamb�m.

O termo d�bito t�cnico foi criado para exemplificar para pessoas n�o-t�cnicas um padr�o que ocorre no dia-a-dia do trabalhador do conhecimento, inicialmente apenas com o prop�sito de facilitar a comunica��o com um agente externo sobre coisas que impactam naquilo que lhes interessam como prazo e custos.

O importante para um desenvolvedor de software � se preocupar TODOS OS DIAS no desenvolvimento � diminuir ou at� mesmo eliminar todos os d�bitos que existam no software a ser constru�do, por�m lembrando sempre que: Nem todo c�digo legado � d�bito; nem todo c�digo velho � d�bito; nem todo c�digo sem teses � debito; nem todo c�digo feito em tecnologia obsoleta precisa  
ser reescrito;

Alguns links interessantes:

*   [Hard Choices][5], um jogo criado pela renomada [SEI][6] para exemplificar os desafios com rela��o ao d�bito t�cnico;
*   Um [quadrante][7] criado pelo [Mestre dos Magos][8], para orientar quais d�bitos s�o bons e quais s�o ruins;
*   [Artigo do Robert Martin][4], sobre o que � debito t�cnico;

 [1]: http://martinfowler.com/bliki/TechnicalDebt.html
 [2]: /wp-content/uploads/exemplo%20d%C3%A9bito%20t%C3%A9cnico%20no%20word.png
 [3]: http://www.amazon.ca/Working-Effectively-Legacy-Michael-Feathers/dp/0131177052
 [4]: http://blog.objectmentor.com/articles/2009/09/22/a-mess-is-not-a-technical-debt
 [5]: http://www.sei.cmu.edu/architecture/tools/hardchoices/download.cfm
 [6]: http://www.sei.cmu.edu/
 [7]: http://martinfowler.com/bliki/TechnicalDebtQuadrant.html
 [8]: http://martinfowler.com/