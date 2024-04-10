# Server 

Este documento descreve a configuração e o uso do Axios que, nesse projeto, é responsável por intermediar a comunicação entre o aplicativo móvel e a API.

## Configuração da API
A API Axios é configurada utilizando o método create() e aceita um objeto de opções com várias configurações, como a URL base da API.

```
import axios from 'axios';

export const api = axios.create({
  baseURL: "http://192.168.0.1:3333",
});
```

## Uso da API
Para fazer requisições HTTP utilizando, importe a instância api e utilize os métodos correspondentes aos verbos HTTP desejados (get, post, put, delete, etc.).

```
import { api } from "@/server/api";

const handleRegister = async() => {
  await api.get(`/attendees/${registerResponse.data.attendeeId}/badge`)
}
```
