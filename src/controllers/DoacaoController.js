const Doacao = require('../database/models/Doacao');

async function createDoacao(req, res) {
    try {
        const { pessoa_id, local_id, data } = req.body;
        const novaDoacao = await Doacao.create({ pessoa_id, local_id, data });
        res.status(201).json(novaDoacao);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function updateDoacao(req, res) {
    try {
        const { id } = req.params;
        const { pessoa_id, local_id, data } = req.body;
        const [updated] = await Doacao.update({ pessoa_id, local_id, data }, {
            where: { id },
            returning: true
        });

        if (updated) {
            const doacaoAtualizada = await Doacao.findByPk(id);
            res.status(200).json(doacaoAtualizada);
        } else {
            res.status(404).json({ message: 'Doação não encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function deleteDoacao(req, res) {
    try {
        const { id } = req.params;
        const deleted = await Doacao.destroy({
            where: { id }
        });

        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ message: 'Doação não encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getAllDoacoes(req, res) {
    try {
        const doacoes = await Doacao.findAll();
        res.status(200).json(doacoes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getDoacaoById(req, res) {
    try {
        const { id } = req.params;
        const doacao = await Doacao.findByPk(id);

        if (doacao) {
            res.status(200).json(doacao);
        } else {
            res.status(404).json({ message: 'Doação não encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getDoacoesByData(req, res) {
    try {
        const { data } = req.query;
        const doacoes = await Doacao.findAll({
            where: {
                data: data
            }
        });

        if (doacoes.length > 0) {
            res.status(200).json(doacoes);
        } else {
            res.status(404).json({ message: 'Doações não encontradas' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    createDoacao,
    updateDoacao,
    deleteDoacao,
    getAllDoacoes,
    getDoacaoById,
    getDoacoesByData
};