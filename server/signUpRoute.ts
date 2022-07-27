import express from 'express'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import { env } from './env';
import { knex } from './knex'; /* MUST BE very careful !!! don't import "knex" , will cause sqlite error !! IT IS import "{knex}" !! from knex.ts <- knexfile.ts */

export const signUpRoute = express.Router();


/******************* Signup Form **********************/
signUpRoute.post('/', async (req, res) => {
   // console.log(req.body);
   const { email, password } = req.body;
   // console.log({
   //    "Signup email : ": email,
   //    "Signup password : ": password
   // });

   const passwordHash = await bcrypt.hash(password, 12);
   console.log(passwordHash)

   const comparePassword = await bcrypt.compare(password, passwordHash);
   console.log(comparePassword)

   let userExist: any = await knex('users').select("*").where({ email: email }).first().returning('id')
   if (!userExist || undefined) {
      console.log("Good! This email not exist yet!")
   } else {
      console.log({ userExist })
      console.log("email duplicated, server returned")
      return res.status(409).end('email duplicated')
   }

   const result: any = await knex('users').insert({ email: email, password: passwordHash, created_at: new Date() }).returning('id')
   console.log(result)

   const insertId = result;
   console.log({ insertId })

   /* for after login */
   jwt.sign({
      id: insertId,
      email: email,
   },
      env.JWT_SECRET,
      {
         expiresIn: '1d',
      },
      (err, token) => {
         if (err) {
            return res.status(500).json({ err });
         } else {
            console.log({ Signup: 'success', JWTtoken: token })
            res.status(200).json({ Signup: 'success', JWTtoken: token });
         }
      }
   )
})
