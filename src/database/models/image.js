'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    static associate(models) {
      Image.belongsTo(models.Product, {foreignKey: 'products_id'})
    }
  };
  Image.init({
    name: DataTypes.STRING,
    url: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Image',
  });
  return Image;
};