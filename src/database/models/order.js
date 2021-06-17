'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.hasOne(models.Shipping)
      Order.hasOne(models.State)
      Order.hasOne(models.Payment)
      Order.hasMany(models.OrderDetails, {foreignKey: 'orders_id'})
    }
  };
  Order.init({
    number: DataTypes.INTEGER,
    date: DataTypes.DATE,
    total: DataTypes.DECIMAL,
    payments_id: DataTypes.INTEGER,
    users_addresses: DataTypes.INTEGER,
    states_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};