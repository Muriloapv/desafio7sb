const express = require('express');
const router = express.Router();
const ItemController = require('../controllers/itemController');

// Verificar se todos os métodos existem e são funções
if (
  typeof ItemController.criar !== 'function' ||
  typeof ItemController.listar !== 'function' ||
  typeof ItemController.buscarPorId !== 'function'
) {
  throw new TypeError('Todos os métodos do ItemController devem ser funções.');
}

router.post('/', ItemController.criar);
router.get('/', ItemController.listar);
router.get('/:id', ItemController.buscarPorId);

module.exports = router;
