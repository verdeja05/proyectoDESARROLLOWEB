import express from 'express'
import { createUser } from '../controllers/userControllers.js'

const route = express.Router();

route.post('/', createUser);

export default route;