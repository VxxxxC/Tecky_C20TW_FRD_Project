import { Knex } from "knex";
import cateogrySeed from '../stuff/category.json';

export async function seed(knex: Knex): Promise<void> {

    const timestamp_primary = "2022-02-02"

    // Deletes ALL existing entries
    await knex("category").del();

    // Insert Category
    for (let each of cateogrySeed){
        await knex("category").insert([
            {name: each.name},
        ]);
    }
};
