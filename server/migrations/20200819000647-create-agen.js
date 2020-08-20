'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Agens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      no_lisensi: {
        type: Sequelize.INTEGER,
        unique: true
      },
      nama_agen: {
        type: Sequelize.STRING
      },
      id_agen_level: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "agen_levels",
          key: "id"
        },
        onUpdate: "cascade",
        onDelete: "cascade"
      },
      status: {
        type: Sequelize.INTEGER
      },
      status_tgl: {
        type: Sequelize.DATE
      },
      wilayah_kerja: {
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
    await queryInterface.dropTable('Agens');
  }
};