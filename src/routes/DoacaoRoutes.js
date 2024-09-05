const express = require('express');
const router = express.Router();
const {
    createDoacao,
    updateDoacao,
    deleteDoacao,
    getAllDoacoes,
    getDoacaoById,
    getDoacoesByData
} = require('../controllers/DoacaoController');

router.post('/doacoes', createDoacao);

router.put('/doacoes/:id', updateDoacao);

router.delete('/doacoes/:id', deleteDoacao);

router.get('/doacoes', getAllDoacoes);

router.get('/doacoes/:id', getDoacaoById);

router.get('/doacoes/data', getDoacoesByData);

module.exports = router;