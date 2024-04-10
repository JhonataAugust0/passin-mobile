# Store

Este documento descreve a estrutura e o uso da Badge Store, uma store gerenciada pelo Zustand para armazenar informações sobre o badge do participante em um evento.<br>
Uma store é uma estrutura de dados centralizada utilizada para armazenar e gerenciar o estado da aplicação em um único local. Ela serve para compartilhar e acessar facilmente o estado entre diferentes componentes da aplicação, garantindo consistência e facilitando a atualização e sincronização dos dados em toda a aplicação.


## Estrutura da Store

A Badge Store possui a seguinte estrutura de dados:

```
type BadgeStore = {
  id:         string 
  name:       string 
  email:      string 
  eventTitle: string 
  checkInURL: string 
  image?:     string 
}
```

Propriedades da BadgeStore:

- id: Identificador único do participante.
- name: Nome do participante.
- email: E-mail do participante.
- eventTitle: Título do evento.
- checkInURL: URL para realizar check-in no evento.
- image (opcional): URI da imagem do participante.

Funções da Store

A Badge Store fornece as seguintes funções para manipular os dados do participante:

- save: Salva os dados do participante na store.
- remove: Remove os dados do participante da store.
- updateAvatar: Atualiza a URI da imagem do participante.