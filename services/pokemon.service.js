var data = require('../public/util/pokedex.json');
function getPokemonList(body) {
  let dataList = []
  data.forEach(element => {
    if (element.name.english.includes(body.keyWord) || element.name.japanese.includes(body.keyWord) || element.name.chinese.includes(body.keyWord) || element.name.french.includes(body.keyWord) ) {
      dataList.push(element)
    }
  })
  let totalSize = dataList.length
  let totalPages = Math.ceil(totalSize/body.pageSize)
  let startPosition = (body.pageIndex - 1) * body.pageSize
  let endPosition = body.pageIndex * body.pageSize
  let respList = dataList.slice(startPosition, endPosition)
  let respData = {
    "totalSize": totalSize,
    "totalPages": totalPages,
    "pageIndex": body.pageIndex,
    "pageSize": body.pageSize,
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