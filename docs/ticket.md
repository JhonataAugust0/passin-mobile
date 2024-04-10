# Ticket page

Este documento descreve a página de exibição da credencial do participante, que permite que os usuários visualizem e compartilhem sua credencial para o evento.

## Funções Principais
1. A página de credencial apresenta as seguintes funcionalidades principais:
2. Exibição da Credencial: Permite que os usuários visualizem sua credencial para o evento, incluindo informações como nome, e-mail e título do evento.
3. Alteração de Avatar: Permite que os usuários atualizem o avatar de sua credencial selecionando uma nova imagem da galeria.
4. Compartilhamento da Credencial: Permite que os usuários compartilhem sua credencial com outras pessoas por meio de aplicativos de mensagens ou redes sociais.
5. Remoção de Ingresso: Permite que os usuários removam seu ingresso do evento caso não possam mais participar.

## Componentes Utilizados
A página de credencial utiliza os seguintes componentes:

- StatusBar: Configura a barra de status do dispositivo para o estilo de conteúdo claro.
- Header: Cabeçalho da página que exibe o título "Minha Credencial".
- ScrollView: Componente de rolagem que permite visualizar o conteúdo da página.
- Credential: Componente que exibe os detalhes da credencial do participante, incluindo nome, e-mail, título do evento e QR code.
- Button: Botão utilizado para acionar a ação de compartilhamento da credencial e remover o ingresso do evento.
- TouchableOpacity: Componente que fornece feedback tátil ao tocar em um item.
- Modal: Componente que exibe o QR code em tela cheia quando expandido pelo usuário.

## Estado Local
A página de credencial utiliza estado local para controlar as seguintes variáveis:

- image: Armazena o URI da imagem selecionada pelo usuário para atualização do avatar da credencial.
- expandQRCode: Indica se o QR code está expandido em tela cheia ou não.

## Funções Principais
- A função handleShare é responsável por acionar a ação de compartilhamento da credencial, permitindo que os usuários compartilhem sua credencial com outras pessoas por meio de aplicativos de mensagens ou redes sociais.
- A função handleSelectImage é responsável por acionar a ação de seleção de imagem da galeria, permitindo que os usuários atualizem o avatar de sua credencial com uma nova imagem.
- A função handleRemoveTicket é responsável por acionar a ação de remoção do ingresso do evento, permitindo que os usuários removam seu ingresso caso não possam mais participar.