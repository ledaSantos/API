//bd.js
import pkg from "pg";
const { Pool } = pkg;

async function connect() {
  const pool = new Pool({
    connectionString: process.URL_BD=postgresql://neondb_owner:2KctDw3SeFWg@ep-square-grass-a5qqloli.us-east-2.aws.neon.tech/neondb?sslmode=require,
  });
  return pool.connect();
}

async function selectUsuarios() {
  const client = await connect();
  const res = await client.query("SELECT * FROM usuario");
  return res.rows;
}

export { selectUsuarios };