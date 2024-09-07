const TipoSanguineo = require('../database/models/TipoSanguineo');

async function createTipoSanguineo(req, res) {
    try {
        const { tipo, estado_id } = req.body;

        if (!tipo || !estado_id) {
            return res.status(400).json({ message: 'Tipo sanguíneo e estado_id são obrigatórios' });
        }
        
        const estado = await Estado.findByPk(estado_id);
        if (!estado) {
            return res.status(404).json({ message: 'Estado não encontrado' });
        }

        const novoTipoSanguineo = await TipoSanguineo.create({ tipo, estado_id });
        res.status(201).json(novoTipoSanguineo);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar tipo sanguíneo: ' + error.message });
    }
}

async function updateTipoSanguineo(req, res) {
    try {
        const { id } = req.params;
        const { tipo, estado_id } = req.body;

        if (!id) {
            return res.status(400).json({ message: 'ID do tipo sanguíneo é obrigatório' });
        }
        if (!tipo || !estado_id) {
            return res.status(400).json({ message: 'Tipo sanguíneo e estado_id são obrigatórios' });
        }

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
        res.status(500).json({ error: 'Erro ao atualizar tipo sanguíneo: ' + error.message });
    }
}

async function deleteTipoSanguineo(req, res) {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: 'ID do tipo sanguíneo é obrigatório' });
        }

        const deleted = await TipoSanguineo.destroy({
            where: { id }
        });

        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ message: 'Tipo sanguíneo não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar tipo sanguíneo: ' + error.message });
    }
}

async function getAllTiposSanguineos(req, res) {
    try {
        const tiposSanguineos = await TipoSanguineo.findAll();
        res.status(200).json(tiposSanguineos);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar tipos sanguíneos: ' + error.message });
    }
}

async function getTipoSanguineoById(req, res) {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: 'ID do tipo sanguíneo é obrigatório' });
        }

        const tipoSanguineo = await TipoSanguineo.findByPk(id);

        if (tipoSanguineo) {
            res.status(200).json(tipoSanguineo);
        } else {
            res.status(404).json({ message: 'Tipo sanguíneo não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar tipo sanguíneo: ' + error.message });
    }
}

async function getTiposSanguineosByTipo(req, res) {
    try {
        const { tipo } = req.query;

        if (!tipo) {
            return res.status(400).json({ message: 'Tipo sanguíneo é obrigatório para a busca' });
        }

        const tiposSanguineos = await TipoSanguineo.findAll({
            where: { tipo }
        });

        if (tiposSanguineos.length > 0) {
            res.status(200).json(tiposSanguineos);
        } else {
            res.status(404).json({ message: 'Tipos sanguíneos não encontrados' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar tipos sanguíneos: ' + error.message });
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