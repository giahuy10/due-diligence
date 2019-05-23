'use strict';
module.exports = (sequelize, DataTypes) => {
  const dueDiligenceMaster = sequelize.define('dueDiligenceMaster', {
    YEAR: DataTypes.STRING,
    TRIAL: DataTypes.STRING,
    ASSET_NO: DataTypes.STRING,
    SAP_ASSET_NO: DataTypes.STRING,
    EPRO_ASSET_NO: DataTypes.STRING,
    ASSET_GROUP: DataTypes.STRING,
    SERIAL_NO: DataTypes.STRING,
    USE_EMP_ID: DataTypes.STRING,
    DD_EMP_ID: DataTypes.STRING,
    GET_DATE: DataTypes.STRING,
    DD_STATUS: DataTypes.STRING,
    REG_DATE: DataTypes.STRING,
    REG_EMP_ID: DataTypes.STRING,
    UPT_EMP_ID: DataTypes.STRING,
    UPT_DATE: DataTypes.STRING,
    NOTE: DataTypes.STRING
  }, {
    timestamps: false,
    underscored: true,
    tableName: 'DUE_DILIGENCE_MASTER'
  });
  dueDiligenceMaster.removeAttribute('id');
  dueDiligenceMaster.associate = function(models) {
    // associations can be defined here
  };
  
  return dueDiligenceMaster;
};