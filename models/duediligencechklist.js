'use strict';
module.exports = (sequelize, DataTypes) => {
  const dueDiligenceChklist = sequelize.define('dueDiligenceChklist', {
    YEAR: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    TRIAL: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    ASSET_NO: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    DD_CHK_TYPE:{
      type: DataTypes.STRING,
      primaryKey: true
    },
    CHECK_YN: DataTypes.STRING,
    CHECK_NOTE: DataTypes.STRING,
    REG_EMP_ID: DataTypes.STRING,
    UPT_EMP_ID: DataTypes.STRING,
    UPT_DATE: DataTypes.STRING
  }, {
    timestamps: false,
    underscored: true,
    tableName: 'DUE_DILIGENCE_CHKLIST'
  });
  // dueDiligenceChklist.associate = function(models) {
  //   // associations can be defined here
  // };
  return dueDiligenceChklist;
};