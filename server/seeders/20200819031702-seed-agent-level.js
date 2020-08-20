'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('agen_levels', [
      {
        level: 'FU',
        keterangan: 'Field Underwriter',
        urutan: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        level: 'UM',
        keterangan: 'Unit Manajer',
        urutan: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        level: 'SM',
        keterangan: 'Sales Manajer',
        urutan: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        level: 'RM',
        keterangan: 'Regional Manajer',
        urutan: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('agen_levels', null, {});
  }
};
