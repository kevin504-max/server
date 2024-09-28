'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Buscando os estados para usar seus IDs nas cidades
    const estados = await queryInterface.sequelize.query(
      `SELECT id, sigla FROM estados;`
    );
    const estadosRows = estados[0];

    // Função auxiliar para pegar o id de um estado baseado na sigla
    const getEstadoId = (sigla) => {
      const estado = estadosRows.find(estado => estado.sigla === sigla);
      return estado ? estado.id : null;
    };

    return queryInterface.bulkInsert('cidades', [
      {
        nome: 'Rio Branco',
        estado_id: getEstadoId('AC'),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Maceió',
        estado_id: getEstadoId('AL'),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Macapá',
        estado_id: getEstadoId('AP'),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Manaus',
        estado_id: getEstadoId('AM'),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Salvador',
        estado_id: getEstadoId('BA'),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Fortaleza',
        estado_id: getEstadoId('CE'),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Brasília',
        estado_id: getEstadoId('DF'),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Vitória',
        estado_id: getEstadoId('ES'),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Goiânia',
        estado_id: getEstadoId('GO'),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'São Luís',
        estado_id: getEstadoId('MA'),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Cuiabá',
        estado_id: getEstadoId('MT'),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Campo Grande',
        estado_id: getEstadoId('MS'),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Belo Horizonte',
        estado_id: getEstadoId('MG'),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Belém',
        estado_id: getEstadoId('PA'),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'João Pessoa',
        estado_id: getEstadoId('PB'),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Curitiba',
        estado_id: getEstadoId('PR'),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Recife',
        estado_id: getEstadoId('PE'),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Teresina',
        estado_id: getEstadoId('PI'),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Rio de Janeiro',
        estado_id: getEstadoId('RJ'),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Natal',
        estado_id: getEstadoId('RN'),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Porto Alegre',
        estado_id: getEstadoId('RS'),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Porto Velho',
        estado_id: getEstadoId('RO'),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Boa Vista',
        estado_id: getEstadoId('RR'),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Florianópolis',
        estado_id: getEstadoId('SC'),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'São Paulo',
        estado_id: getEstadoId('SP'),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Aracaju',
        estado_id: getEstadoId('SE'),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Palmas',
        estado_id: getEstadoId('TO'),
        created_at: new Date(),
        updated_at: new Date(),
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('cidades', null, {});
  }
};
