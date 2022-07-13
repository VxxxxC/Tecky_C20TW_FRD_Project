import express from 'express'
import { productRoute } from './products'
import cors from 'cors'


export let app = express()
app.use('/img',express.static('img'))
app.use(cors({origin:'http://localhost:3000'}));


type req = express.Request
type res = express.Response

app.get('/', function (req, res) {
  res.end('Hello World')
})

app.get("test", (req, res) => {

    console.log("hi")

     res.json("hi")
})


// app.get("/products", (req, res) => {

//     let items = [
//         { img: "img/1.jpg", name: "test item 1", price : 80},
//         { img: "img/2.jpg", name: "test item 2", price : 500},
//         { img: "img/3.jpg", name: "test item 3", price : 4000},
//         { img: "img/4.jpg", name: "test item 4", price : 18000},
//     ]

//      res.json(items)
// })

app.use(productRoute);


let port = 8080

app.listen(port, () => {
    console.log(port)
})