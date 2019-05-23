var express = require('express')
var app = express()
var cors = require('cors')
var bodyParser = require('body-parser')
var assetAppRouter = require('./routes')
var hrAdminRouter = require('./routes/hradmin');
var jwt = require('jsonwebtoken');
const scretKey = 'LDCC_ASSET_*(@)DAZ';
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
const corsOptions = {
  exposedHeaders: 'Authorization',
};
app.use(express.static('views'))
app.use(cors(corsOptions))
var checkUserLogged = (req, res, next) => {
    // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'] || req.headers['access-token'] ||req.header('token');
  // decode token
  if (token) {
    // verifies secret and checks exp
    jwt.verify(token, scretKey, (err, decoded) => {       
        if (err) {
            return res.json({ success: false, message: 'Failed to authenticate token.', header : req.headers });       
        } else {
            // if everything is good, save to request for use in other routes
            req.decoded = decoded;         
            next();
        }
    });
  } else {
    // if there is no token
    // return an error
    return res.status(403).send({ 
        success: false, 
        message: 'No token provided.' 
    });
  }
}
app.use('/app/api/v1/hradmin', hrAdminRouter)
app.use(checkUserLogged) // Protect routes with Json Web Token
app.use('/app/api/v1', assetAppRouter)

app.listen(3000, () => console.log(`App listening on port 3000!`))