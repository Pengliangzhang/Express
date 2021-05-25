var ws = require('ws');
var jwt = require('express-jwt');
const {generate, all} = require('simple-random-message');

let connection = 0

function getMessageByUser(id) {
  let messageList = []
  for (let index = 0; index < 10; index++) {
    const dateTime = new Date()
    const timeStr = dateTime.toTimeString().split(' ')[0]
    const time = `${dateTime.getFullYear()}-${dateTime.getMonth() + 1}-${dateTime.getDate()} ${timeStr}`
    let message = {
      origin: 'Beck',
      to: 'Pengliang',
      receivedDateTime: time,
      timeStamp: dateTime.getTime()+index,
      msg: generate('return')
    }
    messageList.push(message)
  }
  return messageList
}

const wsServer = new ws.Server({ port:33000 })
wsServer.on('connection', (ws, request, client) => {
  connection ++
  // console.log('OPEN', `Totle number of connection ${connection}`)
  ws.on('message', (msg) => {
    // console.log(wsServer.clients)
    console.log(request.headers.cookie)
    const dateTime = new Date()
    const timeStr = dateTime.toTimeString().split(' ')[0]
    const time = `${dateTime.getFullYear()}-${dateTime.getMonth() + 1}-${dateTime.getDate()} ${timeStr}`
    let obj = {
      origin: 'Beck',
      to: 'Pengliang',
      receivedDateTime: time,
      timeStamp: dateTime.getTime(),
      msg: generate('return')
    }
    setTimeout(() => {
      ws.send(JSON.stringify(obj))
      console.log(`Received message ${msg}`)
    }, 2000)
  })

  // console.log(client)

  ws.on('close', (code, reason) => {
    connection --
    console.log(`Closed ${code} ${reason} : ${connection}`)
  })
})

module.exports = {
  getMessageByUser
}