---
author: Sidney Lima Filho
title: Compilando um WebSite com MsBuild
excerpt:
layout: post
category:
  - Tech
tags:
  - Continuous Integration
  - MsBuild
post_format: [ ]
---
Olá pessoal, ao desenvolver um projetinho aqui tive que lidar com duas situações: Uma era que o projeto é um WebSite e não era um WebApplication, segunda era que o processo de entrega não é continuo, é totalmente manual, além de não possuir nenhuma checagem de validação dos testes.

Então resolvi instalar um servidor de integração continua aqui, neste caso resolvi atacar de [TeamCity][1], da JetBrains, que além de ser muito fácil instalar tem sua versão free.

Ao escrever o arquivo XML de BUILD, me deparei com um problema. Como fazer para compilar uma solução que possui um projeto WebSite? Após estudar um pouco a [referencia sobre o arquivo xml de build][2] cheguei a solução final.

<Project xmlns=“http://schemas.microsoft.com/developer/msbuild/2003“ DefaultTargets=“Build“>

  <Import Project=“C:\Program Files (x86)\MSBuild\Microsoft\VisualStudio\v9.0\WebApplications\Microsoft.WebApplication.targets“/>

  <Import Project=“$(MSBuildExtensionsPath)\MSBuildCommunityTasks\MSBuild.Community.Tasks.Targets“/>

  <PropertyGroup>

 

    <LibDir>lib</LibDir>

    <BuildDir>$(MSBuildProjectDirectory)\bin</BuildDir>

    <OutputFolder>D:\ProReserve\Sistemas\reserve\build\src\Site</OutputFolder>

 

    <Configuration>Debug</Configuration>

    <Platform>Any CPU</Platform>

 

  </PropertyGroup>

 

  <ItemGroup>

    <SolutionFile Include=“Projeto.sln“ />

  </ItemGroup>

 

  <Target Name=“Build“>

 

    <!– Compile projects –>

    <MSBuild Projects=“@(SolutionFile)“ Properties=“Configuration=$(Configuration);Platform=$(Platform);“ >

      <Output TaskParameter=“TargetOutputs“ ItemName=“AssembliesBuiltByChildProjects“ />

    </MSBuild>

 

    <!– Add references to bin folder of the WebSite –>

    <Copy SourceFiles=“@(AssembliesBuiltByChildProjects)“ DestinationFolder=“$(OutputFolder)\bin“ ContinueOnError=“true“ />

 

    <!– Compile Web site as Web Application –>

    <AspNetCompiler PhysicalPath=“$(OutputFolder)“ VirtualPath=“build“ />

 

  </Target>

 

</Project>

Este arquivo usei como base para outros servidores de build, então fique a vontade para copiar e implementar o seu.

Espero que ajude a vocês em futuras integrações.

[![][4]</img>][4] [![][5]</img>][5] [![][6]</img>][6] 

![][6]

 [1]: http://www.jetbrains.com/teamcity/
 [2]: http://msdn.microsoft.com/en-us/library/0k6kkbsd%28v=VS.90%29.aspx
 []: http://feeds.feedburner.com/~ff/vivina?a=6Zzk1H3rWDw:z_NwY-rbSZA:yIl2AUoC8zA
 []: http://feeds.feedburner.com/~ff/vivina?a=6Zzk1H3rWDw:z_NwY-rbSZA:qj6IDK7rITs
 []: http://feeds.feedburner.com/~ff/vivina?a=6Zzk1H3rWDw:z_NwY-rbSZA:63t7Ie-LG7Y
 [6]: http://feeds.feedburner.com/~r/vivina/~4/6Zzk1H3rWDw