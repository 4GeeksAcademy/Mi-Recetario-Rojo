// UsuarioModel.mjs
import { DataTypes } from 'sequelize';
import sequelize from '../sequelizeConfig.js';
import Receta from "./recipes.js"

const Usuario = sequelize.define('Usuario', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

//ßUsuario.hasMany(Receta, { as: 'recetas', foreignKey: 'usuarioId' });

export default Usuario;
