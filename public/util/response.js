function success(resp, msg, data) {
  resp.send({
    "respCode": "A0000",
    "respMsg": msg,
    "respData": data
  })
}
function error(resp, msg) {
  resp.send({
    "respCode": "E0000",
    "respMsg": msg,
    "respData": ""
  })
}
module.exports = { 
  success,
  error
}