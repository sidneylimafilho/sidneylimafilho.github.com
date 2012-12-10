---
author: Sidney Lima Filho
title: >
  Débito Técnico ou Vaidade
  Tecnológica?
excerpt:
layout: post
published: false
tags:
  - Agile
  - Débito Técnico
post_format: [ ]
---
O assunto débito técnico é muito extenso, há inúmeras referências na internet e não pretendo, neste post, me alongar no assunto, explicando  detalhadamente o que ele é, vou apenas fazer uma introdução e em seguida entro no assunto do  
post.

Débito técnico é uma metáfora criada por Ward Cunningham para nos ajudar a entender o problema que é criado quando adicionamos código a um sistema para resolver um problema pontual e com o efeito colateral de denegrir o design. Mas o que é interessante no assunto é a inflexibilidade que muitas pessoas tem com o termo e sua aplicação, pois acreditam que o débito é  
uma forma elegante de chamar a gambiarra que é feita no código. Para entender melhor o assunto olhem no blog do [Mestre dos Magos][1]

O código assim como qualquer idioma é um texto que usamos para comunicação, para transmitir conhecimento e delegar tarefas (no caso de software, delegar para o computador executar), então quando falamos em débito técnico estamos dizendo que existem textos mal escritos, não em questão de sintaxe, pois assim como o Word checa a ortografia e semntica dos nossos textos, o compilador checa qualquer erro de digitação e sintaxe, além de aperfeiçoar sua saída em código de maquina.

![][2]

*Figura 1: Exemplo de débito no Word*

Porém todo texto, e este post não se exclui disso, pode estar perfeitamente escrito, com uma péssima redação e comunicação, assim qualquer um que ler este post, pode ter inúmeras interpretações. A dubiedade de significados, quebra de padrões, desenquadramento do projeto inicial, são formas de débito técnico.

Importante neste momento não confundir com código legado, pois código legado pode ser tanto um código que é obsoleto, mas totalmente coerente, como pode ser um código atual sem testes como Michael Feathers indica no [seu livro][3].

**Como identificar um débito técnico?**

Neste ponto já entendemos o que é deve ser um débito técnico, porém como identificamos um? Será um IF mal colocado? Será o uso de acesso a banco de dados numa rotina? O débito pode ser qualquer coisa que VIOLE o principio do projeto. Se uma rotina foi projetada para realizar sua tarefa sem acesso a base de dados e você coloca, então você adicionou um débito, Ã s vezes o débito até se mascara como um design pattern, quando você adiciona uma estrutura de inversão de controle apenas para acessar um recurso inacessível ou que possui uma referencia circular no projeto.

O débito como diria o €œUncle Bob€ (e concordo com ele) [nem todo código feito por desenvolvedores iniciantes é necessariamente um código ruim][4], o termo débito deve ser reservado somente para casos onde premeditadamente é empregada uma estratégia de design que não é sustentável, mas que tenha benefícios de Curto prazo, como realizar uma publicação, remover o impeditivo para o desenvolvimento de um Case Story, etc.

Outro ponto a ser levado em consideração é que o trabalhador do conhecimento aprende TODOS OS DIAS com sua atividade e este aprendizado o leva a compreender melhor o domínio, a entender melhor o projeto inicial, alem de permitir tomar melhores decisões com relação ao design futuro. Assim sendo, com o aprendizado contínuo, aquilo que foi um bom design no começo do projeto se mostra totalmente limitador para a sua evolução, pode se tornar um débito também.

O termo débito técnico foi criado para exemplificar para pessoas não-técnicas um padrão que ocorre no dia-a-dia do trabalhador do conhecimento, inicialmente apenas com o propósito de facilitar a comunicação com um agente externo sobre coisas que impactam naquilo que lhes interessam como prazo e custos.

O importante para um desenvolvedor de software é se preocupar TODOS OS DIAS no desenvolvimento é diminuir ou até mesmo eliminar todos os débitos que existam no software a ser construído, porém lembrando sempre que: Nem todo código legado é débito; nem todo código velho é débito; nem todo código sem teses é debito; nem todo código feito em tecnologia obsoleta precisa  
ser reescrito;

Alguns links interessantes:

*   [Hard Choices][5], um jogo criado pela renomada [SEI][6] para exemplificar os desafios com relação ao débito técnico;
*   Um [quadrante][7] criado pelo [Mestre dos Magos][8], para orientar quais débitos são bons e quais são ruins;
*   [Artigo do Robert Martin][4], sobre o que é debito técnico;

 [1]: http://martinfowler.com/bliki/TechnicalDebt.html
 [2]: /wp-content/uploads/exemplo%20d%C3%A9bito%20t%C3%A9cnico%20no%20word.png
 [3]: http://www.amazon.ca/Working-Effectively-Legacy-Michael-Feathers/dp/0131177052
 [4]: http://blog.objectmentor.com/articles/2009/09/22/a-mess-is-not-a-technical-debt
 [5]: http://www.sei.cmu.edu/architecture/tools/hardchoices/download.cfm
 [6]: http://www.sei.cmu.edu/
 [7]: http://martinfowler.com/bliki/TechnicalDebtQuadrant.html
 [8]: http://martinfowler.com/