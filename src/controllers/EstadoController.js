const Estado = require('../models/estados'); // Ajuste o caminho conforme necessário

// Criar um novo estado
async function createEstado(req, res) {
    try {
        const { nome, sigla } = req.body;
        const novoEstado = await Estado.create({ nome, sigla });
        res.status(201).json(novoEstado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Atualizar um estado existente
async function updateEstado(req, res) {
    try {
        const { id } = req.params;
        const { nome, sigla } = req.body;
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
        res.status(500).json({ error: error.message });
    }
}

// Excluir um estado
async function deleteEstado(req, res) {
    try {
        const { id } = req.params;
        const deleted = await Estado.destroy({
            where: { id }
        });

        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ message: 'Estado não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Recuperar todos os estados
async function getAllEstados(req, res) {
    try {
        const estados = await Estado.findAll();
        res.status(200).json(estados);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Recuperar um estado por ID
async function getEstadoById(req, res) {
    try {
        const { id } = req.params;
        const estado = await Estado.findByPk(id);

        if (estado) {
            res.status(200).json(estado);
        } else {
            res.status(404).json({ message: 'Estado não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Recuperar um estado por sigla
async function getEstadoBySigla(req, res) {
    try {
        const { sigla } = req.query;
        const estado = await Estado.findOne({
            where: {
                sigla: sigla
            }
        });

        if (estado) {
            res.status(200).json(estado);
        } else {
            res.status(404).json({ message: 'Estado não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
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
