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

router.post('/', createCidade);

router.put('/:id', updateCidade);

router.delete('/:id', deleteCidade);

router.get('/', getAllCidades);

router.get('/:id', getCidadeById);

router.get('/nome', getCidadeByNome);

module.exports = router;