---
author: Sidney Lima Filho
title: ' Como é versionado o SmartClient? '
excerpt:
layout: post
category:
  - Tech
tags:
  - Javascript
post_format: [ ]
---
O desenvolvimento de um plugin, ainda  
mais sendo Open Source, me trouxe muito feedback além de me permitir  
exercitar tudo que acredito em desenvolvimento de software, como testes  
unitários, code coverage, pair prog, além das caracteristicas inerentes ao produto  
que estou entregando, como deploy continuo, organização dos artefatos,  
comunicação e a fadada documentação, afinal isso é um plugin e todo plugin que  
se preza precisa de uma documentação atualizada para atender aos pesquisadores  
que utilizarão.

Para o  
desenvolvimento do SmartClient eu  
resolvi utilizar uma forma de publicação que já era utilizada por alguns  
produtos como o [NodeJS][1], que é  
publicar versões pares como estáveis e publicar versões impares instáveis.<o:p></o:p>

**Porque publicar versões instáveis?**

O ato de publicar algo, liberar  
para uso, colocar em produção, significa para a maioria das pessoas que a  
versão deve estar 100% funcionando, testada e aprovada, claro que nesse caso  
esperamos que a versão esteja “Estável”. Porém existe não somente o paradigma da  
estabilidade, mas também há o paradigma da compatibilidade, ou até mais, da  
retro-compatibilidade. Para dar uma reavivada no que significa isso segue  
abaixo o que isso significa para mim.<o:p></o:p>

A retro-compatibilidade é  
a capacidade de um artefato suportar o legado.<o:p></o:p>

O Windows é o melhor  
exemplo disso, quando a Microsoft lança um Windows novo, todo mundo espera que suporte  
todas as aplicações que você já possui correto? Mas e quando a Microsoft quer  
testar um novo conceito? Ou apenas acredita que alguma barreira tecnológica precisa  
ser rompida, no caso de 32-bit para 64-bit? Antes de colocar uma versão dessa disponível  
para o usuário final, ela disponibiliza para a comunidade de desenvolvedores,  
pois ainda está INSTÁVEL.<o:p></o:p>

**Como está planejada a publicação do SmartClient?**

O SmartClient está  
planejado para ser publicado assim também, só que para isso nomeio com números impares  
e pares. A versão inicial foi a 0.1 que era instável, afinal eu estava provando  
o conceito inicial. A versão 0.2 já era a versão do conceito estável, e assim  
está sendo.<o:p></o:p>



























| Versão<o:p></o:p> | Descrição<o:p></o:p>                                                                              |
||
| 0.1<o:p></o:p>    | Prova de Conceito – Instável<o:p></o:p>                                                           |
| 0.2<o:p></o:p>    | Prova de Conceito – Estável, corrigi bugs e tirei a  
mão<o:p></o:p>                              |
| 0.3<o:p></o:p>    | Adição de alguma coisa legal – Instável<o:p></o:p>                                                |
| 0.4<o:p></o:p>    | Adição de alguma coisa legal – Estável, disponível para  
correção de bugs<o:p></o:p>             |
| 0.5<o:p></o:p>    | Outra adição de funcionalidade – Instável, caso  
precise corrigir algo usar a tag 0.4<o:p></o:p> |
| 0.6<o:p></o:p>    | —–<o:p></o:p>                                                                                     |

<o:p> </o:p>

A tabela acima demonstra  
a forma de disponibilizar, porém a oficial do plugin você encontra aqui no  
[Roadmap][2].<o:p></o:p>

 [1]: http://nodejs.org/
 [2]: RoadMap,466.aspx