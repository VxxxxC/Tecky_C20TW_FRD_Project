import express from 'express'
export let productRoute = express.Router()

productRoute.get("/testproducts", (req, res) => {

    let items = [
        { img: "img/1.jpeg", name: "test item 1", price : 80},
        { img: "img/2.jpeg", name: "test item 2", price : 500},
        { img: "img/3.jpeg", name: "test item 3", price : 4000},
        { img: "img/4.jpeg", name: "test item 4", price : 18000},
    ]

     res.json(items)
})

