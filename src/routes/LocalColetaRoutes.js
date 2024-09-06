const express = require('express');
const router = express.Router();
const {
    createLocalColeta,
    updateLocalColeta,
    deleteLocalColeta,
    getAllLocaisColeta,
    getLocalColetaById,
    getLocaisColetaByNome
} = require('../controllers/LocalColetaController');

router.post('/local_coleta', createLocalColeta);

router.put('/local_coleta/:id', updateLocalColeta);

router.delete('/local_coleta/:id', deleteLocalColeta);

router.get('/local_coleta', getAllLocaisColeta);

router.get('/local_coleta/:id', getLocalColetaById);

router.get('/local_coleta/nome', getLocaisColetaByNome);

module.exports = router;