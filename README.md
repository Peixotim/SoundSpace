# 🎵 YouTube Audio API

Uma API desenvolvida em Node.js para extração de informações e download
de áudio (MP3) a partir de URLs do YouTube.

Este projeto nasceu para resolver um problema simples do dia a dia:
evitar sites cheios de anúncios e processos demorados para baixar
músicas.\
A solução foi transformar essa necessidade em uma aplicação backend
estruturada e escalável.

------------------------------------------------------------------------

## 🚀 Tecnologias Utilizadas

-   Node.js
-   TypeScript
-   Express
-   youtube-dl-exec
-   Arquitetura baseada em Services + Controllers
-   Tratamento estruturado de erros com AppError

------------------------------------------------------------------------

## 📁 Estrutura do Projeto

    src/
    ├── controllers/
    ├── services/
    ├── middlewares/
    ├── errors/
    ├── routes/
    ├── app.ts
    └── server.ts

------------------------------------------------------------------------

## 🧠 Arquitetura

A aplicação segue uma separação clara de responsabilidades:

-   **Controller** → Camada HTTP\
-   **Service** → Regra de negócio\
-   **AppError** → Representação estruturada de erros\
-   **Error Handler Middleware** → Tradução de erros para resposta HTTP

Isso permite:

-   Código organizado\
-   Fácil manutenção\
-   Escalabilidade futura\
-   Padronização de respostas

------------------------------------------------------------------------

## 📌 Funcionalidades

### 🔍 Obter Informações do Vídeo

**Endpoint:**

    POST /youtube/info

**Body:**

``` json
{
  "url": "https://www.youtube.com/watch?v=example"
}
```

------------------------------------------------------------------------

### ⬇️ Download de Áudio (MP3)

**Endpoint:**

    POST /youtube/download

**Body:**

``` json
{
  "url": "https://www.youtube.com/watch?v=example"
}
```

------------------------------------------------------------------------

## ⚠️ Tratamento de Erros

A API possui tratamento estruturado com padrão consistente:

``` json
{
  "status": "error",
  "code": "ERROR_CODE",
  "message": "Descrição do erro",
  "details": {}
}
```

------------------------------------------------------------------------

## 🛠 Instalação

``` bash
git clone https://github.com/peixotim/SoundSpace.git
cd SoundSpace
npm install
npm run dev
```

------------------------------------------------------------------------

## 📦 Scripts Disponíveis

``` bash
npm run dev       # Executa em modo desenvolvimento
npm run build     # Compila o projeto
npm start         # Executa versão compilada
```

------------------------------------------------------------------------

## 🔐 Melhorias Futuras

-   [ ] Implementar validação com Zod\
-   [ ] Adicionar rate limiting\
-   [ ] Criar front-end para uso doméstico\
-   [ ] Implementar fila para downloads (BullMQ)\
-   [ ] Logger estruturado com Pino\
-   [ ] Deploy em ambiente cloud

------------------------------------------------------------------------

## 👨‍💻 Autor

Pedro Peixoto\
Estudante de Engenharia de Software\
Foco em backend, arquitetura e construção de aplicações escaláveis.

------------------------------------------------------------------------

## 📄 Licença

Este projeto está sob a licença MIT.
