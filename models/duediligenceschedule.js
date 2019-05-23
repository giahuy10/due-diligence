'use strict';
module.exports = (sequelize, DataTypes) => {
  const dueDiligenceSchedule = sequelize.define('dueDiligenceSchedule', {
    YEAR: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    TRIAL: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    START_DATE: DataTypes.STRING,
    END_DATE_TEMP: DataTypes.STRING,
    END_DATE: DataTypes.STRING,
    REG_EMP_ID: DataTypes.STRING,
    REG_DATE: DataTypes.STRING,
    UPT_EMP_ID: DataTypes.STRING,
    UPT_DATE: DataTypes.STRING
  }, {
    timestamps: false,
    underscored: true,
    tableName: 'DUE_DILIGENCE_SCHEDULE'
  });
  // dueDiligenceSchedule.associate = function(models) {
  //   // associations can be defined here
  // };
  return dueDiligenceSchedule;
};