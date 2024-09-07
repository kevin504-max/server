const Doacao = require('../database/models/Doacao');

async function createDoacao(req, res) {
    try {
        const { pessoa_id, local_id, data } = req.body;

        if (!pessoa_id || !local_id || !data) {
            return res.status(400).json({ message: 'pessoa_id, local_id e data são obrigatórios' });
        }

        const novaDoacao = await Doacao.create({ pessoa_id, local_id, data });
        res.status(201).json(novaDoacao);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar doação: ' + error.message });
    }
}

async function updateDoacao(req, res) {
    try {
        const { id } = req.params;
        const { pessoa_id, local_id, data } = req.body;

        if (!id) {
            return res.status(400).json({ message: 'ID da doação é obrigatório' });
        }
        if (!pessoa_id || !local_id || !data) {
            return res.status(400).json({ message: 'pessoa_id, local_id e data são obrigatórios' });
        }

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
        res.status(500).json({ error: 'Erro ao atualizar doação: ' + error.message });
    }
}

async function deleteDoacao(req, res) {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: 'ID da doação é obrigatório' });
        }

        const deleted = await Doacao.destroy({
            where: { id }
        });

        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ message: 'Doação não encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar doação: ' + error.message });
    }
}

async function getAllDoacoes(req, res) {
    try {
        const doacoes = await Doacao.findAll();
        res.status(200).json(doacoes);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar doações: ' + error.message });
    }
}

async function getDoacaoById(req, res) {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: 'ID da doação é obrigatório' });
        }

        const doacao = await Doacao.findByPk(id);

        if (doacao) {
            res.status(200).json(doacao);
        } else {
            res.status(404).json({ message: 'Doação não encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar doação: ' + error.message });
    }
}

async function getDoacoesByData(req, res) {
    try {
        const { data } = req.query;

        if (!data) {
            return res.status(400).json({ message: 'Data é obrigatória para a busca' });
        }

        const doacoes = await Doacao.findAll({
            where: { data }
        });

        if (doacoes.length > 0) {
            res.status(200).json(doacoes);
        } else {
            res.status(404).json({ message: 'Nenhuma doação encontrada para essa data' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar doações por data: ' + error.message });
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