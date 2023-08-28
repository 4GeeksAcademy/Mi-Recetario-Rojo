import  express from 'express'
import sequelize from "./sequelizeConfig.js"

import userRoutes from "./routes/user.js"
import recipeRoutes from "./routes/recipe.js"

const app = express()
const port = 5001

app.use(express.json())

app.use(userRoutes)
app.use(recipeRoutes)

// Conexión a la base de datos y sincronización de modelos
sequelize
  .authenticate()
  .then(() => {
    console.log('Conexión a la base de datos establecida. 📍')
    return sequelize.sync() // Esto sincroniza los modelos con la base de datos
  })
  .then(() => {
    //console.log('Modelos sincronizados con la base de datos.');
    app.listen(port, () => {
      console.log(`Servidor Express en funcionamiento en el puerto ${port}.`)
    });
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error)
  });