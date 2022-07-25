import express from 'express'
export let productRoute = express.Router()
import { knex } from './knex'; /* MUST BE very careful !!! don't import "knex" , will cause sqlite error !! IT IS import "{knex}" !! from knex.ts <- knexfile.ts */


productRoute.get("/testproducts", (req, res) => {

    let items = [
        { img: "img/1.jpeg", name: "test item 1", price : 80},
        { img: "img/2.jpeg", name: "test item 2", price : 500},
        { img: "img/3.jpeg", name: "test item 3", price : 4000},
        { img: "img/4.jpeg", name: "test item 4", price : 18000},
    ]

     res.json(items)
})


productRoute.get("/getcategorylist", async (req, res) =>  {

    const categoryList = await knex.select('name').from('category')

    let result = []
    for (let category of categoryList) {
        result.push(category.name)
    }
    console.log(result)
     res.json(result)
})


productRoute.get("/getallitems", async (req, res) =>  {
try{

    const categoryList = await knex.select('name', 'image', 'price','category_id').from('product')
    
    let result = []
    for (let category of categoryList) {
        result.push(category.name)
    }
    console.log(categoryList)
    res.json(categoryList)
} catch (err : Error | unknown){
    console.log("database error: " ,err)
    res.status(500).send(`Service Unavailable: \n ***${err}***`);
}
})

