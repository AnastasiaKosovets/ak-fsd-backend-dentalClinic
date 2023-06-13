'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    static associate(models) {
      // define association here
      Appointment.belongsTo(models.User, {
        foreignKey: 'doctor_id',
        as: 'doctor'
      });
      Appointment.belongsTo(models.User, {
        foreignKey: 'patient_id',
        as: 'patient'
      });
      Appointment.belongsTo(models.Treatment, {
        foreignKey: 'treatment_id',
        as: "treatment"
      })
    }
  }
  Appointment.init({
    doctor_id: DataTypes.INTEGER,
    patient_id: DataTypes.INTEGER,
    treatment_id: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Appointment',
  });
  return Appointment;
};