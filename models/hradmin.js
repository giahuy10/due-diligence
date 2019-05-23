'use strict';
module.exports = (sequelize, DataTypes) => {
  const hrAdmin = sequelize.define('hrAdmin', {
    LOGIN_ID: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    LOGIN_PW: DataTypes.STRING,
    EMP_ID: DataTypes.STRING,
    NAME: DataTypes.STRING,
    ADMIN_STATUS: DataTypes.STRING,
    REG_DATE: DataTypes.STRING,
    REG_ID: DataTypes.STRING,
    UPT_DATE: DataTypes.STRING,
    UPT_ID: DataTypes.STRING
  }, {
    timestamps: false,
    underscored: true,
    tableName: 'HR_ADMIN'
  });
  hrAdmin.associate = function(models) {
    // associations can be defined here
    hrAdmin.belongsTo(models.hrEmpMaster, { 
      as: 'empDetail', 
      foreignKey: 'EMP_ID', 
      targetKey: 'EMP_ID'
    })
  };
  return hrAdmin;
};