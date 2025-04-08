# Minecraft API Viewer

![Minecraft Logo](src/images/minecraft.svg)

## Sobre o Projeto

Este projeto é uma aplicação web desenvolvida em React que consome a Minecraft API para exibir informações sobre itens do jogo Minecraft. A aplicação permite aos usuários visualizar detalhes como descrição, imagem, quantidade máxima de itens em um stack e se o item é renovável.

## Funcionalidades

- Exibição de itens do Minecraft com suas imagens
- Detalhes de cada item (descrição, ID, stack máximo, renovável)
- Interface temática com fonte e background do Minecraft
- Layout responsivo para diferentes tamanhos de tela

## Tecnologias Utilizadas

- React 19
- Vite
- CSS puro para estilização
- Fetch API para consumo de dados

## API Utilizada

Este projeto consome dados da [Minecraft API](https://minecraft-api.vercel.app/), que fornece informações detalhadas sobre itens do jogo Minecraft.

### Endpoints Disponíveis:

- `/api/items` - Lista todos os itens disponíveis
- `/api/items/{id}` - Informações detalhadas de um item específico

### Estrutura de Dados:

Cada item retornado pela API possui os seguintes atributos:
```json
{
  "name": "Acacia Boat",
  "namespacedId": "acacia_boat",
  "description": "A boat is both an item and a vehicle entity used primarily for fast transport of players and passenger mobs over bodies of water.",
  "image": "https://minecraft-api.vercel.app/images/items/acacia_boat.png",
  "stackSize": 1,
  "renewable": true
}