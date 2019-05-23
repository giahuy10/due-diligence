var express = require('express');
var router = express.Router();
var model = require('../models')
var jwt = require('jsonwebtoken');
const scretKey = 'LDCC_ASSET_*(@)DAZ';

var moment = require('moment');

router.get('/', function(req, res) {
  model.hrAdmin.findAll({include: ['Assets']}).then(data => res.json(data)).catch(err => res.json(err))
});
router
.post('/', (req, res) => {
  model.hrAdmin
    .create(req.body)
    .then(response => res.json(response))
    .catch(err => res.json(err))
})

// Login
.post('/login', function(req, res) {
  if (!req.body.loginId || !req.body.pass) {
    res.status(400).send('아이디하고 패스워드 채워주십시오')
  } else {
    model.hrAdmin.findOne({ 
      where: { LOGIN_ID: req.body.loginId.trim() },
      attributes: ['LOGIN_ID', 'NAME', 'ADMIN_STATUS'],
      include: ['empDetail'] 
    })
    .then(user => {
      if (!user) {
        res.status(404).send('존재하지 않는 아이디입니다')
      } else {
        let checkPassword = true

        // Verify password later here
        
        if (checkPassword) {
          let expiresIn = 60 * 30
          if (req.body.remember) {
            expiresIn = 60 * 60 * 24
          }
          var token = jwt.sign({ user }, scretKey, { expiresIn });
          res.set('Authorization', token);
          res.json(user)      
        } else {
          res.status(401).send('비밀번호가 맞지 않습니다')
        }  
      }
    })
    .catch(err => res.json(err))
  }
})

// Verify token key
.post('/verifyTokenkey', (req, res) => {
  var token = req.body.token || req.query.token || req.headers['x-access-token'] || req.headers['access-token'] ||req.header('token');
  jwt.verify(token, scretKey, (err, decoded) => {       
    if (err) {
        res.status(403).json({ success: false, message: '토근을 인증하지 못 했습니다'});       
    } else {      
      if (req.body.adminStatus === 'E') {
        model.dueDiligenceSchedule
          .findOne({
            where: {
              START_DATE: {
                $lte: moment().format('YYYY-MM-DD')
              },
              END_DATE_TEMP: {
                $gte: moment().format('YYYY-MM-DD')
              },
            }
          })
          .then(date => {
            let validDate = null
            if (date) {
              validDate = {
                YEAR: date.YEAR,
                TRIAL: date.TRIAL
              }
            }
            res.json(validDate)
          })
          .catch(err => res.json(err))
      } else {
        model.dueDiligenceSchedule
          .findAll({
            limit: 1,
            order: [
              ['YEAR', 'DESC'],
              ['TRIAL', 'DESC']
            ]
          })
          .then(date => {
            let validDate = {
              YEAR: date[0].YEAR,
              TRIAL: date[0].TRIAL
            }
            res.json(validDate)
          })
      }
    }
  })
})
module.exports = router;
