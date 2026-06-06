import User from "../models/User.js";

export const createUser = async (req, res) => {
    try {
        const { name } = req.body;
        const user = await User.create({ name });
        res.status(201).json({
            message: 'usuario creado',
            data: user
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({ data: users });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'usuario no encontrado' });
        res.status(200).json({ data: user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) return res.status(404).json({ message: 'usuario no encontrado' });
        res.status(200).json({ message: 'usuario actualizado', data: user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).json({ message: 'usuario no encontrado' });
        res.status(200).json({ message: 'usuario eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}