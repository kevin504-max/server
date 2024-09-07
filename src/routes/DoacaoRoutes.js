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

router.post('/', createDoacao);

router.put('/:id', updateDoacao);

router.delete('/:id', deleteDoacao);

router.get('/', getAllDoacoes);

router.get('/:id', getDoacaoById);

router.get('/data', getDoacoesByData);

module.exports = router;