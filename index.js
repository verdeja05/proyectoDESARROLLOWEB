import express from "express";
import dotenv from "dotenv";
import userRoutes from './routes/user.js';
import swaggerUI from 'swagger-ui-express';
import cors from 'cors';
import swaggerSpec from "./config/swagger.js";
import connection from "./config/databases.js";

const app = express();
dotenv.config();

connection();

app.use(express.json());
app.use(cors());
app.use('/api/users', userRoutes);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.get('/', (req, res) => {
    res.send('Hola mundo');
});

const PORT = process.env.PORT;
app.listen(4000, () => {
    console.log(`escucha desde el puerto ${PORT}`);
});