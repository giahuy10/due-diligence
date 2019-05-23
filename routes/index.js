var express = require('express');
var router = express.Router();
var model = require('../models');
var moment = require('moment');
router
  // Get list of departments
  .get('/getDeptList', (req, res) => model.hrDeptMaster.findAll({ attributes: [['DEPT_CD', 'value'], ['DEPT_NM', 'text']]}).then(data => res.json(data)).catch(err => res.json(err)))

  // Get list users from department CD
  .get('/getUserList/:deptCD', (req, res) => model.hrEmpMaster.findAll({ where: { DEPT_CD: req.params.deptCD}, attributes: [['EMP_ID', 'value'], ['EMP_NM', 'text']]}).then(data => res.json(data)).catch(err => res.json(err)))

  // Search user

  .get('/searchUser/:keyword', (req, res) => {
    model.hrEmpMaster.findAll({
      where: {
        $or: [
          {
            EMP_NM: { $like: '%'+req.params.keyword+'%' } 
          },
          { 
            EMP_ID: { $like: '%'+req.params.keyword+'%' } 
          },
        ]
      }
    })
    .then(data => res.json(data))
    .catch(err => res.json(err))
  })

  // Search SAP
  .post('/getSAPList', (req, res) => {
    let where = 'where [SAP_ASSET_NO] != \'\' '
    if (req.body.SAP_ASSET_NO) {
      where += ' and [SAP_ASSET_NO] like \'%'+req.body.SAP_ASSET_NO+'%\' '
    }
    if (req.body.SERIAL_NO) {
      where += ' and [SERIAL_NO] like \'%'+req.body.SERIAL_NO+'%\' '
    }
    if (req.body.MODEL_SPEC) {
      where += ' and [MODEL_SPEC] like \'%'+req.body.MODEL_SPEC+'%\' '
    }
    if (req.body.EMP_ID) {
      where += ' and sap.[EMP_ID] = '+req.body.EMP_ID+' '
    }
    let query = "SELECT sap.*,  [EMP_NM] as useEmpName, em.[DEPT_NM] as useEmpDeptName FROM [dbo].[SAP_ASSET_MASTER] as sap LEFT JOIN [dbo].[HR_EMP_MASTER] as em ON sap.[EMP_ID] = em.[EMP_ID] " +where
    model.sequelize
      .query(query, 
        { type: model.sequelize.QueryTypes.SELECT}
      )
      .then(data => res.json(data))
      .catch(err => res.json(err))
  })

   // Search Asset 
  .post('/getAssetList', (req, res) => {
    let where = 'where [ASSET_NO] != \'\' '
    if (req.body.SAP_ASSET_NO) {
      where += ' and [ASSET_NO] like \'%'+req.body.ASSET_NO+'%\' '
    }
    if (req.body.SERIAL_NO) {
      where += ' and [SERIAL_NO] like \'%'+req.body.SERIAL_NO+'%\' '
    }
    if (req.body.MODEL_SPEC) {
      where += ' and [MODEL_SPEC] like \'%'+req.body.MODEL_SPEC+'%\' '
    }
    if (req.body.EMP_ID) {
      where += ' and sap.[EMP_ID] = '+req.body.EMP_ID+' '
    }
    let query = "SELECT sap.*,  [EMP_NM] as useEmpName, em.[DEPT_NM] as useEmpDeptName FROM [dbo].[ASSET_MASTER] as sap LEFT JOIN [dbo].[HR_EMP_MASTER] as em ON sap.[EMP_ID] = em.[EMP_ID] " +where
    model.sequelize
      .query(query, 
        { type: model.sequelize.QueryTypes.SELECT}
      )
      .then(data => res.json(data))
      .catch(err => res.json(err))
  })

  // Get asset info join with user detail
  .post('/getAssetInfo', (req, res) => {
    var where = ''
    if (req.body.YEAR && req.body.TRIAL) {
      where = "WHERE [YEAR] = "+req.body.YEAR+" and [TRIAL] = "+req.body.TRIAL+ " and ( [ASSET_NO] = '"+req.body.assetNo+"' or dd.[SAP_ASSET_NO] = '"+req.body.assetNo+"') ORDER BY [YEAR] DESC, [TRIAL] DESC"
    } else {
      where = "WHERE [ASSET_NO] = '"+req.body.assetNo+"' or dd.[SAP_ASSET_NO] = '"+req.body.assetNo+"' ORDER BY [YEAR] DESC, [TRIAL] DESC"
    }
    let query = "SELECT TOP 1 [YEAR], [TRIAL], [ASSET_NO], dd.[SAP_ASSET_NO], dd.[ASSET_GROUP], dd.[SERIAL_NO], dd.[USE_EMP_ID], dd.[DD_EMP_ID], dd.[GET_DATE], [DD_STATUS], dd.[NOTE], " + 
    "em.[EMP_NM] as useEmpName, em.[DEPT_NM] as useEmpDeptName, em.[DEPT_CD] as emDeptCD, ed.[EMP_NM] as ddEmpName, ed.[DEPT_NM] as ddEmpDeptName, sap.[GET_DATE] as sapGetDate, sap.[NOTE] as sapNote " + 
    "FROM [dbo].[DUE_DILIGENCE_MASTER] as dd " +
    "LEFT JOIN [dbo].[HR_EMP_MASTER] as em ON dd.[USE_EMP_ID] = em.[EMP_ID] " +
    "LEFT JOIN [dbo].[SAP_ASSET_MASTER] as sap on dd.[SAP_ASSET_NO] = sap.[SAP_ASSET_NO] "+
    "LEFT JOIN [dbo].[HR_EMP_MASTER] as ed ON dd.[DD_EMP_ID] = ed.[EMP_ID] " + where
    console.log(query)
    model.sequelize
    .query(query, 
      { type: model.sequelize.QueryTypes.SELECT}
    )
    .then(data => {
   
      res.json(data[0])
    })
  })

  // Check asset number
  .post('/checkAssetMaster', (req, res) => {
    
    if (req.body.type === 'ASSET_NO') {
      let where = {
        YEAR: req.body.YEAR,
        TRIAL: req.body.TRIAL,
        ASSET_NO: req.body.assetNo
      }
      model.AssetMaster.findOne({
        where: {
          ASSET_NO: req.body.assetNo
        }
      })
      .then(data => {
        if (data) {
          model.dueDiligenceMaster
          .findOne({
            where,
            order: [
              ['YEAR', 'DESC'],
              ['TRIAL', 'DESC']
            ]
          })
          .then(data => {
            res.json(data)
          })
          .catch(err => res.json(err))
        } else {
          res.status(404).json()
        }
      })
      .catch(err => console.log(err))
    } else {
      let where = {
        YEAR: req.body.YEAR,
        TRIAL: req.body.TRIAL,
        SAP_ASSET_NO: req.body.assetNo
      }
      model.sapMaster.findOne({
        where: {
          SAP_ASSET_NO: req.body.assetNo
        }
      })
      .then(data => {
        if (data) {
          model.dueDiligenceMaster
          .findOne({
            where,
            order: [
              ['YEAR', 'DESC'],
              ['TRIAL', 'DESC']
            ]
          })
          .then(data => {
            res.json(data)
          })
          .catch(err => res.json(err))
        } else {
          res.status(404).json()
        }
      })
      .catch(err => console.log(err))

    }
    
  })

  // Update Due Diligence Master table
  .post('/updateDueDiligenceMaster', (req, res) => {
    let userId = req.decoded.user.empDetail ? req.decoded.user.empDetail.EMP_ID : ''
    req.body.UPT_EMP_ID = userId
    req.body.DD_EMP_ID = userId
    model.dueDiligenceMaster.findOne(
      {
        where: {
          YEAR: req.body.YEAR,
          TRIAL: req.body.TRIAL,
          $or: [
            {ASSET_NO: req.body.ASSET_NO },
            {SAP_ASSET_NO: req.body.SAP_ASSET_NO },
          ]
        },
        order: [
          ['YEAR', 'DESC'],
          ['TRIAL', 'DESC']
        ]
      }
    )
    .then(data => {
      if (data.DD_STATUS === 'S' || req.body.DD_STATUS === 'D') {
        req.body.UPT_DATE = moment().format('YYYY-MM-DD HH:mm:ss')
        model.dueDiligenceMaster
        .update(req.body, {
          where: {
            YEAR: req.body.YEAR,
            TRIAL: req.body.TRIAL,
            $or: [
              {ASSET_NO: req.body.ASSET_NO },
              {SAP_ASSET_NO: req.body.SAP_ASSET_NO },
            ]
          }
        })
        .then(response => res.json(response))
        .catch(err => res.json(err))
      } else {
        res.json({
          err: true,
          msg: 'Cannot edit',
          data,
          body: req.body
        })
      }
    })
    .catch(err => res.json(err))
    
  })

  // Create Due Diligence CheckList
  .post('/storeDueDiligenceCheckList', (req, res) => {
    let userId = req.decoded.user.empDetail ? req.decoded.user.empDetail.EMP_ID : ''
      model.dueDiligenceChklist
        .findOne({
          where: {
            YEAR: req.body.YEAR,
            TRIAL: req.body.TRIAL,
            ASSET_NO: req.body.ASSET_NO,
            DD_CHK_TYPE: req.body.DD_CHK_TYPE
          }
        })
        .then(response => {
          if (response) {
            req.body.UPT_EMP_ID = userId
            req.body.UPT_DATE = moment().format('YYYY-MM-DD HH:mm:ss')
            response.update(req.body)
            .then(response => res.json(response))
            .catch(err => res.json(err))
          } else {
            req.body.REG_EMP_ID = userId
            req.body.UPT_DATE = moment().format('YYYY-MM-DD HH:mm:ss')
            model.dueDiligenceChklist
              .create(req.body)
              .then(response => res.json(response))
              .catch(err => res.json(err))
          }
        })
        .catch(err => console.log(err))
  })

  // Check Due Diligence Schedule
  .get('/checkDueDiligenceSchedule', (req, res) => {
    model.dueDiligenceSchedule.findOne({
      where: {
        START_DATE: {
          $lt: moment().format('YYYY-MM-DD HH:mm:ss')
        },
        END_DATE_TEMP: {
          $gt: moment().format('YYYY-MM-DD HH:mm:ss')
        },
      }
    })
    .then(date => {
      let validDate = null
      if (date) {
        validDate = {
          year: date.YEAR,
          trial: date.TRIAL
        }
      }
      res.json(validDate)
    })
    .catch(err => res.json(err))
  })
module.exports = router;
