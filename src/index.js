const express = require('express');
const personagemRoutes = require('./routes/personagem.routes');
const itemRoutes = require('./routes/item.routes');

const app = express();
app.use(express.json());

app.use('/personagens', personagemRoutes);
app.use('/itens', itemRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
