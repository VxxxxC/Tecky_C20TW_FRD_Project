import bodyparser from 'body-parser'
import express from 'express'
import {stripe} from './server'
import fs from 'fs'
// import { client } from './database'
import { knex } from './knex'; /* MUST BE very careful !!! don't import "knex" , will cause sqlite error !! IT IS import "{knex}" !! from knex.ts <- knexfile.ts */


export let stripeHookRoutes = express.Router()


stripeHookRoutes.post('/hooks', bodyparser.raw({type: 'application/json'}), async(req, res) => {
    let webhooksSecret = "whsec_9134cc06a4aa57052a985ca66651774a04aa6944e9d04a1a1d7126c3d3284bd8"

    const payload = req.body
    const sig = req.headers['stripe-signature']

    console.log(req.body)

    let event
    try {
        event = stripe.webhooks.constructEvent(payload, sig, webhooksSecret)
    }catch(err: any){
        console.log(err.message)
        res.status(400).json({ success: false })
        return
    }
    // console.log(event.type)
    // console.log(event.data.object)
    // console.log(event.data.object.id)

    var testJson = JSON.stringify(event.data)

    let url = event.data.object.success_url

    if(!url){
        res.json({success: true})
        return
    }
    let query = url.split("?").pop()

    let params = new URLSearchParams(query)

    let order_id = params.get("id")

    let status = event.data.object.status == "complete"?"paid":"cancel"
    let total = event.data.object.amount_total 

    // await client
    //     .query(`
    //     UPDATE 
    //     "order"
    //     SET
    //     status = $1
    //     WHERE 
    //     id = $2;
    //     `,[status, order_id])
    /*  change to knex later */
    
    console.log(total, "------ amount_total")
    fs.writeFileSync("orderStripeObject.json", testJson)

    res.json({success: true})

})


// INSERT INTO 
// "order"
// (order_total)
// VALUES ($1)
// WHERE
// id = $2