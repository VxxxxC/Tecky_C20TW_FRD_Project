import express from 'express'
import { client } from './db'

export let server = express()

let port = 8080

//-------------------Express Connect----------------------------
server.listen(port, () => {
    console.log(port)
})

//-------------------PostgreSQL Connect------------------------
client.connect(err => {
    if (err) {
      console.error("database connect error : ", err)
    } else {
      console.log(`Database => ${client.database}, Port => ${client.port}, connected by => ${client.user}`)
    }
  })