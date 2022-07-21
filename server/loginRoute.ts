import express from 'express'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import { env } from './env';
import { knex } from './knex'; /* MUST BE very careful !!! don't import "knex" , will cause sqlite error !! IT IS import "{knex}" !! from knex.ts <- knexfile.ts */

export const loginRoute = express.Router();


/*************  Login & Check User email and hashed password ******************/
loginRoute.post('/', async (req, res) => {
   console.log(req.body)
   const { email, password } = req.body;
   console.log({
      "Login email : ": email,
      "Login password : ": password,
   });

   //let verifyUser = await knex('users').where({ email: email, password: password}).first().returning('id')
   let verifyUser = await knex('users').select("*").where("email", email).first();
   console.log({ verifyUser })

   const userId: string = verifyUser.id

   if (verifyUser) {
      const comparePassword = await bcrypt.compare(password, verifyUser.password);
      // console.log(comparePassword)
      if (comparePassword) {

         jwt.sign(
            { userId, email, }
            ,
            env.JWT_SECRET,
            {
               expiresIn: '1d',
            },
            (err, token) => {
               if (err) {
                  return res.status(500).json({ err });
               } else {
                  console.log({ Login: 'success', JWTtoken: token })
                  res.status(200).json({ Login: 'success', JWTtoken: token })
               }
            }
         )


      } else {
         return res.status(401).json({ Login: 'fail', msg: "Wrong Password" })
      }
   } else {
      return res.status(401).json({ Login: 'fail', msg: "User doesn't existed" })
   }
})