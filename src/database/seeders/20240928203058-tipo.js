'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tipos_sanguineos', [
      {
        tipo: 'A',
        fator: '+',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        tipo: 'A',
        fator: '-',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        tipo: 'B',
        fator: '+',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        tipo: 'B',
        fator: '-',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        tipo: 'AB',
        fator: '+',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        tipo: 'AB',
        fator: '-',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        tipo: 'O',
        fator: '+',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        tipo: 'O',
        fator: '-',
        created_at: new Date(),
        updated_at: new Date(),
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tipos_sanguineos', null, {});
  }
};