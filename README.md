# Chat App (React + Context API)

Aplicação de chat interativa desenvolvida com foco em gerenciamento de estado global e persistência de dados no navegador. O projeto utiliza Context API para controle de estado e localStorage para manter as mensagens mesmo após recarregar a página.

## Tecnologias utilizadas

- React
- TypeScript
- Context API
- localStorage

## Funcionalidades

- Envio e renderização de mensagens
- Gerenciamento de estado global com Context API
- Persistência de mensagens no localStorage
- Scroll manual para novas mensagens
- Interface simples e responsiva

## Screenshot

<img width="1583" height="923" alt="image" src="https://github.com/user-attachments/assets/67670bb6-8b46-4fd1-b3e5-b620c0a9919b" />
<img width="1148" height="865" alt="image" src="https://github.com/user-attachments/assets/4f8c7b65-d3c8-4ffe-85cf-75498292f64d" />

## Como rodar o projeto

```bash
# Clonar repositório
git clone https://github.com/Filipuci/chat-app-context

# Entrar na pasta
cd chat-app-context

# Instalar dependências
npm install

# Rodar o projeto
npm run dev
```
O projeto estará disponível em:
http://localhost:3000

## Estrutura do projeto

- Context responsável pelo estado global das mensagens
- Componentes separados para estrutura do chat
- Persistência feita diretamente no client via localStorage

## Aprendizados

- Diferença entre execução no servidor e no cliente no Next.js
- Uso correto do useEffect para acessar APIs do browser
- Gerenciamento de estado global com Context API
- Manipulação e persistência de dados com localStorage

## Melhorias futuras

- Scroll automático para mensagens
- Salvar user no localStorage
- Botão para limpar mensagens
- Refatoração do código utilizando conceito clean code

## Licença

Este projeto é apenas para fins de estudo.
