var express = require('express');
var router = express.Router();
var pokemonService = require('./../services/pokemon.service')
var response = require('../public/util/response')

/* GET pokemon index. 
  @Author BeckZ
  @Date May 8, 2021
*/
router.get('/', function(req, res, next) {
  res.send('successfully connection');
});

/* GET get pokemon list with search field and pagination. 
  @Author BeckZ
  @Date May 8, 2021
*/
router.get('/list', function(req, res, next) {
  let resp = pokemonService.getPokemonList(req.query)
  if (resp) {
    response.success(res, "Success", resp)
  } else {
    response.success(res, "Error")
  }
});

/* GET get pokemon detail. 
  @Author BeckZ
  @Date May 8, 2021
*/
router.get('/detail', function(req, res, next) {
  let resp = pokemonService.getPokemonDetail(req.query.id)
  if (resp) {
    response.success(res, "Success", resp)
  } else {
    response.success(res, "Error")
  }
});

module.exports = router;
