import express from 'express'
import fs from 'fs'
import formidable from "formidable";

export const userRoute = express.Router();

const uploadDir = "upload";
userRoute.use("/img", express.static('upload'))
fs.mkdirSync(uploadDir, { recursive: true })

userRoute.post('/create_product', async (req, res) => {

    // const form = formidable({
    //     uploadDir,
    //     keepExtensions: true,
    //     allowEmptyFiles: false,
    //     maxFiles: 1,
    //     maxFileSize: 1024 * 1024 ** 2,
    //     filter: file => file.mimetype?.startsWith('image/') || false,
    // })

    // form.parse(req, async (err, fields: any, files: any) => {
    //     if (err) console.error({ err })

    //     console.log(req.body)

    //     console.log({
    //         'fields': fields,
    //         'files': files
    //     })

    // })

    const {
        image,
        product_type,
        product_category,
        product_price,
        product_name,
        product_series,
        content,
        credit_by
    } = req.body

    console.log(image,
        product_type,
        product_category,
        product_price,
        product_name,
        product_series,
        content,
        credit_by)

    res.send('form received!')
})

/**********************************************/


userRoute.post('/:UserId', async (req, res) => {
    // console.log(req.url)
    // console.log(req.baseUrl)
    console.log(req.originalUrl)

    const userId = req.params
    console.log("Login User ID : ", userId.UserId)
    const verifiedUserUrl = req.baseUrl + "/" + userId.UserId
    console.log(verifiedUserUrl)

    let profileViewerWithCorrectToken: boolean;

    if (req.originalUrl !== verifiedUserUrl) {

        return res.json(profileViewerWithCorrectToken == false)
    } else {
        return res.json(profileViewerWithCorrectToken = true)
    }

    // console.log(req.body, req.params, req.query)
})


/**********************************************/





/**********************************************/