var express = require('express');
var router = express.Router();
const {generate, all} = require('simple-random-message');
var response = require('../public/util/response')


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
  let message = generate('return')
  response.success(res, 'Success', message)
});

module.exports = router;