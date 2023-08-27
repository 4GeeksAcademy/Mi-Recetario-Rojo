import  express from 'express'
import pkg from 'pg';
const { Pool } = pkg;
import sequelize from "./sequelizeConfig.js"
// import User  from "./models/user.js"

const app = express()
const port = 5001

// // PostgreSQL database configuration
// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'postgres',
//   password: 'postgres',
//   port: 5432, // Default PostgreSQL port
// });

// // Test the database connection
// pool.connect()
//   .then(() => console.log('Connected to PostgreSQL database'))
//   .catch(err => console.error('Database connection error', err));

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

// Conexión a la base de datos y sincronización de modelos
sequelize
  .authenticate()
  .then(() => {
    console.log('Conexión a la base de datos establecida.');
    return sequelize.sync(); // Esto sincroniza los modelos con la base de datos
  })
  .then(() => {
    console.log('Modelos sincronizados con la base de datos.');
    app.listen(port, () => {
      console.log(`Servidor Express en funcionamiento en el puerto ${port}.`);
    });
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });


// app.get('/users', async (req, res) => {
//   try {
//     const users = await User.findAll(); // Fetch all users from the User model
//     res.json(users);
//   } catch (error) {
//     console.error('Error fetching users:', error);
//     res.status(500).json({ error: 'Error fetching users' });
//   }
// });
