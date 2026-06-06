import express from 'express';
import { createUser, getUsers, getUserById, updateUser, deleteUser } from '../controllers/userControllers.js';

const route = express.Router();

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Obtener todos los usuarios
 *     responses:
 *       200:
 *         description: Lista de usuarios
 */
route.get('/', getUsers);

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Obtener un usuario por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usuario encontrado
 *       404:
 *         description: Usuario no encontrado
 */
route.get('/:id', getUserById);

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Crear un usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuario creado
 */
route.post('/', createUser);

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Actualizar un usuario
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuario actualizado
 *       404:
 *         description: Usuario no encontrado
 */
route.put('/:id', updateUser);

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Eliminar un usuario
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usuario eliminado
 *       404:
 *         description: Usuario no encontrado
 */
route.delete('/:id', deleteUser);

export default route;