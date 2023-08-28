// RecetaModel.mjs
import { DataTypes } from 'sequelize';
import sequelize from '../sequelizeConfig.js';
import Usuario from './user.js';  // Importa el modelo de Usuario

const Receta = sequelize.define('Receta', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  usuarioId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Usuarios', // Nombre de la tabla de Usuarios en la base de datos
      key: 'id',         // Nombre de la columna en la tabla de Usuarios
    },
  },
},{
  init: true
});

// Establece la relación con el modelo de Usuario
// Receta.belongsTo(Usuario, { as: 'usuario', foreignKey: 'usuarioId' });

// Receta.associate = models => {
//   Receta.belongsTo(models.Usuario, { as: 'usuario', foreignKey: 'usuarioId' });
// };

export default Receta;
