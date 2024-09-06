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

router.post('/estado', createEstado);

router.put('/estado/:id', updateEstado);

router.delete('/estado/:id', deleteEstado);

router.get('/estado', getAllEstados);

router.get('/estado/:id', getEstadoById);

router.get('/estado/sigla', getEstadoBySigla);

module.exports = router;