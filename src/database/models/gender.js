'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Gender extends Model {
    static associate(models) {
      Gender.hasMany(models.Product, {foreignKey: 'genders_id'})
    }
  };
  Gender.init({
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Gender',
  });
  return Gender;
};