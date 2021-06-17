'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    static associate(models) {
      Role.belongsToMany(models.User, {through: 'UserHasRole', foreignKey: 'roles_id'})
    }
  };
  Role.init({
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Role',
  });
  return Role;
};