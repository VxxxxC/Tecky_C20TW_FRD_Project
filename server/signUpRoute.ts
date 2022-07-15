import express from 'express'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import { env } from './env';
import { knex } from './knex'; /* MUST BE very careful !!! don't import "knex" , will cause sqlite error !! IT IS import "{knex}" !! from knex.ts <- knexfile.ts */

export let userRoute = express.Router();


/******************* Signup Form **********************/
userRoute.post('/signup', async (req, res) => {
   console.log(req.body);
   const { email, password } = req.body;
   console.log({
      "Signup email : ": email,
      "Signup password : ": password
   });

   const passwordHash = await bcrypt.hash(password, 12);
   console.log(passwordHash)

   const comparePassword = await bcrypt.compare(password, passwordHash);
   console.log(comparePassword)

   // let userExist: any = await knex('users').select("*").where({ email: email }).first().returning('id')
   // if (!userExist || undefined) {
   //    console.log({ userExist })
   //    console.log("Good! This email not exist yet!")
   //    return res.status(200).end('email not exist');
   // } else {
   //    console.log({ userExist })
   //    console.log("email duplicated, server returned")
   //    return res.status(409).end('email duplicated')
   // }

   // const result: any = await knex('users').insert({ email: email, password: passwordHash, created_at: new Date() })
   // console.log(result)

   // const { insertId } = result;
   // console.log({ insertId })

   // /* for after login */
   // jwt.sign({
   //    id: insertId,
   // },
   //    env.JWT_SECRET,
   //    {
   //       expiresIn: '2d',
   //    },
   //    (err, token) => {
   //       if (err) {
   //          return res.status(500).send(err);
   //       } else {
   //          res.status(200).send({ token });
   //       }
   //    }
   // )
})


/*************  Check User email and hashed password ******************/
userRoute.get('/', async (req, res) => {
   console.log(req.body)
   const { email, password } = req.body;
   console.log({
      "Login email : ": email,
      "Login password : ": /*checkPassword()*/ password
   });

   //let verifyUser = await knex('users').where({ email: email, password: password}).first().returning('id')
   let verifyUser = await knex('users').select("*").where("email", email).first();
   console.log({ verifyUser })

   if (verifyUser) {
      const comparePassword = await bcrypt.compare(password, verifyUser.password);
      // console.log(comparePassword)
      if (comparePassword) {
         return res.json({ success: true, token: "" })
      } else {
         return res.json({ success: false, msg: "Wrong Password/User doesn't existed" })
      }
   } else {
      return res.json({ success: false, msg: "Wrong Password/User doesn't existed" })
   }
   //res.end("User checked")
})