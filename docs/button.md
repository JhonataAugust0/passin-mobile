# Componente Button
O componente Button é responsável por criar um botão interativo que pode exibir um texto e opcionalmente um indicador de carregamento quando estiver em um estado de carregamento.

## Utilização
O componente Button pode ser utilizado em qualquer parte do aplicativo onde a interação do usuário com um botão seja necessária. Ele recebe o texto a ser exibido no botão como propriedade e opcionalmente um estado de carregamento.

Exemplo de Uso

```
import Button from "@/components/button";

export default function App() {
  return (
    <Button title="Clique Aqui" onPress={() => console.log("Botão Clicado")} />
  );
}
```

## Propriedades
### Props
- title (obrigatório): O texto a ser exibido no botão.
- isLoading (opcional): Um booleano que indica se o botão está em um estado de carregamento. Quando true, um indicador de carregamento será exibido no lugar do texto do botão.
- onPress (opcional): Uma função de callback que é chamada quando o botão é pressionado.

## Personalização
O componente Button oferece suporte à personalização por meio de estilos CSS. Você pode personalizar a aparência do botão, como cor de fundo, cor do texto, tamanho do texto, entre outros, de acordo com as necessidades do seu aplicativo.

## Exemplo Visual
O exemplo a seguir demonstra a utilização básica do componente Button:

```
<Button title="Clique Aqui" onPress={() => console.log("Botão Clicado")} />
```

Este exemplo renderiza um botão com o texto "Clique Aqui" que, quando clicado, exibirá uma mensagem no console.

