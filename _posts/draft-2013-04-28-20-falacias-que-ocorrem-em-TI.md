---
layout:     post

title:      '20 falácias que ocorrem em TI'
author:     Sidney Lima Filho
image:      /post/20-falacias-que-ocorrem-em-TI/capa.jpg

excerpt:    > 
            Programação Funcional, você realmente sabe isso?

published:  false
categories: post
tags:       [Desenvolvimento, Código, Programação Funcional, Linguagens]
---

Programação Funcional, você realmente sabe isso?

Este titulo é bem claro, você realmente sabe programação funcional? Está havendo um boom de programação funcional, as linguagens estão incorporando caracteristicas funcionais, porém você entende a mudança de pensamento na hora de desenvolver? Você sabe a diferença entre uma função pura e uma impura? Como diferenciar a programação imperativa da declarativa? Você está fazendo programação funcional ou lógica?

Quando você desenvolve um paradigma funcional em linguagens não funcionais ou hibridas muitas aventuras podem acontecer, códigos extraterrestres podem aparecer ou uma complexidade desnecessária pode surgir aos poucos de acordo você vai evoluindo o código e isso pode ser muito ruim. Olha este [código aqui muito bem escrito em Java, porém perceba que o paradigma funcional se tornou um inimigo][1]. 

Para começar essa conversa, primeiro temos que deixar claro que ser funcional ou não, é o que menos importa, o que realmente importa é o paradigma de pensamento que guiará o raciocínio durante o desenvolvimento. Se você pegar uma linguagem criada para o pensamento orientado a objetos e começar a desenvolver funcionalmente, poderá cometer inúmeros equívocos sem perceber. A recíproca também é verdadeira, se começa a desenvolver orientado a objetos numa linguagem construída para ser funcional, você começará a sentir os limites impondo um “design” diferente e de repente como num passe de mágica você estará gerando o Ronaldinho Gaúcho, funciona e até impressiona, mas é feio que dói.

O objetivo principal deste artigo inaugural é começar apresentar aspectos da programação que são desconhecidos por muitas pessoas, apresentar algumas armadilhas e por fim focar na programação funcional, propriamente dita, usando a linguagem Javascript, que é conhecida por muitos, tem uma sintaxe muito legivel para a maioria dos programadores, além de ser uma linguagem extremamente rica e completa, para os parâmetros funcionais. Vamos passar também rapidamente pelos [paradigmas de programação][2] para depois explorarmos um paradigma especifico utilizando o framework [Node.js][3], para todos os exemplos.


Os multi-facetados paradigmas de programação estão presentes no nosso dia-a-dia, muitas vezes os empregamos sem perceber, por exemplo: 
Quando escrevemos regras de negócio geralmente estamos empregando uma [programação lógica][4];

*   Quando codificamos o relacionamento entre os atores no sistema empregamos uma [programação orientada a objetos][5];
*   Quando escrevemos o roteiro de testes e os codificamos, estamos praticando uma [programação declarativa][6];
*   Quando desenvolvemos uma animação na interface, aplicando algum efeito, estamos escrevendo código [puramente funcional][7];

O mais importante neste ponto é entender que não existe um paradigma melhor que o outro, apenas abordagens distintas para situações distintas, assim nós desenvolvedores precisamos entender, que as ferramentas disponíveis sempre tem sua utilidade, cabe a nós ficarmos atentos aos problemas, para que apliquemos as soluções de forma parcimoniosa e com segurança.

>   A programming language can support multiple paradigms. For example, programs written in C++ or Object Pascal can be purely procedural, or purely object-oriented, or contain elements of both paradigms. Software designers and programmers decide how to use those paradigm elements.


[1]:    http://blog.caelum.com.br/um-toque-de-programacao-funcional-em-java/
[2]:    http://en.wikipedia.org/wiki/List_of_multi-paradigm_programming_languages#Paradigm_summaries
[3]:    http://nodejs.org/
[4]:    http://en.wikipedia.org/wiki/Logic_programming
[5]:    http://en.wikipedia.org/wiki/Object-oriented_programming
[6]:    http://en.wikipedia.org/wiki/Declarative_programming
[7]:    http://en.wikipedia.org/wiki/Functional_programming