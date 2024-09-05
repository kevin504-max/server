const LocalColeta = require('../models/locais_coleta'); // Ajuste o caminho conforme necessário

// Criar um novo local de coleta
async function createLocalColeta(req, res) {
    try {
        const { nome, rua, numero, complemento, cidade_id } = req.body;
        const novoLocalColeta = await LocalColeta.create({ nome, rua, numero, complemento, cidade_id });
        res.status(201).json(novoLocalColeta);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Atualizar um local de coleta existente
async function updateLocalColeta(req, res) {
    try {
        const { id } = req.params;
        const { nome, rua, numero, complemento, cidade_id } = req.body;
        const [updated] = await LocalColeta.update({ nome, rua, numero, complemento, cidade_id }, {
            where: { id },
            returning: true
        });

        if (updated) {
            const localColetaAtualizado = await LocalColeta.findByPk(id);
            res.status(200).json(localColetaAtualizado);
        } else {
            res.status(404).json({ message: 'Local de coleta não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Excluir um local de coleta
async function deleteLocalColeta(req, res) {
    try {
        const { id } = req.params;
        const deleted = await LocalColeta.destroy({
            where: { id }
        });

        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ message: 'Local de coleta não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Recuperar todos os locais de coleta
async function getAllLocaisColeta(req, res) {
    try {
        const locaisColeta = await LocalColeta.findAll();
        res.status(200).json(locaisColeta);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Recuperar um local de coleta por ID
async function getLocalColetaById(req, res) {
    try {
        const { id } = req.params;
        const localColeta = await LocalColeta.findByPk(id);

        if (localColeta) {
            res.status(200).json(localColeta);
        } else {
            res.status(404).json({ message: 'Local de coleta não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Recuperar locais de coleta por nome
async function getLocaisColetaByNome(req, res) {
    try {
        const { nome } = req.query;
        const locaisColeta = await LocalColeta.findAll({
            where: {
                nome: nome
            }
        });

        if (locaisColeta.length > 0) {
            res.status(200).json(locaisColeta);
        } else {
            res.status(404).json({ message: 'Locais de coleta não encontrados' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    createLocalColeta,
    updateLocalColeta,
    deleteLocalColeta,
    getAllLocaisColeta,
    getLocalColetaById,
    getLocaisColetaByNome
};