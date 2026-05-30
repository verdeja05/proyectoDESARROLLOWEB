import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from './routes/user.js'

const app = express();
dotenv.config()

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('conectado a MongoDB'))
  .catch((err) => console.log(err))

app.get('/', (req, res) => {
    res.send('Hola mundo');
});

app.use(express.json());
app.use('/api/users', userRoutes);

const PORT = process.env.PORT;
app.listen(4000, () => {
    console.log(`escucha desde el puerto ${PORT}`);
});