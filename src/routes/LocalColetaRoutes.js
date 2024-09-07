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

router.post('/', createLocalColeta);

router.put('/:id', updateLocalColeta);

router.delete('/:id', deleteLocalColeta);

router.get('/', getAllLocaisColeta);

router.get('/:id', getLocalColetaById);

router.get('/nome', getLocaisColetaByNome);

module.exports = router;