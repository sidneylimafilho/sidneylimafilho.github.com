---
author: Sidney Lima Filho
title: >
  Como adicionar o IIS Application
  Identity como usu�rio no MSSQL
excerpt:
layout: post
published: false
tags:
  - AppPool
  - IIS
  - MSSQL
post_format: [ ]
---
Ultimamente andei pesquisando como colocar o usu�rio default do IIS application pool. O IIS cria um usu�rio no servidor que fica oculto, este usu�rio � identificado como ApplicationPoolIdentity exatamente como a imagem abaixo.

![][1]

Ent�o se este usu�rio � oculto, como podemos coloc�-lo como usu�rio do SQL Server? Nas pesquisas descobri que este usuario se ��identifica�� para a base de dados como ��IIS APPPOOL\[seu nome]��, ent�o fica f�cil. Errado a interface gr�fica n�o acha/reconhece este usu�rio. Logo s� � possivel via SQL.

�

��

�� Cria o usu�rio na base de dados

��

sp_grantlogin ��IIS APPPOOL\DefaultAppPool��

��

�� Associa o usu�rio com uma base de dados especifica

��

sp_grantdbaccess ��IIS APPPOOL\DefaultAppPool��

�

 [1]: /wp-content/uploads/applicationpoolidentity.png