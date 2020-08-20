'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class agen_level extends Model {};

  agen_level.init({
    level: DataTypes.STRING,
    keterangan: DataTypes.STRING,
    urutan: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'agen_level',
  });

    agen_level.associate = function(models) {
      agen_level.hasMany(models.Agen, { foreignKey: 'id_agen_level' })
    }
  
  return agen_level;
};