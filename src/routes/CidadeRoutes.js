const express = require('express');
const router = express.Router();
const {
    createCidade,
    updateCidade,
    deleteCidade,
    getAllCidades,
    getCidadeById,
    getCidadeByNome
} = require('../controllers/CidadeController');

router.post('/cidade', createCidade);

router.put('/cidade/:id', updateCidade);

router.delete('/cidade/:id', deleteCidade);

router.get('/cidade', getAllCidades);

router.get('/cidade/:id', getCidadeById);

router.get('/cidade/nome', getCidadeByNome);

module.exports = router;