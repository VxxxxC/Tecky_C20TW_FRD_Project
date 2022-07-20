import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    const timestamp = "2018-01-01"

    await knex("product_type").del();

    // Inserts seed entries
    await knex("product_type").insert([
        { updated_at: timestamp, created_at: timestamp },
        { updated_at: timestamp, created_at: timestamp },
    ]);
};
