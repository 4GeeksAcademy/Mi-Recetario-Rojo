import  express from 'express'
import pkg from 'pg';
const { Pool } = pkg;
// import User  from "./models/user.js"

const app = express()
const port = 5001

// PostgreSQL database configuration
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'postgres',
  port: 5432, // Default PostgreSQL port
});

// Test the database connection
pool.connect()
  .then(() => console.log('Connected to PostgreSQL database'))
  .catch(err => console.error('Database connection error', err));

// app.get('/users', async (req, res) => {
//   try {
//     const users = await User.findAll(); // Fetch all users from the User model
//     res.json(users);
//   } catch (error) {
//     console.error('Error fetching users:', error);
//     res.status(500).json({ error: 'Error fetching users' });
//   }
// });

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})