'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Treatment extends Model {
    
    static associate(models) {
      // define association here
      Treatment.hasMany(models.Appointment, {
        foreignKey: 'treatment_id'
      });
    }
  }
  Treatment.init({
    treatmentName: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    appointment_id: DataTypes.INTEGER

  }, {
    sequelize,
    modelName: 'Treatment',
  });
  return Treatment;
};