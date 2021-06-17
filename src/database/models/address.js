'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    static associate(models) {
      // define association here
      Address.belongsTo(models.User, {foreignKey: 'address_id'})
    }
  };
  Address.init({
    street: DataTypes.STRING,
    number: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Address',
  });
  return Address;
};