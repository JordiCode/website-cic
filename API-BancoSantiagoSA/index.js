import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { users } from './userDataBase.js';

const app = express();
const PORT = 3000;

const SECRET_KEY = process.env.SECRET_KEY || 'secret';

app.use(cors({ origin: 'http://localhost:5173' }))
app.use(express.json());

app.post('/api/login', async (req, res) => {
    const user = users.find(user => user.cedula === req.body.cedula);
    if (!user) {
        return res.status(401).json({ error: 'No existe ese usuario' });
    }
    const isValid = await bcrypt.compare(req.body.password, user.password);
    if (!isValid) {
        return res.status(401).json({ error: 'Contraseña incorrecta' });
    }

    res.status(200).json({
        name: user.name,
        token: jwt.sign({ id: user.id, name: user.name }, SECRET_KEY, { expiresIn: '1h' }),
    });
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

