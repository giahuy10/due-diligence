'use strict';
module.exports = (sequelize, DataTypes) => {
  const hrEmpMaster = sequelize.define('hrEmpMaster', {
    COMPANY: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    EMP_ID: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    EMP_NM: DataTypes.STRING,
    LOGIN_ID: DataTypes.STRING,
    DEPT_CD: DataTypes.STRING,
    DEPT_NM: DataTypes.STRING,
    JOB_POSITION: DataTypes.STRING,
    POSITION: DataTypes.STRING,
    RETR_DATE: DataTypes.STRING,
    USE_YN: DataTypes.STRING,
    IF_DATE: DataTypes.STRING
  }, {
    timestamps: false,
    underscored: true,
    tableName: 'HR_EMP_MASTER'
  });
  hrEmpMaster.removeAttribute('id');
  hrEmpMaster.associate = function(models) {
    hrEmpMaster.belongsTo(models.hrDeptMaster, { 
      as: 'Dept', 
      foreignKey: 'DEPT_CD', 
      targetKey: 'DEPT_CD'
    })
  };
  return hrEmpMaster;
};