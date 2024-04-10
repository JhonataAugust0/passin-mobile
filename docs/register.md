## Página register

Este documento descreve a página de registro do aplicativo, que permite que os usuários se inscrevam para participar de um evento fornecendo seu nome completo e endereço de e-mail.

## Funções Principais
A página de registro apresenta as seguintes funcionalidades principais:

1. Registro de Participante: Permite que os usuários se inscrevam para participar do evento fornecendo seu nome completo e endereço de e-mail.
2. Validação de Dados: Realiza validações nos campos de entrada para garantir que o usuário forneça informações válidas antes de prosseguir com o registro.
3. Feedback ao Usuário: Fornece feedback ao usuário por meio de mensagens de alerta em caso de erros durante o processo de registro.

## Componentes Utilizados
A página de registro utiliza os seguintes componentes:

- Alert: Utilizado para exibir mensagens de alerta em caso de erros durante o processo de registro.
- Image: Exibe a logo do aplicativo.
- StatusBar: Configura a barra de status do dispositivo para o estilo de conteúdo claro.
- Input: Componentes de entrada de texto utilizados para que os usuários insiram seu nome completo e endereço de e-mail.
- Button: Botão utilizado para acionar a ação de registro do participante.
- Link: Utilizado para redirecionar os usuários de volta para a página inicial caso já possuam ingresso.

## Estado Local
A página de registro utiliza estado local para controlar as seguintes variáveis:

- name: Armazena o nome completo fornecido pelo usuário durante o processo de registro.
- email: Armazena o endereço de e-mail fornecido pelo usuário durante o processo de registro.
- isLoading: Indica se a aplicação está carregando os dados de registro.

## Funções Principais
A função handleRegister é responsável por realizar a solicitação à API para registrar o participante no evento com base nas informações fornecidas. Em caso de sucesso, as informações da credencial são armazenadas no estado global da aplicação e o usuário é redirecionado para a página de exibição da credencial.