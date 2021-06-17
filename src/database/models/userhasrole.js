'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserHasRole extends Model {
    static associate(models) {
      UserHasRole.belongsTo(models.User, {foreignKey: 'users_id'})
      UserHasRole.belongsTo(models.Role, {foreignKey: 'roles_id'})
    }
  };
  UserHasRole.init({
    users_id: DataTypes.INTEGER,
    roles_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserHasRole',
  });
  return UserHasRole;
};