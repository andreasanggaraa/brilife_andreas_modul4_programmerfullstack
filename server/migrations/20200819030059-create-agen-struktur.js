'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('agen_strukturs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      parent_id: {
        type: Sequelize.INTEGER,
      },
      id_agen: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Agens",
          key: "id"
        },
        onUpdate: "cascade",
        onDelete: "cascade"
      },
      berlaku_mulai: {
        type: Sequelize.DATE
      },
      berlaku_akhir: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.STRING
      },
      keterangan: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('agen_strukturs');
  }
};