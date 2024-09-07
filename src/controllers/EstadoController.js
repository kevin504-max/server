const Estado = require('../database/models/Estado');

async function createEstado(req, res) {
    try {
        const { nome, sigla } = req.body;

        // Verificação básica
        if (!nome || !sigla) {
            return res.status(400).json({ message: 'Nome e sigla são obrigatórios' });
        }

        const novoEstado = await Estado.create({ nome, sigla });
        res.status(201).json(novoEstado);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar estado: ' + error.message });
    }
}

async function updateEstado(req, res) {
    try {
        const { id } = req.params;
        const { nome, sigla } = req.body;

        // Verificação básica
        if (!id) {
            return res.status(400).json({ message: 'ID do estado é obrigatório' });
        }
        if (!nome || !sigla) {
            return res.status(400).json({ message: 'Nome e sigla são obrigatórios' });
        }

        const [updated] = await Estado.update({ nome, sigla }, {
            where: { id },
            returning: true
        });

        if (updated) {
            const estadoAtualizado = await Estado.findByPk(id);
            res.status(200).json(estadoAtualizado);
        } else {
            res.status(404).json({ message: 'Estado não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar estado: ' + error.message });
    }
}

async function deleteEstado(req, res) {
    try {
        const { id } = req.params;

        // Verificação básica
        if (!id) {
            return res.status(400).json({ message: 'ID do estado é obrigatório' });
        }

        const deleted = await Estado.destroy({
            where: { id }
        });

        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ message: 'Estado não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar estado: ' + error.message });
    }
}

async function getAllEstados(req, res) {
    try {
        const estados = await Estado.findAll();
        res.status(200).json(estados);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar estados: ' + error.message });
    }
}

async function getEstadoById(req, res) {
    try {
        const { id } = req.params;

        // Verificação básica
        if (!id) {
            return res.status(400).json({ message: 'ID do estado é obrigatório' });
        }

        const estado = await Estado.findByPk(id);

        if (estado) {
            res.status(200).json(estado);
        } else {
            res.status(404).json({ message: 'Estado não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar estado: ' + error.message });
    }
}

async function getEstadoBySigla(req, res) {
    try {
        const { sigla } = req.query;

        // Verificação básica
        if (!sigla) {
            return res.status(400).json({ message: 'Sigla é obrigatória para a busca' });
        }

        const estado = await Estado.findOne({
            where: { sigla }
        });

        if (estado) {
            res.status(200).json(estado);
        } else {
            res.status(404).json({ message: 'Estado não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar estado por sigla: ' + error.message });
    }
}

module.exports = {
    createEstado,
    updateEstado,
    deleteEstado,
    getAllEstados,
    getEstadoById,
    getEstadoBySigla
};
