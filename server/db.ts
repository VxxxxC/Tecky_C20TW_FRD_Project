import { Client } from "pg"
import { env } from "./env"


export let client = new Client({
    database: env.DB,
    user: env.USER,
    password: env.PASSWORD,
    host: env.HOST,
    port: env.PORT,
})