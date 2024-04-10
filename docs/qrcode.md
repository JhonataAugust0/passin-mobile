## Componente QRCode

O componente QRCode é uma funcionalidade que permite a geração de códigos QR (Quick Response) para representar dados de forma visualmente legível. Este documento descreve a utilização e as propriedades deste componente.

## Utilização
O componente QRCode é utilizado para gerar códigos QR a partir de um valor de entrada. Ele é especialmente útil para representar URLs, números de telefone, informações de contato, entre outros dados.

Exemplo de Uso

```
import QRCode from "@/components/qrcode";

export default function App() {
  return (
    <QRCode 
      value="https://www.example.com"
      size={200}
    />
  );
}
```

Propriedades
O componente QRCode aceita as seguintes propriedades:

- value: O valor a ser codificado no QR code. Pode ser uma URL, texto, número, etc.
- size: O tamanho do QR code em pixels.

## Personalização
O componente QRCode pode ser personalizado por meio de suas propriedades para atender às necessidades de design específicas. As propriedades de cor e tamanho são especialmente úteis para ajustar a aparência do QR code de acordo com o estilo do aplicativo.

Propriedades de Cor
- color: Define a cor dos pixels do QR code.
- backgroundColor: Define a cor de fundo do QR code.

Propriedades de Tamanho
- size: Define o tamanho do QR code em pixels.

Exemplo Visual
O exemplo a seguir demonstra o resultado visual do componente QRCode com diferentes configurações de propriedades:

```
<QRCode 
  value="https://www.example.com"
  size={200}
  color="#FFFFFF"
  backgroundColor="transparent"
/>
```