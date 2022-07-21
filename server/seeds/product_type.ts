import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("product_type").del();
    
    // Inserts product_type
    const timestamp_primary = "2022-02-02"
    await knex("product_type").insert([
        { updated_at: timestamp_primary, created_at: timestamp_primary },
        { updated_at: timestamp_primary, created_at: timestamp_primary },
    ]);

};
