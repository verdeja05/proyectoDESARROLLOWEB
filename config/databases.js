import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('conexion exitosa');
    } catch (error) {
        console.log(error);
    }
}

export default connection;