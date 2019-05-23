'use strict';
module.exports = (sequelize, DataTypes) => {
  const sapMaster = sequelize.define('sapMaster', {
    SAP_ASSET_NO: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    SERIAL_NO: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    
    MODEL_SPEC: DataTypes.STRING,
    COST_CENTER: DataTypes.STRING,
    ADM_COST_CENTER: DataTypes.STRING,
    EMP_ID: DataTypes.INTEGER,
    LOCATION: DataTypes.STRING,
    SAP_GROUP: DataTypes.STRING,
    NOTE: DataTypes.STRING,
    ADATU: DataTypes.STRING,
    GET_DATE: DataTypes.STRING,
    SAP_SYNC: DataTypes.STRING,
    SAP_SYNC_DATE: DataTypes.STRING,
    SAP_SYNC_LOGIN_ID: DataTypes.STRING,
    REG_DATE: DataTypes.STRING,
    REG_LOGIN_ID: DataTypes.STRING,
    UPT_DATE: DataTypes.STRING,
    UPT_LOGIN_ID: DataTypes.STRING
  }, {
    timestamps: false,
    underscored: true,
    tableName: 'SAP_ASSET_MASTER'
  });
  sapMaster.associate = function(models) {

  };
  return sapMaster;
};