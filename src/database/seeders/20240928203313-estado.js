'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('estados', [
      {
        nome: 'Acre',
        sigla: 'AC',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Alagoas',
        sigla: 'AL',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Amapá',
        sigla: 'AP',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Amazonas',
        sigla: 'AM',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Bahia',
        sigla: 'BA',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Ceará',
        sigla: 'CE',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Distrito Federal',
        sigla: 'DF',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Espírito Santo',
        sigla: 'ES',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Goiás',
        sigla: 'GO',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Maranhão',
        sigla: 'MA',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Mato Grosso',
        sigla: 'MT',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Mato Grosso do Sul',
        sigla: 'MS',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Minas Gerais',
        sigla: 'MG',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Pará',
        sigla: 'PA',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Paraíba',
        sigla: 'PB',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Paraná',
        sigla: 'PR',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Pernambuco',
        sigla: 'PE',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Piauí',
        sigla: 'PI',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Rio de Janeiro',
        sigla: 'RJ',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Rio Grande do Norte',
        sigla: 'RN',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Rio Grande do Sul',
        sigla: 'RS',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Rondônia',
        sigla: 'RO',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Roraima',
        sigla: 'RR',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Santa Catarina',
        sigla: 'SC',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'São Paulo',
        sigla: 'SP',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Sergipe',
        sigla: 'SE',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Tocantins',
        sigla: 'TO',
        created_at: new Date(),
        updated_at: new Date(),
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('estados', null, {});
  }
};
