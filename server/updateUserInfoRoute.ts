import jwt from 'jsonwebtoken';
import express from 'express';
import { verify } from 'crypto';
import { env } from './env'

export let userRoute = express.Router();

userRoute.put('/user/:userId', (req, res) => {

   const { authorization } = req.headers;
   console.log(authorization)
   const { userId } = req.params;
   console.log(userId)

   const updates = ({

   })

   if (!authorization) {
      return res.status(401).json({ message: 'No authorization' })
   }

   const token = authorization.split('')[1]

   jwt.verify(token, env.JWT_SECRET, async (err, decoded) => {
      if (err) { return res.status(410).json({ message: 'Unable to verify token' }) }

      const { id } = decoded;

      if (id !== userId) { return res.status(403).json({ message: 'Not allowed to update the user data' }) }
   })
})