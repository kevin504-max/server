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

router.post('/', createTipoSanguineo);

router.put('/:id', updateTipoSanguineo);

router.delete('/:id', deleteTipoSanguineo);

router.get('/', getAllTiposSanguineos);

router.get('/:id', getTipoSanguineoById);

router.get('/tipo', getTiposSanguineosByTipo);

module.exports = router;