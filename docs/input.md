# Componente Input
O componente Input é uma abstração de um campo de entrada de texto no React Native. Ele é projetado para encapsular a estrutura comum de um campo de entrada, facilitando a criação e o gerenciamento de inputs de forma mais organizada e reutilizável.

## Utilização
O componente Input consiste em dois subcomponentes: Input e Field. O subcomponente Input encapsula a estrutura geral do campo de entrada, enquanto o subcomponente Field representa o próprio campo de texto onde o usuário insere sua entrada.

Exemplo de Uso
```
import { Input } from "@/components/input";

export default function App() {
  return (
    <Input>
      <Input.Field placeholder="Digite algo..." />
    </Input>
  );
}
```

## Propriedades

### Input Props
- children: Um nó React que representa o conteúdo do campo de entrada. Deve conter o subcomponente Field.

### Field Props
- O subcomponente Field herda todas as propriedades do componente TextInput padrão do React Native.

## Personalização
O componente Input oferece suporte à personalização por meio de estilos CSS. Você pode personalizar a aparência do campo de entrada, bem como qualquer outro estilo aplicado aos elementos filhos.

## Exemplo Visual
O exemplo a seguir demonstra a utilização básica do componente Input:

```
<Input>
  <Input.Field placeholder="Digite algo..." />
</Input>
```

Este exemplo renderiza um campo de entrada de texto com um espaço reservado "Digite algo...", estilizado com as cores e estilos padrão definidos no arquivo de estilos.