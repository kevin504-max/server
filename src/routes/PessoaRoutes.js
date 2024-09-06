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

router.post('/pessoa', createPessoa);

router.put('/pessoa/:id', updatePessoa);

router.delete('/pessoa/:id', deletePessoa);

router.get('/pessoa', getAllPessoas);

router.get('/pessoa/:id', getPessoaById);

router.get('/pessoa/rg', getPessoaByRg);

module.exports = router;