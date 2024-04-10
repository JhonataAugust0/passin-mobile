# Componente Header
O componente Header é responsável por exibir um cabeçalho na parte superior de uma tela ou seção em um aplicativo React Native. Ele recebe um título como propriedade e renderiza esse título em um estilo de cabeçalho personalizado.

## Utilização
O componente Header é simples de usar e pode ser incorporado em qualquer tela ou componente onde um cabeçalho seja necessário. Basta passar o título desejado como propriedade para o componente.

## Exemplo de Uso

```
import Header from "@/components/header";

export default function App() {
  return (
    <Header title="Título da Página" />
  );
}
```

## Propriedades

### Props
- title (obrigatório): Uma string que representa o título a ser exibido no cabeçalho.

## Personalização
O componente Header oferece suporte à personalização por meio de estilos CSS. Você pode personalizar a aparência do cabeçalho, como cor de fundo, cor do texto, tamanho do texto, entre outros, de acordo com as necessidades do seu aplicativo.

## Exemplo Visual
O exemplo a seguir demonstra a utilização básica do componente Header:

```
<Header title="Título da Página" />
```

Este exemplo renderiza um cabeçalho com o título "Título da Página", estilizado com as cores e estilos padrão definidos no arquivo de estilos.

