# Layout

Este documento descreve o componente [Layout](https://github.com/JhonataAugust0/passin-mobile/blob/master/src/app/_layout.tsx), responsável por definir a estrutura visual e estilização global do aplicativo.

Estilos Globais
O componente Layout importa e aplica estilos globais definidos no arquivo [global.css](https://github.com/JhonataAugust0/passin-mobile/blob/master/src/styles/global.css), garantindo uma aparência consistente em toda a aplicação.

```
import "@/styles/global.css"
```

## Carregamento de Fontes
O componente utiliza o hook useFonts do pacote @expo-google-fonts/roboto para carregar as fontes Roboto_700Bold, Roboto_500Medium e Roboto_400Regular antes de renderizar o conteúdo da aplicação.

```
import {
  useFonts,
  Roboto_700Bold,
  Roboto_500Medium,
  Roboto_400Regular
} from '@expo-google-fonts/roboto';
```

## Estrutura do Layout

O componente Layout renderiza um elemento Slot, que representa o conteúdo principal da página quando as fontes estiverem carregadas. Caso as fontes ainda não tenham sido carregadas, é exibido um componente de carregamento (Loading).

```
export default function Layout() {
  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_500Medium,
    Roboto_400Regular
  })

  return (
    <>
      { fontsLoaded ? <Slot/> : <Loading /> }
    </>
  )
}
```

Componente de Carregamento

O componente de carregamento [Loading](https://github.com/JhonataAugust0/passin-mobile/blob/master/src/components/loading.tsx) é responsável por exibir uma animação ou mensagem enquanto as fontes estão sendo carregadas. Esse componente pode ser personalizado de acordo com as necessidades do projeto.