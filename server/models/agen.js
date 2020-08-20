'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Agen extends Model {};

  Agen.init({
    no_lisensi: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Nomor lisensi sudah terdaftar'
      },
      validate: {
        notNull: {
          args: true,
          msg: 'Nomor lisensi tidak boleh kosong'
        },
        isNumeric: {
          args: true,
          msg: 'Nomor lisensi harus berformat numeric'
        }
      }
    },
    nama_agen: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Nama Agen tidak boleh kosong'
        }
      }
    },
    id_agen_level: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Level agen tidak boleh kosong'
        }
      }
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Status agen tidak boleh kosong'
        }
      }
    },
    status_tgl: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    wilayah_kerja: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Wilayah kerja agen tidak boleh kosong'
        }
      }
    }
  },
  {
    hooks: {
      beforeCreate: (agen, options) => {
        agen.nama_agen = agen.nama_agen.toUpperCase();
        agen.wilayah_kerja = agen.wilayah_kerja.toUpperCase();
      }
    },
    sequelize,
    modelName: 'Agen',
  });
  Agen.associate = function(models) {
    Agen.belongsTo(models.agen_level, { foreignKey: 'id_agen_level', targetKey: 'id' });
    Agen.hasOne(models.agen_struktur, { foreignKey: 'id_agen' });
  }
  
  return Agen;
};