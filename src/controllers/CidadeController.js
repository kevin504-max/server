const Cidade = require('../database/models/Cidade');
const Estado = require('../database/models/Estado');

async function createCidade(req, res) {
    try {
        const { nome, estado_id } = req.body;

        if (!nome || !estado_id) {
            return res.status(400).json({ message: 'Nome e estado_id são obrigatórios' });
        }

        const estado = await Estado.findByPk(estado_id);
        if (!estado) {
            return res.status(404).json({ message: 'Estado não encontrado' });
        }

        const novaCidade = await Cidade.create({ nome, estado_id });
        res.status(201).json(novaCidade);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar cidade: ' + error.message });
    }
}

async function updateCidade(req, res) {
    try {
        const { id } = req.params;
        const { nome, estado_id } = req.body;

        if (!id) {
            return res.status(400).json({ message: 'ID da cidade é obrigatório' });
        }
        if (!nome || !estado_id) {
            return res.status(400).json({ message: 'Nome e estado_id são obrigatórios' });
        }

        const [updated] = await Cidade.update({ nome, estado_id }, {
            where: { id },
            returning: true
        });

        if (updated) {
            const cidadeAtualizada = await Cidade.findByPk(id);
            res.status(200).json(cidadeAtualizada);
        } else {
            res.status(404).json({ message: 'Cidade não encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar cidade: ' + error.message });
    }
}

async function deleteCidade(req, res) {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: 'ID da cidade é obrigatório' });
        }

        const deleted = await Cidade.destroy({
            where: { id }
        });

        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ message: 'Cidade não encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar cidade: ' + error.message });
    }
}

async function getAllCidades(req, res) {
    try {
        const cidades = await Cidade.findAll();
        res.status(200).json(cidades);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar cidades: ' + error.message });
    }
}

async function getCidadeById(req, res) {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: 'ID da cidade é obrigatório' });
        }

        const cidade = await Cidade.findByPk(id);

        if (cidade) {
            res.status(200).json(cidade);
        } else {
            res.status(404).json({ message: 'Cidade não encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar cidade: ' + error.message });
    }
}

async function getCidadeByNome(req, res) {
    try {
        const { nome } = req.query;

        if (!nome) {
            return res.status(400).json({ message: 'Nome da cidade é obrigatório' });
        }

        const cidades = await Cidade.findAll({
            where: { nome }
        });

        if (cidades.length > 0) {
            res.status(200).json(cidades);
        } else {
            res.status(404).json({ message: 'Nenhuma cidade encontrada com esse nome' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar cidade por nome: ' + error.message });
    }
}

module.exports = {
    createCidade,
    updateCidade,
    deleteCidade,
    getAllCidades,
    getCidadeById,
    getCidadeByNome
};