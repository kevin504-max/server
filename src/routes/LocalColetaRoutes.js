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

router.post('/locais_coleta', createLocalColeta);

router.put('/locais_coleta/:id', updateLocalColeta);

router.delete('/locais_coleta/:id', deleteLocalColeta);

router.get('/locais_coleta', getAllLocaisColeta);

router.get('/locais_coleta/:id', getLocalColetaById);

router.get('/locais_coleta/nome', getLocaisColetaByNome);

module.exports = router;