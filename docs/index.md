# Index

Este documento descreve o [index](https://github.com/JhonataAugust0/passin-mobile/blob/master/src/app/index.tsx) do aplicativo, que é responsável por permitir que os usuários acessem suas credenciais utilizando um código de ingresso.

## Funções Principais

O index apresenta as seguintes funcionalidades principais:

1. Acesso à Credencial: Permite que os usuários informem um código de ingresso e acessem suas credenciais correspondentes.
2. Redirecionamento: Redireciona os usuários para a página de exibição da credencial caso ela já tenha sido acessada anteriormente.

## Componentes Utilizados

O index utiliza os seguintes componentes:

- Alert: Utilizado para exibir mensagens de alerta em caso de erros ou notificações importantes para o usuário.
- Image: Exibe a logo do aplicativo.
- StatusBar: Configura a barra de status do dispositivo para o estilo de conteúdo claro.
- Input: Componente de entrada de texto utilizado para que os usuários insiram o código do ingresso.
- Button: Botão utilizado para acionar a ação de acesso à credencial.
- Link: Utilizado para redirecionar os usuários para a página de registro caso ainda não possuam ingresso.

## Estado Local
O index utiliza estado local para controlar as seguintes variáveis:

- code: Armazena o código do ingresso informado pelo usuário.
- isLoading: Indica se a aplicação está carregando os dados da credencial.

## Funções Principais
A função handleAccessCredential é responsável por realizar a solicitação à API para acessar a credencial do usuário com base no código de ingresso fornecido. Em caso de sucesso, os dados da credencial são armazenados no estado global da aplicação.

## Redirecionamento
Caso a credencial do usuário já tenha sido acessada anteriormente e esteja disponível no estado global da aplicação, O index realiza um redirecionamento para a página de exibição da credencial.

