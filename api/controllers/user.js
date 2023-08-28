// usuarioController.mjs
import Usuario from '../models/user.js';

// Crear un nuevo usuario
export const crearUsuario = async (req, res) => {
    //console.log(req)
    try {
        const nuevoUsuario = await Usuario.create(req.body);
        res.status(201).json(nuevoUsuario);
    } catch (error) {
        res.status(400).json({ error: 'Error al crear el usuario' + error });
    }
};

// Obtener todos los usuarios
export const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll(
      // {
      //   attributes: ['id','name'] // List the columns you want
      // }
    );
    console.log(usuarios)
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los usuarios ' + error });
  }
};

// Obtener un usuario por ID
export const obtenerUsuario = async (req, res) => {
  const { id } = req.params;
  try {
    const usuario = await Usuario.findByPk(id);
    if (usuario) {
      res.status(200).json(usuario);
    } else {
      res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el usuario' });
  }
};

// Actualizar un usuario por ID
export const actualizarUsuario = async (req, res) => {
  const { id } = req.params;
  try {
    const [actualizado] = await Usuario.update(req.body, {
      where: { id },
    });
    if (actualizado) {
      const usuarioActualizado = await Usuario.findByPk(id);
      res.status(200).json(usuarioActualizado);
    } else {
      res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el usuario' });
  }
};

// Eliminar un usuario por ID
export const eliminarUsuario = async (req, res) => {
  const { id } = req.params;
  try {
    const eliminado = await Usuario.destroy({
      where: { id },
    });
    if (eliminado) {
      res.status(204).json();
    } else {
      res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el usuario' });
  }
};
