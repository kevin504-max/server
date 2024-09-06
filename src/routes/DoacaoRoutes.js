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

router.post('/doacao', createDoacao);

router.put('/doacao/:id', updateDoacao);

router.delete('/doacao/:id', deleteDoacao);

router.get('/doacao', getAllDoacoes);

router.get('/doacao/:id', getDoacaoById);

router.get('/doacao/data', getDoacoesByData);

module.exports = router;