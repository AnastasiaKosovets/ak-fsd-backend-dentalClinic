'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    
    static associate(models) {
      // define association here
      User.belongsTo(models.Role, {
        foreignKey: 'role_id'
      });
      User.hasMany(models.Appointment, {
        foreignKey: 'doctor_id',
        as: 'doctor'
      });
      User.hasMany(models.Appointment, {
        foreignKey: 'patient_id',
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