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

router.post('/cidades', createCidade);

router.put('/cidades/:id', updateCidade);

router.delete('/cidades/:id', deleteCidade);

router.get('/cidades', getAllCidades);

router.get('/cidades/:id', getCidadeById);

router.get('/cidades/nome', getCidadeByNome);

module.exports = router;