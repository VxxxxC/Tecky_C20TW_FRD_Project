import express from 'express'
export let productRoute = express.Router()
import { knex } from './knex'; /* MUST BE very careful !!! don't import "knex" , will cause sqlite error !! IT IS import "{knex}" !! from knex.ts <- knexfile.ts */


productRoute.get("/testproducts", (req, res) => {

    let items = [
        { img: "img/1.jpeg", name: "test item 1", price: 80 },
        { img: "img/2.jpeg", name: "test item 2", price: 500 },
        { img: "img/3.jpeg", name: "test item 3", price: 4000 },
        { img: "img/4.jpeg", name: "test item 4", price: 18000 },
    ]

    res.json(items)
})

productRoute.get("/getitems/:id", async (req, res) => {
    const userId = req.params.id
    const userItemList = await knex.select('name', 'image', 'price', 'category_id', 'nft_address').from('product').where('owner_id', userId)

    let result = []
    for (let i in userItemList){

        result.push({
            img: userItemList[i].image,
            name: userItemList[i].name,
            price: userItemList[i].price,
            category_id: userItemList[i].category_id,
            nft_address: userItemList[i].nft_address
        })

    }
    res.json(result)
})

productRoute.get("/getcategorylist", async (req, res) => {

    const categoryList = await knex.select('id', 'name').from('category')

    let result = []
    for (let category of categoryList) {
        result.push(category.name)
    }
    console.log(result)
    res.json(categoryList)
})


productRoute.get("/getallitems", async (req, res) => {
    try {
        const categoryList = await knex.select('name', 'image', 'price', 'category_id', 'nft_address').from('product')

        let result = []
        for (let category of categoryList) {
            result.push(category.name)
        }
        console.log(categoryList)
        res.json(categoryList)
    } catch (err: Error | unknown) {
        console.log("database error: ", err)
        res.status(500).send(`Service Unavailable: \n ***${err}***`);
    }
})

productRoute.get("/getalluser", async (req, res) => {
    try {
        const userList = await knex.select('name', 'username', 'bg_image', 'image', 'bio').from('users')

        // let result = []
        // for (let user of userList) {
        //     result.push(user.name)
        // }
        // console.log(userList)
        res.json(userList)
        console.log(userList)
    } catch (err: Error | unknown) {
        console.log("database error: ", err)
        res.status(500).send(`Service Unavailable: \n ***${err}***`);
    }
})


productRoute.get("/getallcollection", async (req, res) => {
    try {
        const categoryList = await knex.select('id', 'name', 'username', 'price', 'category_id').from('product')

        let result = []
        for (let category of categoryList) {
            result.push(category.name)
        }
        console.log(categoryList)
        res.json(categoryList)
    } catch (err: Error | unknown) {
        console.log("database error: ", err)
        res.status(500).send(`Service Unavailable: \n ***${err}***`);
    }
})



productRoute.get("/gethighlights", async (req, res) => {
    function getTenRandomIntArr(min, max) {
        let resultArr = []
        let count = 0

        for (let i = 0; i < 30; i++) {
            let result = Math.floor(Math.random() * max);
            if (result >= min && result <= max) {
                resultArr.push(result)
                i++;
            }
        }
        return resultArr;
    }
      
    try {
        const randomArr = getTenRandomIntArr(1000, 1600)
        const randomItemList = []
        for (let randomId of randomArr) {
            const no = JSON.parse(randomId)
            const randomResult = await knex.select('name', 'image', 'price', 'category_id', 'nft_address').from('product').where('id', no)
            randomItemList.push(randomResult[0])
        }
        
        res.json(randomItemList)
    } catch (err: Error | unknown) {
        console.log("database error: ", err)
        res.status(500).send(`Service Unavailable: \n ***${err}***`);
    }
})
