import express from 'express'

export let server = express()

let port = 8080

server.listen(port, () => {
    console.log(port)
})