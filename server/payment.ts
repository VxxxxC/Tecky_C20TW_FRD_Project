import express from 'express'
// import { client } from './database'
export let stripeRoutes = express.Router()
import {stripe} from './server'

stripeRoutes.post('/create-checkout-session', async (req, res) => {
    // try {
    //     let stringCartItem : any = JSON.stringify(req.body.items).replace(/\\/g, "");
    //     let cleanStringCartItems : any = stringCartItem.replace(/""/g, "")
    //     let clientCartItems : any = JSON.parse(cleanStringCartItems)
    //     // let user :any = req.session.user
    //     // let user_id = user.id

    //     // console.log(clientCartItems);

    //     const sqlSelectedItems : any = []
        
    //     // for (let item of clientCartItems) {
    //     //     let SQLresult = await client.query(`
    //     //     select
    //     //     product_name,
    //     //     price,
    //     //     product_image
    //     //     from product
    //     //     where id = $1
    //     //     `, [item.productId],
    //     // ) 
    //     // // add product details into item object
    //     // item.product = SQLresult.rows[0]

    //     const product = {
    //             price_data: {
    //               currency: "hkd",
    //               product_data: {
    //                 name: JSON.stringify(SQLresult.rows[0].product_name),
    //               },
    //               unit_amount: parseInt(SQLresult.rows[0].price) * 100,
    //             },
    //             quantity: parseInt(item.cart_qty),
    //           } 
        
    //     // console.log("product： ",product)
    //     sqlSelectedItems.push(product)
    //     }
    //     // console.log(sqlSelectedItems)
    //     // console.log("req.session.user id: ", user_id)
    //     // output: req.session.user:  { id: 3, username: 'june2001', email: '', password: '1234' }

    //     // res.json({url: sqlSelectedItems})

    //     // TODO: cancel pending order
    //     // add one more column to the "order" table (e.g. stripeOrderId inserted when hooks listened a payment intent)
    //     // stating order id (stripe), check if there is "pending" & column(stripeId is not null) 
    //     // cancel the previous order (maybe needed more order/ordered product verification)

    //     let orderResult = await client
    //     .query(`
    //     INSERT INTO
    //     "order" (status, user_id, created_at) values ($1, $2, now())
    //     returning id
    //     `, ["pending", user_id])

    //     let orderId = orderResult.rows[0].id;
    //     let orderAmount = 0;

    //     for(let item of clientCartItems){
    //         let product = item.product
    //         await client
    //         .query(`
    //         INSERT INTO
    //         productHistory
    //         (order_id, product_name, product_price, price_total, product_id, quantity, created_at)
    //         values ($1, $2, $3, $4, $5, $6, now())
    //         `, 
    //       [
    //         orderId, product.product_name, product.price,
    //         (product.price * item.cart_qty), item.productId, item.cart_qty,
    //       ])
    //       orderAmount += (product.price * item.cart_qty)
    //     }

    //     await client.query(`
    //     UPDATE
    //     "order"
    //     SET order_total = $1
    //     WHERE id = $2;
    //     `,[orderAmount, orderId])
        

    //     const session = await stripe.checkout.sessions.create({
    //       payment_method_types: ["card"],
    //       mode: "payment",
    //       line_items: sqlSelectedItems,
    //       success_url: `https://pet-shop.loca.lt/success.html?id=${orderId}`,
    //       cancel_url: `https://pet-shop.loca.lt/cancel.html?id=${orderId}`,
    //     })
    //     res.json({ url: session.url })

    //     }catch(err: any) {
    //         res.status(500).json({ error: err.message })
    //         console.error(err.message)
    //     }
     }
)

// stripeRoutes.post('/order/:order_id/status/:status', async (req, res) => {
    

//     try {
//         let orderId = req.params.order_id

//         await client
//             .query(`
//             UPDATE 
//             order
//             SET
//             status = $1
//             WHERE 
//             id = $2
//             `,[req.params.status, orderId])

//     }catch(err: any){
//         res.status(500).json({error: err.message})
//         console.error(err.message)
//     }

// })