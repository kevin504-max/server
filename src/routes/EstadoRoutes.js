const express = require('express');
const router = express.Router();
const {
    createEstado,
    updateEstado,
    deleteEstado,
    getAllEstados,
    getEstadoById,
    getEstadoBySigla
} = require('../controllers/EstadoController');

router.post('/', createEstado);

router.put('/:id', updateEstado);

router.delete('/:id', deleteEstado);

router.get('/', getAllEstados);

router.get('/:id', getEstadoById);

router.get('/sigla', getEstadoBySigla);

module.exports = router;