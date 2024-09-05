const express = require('express');
const router = express.Router();
const {
    createTipoSanguineo,
    updateTipoSanguineo,
    deleteTipoSanguineo,
    getAllTiposSanguineos,
    getTipoSanguineoById,
    getTiposSanguineosByTipo
} = require('../controllers/tipoSanguineoController');

router.post('/tipos-sanguineos', createTipoSanguineo);

router.put('/tipos-sanguineos/:id', updateTipoSanguineo);

router.delete('/tipos-sanguineos/:id', deleteTipoSanguineo);

router.get('/tipos-sanguineos', getAllTiposSanguineos);

router.get('/tipos-sanguineos/:id', getTipoSanguineoById);

router.get('/tipos-sanguineos/tipo', getTiposSanguineosByTipo);

module.exports = router;