import express from 'express'
import { knex } from './knex'; /* MUST BE very careful !!! don't import "knex" , will cause sqlite error !! IT IS import "{knex}" !! from knex.ts <- knexfile.ts */
export let stripeRoutes = express.Router()
import {stripe} from './server'
// import toSQLDate from 'js-date-to-sql-datetime'
import Cryptr from 'cryptr'
import { stringify } from 'querystring';


stripeRoutes.post('/create-checkout-session/:userid/:itemid', async (req, res) => {
  try{
    // define request parameters
    let product_id = req.params.itemid
    let user_id = req.params.userid
    console.log('request parameters: ',product_id, user_id)
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
    const order = await knex('order').insert({
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
    }).returning("id")

    
    //Encrypted Order No for Success URL
    console.log(order)
    
    const cryptr = new Cryptr('hello');

    const encryptedString = cryptr.encrypt(JSON.stringify(order[0].id));
    const decryptedString = cryptr.decrypt(encryptedString);
    
    console.log("hash", encryptedString); // hash
    console.log("order_id", decryptedString); // order_id

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
      success_url: `${DOMAIN}/success/${encryptedString}`,
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


stripeRoutes.get('/paid/:hash', async (req, res) => {
  try{
    console.log("received confirm request*************")
    let params = req.params.hash

    const cryptr = new Cryptr('hello');
    const orderId = cryptr.decrypt(params);
  
    const confirmOrder : string = await knex('order').where("id", orderId).update({status: "finished"}).returning(["status", "receiver_id", "product_id"])
    console.log("[payment] ","order: ", orderId, "status: ", confirmOrder)

    const order_status : string = confirmOrder[0]['status'] 
    const order_product_id : number = confirmOrder[0]['product_id'] 
    const order_receiver_id : number = confirmOrder[0]['receiver_id'] 

    const updateOwernership : string = await knex('product').where("id", order_product_id).update({owner_id: order_receiver_id}).returning(["id", "owner_id"])
    console.log("[updateOwernership]: ", updateOwernership)


    // console.log(confirmOrder)


    

    res.status(200).json({status: true, error: false})
  }catch(err){
    res.status(500).json({ status: false, error: err.message })
    console.log(err)
  }
})