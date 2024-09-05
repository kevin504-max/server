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

router.post('/estados', createEstado);

router.put('/estados/:id', updateEstado);

router.delete('/estados/:id', deleteEstado);

router.get('/estados', getAllEstados);

router.get('/estados/:id', getEstadoById);

router.get('/estados/sigla', getEstadoBySigla);

module.exports = router;