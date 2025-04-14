const ItemMagico = require('../models/ItemMagico');
const { itens } = require('../database/db');

class ItemController {
  static criar(req, res) {
    const { nome, tipo, forca, defesa } = req.body;

    if (forca < 0 || defesa < 0) {
      return res.status(400).json({ erro: 'Força e Defesa devem ser valores positivos.' });
    }

    try {
      const novo = new ItemMagico(nome, tipo, forca, defesa);
      itens.push(novo);
      res.status(201).json(novo);
    } catch (err) {
      res.status(400).json({ erro: err.message });
    }
  }

  static listar(req, res) {
    res.json(itens);
  }

  static buscarPorId(req, res) {
    const { id } = req.params;
    const item = itens.find(i => i.id === id);
    if (!item) return res.status(404).json({ erro: 'Item não encontrado.' });
    res.json(item);
  }
}

module.exports = ItemController;
