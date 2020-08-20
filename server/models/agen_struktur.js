'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class agen_struktur extends Model {};

  agen_struktur.init({
    parent_id: DataTypes.INTEGER,
    id_agen: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'ID Agen tidak boleh kosong'
        }
      }
    },
    berlaku_mulai: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Mulai masa berlaku tidak boleh kosong"
        }
      }
    },
    berlaku_akhir: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Akhir masa berlaku tidak boleh kosong"
        }
      }
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Status agen tidak boleh kosong"
        }
      }
    },
    keterangan: DataTypes.STRING
  }, 
  {
    sequelize,
    modelName: 'agen_struktur',
  });

  agen_struktur.associate = function(models) {
    agen_struktur.belongsTo(models.Agen, { foreignKey: 'id_agen' });
    agen_struktur.belongsTo(models.agen_struktur, { as: 'parent', foreignKey: 'parent_id'})
  }
  return agen_struktur;
};