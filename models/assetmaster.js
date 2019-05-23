'use strict';
module.exports = (sequelize, DataTypes) => {
  const AssetMaster = sequelize.define('AssetMaster', {
    ASSET_NO: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    SERIAL_NO: DataTypes.STRING,
    SAP_ASSET_NO: DataTypes.STRING,
    ASSET_GROUP: DataTypes.STRING,
    MODEL_SPEC: DataTypes.STRING,
    COST_CENTER: DataTypes.STRING,
    EMP_ID: DataTypes.STRING,
    LOCATION: DataTypes.STRING,
    SAP_GROUP: DataTypes.STRING,
    NOTE: DataTypes.STRING,
    ASSET_STATUS: DataTypes.STRING,
    RTN_DUE_DATE: DataTypes.STRING,
    SAP_SYNC: DataTypes.STRING,
    SAP_SYNC_DATE: DataTypes.STRING,
    SAP_SYNC_LOGIN_ID: DataTypes.STRING,
    DISUSE_DATE: DataTypes.STRING,
    DISUSE_LOGIN_ID: DataTypes.STRING,
    REG_DATE: DataTypes.STRING,
    REG_LOGIN_ID: DataTypes.STRING,
    UPT_DATE: DataTypes.STRING,
    UPT_LOGIN_ID: DataTypes.STRING
  }, {
    timestamps: false,
    underscored: true,
    tableName: 'ASSET_MASTER'
  });
  AssetMaster.associate = function(models) {

  };
  return AssetMaster;
};