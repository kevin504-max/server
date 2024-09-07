const express = require('express');
const router = express.Router();
const {
    createPessoa,
    updatePessoa,
    deletePessoa,
    getAllPessoas,
    getPessoaById,
    getPessoaByRg
} = require('../controllers/PessoaController');

router.post('/', createPessoa);

router.put('/:id', updatePessoa);

router.delete('/:id', deletePessoa);

router.get('/', getAllPessoas);

router.get('/:id', getPessoaById);

router.get('/rg', getPessoaByRg);

module.exports = router;