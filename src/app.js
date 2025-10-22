import express from 'express';
import cors from 'cors';
import sequelize from './config/database.js';
import filmeRoutes from './routes/filmeRoutes.js';
import authRoutes from './routes/authRoutes.js';
import path from 'path'; 
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3001;
const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
}));
app.use(express.json());

app.use('/uploads', express.static(path.resolve(__dirname, 'public', 'uploads')));

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('Vivi linda')
})

app.use('/', filmeRoutes)

sequelize.authenticate()
    .then(() => console.log("Conexão com o MySQL estabelecida!"))
    .catch(err => console.error("Erro ao conectar ao MySQL:", err));
    
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));