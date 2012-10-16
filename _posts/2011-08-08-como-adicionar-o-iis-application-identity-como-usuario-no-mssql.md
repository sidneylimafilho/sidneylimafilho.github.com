---
author: Sidney Lima Filho
title: >
  Como adicionar o IIS Application
  Identity como usuário no MSSQL
excerpt:
layout: post
category:
  - Tech
tags:
  - AppPool
  - IIS
  - MSSQL
post_format: [ ]
---
Ultimamente andei pesquisando como colocar o usuário default do IIS application pool. O IIS cria um usuário no servidor que fica oculto, este usuário é identificado como ApplicationPoolIdentity exatamente como a imagem abaixo.

![][1]

Então se este usuário é oculto, como podemos colocá-lo como usuário do SQL Server? Nas pesquisas descobri que este usuario se “identifica” para a base de dados como “IIS APPPOOL\[seu nome]“, então fica fácil. Errado a interface gráfica não acha/reconhece este usuário.� Logo só é possivel via SQL.

 

–

– Cria o usuário na base de dados

–

sp_grantlogin ‘IIS APPPOOL\DefaultAppPool’

–

– Associa o usuário com uma base de dados especifica

–

sp_grantdbaccess ‘IIS APPPOOL\DefaultAppPool’

 

 [1]: /wp-content/uploads/applicationpoolidentity.png