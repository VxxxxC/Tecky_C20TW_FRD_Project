import express from 'express'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import { env } from './env';
import { knex } from './knex'; /* MUST BE very careful !!! don't import "knex" , will cause sqlite error !! IT IS import "{knex}" !! from knex.ts <- knexfile.ts */

export let userRoute = express.Router();



// userRoute.get('/signup', (req, res) => {
//    console.log("Hello")
//    res.json("Hello World")
// })

userRoute.post('/signup', async (req, res) => {
   console.log(req.body);
   const { email, password } = req.body;
   console.log({ email, password });

   let userExist: any = await knex('users').where({ email: email })
   if (!userExist) {
      console.log("Good! This email not exist yet!")
   } else {
      res.status(409).end('email duplicated')
   }

   const passwordHash = await bcrypt.hash(password, 12);
   console.log(passwordHash)

   const result: any = await knex('users').insert({ email: email, password: passwordHash, created_at: new Date() })
   console.log(result)

   const { insertId } = result;
   console.log({ insertId })

   jwt.sign({
      id: insertId,
   },
      env.JWT_SECRET,
      {
         expiresIn: '2d',
      },
      (err, token) => {
         if (err) {
            return res.status(500).send(err);
         } else {
            res.status(200).send({ token });
         }
      }
   )
})

