import express from 'express'
import fs from 'fs'
import formidable from "formidable";
import { knex } from './knex';

export const userRoute = express.Router();

const uploadDir = "product_image";
fs.mkdirSync(uploadDir, { recursive: true })
userRoute.use("/product_image", express.static('/product_image'))

userRoute.post('/create_product', async (req, res) => {
    // console.log({ req })

    const form = formidable({
        uploadDir,
        keepExtensions: true,
        maxFiles: 1,
        maxFileSize: 200 * 1024 ** 2, // the default limit is 200KB
        filter: part => part.mimetype?.startsWith('image/') || false,
    })

    // form.on('field', (field:any, value:any) => {
    //     console.log(`this is ${field} , and value is ${value}`)
    // })

    // form.on('file', (file:any, value:any) => {
    //     console.log(`this is ${file}`)
    //     console.log("and value is : ", value)

    //     fs.rename(file.path,)
    //     (new Date().toDateString().split(' ').join())
    // })

    form.parse(req, async (err, fields: any, files: any) => {
        if (err) console.error({ err })
        console.log({
            'fields': fields,
            'files': files
        })

        const getCategoryId = await knex('category').select('id').where("name", fields.category)
        console.log(getCategoryId[0].id)

        // FIXME: series ID not yet created in DB , please enable when user series function is ready
        // const getSeriesId = await knex('series').select('id').where("name", fields.category)
        // console.log(getCategoryId[0].id)

        const owner_id = fields.user_id
        const name = fields.name
        const price = fields.price
        const type = fields.product_type
        // const series_id = fields.series FIXME:
        const image = files.newFilename
        const content = fields.content
        const quantity = 1
        const created_at = new Date()
        const category_id = getCategoryId[0].id
        const credit_by = fields.credit_by

        try {
            const res = await knex('product').insert({ image: image, owner_id: owner_id, name: name, price: price, type: type, content: content, quantity: quantity, created_at: created_at, credit_by: credit_by, category_id: category_id }).returning('id')
            console.log(res)
        }
        catch (err) {
            return res.status(500).json(`submitting error : ${err}`)
        }
        return res.status(200).json(`product submitted successfully!`)
    })


})

/*********************** comparing login JWT token user ID , with params url user ID ***********************/


userRoute.post('/:id', async (req, res) => {

    console.log([req.body, req.params, req.query])

    // console.log(req.url)
    // console.log(req.baseUrl)
    // console.log(req.originalUrl)

    const tokenUserId = req.body.tokenInfo.userId
    console.log(req.body.tokenInfo.userId.toString())

    const postParamsId = req.params.id
    console.log({ postParamsId })
    // console.log("Params User ID : ", paramsId.UserId)
    // const verifiedUserUrl = req.baseUrl + "/" + paramsId.UserId
    // console.log(verifiedUserUrl)

    if (tokenUserId == postParamsId) {
        return res.json({ status: true })
    } else {
        return res.json({ status: false })
    }
})


/*********************** fetch user profile detail to display on corresponding params url ***********************/

userRoute.get('/:id', async (req, res) => {
    // console.log(req.body, req.params, req.query)

    const getParamsId = req.params.id
    console.log({ getParamsId })

    try {
        const response = await knex('users').select("*").where('id', getParamsId)
        const user = response[0]
        return res.status(200).json(user)
    }
    catch (err) {
        return res.status(500).json({ status: err })
    }
})



/***************** fetch username on display to head bar *******************/

userRoute.post('/', async (req, res) => {
    // console.log(req)
    // console.log(req.body, req.params, req.query)

    const userId = req.body.userId;
    console.log({ userId })

    try {
        const response = await knex('users').select("name").where('id', userId)
        const user = response[0]
        return res.status(200).json(user)
    }
    catch (err) {
        return res.status(500).json({ status: err })
    }

})