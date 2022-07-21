import { Knex } from 'knex'

import productSeed from './product_seed.json';

// for (let i of productSeed){
//     i.nft_address
// }

// console.log(getRandomInt(1, 10))


function getRandomInt(min, max) : number{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

for (let i = 0; i < 10; i++){

    console.log( getRandomInt(1, 10))
}
// console.log(productSeed)