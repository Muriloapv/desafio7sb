const Personagem = require('../models/Personagem');
const { personagens, itens } = require('../database/db');

class PersonagemController {
  static criar(req, res) {
    const { nome, nomeFantasia, classe, level, forca, defesa } = req.body;

    if (forca + defesa !== 10) {
      return res.status(400).json({ erro: 'Força + Defesa devem ser exatamente 10.' });
    }

    if (forca < 0 || defesa < 0) {
      return res.status(400).json({ erro: 'Força e Defesa devem ser valores positivos.' });
    }

    try {
      const novo = new Personagem(nome, nomeFantasia, classe, level, forca, defesa);
      personagens.push(novo);
      res.status(201).json(novo);
    } catch (err) {
      res.status(400).json({ erro: err.message });
    }
  }

  static listar(req, res) {
    res.json(personagens);
  }

  static buscarPorId(req, res) {
    const { id } = req.params;
    const personagem = personagens.find(p => p.id === id);
    if (!personagem) return res.status(404).json({ erro: 'Personagem não encontrado.' });
    res.json(personagem);
  }

  static atualizarNomeFantasia(req, res) {
    const { id } = req.params;
    const { nomeFantasia } = req.body;
    const personagem = personagens.find(p => p.id === id);
    if (!personagem) return res.status(404).json({ erro: 'Personagem não encontrado.' });

    personagem.nomeFantasia = nomeFantasia;
    res.json(personagem);
  }

  static remover(req, res) {
    const { id } = req.params;
    const index = personagens.findIndex(p => p.id === id);
    if (index === -1) return res.status(404).json({ erro: 'Personagem não encontrado.' });

    personagens.splice(index, 1);
    res.status(204).send();
  }

  static adicionarItem(req, res) {
    const { personagemId, itemId } = req.body;
    const personagem = personagens.find(p => p.id === personagemId);
    const item = itens.find(i => i.id === itemId);
    if (!personagem || !item) {
      return res.status(404).json({ erro: 'Personagem ou Item não encontrado.' });
    }

    if (personagem.itens.some(i => i.id === itemId)) {
      return res.status(400).json({ erro: 'O personagem já possui este item.' });
    }

    try {
      personagem.adicionarItem(item);
      res.json(personagem);
    } catch (err) {
      res.status(400).json({ erro: err.message });
    }
  }

  static listarItensDoPersonagem(req, res) {
    const { id } = req.params;
    const personagem = personagens.find(p => p.id === id);
    if (!personagem) return res.status(404).json({ erro: 'Personagem não encontrado.' });

    res.json(personagem.itens);
  }

  static removerItem(req, res) {
    const { personagemId, itemId } = req.body;
    const personagem = personagens.find(p => p.id === personagemId);
    if (!personagem) return res.status(404).json({ erro: 'Personagem não encontrado.' });

    personagem.removerItem(itemId);
    res.json({ mensagem: 'Item removido com sucesso.' });
  }

  static buscarAmuleto(req, res) {
    const { id } = req.params;
    const personagem = personagens.find(p => p.id === id);
    if (!personagem) return res.status(404).json({ erro: 'Personagem não encontrado.' });

    const amuleto = personagem.buscarAmuleto();
    if (!amuleto) return res.status(404).json({ erro: 'Amuleto não encontrado.' });

    res.json(amuleto);
  }
}

module.exports = PersonagemController;
