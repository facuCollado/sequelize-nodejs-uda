'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasOne(models.Address, {foreignKey: 'users_id'})
      User.hasMany(models.Order, {foreignKey: 'users_id'})
      User.belongsToMany(models.Role, {through: 'UserHasRole', foreignKey: 'users_id'})
    }
  };
  User.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    address_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};