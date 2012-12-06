---
author: Sidney Lima Filho
title: Concatenação de Strings em Javascript
excerpt:
layout: post
published: false
tags:
  - Javascript
post_format: [ ]
---
## Porque você precisa entender?

A concatenação de strings é uma das tarefas que todo desenvolvedor realiza pelo menos algumas vezes por dia, então é de extrema importância entender tudo relacionado a este tema, desde a sua sintaxe, alternativas, performance, visão holistica e tudo mais que você possa colocar na sua caixa mental para resolver problemas de hoje e no futuro.

## Sintaxe

No Javascript há 2 formas de realizar concatenação de strings:

1.  Tradicional; Utilizando o operador + para acrescentar uma string a outra e com isso toda a regra matemática vai junto na concatenação. 
        var t = "codigo"+ "de" + "teste" + "de" + "concatenação" 
    
    O código a acima é avaliado pelo compilador Javascript para o seguinte:
    
        var tmp1 = "codigo" + "de";
        var tmp2 = tmp1 + "teste";
        var tmp3 = tmp2 + "de";
        var t = tmp3 + "concatenação"; 

2.  Array Join; Nesta forma de concatenação de strings, usamos a função join do objeto array para realizar a tarefa. 
        var t = ["codigo", "de", "teste", "de", "concatenação"].join(""); 
    
    No código acima, o uso de memória é mais reduzido, pois não há alocação de memória desnecessária para armazenar os passos intermediários</li> </ol> 
    ## Performance
    
    O objetivo de apresentar as duas formas é devido ao mundo multicompilador em que vivemos com relação ao Javascript, pois em todas as outras linguagens geralmente utilizamos apenas um compilador para nosso código, porém com o desenvolvimento web tudo é um pouco mais complicado, pois cada browser implementa seu compilador de forma diferente, então o algoritmo de concatenação do Chrome (V8) é bem diferente do Firefox (SpiderMonkey), que por sua vez é bem diferente do IE (JScript).
    
    Nos browsers modernos como Chrome, Firefox, etc, o algoritmo de concatenação de strings usando a forma tradicional (operador +) já está bem maduro e otimizado, porém no IE 6 e 7, o algoritmo Array Join chega a ser 60x mais eficiente do que o tradicional.
    
    **Referencias:  
    **[Re: String concatenation” – email by Brendan Eich stating that + is faster on modern JavaScript engines.][1]

 [1]: http://www.mail-archive.com/es-discuss@mozilla.org/msg10125.html