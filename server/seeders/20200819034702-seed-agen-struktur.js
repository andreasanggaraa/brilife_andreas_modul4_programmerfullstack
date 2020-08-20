'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('agen_strukturs', [
      {
        "id": 2,
        "parent_id": null,
        "id_agen": 7,
        "berlaku_mulai": "2020-08-01",
        "berlaku_akhir": "2021-08-01",
        "status": "A",
        "keterangan": null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "id": 3,
        "parent_id": 2,
        "id_agen": 6,
        "berlaku_mulai": "2020-08-01",
        "berlaku_akhir": "2021-08-01",
        "status": "A",
        "keterangan": null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "id": 4,
        "parent_id": 3,
        "id_agen": 9,
        "berlaku_mulai": "2020-08-01",
        "berlaku_akhir": "2021-08-01",
        "status": "A",
        "keterangan": null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "id": 5,
        "parent_id": 4,
        "id_agen": 5,
        "berlaku_mulai": "2020-08-01",
        "berlaku_akhir": "2021-08-01",
        "status": "A",
        "keterangan": null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "id": 6,
        "parent_id": 2,
        "id_agen": 8,
        "berlaku_mulai": "2020-10-01",
        "berlaku_akhir": "2021-10-01",
        "status": "N",
        "keterangan": "Mutasi Wilayah X",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "id": 19,
        "parent_id": null,
        "id_agen": 14,
        "berlaku_mulai": "2020-08-01",
        "berlaku_akhir": "2021-08-01",
        "status": "A",
        "keterangan": null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "id": 20,
        "parent_id": 19,
        "id_agen": 15,
        "berlaku_mulai": "2020-08-01",
        "berlaku_akhir": "2021-08-01",
        "status": "A",
        "keterangan": null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "id": 21,
        "parent_id": 20,
        "id_agen": 16,
        "berlaku_mulai": "2020-08-01",
        "berlaku_akhir": "2021-08-01",
        "status": "A",
        "keterangan": null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "id": 22,
        "parent_id": 21,
        "id_agen": 17,
        "berlaku_mulai": "2020-08-01",
        "berlaku_akhir": "2021-08-01",
        "status": "A",
        "keterangan": null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "id": 23,
        "parent_id": null,
        "id_agen": 18,
        "berlaku_mulai": "2020-08-01",
        "berlaku_akhir": "2021-08-01",
        "status": "A",
        "keterangan": null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "id": 24,
        "parent_id": 23,
        "id_agen": 19,
        "berlaku_mulai": "2020-08-01",
        "berlaku_akhir": "2021-08-01",
        "status": "A",
        "keterangan": null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "id": 25,
        "parent_id": 24,
        "id_agen": 20,
        "berlaku_mulai": "2020-08-01",
        "berlaku_akhir": "2021-08-01",
        "status": "A",
        "keterangan": null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "id": 26,
        "parent_id": 25,
        "id_agen": 21,
        "berlaku_mulai": "2020-08-01",
        "berlaku_akhir": "2021-08-01",
        "status": "A",
        "keterangan": null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('agen_strukturs', null, {})
  }
};
