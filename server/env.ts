import { config } from "dotenv";
import populateEnv from "populate-env";

config()
let mode = process.env.NODE_ENV || "development"
const envConfig = config({ path: '.env.' + mode });
if (envConfig.error) {
  console.log("we got and envconfig error : ", envConfig.error)
} else {
  console.log("dotenv config : ", envConfig)
}

// type clientType = {
//    POSTGRES_DB: string|undefined,
//    POSTGRES_USER: string|undefined,
//    POSTGRES_PASSWORD: string|undefined,
//    POSTGRES_HOST: string|undefined,
//    POSTGRES_PORT: number|undefined,

//    SESSION_SECRET: string|undefined,
//    NODE_ENV: string|undefined,
// }

export let env:any = {
   DB: process.env.POSTGRES_DB,
   USER: process.env.POSTGRES_USER,
   PASSWORD: process.env.POSTGRES_PASSWORD,
   HOST: process.env.POSTGRES_HOST,
   PORT: 5432,
   JWT_SECRET: process.env.JWT_SECRET, 
  NODE_ENV: 'development',
}
populateEnv(env)

// if (process.env.NODE_ENV === 'test') {
//    env.POSTGRES_HOST = process.env.POSTGRES_HOST
//    env.POSTGRES_NAME = process.env.POSTGRES_DB
//    env.POSTGRES_USER = process.env.POSTGRES_USER
//    env.POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD
 
//    console.log(`HOST: ${env.DB_HOST}, DB:${env.DB_NAME}, USER: ${env.DB_USER}, PASSWORD: ${env.DB_PASSWORD}`)
//  }