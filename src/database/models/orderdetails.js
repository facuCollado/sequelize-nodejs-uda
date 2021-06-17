'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderDetails extends Model {
    static associate(models) {
      OrderDetails.hasOne(models.Product)
    }
  };
  OrderDetails.init({
    quantity: DataTypes.DECIMAL,
    subtotal: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'OrderDetails',
  });
  return OrderDetails;
};