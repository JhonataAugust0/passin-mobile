# Componente Loading
O componente Loading é uma interface visual que indica que uma operação está em andamento. Ele é frequentemente utilizado para notificar os usuários sobre o progresso de uma ação ou para indicar que o aplicativo está processando informações.

## Utilização
O componente Loading é utilizado para exibir um indicador de atividade que mostra que algo está acontecendo nos bastidores do aplicativo.

Exemplo de Uso

```
import { Loading } from "@/components/loading";

export default function App() {
  return <Loading />;
}
```

## Personalização
O componente Loading não aceita propriedades de personalização além das propriedades padrão do React Native para o componente ActivityIndicator.

## Exemplo Visual
O exemplo a seguir demonstra a aparência padrão do componente Loading:

```
<Loading />
```
Este exemplo renderiza um indicador de atividade padrão, centralizado na tela, com a cor de fundo definida como verde e a cor do indicador definida como laranja.