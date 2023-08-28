// recetaRoutes.mjs
import express from 'express';
import { crearReceta, obtenerRecetasUsuario, obtenerReceta, actualizarReceta, eliminarReceta } from '../controllers/recipe.js';

const router = express.Router();

router.post('/usuarios/:usuarioId/recetas', crearReceta);
router.get('/usuarios/:usuarioId/recetas', obtenerRecetasUsuario);
router.get('/recetas/:id', obtenerReceta);
router.put('/recetas/:id', actualizarReceta);
router.delete('/recetas/:id', eliminarReceta);

export default router;
