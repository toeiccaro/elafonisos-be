/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    const sql = 
    `CREATE TABLE IF EXISTS "userTest" (
      id SERIAL PRIMARY KEY,
      username VARCHAR(50) NOT NULL,
      email VARCHAR(100) NOT NULL,
      password VARCHAR(100) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
  `
    await knex.raw(sql);
  };
  
  exports.down = async function(knex) {
    const sql = 
    `DROP TABLE IF EXISTS "userTest";
  `
    await knex.raw(sql);
    
  };
  