import express from 'express'

export const userRoute = express.Router();

userRoute.post('/create_product', async (req, res) => {

    const {
        image,
        product_type,
        product_price,
        product_name,
        content,
        credit_by
    } = req.body

    console.log(image,
        product_type,
        product_price,
        product_name,
        content,
        credit_by)

    res.send('form received!')
})