---
author: Sidney Lima Filho
title: >
  JQuery não funciona no Console do
  Chrome
excerpt:
layout: post
published: false
tags:
  - Javascript
  - jQuery
post_format: [ ]
---
Um projeto surgiu aqui no trabalho que  
me levou a trabalhar com JavaScript que é uma linguagem que sou apaixonado e  
sempre fui, eu era tão apaixonado por JavaScript que na época em que eu  
trabalhava com ASP Clássico eu preferia usar JScript, precisava de algum  
comando mais avançado do batch, partia para JScript como Scripting no Windows,  
enfim sempre gostei da maneira dinâmica de lidar com as coisas, até escrever  
coisas bizarras eu gostava de escrever tamanho era a paixão por essa  
tecnologia.<o:p></o:p>

<o:p> </o:p>

No projeto houve a oportunidade de utilizar uma  
biblioteca que escrevi um tempo chamada SmartClient, essa biblioteca permite  
você trabalhar com o código HTML, adicionando comportamentos JavaScript ao seu  
código de maneira declarativa, podendo ao mesmo tempo programar também. <o:p></o:p>

<o:p> </o:p>

Então havia um código que um membro da equipe  
escreveu que as vezes funcionava e as vezes não, sem ninguém mudar uma linha de  
código, sequer. Este comportamento não é tão estranho quando falamos de  
JavaScript pois isso pode acontecer de acordo com o carregamento da página e a  
forma como se escreve o JavaScript.<o:p></o:p>

<o:p> </o:p>

Se escrevermos o JavaScript igual a forma abaixo o  
código será interpretado imediatamente ao ser carregado.<o:p></o:p>

<o:p> </o:p>

function Teste() {  
    $(“div”).each(function(){});  
}<o:p></o:p>

<o:p> </o:p>

Caso essa função seja executada antes de carregar a  
biblioteca do JQuery, ela deveria não executar certo? Errado se o navegador for  
o Chrome e chamar essa função no console.<o:p></o:p>

<o:p> </o:p>

O Chrome na sua interface de console implementa uma  
função na variável $ igual o exemplo abaixo.<o:p></o:p>

<o:p> </o:p>

$ = function () {  
    return document.getElementById.apply(document, arguments)  
}<o:p></o:p>

<o:p> </o:p>

<o:p>Repare na imagem abaixo, na parte de Watch, a variável $ é undefined, mas no console já há uma variável $ pronta para ser acionada, começo de uma aventura no debugging.</o:p>

<o:p>  
</o:p>

<o:p>![][1]</o:p>



Como toda variável array no Javascript irá possuir uma  
função each, então tanto com essa segunda versão da variável $, quanto com  
JQuery irão funcionar, mas começará comportamentos bizarros que dificultarão e  
muito seu processo de descobrir o que está de errado com seu código.

Então quando for debuggar seu código javascript no console  
do Chrome, lembre-se que há esse workaround.

[![][3]</img>][3] [![][4]</img>][4] [![][5]</img>][5] 

![][5]

 [1]: http://vivina.com.br/Site/1/files/blog/bugjquerychrome.jpg
 []: http://feeds.feedburner.com/~ff/vivina?a=tM8h6lJEhYY:3u-ng-drfbc:yIl2AUoC8zA
 []: http://feeds.feedburner.com/~ff/vivina?a=tM8h6lJEhYY:3u-ng-drfbc:qj6IDK7rITs
 []: http://feeds.feedburner.com/~ff/vivina?a=tM8h6lJEhYY:3u-ng-drfbc:63t7Ie-LG7Y
 [5]: http://feeds.feedburner.com/~r/vivina/~4/tM8h6lJEhYY