const LocalColeta = require('../database/models/LocalColeta');

async function createLocalColeta(req, res) {
    try {
        const { nome, rua, numero, complemento, cidade_id } = req.body;

        if (!nome || !rua || !numero || !cidade_id) {
            return res.status(400).json({ message: 'Nome, rua, número e cidade_id são obrigatórios' });
        }

        const novoLocalColeta = await LocalColeta.create({ nome, rua, numero, complemento, cidade_id });
        res.status(201).json(novoLocalColeta);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar local de coleta: ' + error.message });
    }
}

async function updateLocalColeta(req, res) {
    try {
        const { id } = req.params;
        const { nome, rua, numero, complemento, cidade_id } = req.body;

        if (!id) {
            return res.status(400).json({ message: 'ID do local de coleta é obrigatório' });
        }
        if (!nome || !rua || !numero || !cidade_id) {
            return res.status(400).json({ message: 'Nome, rua, número e cidade_id são obrigatórios' });
        }

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
        res.status(500).json({ error: 'Erro ao atualizar local de coleta: ' + error.message });
    }
}

async function deleteLocalColeta(req, res) {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: 'ID do local de coleta é obrigatório' });
        }

        const deleted = await LocalColeta.destroy({
            where: { id }
        });

        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ message: 'Local de coleta não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar local de coleta: ' + error.message });
    }
}

async function getAllLocaisColeta(req, res) {
    try {
        const locaisColeta = await LocalColeta.findAll();
        res.status(200).json(locaisColeta);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar locais de coleta: ' + error.message });
    }
}

async function getLocalColetaById(req, res) {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: 'ID do local de coleta é obrigatório' });
        }

        const localColeta = await LocalColeta.findByPk(id);

        if (localColeta) {
            res.status(200).json(localColeta);
        } else {
            res.status(404).json({ message: 'Local de coleta não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar local de coleta: ' + error.message });
    }
}

async function getLocaisColetaByNome(req, res) {
    try {
        const { nome } = req.query;

        if (!nome) {
            return res.status(400).json({ message: 'Nome é obrigatório para a busca' });
        }

        const locaisColeta = await LocalColeta.findAll({
            where: { nome }
        });

        if (locaisColeta.length > 0) {
            res.status(200).json(locaisColeta);
        } else {
            res.status(404).json({ message: 'Locais de coleta não encontrados' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar locais de coleta por nome: ' + error.message });
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