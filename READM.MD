atividade desafio


Aplicar POO
Contexto:
- Sistema de gerenciamento para um jogo de RPG
Funções
- Gerenciar personagens
- gerenciar itens mágicos
- Cada personagem pode carregar varios itens magicos, e cada item magico esta vinculado a um personagem

Entidade
Personagem
- id
- nome ( referencia )
- nome fantasia
- classe id
- level
- itens id ( in list )
- força
- defesa

Classe do personagem ( aventureiro, magico ... )
- id
- nome


Itens Magicos
- id
- descricao
- level de forca
- categoria ( raro, comum )
- descricao ( atributos e definições )




rodar test : npx jest

ROTAS
//----------------------------- Personagem -----------------------------//
🔹 1. Criar personagem
POST http://localhost:3000/personagens
Json:
{
  "nome": "Ragnar",
  "nomeAventureiro": "Ragnar o Bravo",
  "classe": "Guerreiro",
  "level": 1,
  "forca": 6,
  "defesa": 4
}
🔹 2. Listar todos os personagens
GET http://localhost:3000/personagens

🔹 3. Buscar personagem por ID
GET http://localhost:3000/personagens/{{id}}
Substitua {{id}} pelo ID real retornado ao criar o personagem.

🔹 4. Atualizar nome aventureiro
PATCH http://localhost:3000/personagens/{{id}}/nome-aventureiro
{
  "nomeAventureiro": "Ragnar o Implacável"
}
🔹 5. Remover personagem
DELETE http://localhost:3000/personagens/{{id}}


//----------------------------- item mágico -----------------------------//
🔹 6. Criar item mágico
POST http://localhost:3000/itens
{
  "nome": "Espada Flamejante",
  "tipo": "Arma",
  "forca": 7,
  "defesa": 0
}
🔹 7. Listar todos os itens
GET http://localhost:3000/itens

🔹 8. Buscar item por ID
GET http://localhost:3000/itens/{{id}}

//----------------------------- Personagem + item -----------------------------//
🔹 9. Adicionar item ao personagem
POST http://localhost:3000/personagens/adicionar-item
{
  "personagemId": "ID_DO_PERSONAGEM",
  "itemId": "ID_DO_ITEM"
}
🔹 10. Listar itens de um personagem
GET http://localhost:3000/personagens/{{id}}/itens

🔹 11. Remover item de um personagem
POST http://localhost:3000/personagens/remover-item
{
  "personagemId": "ID_DO_PERSONAGEM",
  "itemId": "ID_DO_ITEM"
}
🔹 12. Buscar o amuleto do personagem
GET http://localhost:3000/personagens/{{id}}/amuleto

