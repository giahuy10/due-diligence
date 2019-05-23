'use strict';
module.exports = (sequelize, DataTypes) => {
  const hrDeptMaster = sequelize.define('hrDeptMaster', {
    COMPANY: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    DEPT_CD: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    UPDEPT_CD: DataTypes.STRING,
    DEPT_NM: DataTypes.STRING,
    DEPT_PATH: DataTypes.STRING,
    USE_YN: DataTypes.STRING,
    IF_DATE: DataTypes.STRING
  }, {
    timestamps: false,
    underscored: true,
    tableName: 'HR_DEPT_MASTER'
  });
  hrDeptMaster.associate = function(models) {
    // associations can be defined here
    hrDeptMaster.hasMany(models.hrEmpMaster, {
      as: 'Employee',
      foreignKey: 'DEPT_CD',
      sourceKey: "DEPT_CD"
    })
  };
  hrDeptMaster.removeAttribute('id');
  return hrDeptMaster;
};