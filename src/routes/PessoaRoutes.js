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

router.post('/pessoas', createPessoa);

router.put('/pessoas/:id', updatePessoa);

router.delete('/pessoas/:id', deletePessoa);

router.get('/pessoas', getAllPessoas);

router.get('/pessoas/:id', getPessoaById);

router.get('/pessoas/rg', getPessoaByRg);

module.exports = router;