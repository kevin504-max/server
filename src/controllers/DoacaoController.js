const Doacao = require('../database/models/Doacao');
const LocalColeta = require('../database/models/LocalColeta');
const Pessoa = require('../database/models/Pessoa');

async function createDoacao(req, res) {
    try {
        const { pessoa_id, local_id, data } = req.body;

        if (!pessoa_id || !local_id || !data) {
            return res.status(400).json({ message: 'pessoa_id, local_id e data são obrigatórios' });
        }

        const pessoa = await Pessoa.findByPk(pessoa_id);
        if (!pessoa) {
            return res.status(404).json({ message: 'Pessoa não encontrada' });
        }

        const local = await LocalColeta.findByPk(local_id);
        if (!local) {
            return res.status(404).json({ message: 'Local de coleta não encontrado' });
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

        await Doacao.update({ pessoa_id, local_id, data }, {
            where: { id },
            returning: true
        });

        const doacaoAtualizada = await Doacao.findByPk(id);
        res.status(200).json(doacaoAtualizada);
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

const { Op } = require('sequelize');
const moment = require('moment'); // Certifique-se de ter o moment.js instalado

async function getAllDoacoes(req, res) {
    try {
        // Definindo os períodos
        const hoje = moment().startOf('day');
        const inicioSemana = moment().startOf('week');
        const inicioSemanaPassada = moment().subtract(1, 'week').startOf('week');
        const fimSemanaPassada = moment().subtract(1, 'week').endOf('week');
        const inicioMes = moment().startOf('month');
        const inicioMesPassado = moment().subtract(1, 'month').startOf('month');
        const fimMesPassado = moment().subtract(1, 'month').endOf('month');

        // Buscando todas as doações
        const doacoes = await Doacao.findAll({
            include: [
                {
                    model: Pessoa,
                    as: 'pessoa'
                },
                {
                    model: LocalColeta,
                    as: 'localColeta'
                }
            ]
        });

        // Filtrando as doações por período
        const doacoesPorPeriodo = {
            essaSemana: doacoes.filter(doacao =>
                moment(doacao.data).isBetween(inicioSemana, hoje)
            ),
            ultimaSemana: doacoes.filter(doacao =>
                moment(doacao.data).isBetween(inicioSemanaPassada, fimSemanaPassada)
            ),
            esseMes: doacoes.filter(doacao =>
                moment(doacao.data).isBetween(inicioMes, hoje)
            ),
            ultimoMes: doacoes.filter(doacao =>
                moment(doacao.data).isBetween(inicioMesPassado, fimMesPassado)
            )
        };

        res.status(200).json({
            doacoes,
            doacoesPorPeriodo
        });
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