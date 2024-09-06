const Cidade = require('../database/models/Cidade');

async function createCidade(req, res) {
    try {
        const { nome, estado_id } = req.body;
        const novaCidade = await Cidade.create({ nome, estado_id });
        res.status(201).json(novaCidade);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function updateCidade(req, res) {
    try {
        const { id } = req.params;
        const { nome, estado_id } = req.body;
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
        res.status(500).json({ error: error.message });
    }
}

async function deleteCidade(req, res) {
    try {
        const { id } = req.params;
        const deleted = await Cidade.destroy({
            where: { id }
        });

        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ message: 'Cidade não encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getAllCidades(req, res) {
    try {
        const cidades = await Cidade.findAll();
        console.log(cidades);
        res.status(200).json(cidades);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getCidadeById(req, res) {
    try {
        const { id } = req.params;
        const cidade = await Cidade.findByPk(id);

        if (cidade) {
            res.status(200).json(cidade);
        } else {
            res.status(404).json({ message: 'Cidade não encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getCidadeByNome(req, res) {
    try {
        const { nome } = req.query;
        const cidades = await Cidade.findAll({
            where: {
                nome: nome
            }
        });

        if (cidades.length > 0) {
            res.status(200).json(cidades);
        } else {
            res.status(404).json({ message: 'Cidades não encontradas' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
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