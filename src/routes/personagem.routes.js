const express = require('express');
const router = express.Router();
const PersonagemController = require('../controllers/personagemController');

router.post('/', PersonagemController.criar);
router.get('/', PersonagemController.listar);
router.get('/:id', PersonagemController.buscarPorId);
router.patch('/:id/nome-fantasia', PersonagemController.atualizarNomeFantasia);
router.delete('/:id', PersonagemController.remover);
router.post('/adicionar-item', PersonagemController.adicionarItem);
router.get('/:id/itens', PersonagemController.listarItensDoPersonagem);
router.post('/remover-item', PersonagemController.removerItem);
router.get('/:id/amuleto', PersonagemController.buscarAmuleto);

module.exports = router;
