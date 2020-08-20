'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('Agens', [
      {
        "id": 5,
        "no_lisensi": 1001,
        "nama_agen": "SITI",
        "id_agen_level": 1,
        "status": 1,
        "status_tgl": "2020-01-01",
        "wilayah_kerja": "JAKARTA",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "id": 6,
        "no_lisensi": 1003,
        "nama_agen": "SARIOH",
        "id_agen_level": 3,
        "status": 1,
        "status_tgl": "2020-01-03",
        "wilayah_kerja": "JAKARTA",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "id": 7,
        "no_lisensi": 1004,
        "nama_agen": "TIKNO",
        "id_agen_level": 4,
        "status": 1,
        "status_tgl": "2020-01-04",
        "wilayah_kerja": "JAKARTA",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "id": 8,
        "no_lisensi": 1002,
        "nama_agen": "LUKMAN",
        "id_agen_level": 2,
        "status": 0,
        "status_tgl": "2020-06-15",
        "wilayah_kerja": "JAKARTA",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "id": 9,
        "no_lisensi": 1005,
        "nama_agen": "SUGIMAN",
        "id_agen_level": 2,
        "status": 1,
        "status_tgl": "2020-07-01",
        "wilayah_kerja": "JAKARTA",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "id": 14,
        "no_lisensi": 3001,
        "nama_agen": "TITIS",
        "id_agen_level": 4,
        "status": 1,
        "status_tgl": "2020-01-01",
        "wilayah_kerja": "YOGYAKARTA",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "id": 15,
        "no_lisensi": 3003,
        "nama_agen": "MULYADI",
        "id_agen_level": 3,
        "status": 1,
        "status_tgl": "2020-01-03",
        "wilayah_kerja": "YOGYAKARTA",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "id": 16,
        "no_lisensi": 3004,
        "nama_agen": "JUMINI",
        "id_agen_level": 2,
        "status": 1,
        "status_tgl": "2020-01-04",
        "wilayah_kerja": "YOGYAKARTA",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "id": 17,
        "no_lisensi": 3002,
        "nama_agen": "JOKO",
        "id_agen_level": 1,
        "status": 1,
        "status_tgl": "2020-06-15",
        "wilayah_kerja": "YOGYAKARTA",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "id": 18,
        "no_lisensi": 2001,
        "nama_agen": "JATMIKO",
        "id_agen_level": 4,
        "status": 1,
        "status_tgl": "2020-01-01",
        "wilayah_kerja": "PONTIANAK",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "id": 19,
        "no_lisensi": 2002,
        "nama_agen": "JAMILAH",
        "id_agen_level": 3,
        "status": 1,
        "status_tgl": "2020-06-16",
        "wilayah_kerja": "PONTIANAK",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "id": 20,
        "no_lisensi": 2003,
        "nama_agen": "SULAIMAN",
        "id_agen_level": 2,
        "status": 1,
        "status_tgl": "2020-01-03",
        "wilayah_kerja": "PONTIANAK",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "id": 21,
        "no_lisensi": 2004,
        "nama_agen": "BEKTI",
        "id_agen_level": 1,
        "status": 1,
        "status_tgl": "2020-01-04",
        "wilayah_kerja": "PONTIANAK",
        createdAt: new Date(),
        updatedAt: new Date()
      }], {})
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Agens', null, {});
  }
};
