'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Buscando as cidades e tipos sanguíneos para usar seus IDs nas pessoas
    const cidades = await queryInterface.sequelize.query(
      `SELECT id, nome FROM cidades;`
    );
    const tiposSanguineos = await queryInterface.sequelize.query(
      `SELECT id, tipo, fator FROM tipos_sanguineos;`
    );

    const cidadesRows = cidades[0];
    const tiposSanguineosRows = tiposSanguineos[0];

    // Funções auxiliares para pegar os ids de cidades e tipos sanguíneos
    const getCidadeId = (nome) => {
      const cidade = cidadesRows.find(cidade => cidade.nome === nome);
      return cidade ? cidade.id : null;
    };

    const getTipoSanguineoId = (tipo, fator) => {
      const tipoSanguineo = tiposSanguineosRows.find(ts => ts.tipo === tipo && ts.fator === fator);
      return tipoSanguineo ? tipoSanguineo.id : null;
    };

    return queryInterface.bulkInsert('pessoas', [
      {
        nome: 'João da Silva',
        rua: 'Rua das Flores',
        numero: 123,
        complemento: 'Apto 101',
        rg: 'MG1234567',
        cidade_id: getCidadeId('Belo Horizonte'),
        tipo_id: getTipoSanguineoId('A', '+'),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Maria Souza',
        rua: 'Av. Brasil',
        numero: 456,
        complemento: null,
        rg: 'SP9876543',
        cidade_id: getCidadeId('São Paulo'),
        tipo_id: getTipoSanguineoId('O', '-'),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Pedro Gonçalves',
        rua: 'Rua do Comércio',
        numero: 789,
        complemento: 'Casa',
        rg: 'RJ1231234',
        cidade_id: getCidadeId('Rio de Janeiro'),
        tipo_id: getTipoSanguineoId('B', '+'),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Ana Oliveira',
        rua: 'Av. Central',
        numero: 1011,
        complemento: null,
        rg: 'RS7654321',
        cidade_id: getCidadeId('Porto Alegre'),
        tipo_id: getTipoSanguineoId('AB', '-'),
        created_at: new Date(),
        updated_at: new Date(),
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('pessoas', null, {});
  }
};
