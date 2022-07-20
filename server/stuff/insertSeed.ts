import { Knex } from 'knex'

import productSeed from './product_seed.json';

for (let i of productSeed){
    console.log(i.nft_address)
}
// console.log(productSeed)