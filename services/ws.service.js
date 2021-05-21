var ws = require('ws');
var jwt = require('express-jwt');
let connection = 0

const wsServer = new ws.Server({ port:33000 })
wsServer.on('connection', (ws, request, client) => {
  connection ++
  // console.log('OPEN', `Totle number of connection ${connection}`)
  ws.on('message', (msg) => {
    // console.log(wsServer.clients)
    console.log(request.headers.cookie)
    let obj = {
      username: 'Beck',
      dateTime: new Date(),
      msg: 'S2105ZB0038 is been editing'
    }
    setInterval(() => {
      ws.send(JSON.stringify(obj))
      console.log(`Received message ${msg}`)
    }, 20000)
  })

  // console.log(client)

  ws.on('close', (code, reason) => {
    connection --
    console.log(`Closed ${code} ${reason} : ${connection}`)
  })
})
