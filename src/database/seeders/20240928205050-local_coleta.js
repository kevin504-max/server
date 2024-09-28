'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Buscando as cidades para usar seus IDs nos locais de coleta
    const cidades = await queryInterface.sequelize.query(
      `SELECT id, nome FROM cidades;`
    );

    const cidadesRows = cidades[0];

    // Função auxiliar para pegar os ids das cidades
    const getCidadeId = (nome) => {
      const cidade = cidadesRows.find(cidade => cidade.nome === nome);
      return cidade ? cidade.id : null;
    };

    return queryInterface.bulkInsert('locais_coleta', [
      {
        nome: 'Hemocentro Belo Horizonte',
        rua: 'Av. Alfredo Balena',
        numero: 110,
        complemento: 'Próximo ao Hospital das Clínicas',
        cidade_id: getCidadeId('Belo Horizonte'),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Posto de Coleta São Paulo',
        rua: 'Rua da Saúde',
        numero: 450,
        complemento: null,
        cidade_id: getCidadeId('São Paulo'),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Banco de Sangue Rio de Janeiro',
        rua: 'Av. Presidente Vargas',
        numero: 1500,
        complemento: 'Bloco A',
        cidade_id: getCidadeId('Rio de Janeiro'),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Hemocentro Porto Alegre',
        rua: 'Rua Vasco da Gama',
        numero: 29,
        complemento: 'Ao lado do hospital',
        cidade_id: getCidadeId('Porto Alegre'),
        created_at: new Date(),
        updated_at: new Date(),
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('locais_coleta', null, {});
  }
};
