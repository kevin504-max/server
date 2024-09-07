const express = require('express');
const router = express.Router();
const {
    createTipoSanguineo,
    updateTipoSanguineo,
    deleteTipoSanguineo,
    getAllTiposSanguineos,
    getTipoSanguineoById,
    getTiposSanguineosByTipo
} = require('../controllers/TipoSanguineoController');

router.post('/tipos_sanguineo', createTipoSanguineo);

router.put('/tipos_sanguineo/:id', updateTipoSanguineo);

router.delete('/tipos_sanguineo/:id', deleteTipoSanguineo);

router.get('/tipos_sanguineo', getAllTiposSanguineos);

router.get('/tipos_sanguineo/:id', getTipoSanguineoById);

router.get('/tipos_sanguineo/tipo', getTiposSanguineosByTipo);

module.exports = router;