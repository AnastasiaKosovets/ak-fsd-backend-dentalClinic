'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Role, {
        foreignKey: 'role_id'
      });
      User.hasMany(models.Appointments, {
        foreignKey: 'user_id1',
        as: 'doctor'
      });
      User.hasMany(models.Appointments, {
        foreignKey: 'user_id2',
        as: 'patient'
      });
    }
  }
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    document: DataTypes.STRING,
    dateOfBirth: DataTypes.STRING,
    address: DataTypes.STRING,
    telefonNumber: DataTypes.INTEGER,
    collegialNumber: DataTypes.INTEGER,
    role_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};