import { Knex } from "knex";
import productSeed from '../stuff/product_seed.json';
import cateogrySeed from '../stuff/category.json';


// import productContentSeed from '../stuff/product_content_seed.json';

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("product").del();


    // Insert Products
    type ProductSeed =  {
        "image": string,
        "name": string,
        "nft_address": string
    }
    
    const seed : ProductSeed[] = productSeed

    const content = `The Vekil Mosque, which was built by the founder of the Zend Dynasty, Kerim Khan Zend, to display the magnificence of his dynasty, has a different architectural plan with its two large courtyards. The mosaic work of the mosque's mihrab and the tile work of the inner courtyard are among the prominent features of the building.

    Vekil Mosque is one of the main destinations for foreign tourists on their travels to Iran.
    The photograph shows an Iranian woman wandering around, immersed in the aesthetics of mosque columns.
    
    Dimensions: 160 x 160 px, 300 DPI, 1/1 Edition`
    // const timestamp = Date.now();
    const timestamp = "2022-07-01"

    // function getRandomInt(arg0: number, length: number) {
    //     throw new Error("Function not implemented.");
    // }    

    function getRandomInt(min, max) : number{
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; 
    }


    for(let i of seed) {
        // i.name
        const randomCategory = getRandomInt(1, cateogrySeed.length)

        await knex("product").insert(
            {   name: i.name,
                nft_address: i.nft_address,
                image: i.image,
                content: content,
                quantity: 1,
                status: 1,
                created_at: timestamp,
                updated_at: timestamp,
                type: 1,
                owner_id: 1,
                category_id: randomCategory,
            }
        );
    }
    // Inserts seed entries

};

