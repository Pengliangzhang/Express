var express = require('express');
var router = express.Router();
var response = require('../public/util/response')
var { getMessageByUser } = require('./../services/ws.service')


/* GET message index. 
  @Author BeckZ
  @Date May 22, 2021
*/
router.get('/', function(req, res, next) {
  res.send('successfully connection');
});

/* GET message by user id. 
  @Author BeckZ
  @Date May 22, 2021
*/
router.get('/byuser', function(req, res, next) {
  response.success(res, 'Success', getMessageByUser())
});

module.exports = router;