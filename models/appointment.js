'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    static associate(models) {
      // define association here
      Appointment.belongsTo(models.User, {
        foreignKey: 'user_id1',
        as: 'doctor'
      });
      Appointment.belongsTo(models.User, {
        foreignKey: 'user_id2',
        as: 'patient'
      });
      Appointment.belongsTo(models.Treatment, {
        foreignKey: 'treatment_id',
        as: "treatment"
      })
    }
  }
  Appointment.init({
    user_id1: DataTypes.INTEGER,
    user_id2: DataTypes.INTEGER,
    treatment_id: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Appointment',
  });
  return Appointment;
};