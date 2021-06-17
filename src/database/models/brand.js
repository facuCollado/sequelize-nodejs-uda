'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Brand extends Model {
    static associate(models) {
      // define association here
      Brand.hasMany(models.Product, {foreignKey: 'brands_id'})
    }
  };
  Brand.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Brand',
  });
  return Brand;
};