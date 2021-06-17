'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.hasMany(models.Image, {foreignKey: 'products_id'})
      Product.belongsTo(models.OrderDetails, {foreignKey: 'products_id'})
    }
  };
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    stock: DataTypes.INTEGER,
    stock_min: DataTypes.INTEGER,
    stock_max: DataTypes.INTEGER,
    brands_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};