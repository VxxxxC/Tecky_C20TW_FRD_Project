import express from 'express'

export const userRoute = express.Router();

userRoute.post('/create_product', async (req, res) => {
    console.log(req.body)
    res.send('form received!')
})