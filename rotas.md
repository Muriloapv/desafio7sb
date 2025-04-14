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

