import express from 'express'
import { productRoute } from './products'
import cors from 'cors'
import { client } from "./db"
import { loginRoute } from './loginRoute'
import { signUpRoute } from './signUpRoute'
import { userRoute } from './userRoute'
import { stripeRoutes } from './payment'
import { stripeHookRoutes } from './paymenthook'
import jwt from 'jsonwebtoken'
import { knex } from './knex'



export let app = express()
let port = 8080

export const stripe = require("stripe")('sk_test_51KyUlaDdiwtuqw1vAQVdCWI2ed6FIjxIxgRu1QAwxWp86WfVqYuTEAqAHCt6YXJnjRZi2GoIcdkgmwFLwzjKOEmB00Ci8x9VsU');
app.use(stripeHookRoutes)


// app.use('/img', express.static('../img'))
// app.use('/img', express.static('./img'))

app.use(cors({ origin: 'https://unipiece.full-stack.app' }));
// app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(stripeRoutes)
app.use(productRoute);

/* ----------------Express Auth Router------------ */
app.use('/login', loginRoute)
app.use('/signup', signUpRoute)
app.use('/user', userRoute)
/* ----------------------------------------------- */

type req = express.Request
type res = express.Response


app.get('/', function (req, res) {
  res.json('This is Unipiece API by AWS EC2')
})

/* --------------------- Product Profile details -------------------------- */
app.get('/profile/:product_Id', async (req, res) => {
  console.log(req.body, req.params, req.query)
  console.log(req.params.product_Id)

  const productId = req.params.product_Id

  let productDetail
  let ownerId;
  let seriesId;

  try {
    const response: any = await knex.select("*").from('product').where('id', productId)

    console.log(response[0])

    productDetail = response[0]
    ownerId = response[0].owner_id
    seriesId = response[0].series_id
    try {
      const owner = await knex('users').select("name", "image").where('id', ownerId);
      const series = await knex('series').select("name").where('id', seriesId);
      console.log({ owner })
      console.log({ series })

      return res.status(200).json({ productDetail, owner, series })
    }
    catch (err) {
      console.error(err);
      return res.status(500).json({ response: err })
    }
  }
  catch (err) {
    console.error(err);
    return res.status(500).json({ response: err })
  }
})
/* --------------------------------------------------------------------------- */

// app.get("/products", (req, res) => {

//     let items = [
//         { img: "img/1.jpg", name: "test item 1", price : 80},
//         { img: "img/2.jpg", name: "test item 2", price : 500},
//         { img: "img/3.jpg", name: "test item 3", price : 4000},
//         { img: "img/4.jpg", name: "test item 4", price : 18000},
//     ]

//      res.json(items)
// })

app.listen(port, () => {
  console.log(port)
})


/* -------------------PostgreSQL Connect------------------------ */
client.connect(err => {
  if (err) {
    console.error("database connect error : ", err)
  } else {
    console.log(`Database => ${client.database}, Port => ${client.port}, connected by => ${client.user}`)
  }
})
