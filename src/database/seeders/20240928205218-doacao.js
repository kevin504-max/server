'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Buscando as pessoas e locais de coleta para usar seus IDs nas doações
    const pessoas = await queryInterface.sequelize.query(
      `SELECT id FROM pessoas;`
    );
    const locais = await queryInterface.sequelize.query(
      `SELECT id FROM locais_coleta;`
    );

    const pessoasRows = pessoas[0];
    const locaisRows = locais[0];

    // Função auxiliar para pegar IDs de pessoas e locais de coleta aleatórios
    const getRandomPessoaId = () => pessoasRows[Math.floor(Math.random() * pessoasRows.length)].id;
    const getRandomLocalId = () => locaisRows[Math.floor(Math.random() * locaisRows.length)].id;

    // Gerando 30 doações aleatórias
    const doacoes = Array.from({ length: 100 }, () => ({
      pessoa_id: getRandomPessoaId(),
      local_id: getRandomLocalId(),
      data: new Date(
        2024, 
        Math.floor(Math.random() * 12), // Mês aleatório
        Math.floor(Math.random() * 28) + 1 // Dia aleatório
      ),
      created_at: new Date(),
      updated_at: new Date(),
    }));

    return queryInterface.bulkInsert('doacoes', doacoes);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('doacoes', null, {});
  }
};