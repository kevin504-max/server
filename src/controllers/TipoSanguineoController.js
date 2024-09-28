const TipoSanguineo = require('../database/models/TipoSanguineo');

async function createTipoSanguineo(req, res) {
    try {
        const { tipo, fator } = req.body;

        if (!tipo || !fator) {
            return res.status(400).json({ message: 'Tipo sanguíneo e fator são obrigatórios' });
        }
        
        const tipoExistente = await TipoSanguineo.findByPk(tipo);
        if (tipoExistente) return res.status(404).json({ message: 'Tipo Sanguíneo já cadastrado.' });

        const novoTipoSanguineo = await TipoSanguineo.create({ tipo, fator });
        res.status(201).json(novoTipoSanguineo);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar tipo sanguíneo: ' + error.message });
    }
}

async function updateTipoSanguineo(req, res) {
    try {
        const { id } = req.params;
        const { tipo, fator } = req.body;

        if (!tipo || !fator) {
            return res.status(400).json({ message: 'Tipo sanguíneo e fator são obrigatórios' });
        }

        await TipoSanguineo.update({ tipo, fator }, {
            where: { id },
            returning: true
        });

        const tipoSanguineoAtualizado = await TipoSanguineo.findByPk(id);
        res.status(200).json(tipoSanguineoAtualizado);
       
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