var data = require('../public/util/pokedex.json');
function getPokemonList(req) {
  let dataList = []
  data.forEach(element => {
    if (element.name.english.includes(req.body.keyWord) || element.name.japanese.includes(req.body.keyWord) || element.name.chinese.includes(req.body.keyWord) || element.name.french.includes(req.body.keyWord) ) {
      dataList.push(element)
    }
  })
  let totalSize = dataList.length
  let totalPages = Math.ceil(totalSize/req.body.pageSize)
  let startPosition = (req.body.pageIndex - 1) * req.body.pageSize
  let endPosition = req.body.pageIndex * req.body.pageSize
  let respList = dataList.slice(startPosition, endPosition)
  let respData = {
    "totalSize": totalSize,
    "totalPages": totalPages,
    "pageIndex": req.body.pageIndex,
    "pageSize": req.body.pageSize,
    "data": respList
  }
  return respData
}

function getPokemonDetail(id) {
  let pokemon = {}
  data.forEach(element => {
    if (element.id == id) {
      let enName = element.name.english.toLowerCase()
      element.imgUrl = `https://img.pokemondb.net/artwork/${enName}.jpg`
      pokemon = element
    }
  })
  return pokemon
}

module.exports = { 
  getPokemonList,
  getPokemonDetail
}