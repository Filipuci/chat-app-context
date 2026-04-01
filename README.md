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
- Persistência de mensagens e usuário no localStorage
- Botão para limpar mensagens (clear)
- Botão para resetar o estado da aplicação
- Interface simples e responsiva

## Screenshot

<img width="1583" height="923" alt="image" src="https://github.com/user-attachments/assets/67670bb6-8b46-4fd1-b3e5-b620c0a9919b" />
<img width="1121" height="745" alt="image" src="https://github.com/user-attachments/assets/9c1eca6e-4d6d-4be9-897a-fe691c150a78" />

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

- Uso correto do useEffect para acessar APIs do browser
- Manipulação e persistência de dados com localStorage
- Gerenciamento de estado global com Context API
- Separação de responsabilidades entre componentes
- Otimização de re-renderizações com useMemo
- Boas práticas de organização e refatoração de código

## Melhorias futuras

- Scroll automático para novas mensagens

## Licença

Este projeto é apenas para fins de estudo.
