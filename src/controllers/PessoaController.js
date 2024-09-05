const Pessoa = require('../models/pessoas'); // Ajuste o caminho conforme necessário

// Criar uma nova pessoa
async function createPessoa(req, res) {
    try {
        const { nome, rua, numero, complemento, rg, cidade_id, tipo_id } = req.body;
        const novaPessoa = await Pessoa.create({ nome, rua, numero, complemento, rg, cidade_id, tipo_id });
        res.status(201).json(novaPessoa);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Atualizar uma pessoa existente
async function updatePessoa(req, res) {
    try {
        const { id } = req.params;
        const { nome, rua, numero, complemento, rg, cidade_id, tipo_id } = req.body;
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
        res.status(500).json({ error: error.message });
    }
}

// Excluir uma pessoa
async function deletePessoa(req, res) {
    try {
        const { id } = req.params;
        const deleted = await Pessoa.destroy({
            where: { id }
        });

        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ message: 'Pessoa não encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Recuperar todas as pessoas
async function getAllPessoas(req, res) {
    try {
        const pessoas = await Pessoa.findAll();
        res.status(200).json(pessoas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Recuperar uma pessoa por ID
async function getPessoaById(req, res) {
    try {
        const { id } = req.params;
        const pessoa = await Pessoa.findByPk(id);

        if (pessoa) {
            res.status(200).json(pessoa);
        } else {
            res.status(404).json({ message: 'Pessoa não encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Recuperar uma pessoa por RG
async function getPessoaByRg(req, res) {
    try {
        const { rg } = req.query;
        const pessoa = await Pessoa.findOne({
            where: {
                rg: rg
            }
        });

        if (pessoa) {
            res.status(200).json(pessoa);
        } else {
            res.status(404).json({ message: 'Pessoa não encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
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