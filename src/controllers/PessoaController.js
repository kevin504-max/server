const Pessoa = require('../database/models/Pessoa');

async function createPessoa(req, res) {
    try {
        const { nome, rua, numero, complemento, rg, cidade_id, tipo_id } = req.body;

        if (!nome || !rg || !cidade_id || !tipo_id) {
            return res.status(400).json({ message: 'Nome, RG, cidade_id e tipo_id são obrigatórios' });
        }

        const novaPessoa = await Pessoa.create({ nome, rua, numero, complemento, rg, cidade_id, tipo_id });
        res.status(201).json(novaPessoa);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar pessoa: ' + error.message });
    }
}

async function updatePessoa(req, res) {
    try {
        const { id } = req.params;
        const { nome, rua, numero, complemento, rg, cidade_id, tipo_id } = req.body;

        if (!id) {
            return res.status(400).json({ message: 'ID da pessoa é obrigatório' });
        }
        if (!nome || !rg || !cidade_id || !tipo_id) {
            return res.status(400).json({ message: 'Nome, RG, cidade_id e tipo_id são obrigatórios' });
        }

        const [updated] = await Pessoa.update({ nome, rua, numero, complemento, rg, cidade_id, tipo_id }, {
            where: { id },
            returning: true
        });

        if (updated) {
            const pessoaAtualizada = await Pessoa.findByPk(id);
            res.status(200).json(pessoaAtualizada);
        } else {
            res.status(404).json({ message: 'Pessoa não encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar pessoa: ' + error.message });
    }
}

async function deletePessoa(req, res) {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: 'ID da pessoa é obrigatório' });
        }

        const deleted = await Pessoa.destroy({
            where: { id }
        });

        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ message: 'Pessoa não encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar pessoa: ' + error.message });
    }
}

async function getAllPessoas(req, res) {
    try {
        const pessoas = await Pessoa.findAll();
        res.status(200).json(pessoas);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar pessoas: ' + error.message });
    }
}

async function getPessoaById(req, res) {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: 'ID da pessoa é obrigatório' });
        }

        const pessoa = await Pessoa.findByPk(id);

        if (pessoa) {
            res.status(200).json(pessoa);
        } else {
            res.status(404).json({ message: 'Pessoa não encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar pessoa: ' + error.message });
    }
}

async function getPessoaByRg(req, res) {
    try {
        const { rg } = req.query;

        if (!rg) {
            return res.status(400).json({ message: 'RG é obrigatório para a busca' });
        }

        const pessoa = await Pessoa.findOne({
            where: { rg }
        });

        if (pessoa) {
            res.status(200).json(pessoa);
        } else {
            res.status(404).json({ message: 'Pessoa não encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar pessoa pelo RG: ' + error.message });
    }
}

module.exports = {
    createPessoa,
    updatePessoa,
    deletePessoa,
    getAllPessoas,
    getPessoaById,
    getPessoaByRg
};