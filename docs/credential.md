# Componente Credential

O componente Credential é responsável por exibir as informações do crachá de um participante em um evento. Ele exibe o nome do participante, seu ID, sua imagem (caso tenha sido fornecida), seu email e um código QR para check-in no evento.

## Utilização
O componente Credential pode ser utilizado em qualquer tela ou seção do aplicativo onde for necessário exibir as informações do crachá de um participante. Ele recebe as informações do crachá como propriedades e renderiza essas informações de acordo com o layout pré-definido.

Exemplo de Uso

```
import Credential from "@/components/credential";

export default function App() {
  const badgeData = {
    id: "123456",
    name: "John Doe",
    email: "john@example.com",
    checkInURL: "https://example.com/checkin/123456",
    image: "https://example.com/avatar.jpg",
  };

  return (
    <Credential data={badgeData} />
  );
}
```

## Propriedades
### Props

- data (obrigatório): Um objeto contendo as informações do crachá do participante, incluindo id, name, email, checkInURL e image (opcional).
- onChangeAvatar (opcional): Uma função de callback que é chamada quando o usuário pressiona a área da imagem do crachá para alterar sua imagem.
- onExpandQRCode (opcional): Uma função de callback que é chamada quando o usuário pressiona o botão "Ampliar QRCode" para expandir o código QR.

## Personalização
O componente Credential oferece suporte à personalização por meio de estilos CSS. Você pode personalizar a aparência do crachá, como cor de fundo, cor do texto, tamanho do texto, entre outros, de acordo com as necessidades do seu aplicativo.

## Exemplo Visual
O exemplo a seguir demonstra a utilização básica do componente Credential:

```
const badgeData = {
  id: "123456",
  name: "John Doe",
  email: "john@example.com",
  checkInURL: "https://example.com/checkin/123456",
  image: "https://example.com/avatar.jpg",
};

<Credential data={badgeData} />
```

Este exemplo renderiza as informações do crachá de um participante com o nome "John Doe", email "john@example.com", ID "123456" e uma imagem de avatar fornecida. Também exibe um código QR para check-in no evento.