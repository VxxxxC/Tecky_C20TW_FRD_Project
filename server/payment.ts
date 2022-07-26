import express from 'express'
import { knex } from './knex'; /* MUST BE very careful !!! don't import "knex" , will cause sqlite error !! IT IS import "{knex}" !! from knex.ts <- knexfile.ts */
export let stripeRoutes = express.Router()
import {stripe} from './server'
// import toSQLDate from 'js-date-to-sql-datetime'

stripeRoutes.post('/create-checkout-session', async (req, res) => {
  try{
    // define request parameters
    let product_id = req.body.product_id
    let user_id = req.body.user_id
    console.log('request parameters: ',req.body.product_id, req.body.user_id)
    // find product & user in database
    const productResult = await knex.select('id','name', 'price', 'content', 'image', 'type', 'nft_address', 'owner_id').from('product').where('id', product_id)
    const buyerUserResult = await knex.select('id', 'name', 'email', 'username', 'publickey' ).from('users').where('id', user_id)
    const ownerUserResult = await knex.select('id', 'name', 'email', 'username','publickey').from('users').where('id', productResult[0].owner_id)
    
    // change date to sql format
    let SQLdate = Date.now()
    console.log("*** SQLdate ***", SQLdate)

    var date;
    date = new Date();
    date = date.getUTCFullYear() + '-' +
        ('00' + (date.getUTCMonth()+1)).slice(-2) + '-' +
        ('00' + date.getUTCDate()).slice(-2) + ' ' + 
        ('00' + date.getUTCHours()).slice(-2) + ':' + 
        ('00' + date.getUTCMinutes()).slice(-2) + ':' + 
        ('00' + date.getUTCSeconds()).slice(-2);
    console.log(date);
    console.log(productResult)
    // define variables
    const productId = productResult[0].id;
    const productName = productResult[0].name
    const productPrice = productResult[0].price
    const productContent = productResult[0].content
    const productImage = productResult[0].image

    const owner_publickey = ownerUserResult[0].publickey
    const owner_id = ownerUserResult[0].id
    const receiver_publickey = buyerUserResult[0].publickey
    const receiver_id = buyerUserResult[0].id
    const product_nft_address = productResult[0].nft_address
    const product_series_id = productResult[0].series_id
    const total_price = productPrice
    const created_at = date

  
    // create pending order in database
    await knex('order').insert({
      order_type: 1,
      owner_publickey: owner_publickey,
      receiver_publickey: receiver_publickey,
      product_nft_address: product_nft_address,
      product_series_id: product_series_id,
      quantity: 1,
      total_price: total_price,
      created_at: created_at,
      timeout_at: null,
      shipping_address: null,
      status: "pending",
      owner_id: owner_id,
      receiver_id: receiver_id,
      product_id: productId,
    })


    // create stripe payment session
    const DOMAIN = 'https://unipiece.full-stack.app';
    
    const productImageURL = `${DOMAIN}/${productImage}`
  
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [{
        name: productName,
        description: productContent,
        images: [productImageURL],
        amount: productPrice*100,
        currency: 'hkd',
        quantity: 1,
      }],
      mode: 'payment',
      success_url: `${DOMAIN}/success`,
      cancel_url: `${DOMAIN}/profile/${productId}`,
    });

    // redirect to stripe payment page
    // res.redirect(303, session.url);
    res.json({status: true, url:session.url, error:false});
  }catch(err){
    // error handling
    res.status(500).json({ status: false, url: null, error: err.message })
    console.log(err)
  }

})


      // Stripe seesion unused scripts
        // price_data: {
        //   currency: 'hkd',
        //   unit_amount: productPrice*100,
        //   product_data: {
        //     name: productName,
        //     description: productContent,
        //     images: [productImageURL],
        //   },
        // },