const TipoSanguineo = require('../models/tipos_sanguineos'); // Ajuste o caminho conforme necessário

// Criar um novo tipo sanguíneo
async function createTipoSanguineo(req, res) {
    try {
        const { tipo, estado_id } = req.body;
        const novoTipoSanguineo = await TipoSanguineo.create({ tipo, estado_id });
        res.status(201).json(novoTipoSanguineo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Atualizar um tipo sanguíneo existente
async function updateTipoSanguineo(req, res) {
    try {
        const { id } = req.params;
        const { tipo, estado_id } = req.body;
        const [updated] = await TipoSanguineo.update({ tipo, estado_id }, {
            where: { id },
            returning: true
        });

        if (updated) {
            const tipoSanguineoAtualizado = await TipoSanguineo.findByPk(id);
            res.status(200).json(tipoSanguineoAtualizado);
        } else {
            res.status(404).json({ message: 'Tipo sanguíneo não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Excluir um tipo sanguíneo
async function deleteTipoSanguineo(req, res) {
    try {
        const { id } = req.params;
        const deleted = await TipoSanguineo.destroy({
            where: { id }
        });

        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ message: 'Tipo sanguíneo não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Recuperar todos os tipos sanguíneos
async function getAllTiposSanguineos(req, res) {
    try {
        const tiposSanguineos = await TipoSanguineo.findAll();
        res.status(200).json(tiposSanguineos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Recuperar um tipo sanguíneo por ID
async function getTipoSanguineoById(req, res) {
    try {
        const { id } = req.params;
        const tipoSanguineo = await TipoSanguineo.findByPk(id);

        if (tipoSanguineo) {
            res.status(200).json(tipoSanguineo);
        } else {
            res.status(404).json({ message: 'Tipo sanguíneo não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Recuperar tipos sanguíneos por tipo
async function getTiposSanguineosByTipo(req, res) {
    try {
        const { tipo } = req.query;
        const tiposSanguineos = await TipoSanguineo.findAll({
            where: {
                tipo: tipo
            }
        });

        if (tiposSanguineos.length > 0) {
            res.status(200).json(tiposSanguineos);
        } else {
            res.status(404).json({ message: 'Tipos sanguíneos não encontrados' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    createTipoSanguineo,
    updateTipoSanguineo,
    deleteTipoSanguineo,
    getAllTiposSanguineos,
    getTipoSanguineoById,
    getTiposSanguineosByTipo
};